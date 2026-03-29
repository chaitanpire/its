/**
 * adaptationEngine.js
 * Drives all adaptive behavior: difficulty scaling, pace adjustment,
 * personalized messages, and intervention logic.
 *
 * Adaptation axes:
 * 1. Performance-based: accuracy → question difficulty
 * 2. Behavior-based: time taken, hint usage, attempts → pace & scaffolding
 * 3. Error-pattern-based: repeated mistake types → targeted micro-interventions
 */

import { MASTERY_THRESHOLD, REMEDIAL_THRESHOLD } from './learnerModel.js';

// ─────────────────────────────────────────────
// Learner Profile Classification
// ─────────────────────────────────────────────
/**
 * Classifies the learner into a profile based on multi-dimensional behaviour.
 *
 * Profiles:
 *  'fast_learner'     → high mastery, low hint usage, quick responses
 *  'steady_learner'   → moderate mastery, occasional hints, normal pace
 *  'struggling'       → low mastery, frequent hints, slow or many attempts
 *  'hint_dependent'   → correct answers but consistently uses hints
 *  'rushes_and_fails' → fast responses but many errors
 */
export function classifyLearner(learnerState, nodeId) {
  const ns = learnerState.nodeStates[nodeId];
  const globalState = learnerState;

  if (!ns || ns.attempts === 0) return 'new';

  const accuracy = ns.attempts > 0 ? ns.correctCount / ns.attempts : 0;
  const avgHints = ns.attempts > 0 ? ns.maxHintUsed / ns.attempts : 0;
  const avgTime = ns.attempts > 0 ? ns.timeSpent / ns.attempts : 0;

  if (accuracy >= 0.85 && avgHints < 0.3 && avgTime < 30) return 'fast_learner';
  if (accuracy >= 0.6 && avgHints <= 1) return 'steady_learner';
  if (accuracy < 0.4 && avgHints > 1.5) return 'struggling';
  if (accuracy >= 0.65 && avgHints > 1.5) return 'hint_dependent';
  if (accuracy < 0.5 && avgTime < 15) return 'rushes_and_fails';

  return 'steady_learner';
}

// ─────────────────────────────────────────────
// Question Difficulty Selector
// ─────────────────────────────────────────────
/**
 * Returns the preferred question difficulty (1, 2, or 3) for this learner.
 * Fast learners get harder questions; struggling learners get easier ones.
 */
export function getAdaptiveDifficulty(learnerProfile, currentMastery) {
  if (learnerProfile === 'fast_learner' || currentMastery >= 0.9) return 3;
  if (learnerProfile === 'struggling' || currentMastery < 0.3) return 1;
  if (currentMastery >= 0.6) return 2;
  return 1;
}

// ─────────────────────────────────────────────
// Hint Strategy Selector
// ─────────────────────────────────────────────
/**
 * Recommends whether to proactively offer a hint based on learner profile.
 * 'auto_hint' → show first hint immediately after wrong answer
 * 'on_request' → wait for learner to ask
 * 'delay_hint' → suggest thinking time before offering hint
 */
export function getHintStrategy(learnerProfile, incorrectStreak) {
  if (incorrectStreak >= 2) return 'auto_hint';
  if (learnerProfile === 'struggling') return 'auto_hint';
  if (learnerProfile === 'hint_dependent') return 'delay_hint';
  return 'on_request';
}

// ─────────────────────────────────────────────
// Personalized Feedback Messages
// ─────────────────────────────────────────────
const FEEDBACK_MESSAGES = {
  correct_first: [
    "Excellent! First try — you're really getting this!",
    "Nailed it! Your understanding is solid.",
    "Perfect! That's exactly the right thinking.",
    "Outstanding! Keep up this great work!",
  ],
  correct_with_hint: [
    "Well done! The hint helped you think it through — great persistence!",
    "Good job! Using hints when you need them is smart learning.",
    "Correct! The hint nudged you in the right direction.",
  ],
  incorrect_encourage: [
    "Not quite — but you're thinking about it! Check the hint for a pointer.",
    "That's not right, but mistakes are how we learn! Try again.",
    "Almost! Think carefully about what operation undoes this.",
  ],
  remedial_trigger: [
    "Let's step back and look at this concept from a fresh angle.",
    "No worries — let me show you another way to think about this.",
    "Let's revisit the key idea before we try again.",
  ],
  mastery_achieved: [
    "🎉 Mastered! You've unlocked the next concept!",
    "🌟 Brilliant! This concept is now in your toolkit.",
    "🏆 Mastered! You're ready for the next challenge!",
  ],
  streak_bonus: [
    "🔥 You're on a streak! Keep the momentum going!",
    "🔥 Amazing streak! Your brain is in overdrive!",
  ],
};

export function getPersonalizedMessage(event, learnerProfile, streakCount) {
  const pool = FEEDBACK_MESSAGES[event] || ['Keep going!'];
  const base = pool[Math.floor(Math.random() * pool.length)];

  // Append streak message if applicable
  if (event === 'correct_first' && streakCount >= 3) {
    const streakMsg = FEEDBACK_MESSAGES.streak_bonus[Math.floor(Math.random() * 2)];
    return `${base} ${streakMsg}`;
  }
  return base;
}

