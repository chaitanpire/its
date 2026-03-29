/**
 * learnerModel.js
 * Implements the Weighted Moving Average (WMA) mastery model.
 *
 * M_new = (0.7 × S_recent) + (0.3 × M_current)
 *
 * Scoring:
 *   1.0  → correct on first attempt
 *   0.75 → correct after Level 1 hint (no penalty)
 *   0.6  → correct after Level 2 hint (−0.25 potential)
 *   0.5  → correct after Level 3 hint (−0.5 potential)
 *   0.0  → failed (3rd incorrect attempt → remedial)
 *
 * Mastery thresholds:
 *   ≥ 0.8 → Mastered (unlocks dependents)
 *   0.4–0.79 → In Progress
 *   < 0.4 → Needs Remediation
 */

import { KNOWLEDGE_NODES } from '../data/knowledgeNodes.js';

// ─────────────────────────────────────────────
// Constants
// ─────────────────────────────────────────────
export const MASTERY_THRESHOLD = 0.8;
export const REMEDIAL_THRESHOLD = 0.4;

// Score values based on attempt conditions
export const ATTEMPT_SCORES = {
  CORRECT_FIRST_TRY: 1.0,
  CORRECT_AFTER_HINT_L1: 0.75,
  CORRECT_AFTER_HINT_L2: 0.6,
  CORRECT_AFTER_HINT_L3: 0.5,
  INCORRECT_FINAL: 0.0,
};

// ─────────────────────────────────────────────
// Initial learner state builder
// ─────────────────────────────────────────────
export function buildInitialLearnerState() {
  const nodeStates = {};
  KNOWLEDGE_NODES.forEach((node) => {
    nodeStates[node.id] = {
      mastery: 0,
      attempts: 0,
      correctCount: 0,
      incorrectStreak: 0,  // consecutive wrong answers in current session
      hintsUsed: 0,        // max hint level used
      maxHintUsed: 0,
      timeSpent: 0,        // seconds
      errorPatterns: {},   // { errorTag: count }
      remedialCount: 0,    // times remedial triggered
      status: node.prerequisites.length === 0 ? 'available' : 'locked',
      lastAttemptTimestamp: null,
      sessionAttempts: 0,  // attempts in current session
    };
  });

  return {
    nodeStates,
    totalPoints: 0,
    streak: 0,
    longestStreak: 0,
    sessionStart: Date.now(),
    totalTimeSpent: 0,
    flaggedPatterns: [],     // cross-node error flags (e.g., "sign_error × 3")
    globalErrorCounts: {},   // { errorTag: count } across all nodes
  };
}

// ─────────────────────────────────────────────
// WMA Mastery Update
// ─────────────────────────────────────────────
/**
 * @param {number} currentMastery - existing mastery score [0–1]
 * @param {number} recentScore    - score from this attempt [0, 0.5, 0.6, 0.75, 1.0]
 * @returns {number} new mastery score, clamped [0–1]
 */
export function updateMastery(currentMastery, recentScore) {
  const newMastery = 0.7 * recentScore + 0.3 * currentMastery;
  return Math.max(0, Math.min(1, newMastery));
}

// ─────────────────────────────────────────────
// Score Calculator
// ─────────────────────────────────────────────
/**
 * Determines the score for an attempt based on correctness and hint usage.
 * @param {boolean} isCorrect
 * @param {number}  hintLevelUsed - 0 (no hint), 1, 2, or 3
 * @param {boolean} isRemedialAttempt - treat as failed if true and incorrect
 * @returns {number} score
 */
export function calculateAttemptScore(isCorrect, hintLevelUsed, isRemedialAttempt = false) {
  if (!isCorrect) {
    return ATTEMPT_SCORES.INCORRECT_FINAL;
  }
  switch (hintLevelUsed) {
    case 0: return ATTEMPT_SCORES.CORRECT_FIRST_TRY;
    case 1: return ATTEMPT_SCORES.CORRECT_AFTER_HINT_L1;
    case 2: return ATTEMPT_SCORES.CORRECT_AFTER_HINT_L2;
    case 3: return ATTEMPT_SCORES.CORRECT_AFTER_HINT_L3;
    default: return ATTEMPT_SCORES.CORRECT_FIRST_TRY;
  }
}

// ─────────────────────────────────────────────
// Points Calculator (gamification)
// ─────────────────────────────────────────────
/**
 * Awards XP points based on performance quality.
 */
export function calculatePoints(isCorrect, hintLevelUsed, streakCount) {
  if (!isCorrect) return 0;
  const base = hintLevelUsed === 0 ? 20 : hintLevelUsed === 1 ? 15 : hintLevelUsed === 2 ? 10 : 5;
  const streakBonus = Math.min(streakCount * 2, 20); // up to 20 bonus for streak
  return base + streakBonus;
}

// ─────────────────────────────────────────────
// Node Status Resolver
// ─────────────────────────────────────────────
/**
 * Determines if a node should be unlocked based on prerequisite mastery.
 * @param {string} nodeId
 * @param {object} nodeStates - full learner node state map
 * @returns {'locked' | 'available' | 'in_progress' | 'mastered'}
 */
