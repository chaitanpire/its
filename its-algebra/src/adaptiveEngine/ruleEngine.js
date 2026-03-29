/**
 * adaptiveEngine/ruleEngine.js
 *
 * Configurable, priority-ordered rule set mapping observable conditions
 * to pedagogical actions. Rules are evaluated against a rich context object
 * and return structured matches that the adaptation engine acts on.
 *
 * Design principles:
 *   - Each rule is self-contained: condition, action, priority, message.
 *   - Lower priority number = more urgent = evaluated first.
 *   - Rules can be added, removed, or reconfigured without touching other modules.
 *   - Condition functions never throw — errors are caught silently.
 *   - Message functions receive the full context so they can be personalised.
 *
 * Context object shape (passed to every condition and message function):
 * {
 *   attempt: {
 *     questionId, conceptId, isCorrect, timeTaken, hintsUsed,
 *     selectedOption, correctOption, errorType
 *   },
 *   metrics: {
 *     confidenceScore, engagementLevel, learningEfficiency, misconceptionScore
 *   },
 *   errors: {
 *     dominantError, dominantCount, isMisconception, pattern,
 *     allErrors, totalErrors
 *   },
 *   profile: { attempts, recentAttempts, errorCounts, totalAttempts, ... },
 *   stats:   { accuracy, avgTime, hintRatio, recentAccuracy }
 * }
 */

import { TIME_THRESHOLDS } from './metricsCalculator.js';

// ─────────────────────────────────────────────
// Configurable thresholds
// Exported so tests and future settings panels can adjust them.
// ─────────────────────────────────────────────
export const RULE_THRESHOLDS = {
  /** Answering wrong in under this many seconds → likely guessing */
  GUESSING_TIME:              TIME_THRESHOLDS.FAST,     // 15s
  /** Wrong in under this → almost certainly guessing (no reading) */
  VERY_FAST_GUESSING_TIME:    TIME_THRESHOLDS.VERY_FAST, // 8s
  /** Wrong after more than this → genuine confusion, not guessing */
  CONFUSION_TIME:             TIME_THRESHOLDS.SLOW,     // 90s
  /** Used more than this many hints on a correct answer → hint dependency */
  HINT_DEPENDENCY_COUNT:      2,
  /** Accuracy at or below this after many attempts → learning stall */
  STALL_ACCURACY:             0.35,
  /** Minimum attempts before a stall can be diagnosed */
  STALL_MIN_ATTEMPTS:         5,
  /** Efficiency below this (after enough attempts) → no improvement trend */
  EFFICIENCY_DECLINE_THRESH: -0.15,
  /** Minimum attempts before efficiency signal is used */
  EFFICIENCY_MIN_ATTEMPTS:    4,
  /** Confidence at or above this, fast+correct+no-hints → mastery signal */
  MASTERY_CONFIDENCE:         0.78,
  /** Same error type this many times → misconception (shared with errorAnalyzer) */
  MISCONCEPTION_COUNT:        3,
};

// ─────────────────────────────────────────────
// Human-readable labels for error types
// (used in message functions below)
// ─────────────────────────────────────────────
const ERROR_LABELS = {
  sign_error:            "sign errors — watch those negative signs",
  order_error:           "operation-order errors — undo addition/subtraction before multiplication",
  pemdas_violation:      "order-of-operations errors — multiply before you add",
  coefficient_confusion: "coefficient errors — remember the number next to the variable is fixed",
  less_than_reversal:    '"less than" translation errors — n − 4, not 4 − n',
  exponent_ignored:      "exponent errors — x and x² are different terms",
  combined_unlike_terms: "unlike-terms errors — x-terms and y-terms can't combine",
  invisible_one_error:   "invisible-1 errors — x means 1x, not just x",
};

function errorLabel(errorType) {
  return ERROR_LABELS[errorType] || `${(errorType || 'conceptual').replace(/_/g, ' ')} errors`;
}