// ─────────────────────────────────────────────
// Error Pattern Interventions
// ─────────────────────────────────────────────
const ERROR_INTERVENTIONS = {
  sign_error: {
    title: "You often make sign errors",
    message: "Watch out for negative signs! When you see '−', make sure it belongs to the right term. Tip: always rewrite terms with their sign: −3x not just 3x.",
    colour: '#FF6B6B',
  },
  order_error: {
    title: "You sometimes reverse the operation order",
    message: "Remember SADMEP when solving: undo addition/subtraction FIRST, then multiplication/division. Reverse the order you'd normally build the expression.",
    colour: '#FFA500',
  },
  pemdas_violation: {
    title: "Order of operations is tripping you up",
    message: "PEMDAS: Multiply BEFORE you add. When you see 4x, calculate 4×x first before doing any + or − around it.",
    colour: '#FF8C00',
  },
  coefficient_confusion: {
    title: "Coefficients and variables are getting mixed up",
    message: "The number stuck to the variable (like 3 in 3x) is the coefficient — it's fixed. The LETTER is the variable. Ask yourself: 'Is this a letter?' If yes, it's a variable.",
    colour: '#9B59B6',
  },
  less_than_reversal: {
    title: "\"Less than\" is a translation trap for you",
    message: "\"4 less than n\" means n−4, NOT 4−n. The key: the number after \"less than\" is what you subtract FROM the thing mentioned first. n comes first, 4 is subtracted.",
    colour: '#E74C3C',
  },
  exponent_ignored: {
    title: "Don't forget the exponent when identifying like terms",
    message: "x and x² are DIFFERENT terms — like singles and pairs. Always check both the letter AND the tiny power number.",
    colour: '#2980B9',
  },
  combined_unlike_terms: {
    title: "Mixing unlike terms — apples and oranges!",
    message: "3x + 2y ≠ 5xy. x-terms can ONLY combine with x-terms, y-terms with y-terms. Different variables = different categories. Keep them separate.",
    colour: '#27AE60',
  },
  invisible_one_error: {
    title: "Remember the invisible 1!",
    message: "When you see just x (or y, or n), the coefficient is secretly 1. x = 1x. −y = −1y. This invisible 1 matters when you're simplifying.",
    colour: '#8E44AD',
  },
};

/**
 * Returns an intervention object for a flagged error pattern, or null.
 */
export function getErrorIntervention(errorTag) {
  return ERROR_INTERVENTIONS[errorTag] || null;
}

/**
 * Returns the most urgent intervention based on global error counts.
 */
export function getMostUrgentIntervention(flaggedPatterns) {
  if (!flaggedPatterns || flaggedPatterns.length === 0) return null;
  // Return intervention for first flagged pattern
  for (const tag of flaggedPatterns) {
    const intervention = getErrorIntervention(tag);
    if (intervention) return { tag, ...intervention };
  }
  return null;
}

// ─────────────────────────────────────────────
// Pacing Adjustments
// ─────────────────────────────────────────────
/**
 * Returns pace recommendation based on time and performance.
 * 'fast' → skip some examples, jump to practice
 * 'normal' → standard pacing
 * 'slow' → more examples, more explanation
 */
export function getPaceRecommendation(learnerProfile, avgTimePerQuestion) {
  if (learnerProfile === 'fast_learner' && avgTimePerQuestion < 20) return 'fast';
  if (learnerProfile === 'struggling' || avgTimePerQuestion > 60) return 'slow';
  return 'normal';
}

// ─────────────────────────────────────────────
// Next Recommended Action
// ─────────────────────────────────────────────
/**
 * Recommends the next action for the learner.
 * Returns: { action, targetNode, reason }
 */
export function getNextRecommendation(learnerState) {
  const { nodeStates, flaggedPatterns } = learnerState;

  // If there's a flagged error pattern, prioritize remediation
  if (flaggedPatterns.length > 0) {
    const worstNode = findNodeWithPattern(nodeStates, flaggedPatterns[0]);
    if (worstNode) {
      return {
        action: 'remediate',
        targetNode: worstNode,
        reason: `You have a recurring ${formatErrorTag(flaggedPatterns[0])} pattern`,
      };
    }
  }

  // Find first available/in-progress node
  const inProgress = Object.entries(nodeStates)
    .filter(([, s]) => s.status === 'in_progress' && s.mastery < MASTERY_THRESHOLD)
    .sort(([, a], [, b]) => b.mastery - a.mastery);

  if (inProgress.length > 0) {
    return {
      action: 'continue',
      targetNode: inProgress[0][0],
      reason: 'Continue where you left off',
    };
  }

  // Find next available (unlocked but not started)
  const available = Object.entries(nodeStates)
    .filter(([, s]) => s.status === 'available' && s.attempts === 0);

  if (available.length > 0) {
    return {
      action: 'start',
      targetNode: available[0][0],
      reason: 'Start this newly unlocked concept',
    };
  }

  return { action: 'review', targetNode: null, reason: 'Great work! Review completed concepts' };
}

// ─────────────────────────────────────────────
// Utilities
// ─────────────────────────────────────────────
function findNodeWithPattern(nodeStates, errorTag) {
  const node = Object.entries(nodeStates)
    .filter(([, s]) => s.errorPatterns && s.errorPatterns[errorTag] > 0)
    .sort(([, a], [, b]) => (b.errorPatterns[errorTag] || 0) - (a.errorPatterns[errorTag] || 0));
  return node.length > 0 ? node[0][0] : null;
}

function formatErrorTag(tag) {
  return tag.replace(/_/g, ' ');
}