export function resolveNodeStatus(nodeId, nodeStates) {
  const node = KNOWLEDGE_NODES.find((n) => n.id === nodeId);
  if (!node) return 'locked';

  const state = nodeStates[nodeId];

  // Check prerequisites
  const prereqsMet = node.prerequisites.every(
    (prereqId) => nodeStates[prereqId]?.mastery >= MASTERY_THRESHOLD
  );

  if (!prereqsMet) return 'locked';

  if (state.mastery >= MASTERY_THRESHOLD) return 'mastered';
  if (state.mastery > 0 || state.attempts > 0) return 'in_progress';
  return 'available';
}

// ─────────────────────────────────────────────
// Full State Update After Attempt
// ─────────────────────────────────────────────
/**
 * Processes a completed question attempt and returns the updated learner state.
 *
 * @param {object} learnerState     - current full learner state
 * @param {string} nodeId           - e.g., 'K01'
 * @param {boolean} isCorrect       - did the learner get it right?
 * @param {number}  hintLevelUsed   - 0–3
 * @param {string|null} errorTag    - error tag if incorrect
 * @param {number}  timeSpentSecs   - seconds taken on this question
 * @returns {object} { newState, pointsEarned, masteryDelta, shouldTriggerRemedial }
 */
export function processAttempt(learnerState, nodeId, isCorrect, hintLevelUsed, errorTag, timeSpentSecs) {
  // Deep clone state to avoid mutation
  const state = JSON.parse(JSON.stringify(learnerState));
  const ns = state.nodeStates[nodeId];

  // Update attempt counters
  ns.attempts += 1;
  ns.sessionAttempts += 1;
  ns.timeSpent += timeSpentSecs;
  state.totalTimeSpent += timeSpentSecs;
  ns.lastAttemptTimestamp = Date.now();

  // Track hint usage
  if (hintLevelUsed > ns.maxHintUsed) {
    ns.maxHintUsed = hintLevelUsed;
  }

  // Calculate score and update mastery
  const score = calculateAttemptScore(isCorrect, hintLevelUsed);
  const oldMastery = ns.mastery;
  ns.mastery = updateMastery(oldMastery, score);
  const masteryDelta = ns.mastery - oldMastery;

  // Track correct/incorrect streaks
  if (isCorrect) {
    ns.correctCount += 1;
    ns.incorrectStreak = 0;
    state.streak += 1;
    if (state.streak > state.longestStreak) {
      state.longestStreak = state.streak;
    }
  } else {
    ns.incorrectStreak += 1;
    state.streak = 0;

    // Track error pattern
    if (errorTag) {
      ns.errorPatterns[errorTag] = (ns.errorPatterns[errorTag] || 0) + 1;
      state.globalErrorCounts[errorTag] = (state.globalErrorCounts[errorTag] || 0) + 1;
    }
  }

  // Determine if remedial should trigger (3 consecutive incorrect)
  const shouldTriggerRemedial = ns.incorrectStreak >= 3;
  if (shouldTriggerRemedial) {
    ns.incorrectStreak = 0; // reset after triggering
    ns.remedialCount += 1;
  }

  // Update node status across all nodes
  KNOWLEDGE_NODES.forEach((node) => {
    const resolved = resolveNodeStatus(node.id, state.nodeStates);
    state.nodeStates[node.id].status = resolved;
  });

  // Update points
  const points = calculatePoints(isCorrect, hintLevelUsed, state.streak);
  state.totalPoints += points;

  // Flag cross-node error patterns (3+ occurrences of same error = flag)
  Object.entries(state.globalErrorCounts).forEach(([tag, count]) => {
    if (count >= 3 && !state.flaggedPatterns.includes(tag)) {
      state.flaggedPatterns.push(tag);
    }
  });

  return { newState: state, pointsEarned: points, masteryDelta, shouldTriggerRemedial };
}

// ─────────────────────────────────────────────
// Summary Helpers
// ─────────────────────────────────────────────
export function getMasteredCount(nodeStates) {
  return Object.values(nodeStates).filter((s) => s.mastery >= MASTERY_THRESHOLD).length;
}

export function getOverallProgress(nodeStates) {
  const total = Object.keys(nodeStates).length;
  if (total === 0) return 0;
  const sumMastery = Object.values(nodeStates).reduce((acc, s) => acc + s.mastery, 0);
  return sumMastery / total;
}

export function getWeakestNode(nodeStates) {
  let weakest = null;
  let lowestMastery = Infinity;
  Object.entries(nodeStates).forEach(([id, s]) => {
    if (s.attempts > 0 && s.mastery < lowestMastery) {
      lowestMastery = s.mastery;
      weakest = id;
    }
  });
  return weakest;
}

export function getMostCommonError(globalErrorCounts) {
  if (!globalErrorCounts || Object.keys(globalErrorCounts).length === 0) return null;
  return Object.entries(globalErrorCounts).sort(([, a], [, b]) => b - a)[0][0];
}