// ─────────────────────────────────────────────
// Rule definitions
// Priority: 1 = highest urgency. First matching rule wins (via getTopRule).
// ─────────────────────────────────────────────
export const RULES = [

  // ── Priority 1 ─ Persistent misconception ──────────────────────────────
  // A repeated, concentrated error type is the highest-priority intervention.
  // It must be addressed before any difficulty changes or hint strategies.
  {
    id:          'misconception_persistent',
    priority:    1,
    description: 'Same error type ≥ 3 times with high dominance → systematic misconception',
    condition: ({ errors }) =>
      errors.isMisconception &&
      errors.dominantCount >= RULE_THRESHOLDS.MISCONCEPTION_COUNT,
    action: 'micro_lesson',
    message: ({ errors }) =>
      `You've made ${errorLabel(errors.dominantError)} ${errors.dominantCount} times — let's fix that pattern now with a targeted mini-lesson.`,
  },

  // ── Priority 2 ─ Definite guessing (very fast wrong) ────────────────────
  // Under 8 seconds: the learner cannot have read and parsed the question.
  {
    id:          'guessing_definite',
    priority:    2,
    description: 'Wrong answer in < 8 seconds → not reading the question',
    condition: ({ attempt }) =>
      !attempt.isCorrect &&
      attempt.timeTaken < RULE_THRESHOLDS.VERY_FAST_GUESSING_TIME,
    action: 'show_conceptual_prompt',
    message: () =>
      "That was very fast — you probably didn't have time to read the question properly. Slow down and work through it step by step.",
  },

  // ── Priority 3 ─ Probable guessing (fast wrong) ──────────────────────────
  // Under 15 seconds: fast enough to suggest guessing, but possibly just quick.
  {
    id:          'guessing_probable',
    priority:    3,
    description: 'Wrong answer in < 15 seconds → likely guessing',
    condition: ({ attempt }) =>
      !attempt.isCorrect &&
      attempt.timeTaken < RULE_THRESHOLDS.GUESSING_TIME,
    action: 'show_conceptual_prompt',
    message: () =>
      "Try solving step-by-step instead of guessing. Read the expression carefully — what operation is happening?",
  },

  // ── Priority 4 ─ Genuine confusion (slow wrong) ──────────────────────────
  // Over 90 seconds and still wrong: the learner is stuck, not rushing.
  {
    id:          'confusion_slow',
    priority:    4,
    description: 'Wrong answer after > 90 seconds → genuine confusion',
    condition: ({ attempt }) =>
      !attempt.isCorrect &&
      attempt.timeTaken > RULE_THRESHOLDS.CONFUSION_TIME,
    action: 'simplify_explanation',
    message: () =>
      "You spent a long time on this one — let's try breaking it into smaller steps. It's okay to go slowly when learning something new.",
  },

  // ── Priority 5 ─ Mastery signal (fast + correct + confident) ─────────────
  // The learner is consistently getting things right quickly without hints.
  // Time to increase the challenge.
  {
    id:          'mastery_signal',
    priority:    5,
    description: 'Correct + no hints + fast + high confidence → increase difficulty',
    condition: ({ attempt, metrics }) =>
      attempt.isCorrect &&
      attempt.hintsUsed === 0 &&
      attempt.timeTaken < TIME_THRESHOLDS.FAST &&
      metrics.confidenceScore >= RULE_THRESHOLDS.MASTERY_CONFIDENCE,
    action: 'increase_difficulty',
    message: ({ metrics }) =>
      `Excellent! Your confidence score is ${Math.round(metrics.confidenceScore * 100)}% — you're ready for harder questions. Let's step it up.`,
  },

  // ── Priority 6 ─ Hint dependency ─────────────────────────────────────────
  // Correct answer, but the learner needed more than 2 hints to get there.
  // They understand when scaffolded — now we wean them off scaffolding.
  {
    id:          'hint_dependency',
    priority:    6,
    description: 'Correct but used > 2 hints → hint dependency detected',
    condition: ({ attempt }) =>
      attempt.isCorrect &&
      attempt.hintsUsed > RULE_THRESHOLDS.HINT_DEPENDENCY_COUNT,
    action: 'retry_without_hints',
    message: () =>
      "Good job! You got it with some help. Now try a similar question without any hints — you're ready to do it on your own.",
  },

  // ── Priority 7 ─ Learning stall ──────────────────────────────────────────
  // Many attempts, low accuracy, AND efficiency is declining.
  // The learner is not benefiting from repeated practice alone.
  {
    id:          'learning_stall',
    priority:    7,
    description: 'Many attempts + low accuracy + negative efficiency → stall, needs guided solution',
    condition: ({ profile, stats, metrics }) =>
      profile.totalAttempts >= RULE_THRESHOLDS.STALL_MIN_ATTEMPTS &&
      stats.accuracy <= RULE_THRESHOLDS.STALL_ACCURACY &&
      metrics.learningEfficiency < RULE_THRESHOLDS.EFFICIENCY_DECLINE_THRESH,
    action: 'guided_solution',
    message: ({ profile, stats }) =>
      `You've tried this ${profile.totalAttempts} times with ${Math.round(stats.accuracy * 100)}% accuracy. Let's walk through a complete solution together — a worked example will help unlock this.`,
  },

  // ── Priority 8 ─ Declining efficiency (no stall yet) ─────────────────────
  // Accuracy is falling across attempts even without a full stall.
  // Intervene early with a simpler explanation before frustration sets in.
  {
    id:          'efficiency_declining',
    priority:    8,
    description: 'Accuracy declining across attempts → try a different approach',
    condition: ({ profile, metrics }) =>
      profile.totalAttempts >= RULE_THRESHOLDS.EFFICIENCY_MIN_ATTEMPTS &&
      metrics.learningEfficiency < RULE_THRESHOLDS.EFFICIENCY_DECLINE_THRESH,
    action: 'simplify_explanation',
    message: ({ metrics }) => {
      const drop = Math.round(Math.abs(metrics.learningEfficiency) * 100);
      return `Your accuracy has dropped ${drop}% across recent attempts — let's approach this differently and try a simpler explanation.`;
    },
  },

];

// ─────────────────────────────────────────────
// Rule evaluation functions
// ─────────────────────────────────────────────

/**
 * Evaluate all rules against the given context.
 * Returns ALL matching rules, sorted by priority (ascending = most urgent first).
 *
 * @param {object} context - { attempt, metrics, errors, profile, stats }
 * @returns {Array<{ id, priority, description, action, resolvedMessage }>}
 */
export function evaluateRules(context) {
  return RULES
    .filter((rule) => {
      try {
        return rule.condition(context);
      } catch {
        // A broken rule condition should never crash the engine
        return false;
      }
    })
    .map((rule) => ({
      id:              rule.id,
      priority:        rule.priority,
      description:     rule.description,
      action:          rule.action,
      resolvedMessage: typeof rule.message === 'function'
        ? rule.message(context)
        : rule.message,
    }))
    .sort((a, b) => a.priority - b.priority);
}

/**
 * Get only the single highest-priority matching rule.
 * Returns null if no rules match (normal continuation).
 *
 * @param {object} context
 * @returns {{ id, priority, action, resolvedMessage } | null}
 */
export function getTopRule(context) {
  const matched = evaluateRules(context);
  return matched.length > 0 ? matched[0] : null;
}
