/**
 * adaptiveEngine/adaptationEngine.js
 *
 * The pedagogical reasoning layer. Converts rule engine output and
 * behavioral metrics into a structured, actionable DECISION object
 * that the React UI layer can act on directly.
 *
 * Responsibilities:
 *   - Call the rule engine to find the highest-priority intervention
 *   - Build a complete decision object with UI hints and recommendations
 *   - Generate personalised default messages when no rule fires
 *   - Expose getAllMatchedRules() for diagnostic dashboards
 *
 * Decision object shape:
 * {
 *   nextAction:     string,    what to do next (see ACTION_META keys)
 *   urgency:        'high' | 'medium' | 'low',
 *   message:        string,    personalised message for the learner
 *   recommendation: object,    specific parameters for the UI action
 *   feedbackTone:   string,    how to frame the feedback visually
 *   uiHint:         string | null,  implementation note for the UI layer
 *   triggeredRule:  string,    which rule fired (useful for logging)
 *   diagnostics:    object,    metric snapshot for dev dashboards
 * }
 *
 * Supported nextAction values:
 *   'micro_lesson'           → show targeted micro-lesson for misconception
 *   'increase_difficulty'    → serve a harder question next
 *   'retry_without_hints'    → next question with hint button disabled
 *   'simplify_explanation'   → show step-by-step breakdown in feedback
 *   'show_conceptual_prompt' → overlay asking learner to re-read question
 *   'guided_solution'        → reveal a fully worked example
 *   'continue'               → no intervention, normal progression
 */

import { getTopRule, evaluateRules } from './ruleEngine.js';
import { getProfileStats } from './learnerModel.js';

// ─────────────────────────────────────────────
// Action metadata
// Each action type carries urgency, tone, and a UI implementation hint.
// ─────────────────────────────────────────────
const ACTION_META = {
  micro_lesson: {
    urgency:      'high',
    feedbackTone: 'corrective',
    uiHint:       'Display a targeted micro-lesson panel before the next question is shown.',
  },
  increase_difficulty: {
    urgency:      'low',
    feedbackTone: 'celebratory',
    uiHint:       'Bias the next question selection toward difficulty level 3 if available.',
  },
  retry_without_hints: {
    urgency:      'low',
    feedbackTone: 'encouraging',
    uiHint:       'Disable the hint button for the next question in this session.',
  },
  simplify_explanation: {
    urgency:      'medium',
    feedbackTone: 'supportive',
    uiHint:       'Display a step-by-step breakdown panel in addition to the standard explanation.',
  },
  show_conceptual_prompt: {
    urgency:      'medium',
    feedbackTone: 'redirecting',
    uiHint:       'Show an overlay prompt asking the learner to slow down and re-read before retrying.',
  },
  guided_solution: {
    urgency:      'high',
    feedbackTone: 'supportive',
    uiHint:       'Reveal a fully worked solution for the question just attempted.',
  },
  continue: {
    urgency:      'low',
    feedbackTone: 'positive',
    uiHint:       null,
  },
};

// ─────────────────────────────────────────────
// Main decision function
// ─────────────────────────────────────────────

/**
 * Determine the pedagogical action to take given the full analysis context.
 *
 * @param {object} context - { attempt, metrics, errors, profile, stats }
 * @returns {object} decision
 */
export function decide(context) {
  const topRule = getTopRule(context);

  if (!topRule) {
    // No rule fired — learner is progressing normally
    return buildDecision('continue', null, context, 'no_rule_matched');
  }

  return buildDecision(topRule.action, topRule, context, topRule.id);
}

// ─────────────────────────────────────────────
// Decision builder
// ─────────────────────────────────────────────

/**
 * Assemble the full decision object.
 * Handles both rule-triggered decisions and the default 'continue' case.
 */
function buildDecision(action, rule, context, ruleId) {
  const meta = ACTION_META[action] || ACTION_META.continue;
  const { attempt, metrics, errors, profile, stats } = context;

  return {
    nextAction:     action,
    urgency:        meta.urgency,
    message:        rule
      ? rule.resolvedMessage
      : buildDefaultMessage(attempt, metrics, stats),
    recommendation: buildRecommendation(action, context),
    feedbackTone:   meta.feedbackTone,
    uiHint:         meta.uiHint,
    triggeredRule:  ruleId,
    // Diagnostic snapshot — attach full metrics for logging or dev tools
    diagnostics: {
      confidenceScore:    +metrics.confidenceScore.toFixed(3),
      engagementLevel:    +metrics.engagementLevel.toFixed(3),
      learningEfficiency: +metrics.learningEfficiency.toFixed(3),
      misconceptionScore: +metrics.misconceptionScore.toFixed(3),
      dominantError:      errors.dominantError,
      isMisconception:    errors.isMisconception,
      errorPattern:       errors.pattern,
      totalAttempts:      profile.totalAttempts,
      accuracy:           +stats.accuracy.toFixed(3),
    },
  };
}

// ─────────────────────────────────────────────
// Recommendation builder
// ─────────────────────────────────────────────

/**
 * Build action-specific recommendation parameters.
 * These are concrete props the UI layer reads to implement the action.
 */
function buildRecommendation(action, context) {
  const { attempt, errors, metrics, stats, profile } = context;

  switch (action) {
    case 'micro_lesson':
      return {
        errorType:       errors.dominantError,
        errorCount:      errors.dominantCount,
        conceptId:       attempt.conceptId,
        isMisconception: errors.isMisconception,
        // The UI should look up the error intervention from the existing
        // engine/adaptationEngine.js getErrorIntervention() using this errorType.
      };

    case 'increase_difficulty':
      return {
        targetDifficulty: 3,
        reason:           'high_confidence',
        confidenceScore:  metrics.confidenceScore,
      };

    case 'retry_without_hints':
      return {
        disableHints: true,
        reason:       'hint_dependency',
        hintRatio:    stats.hintRatio,
      };

    case 'simplify_explanation':
      return {
        showStepByStep: true,
        reason:         attempt.timeTaken > 90 ? 'confusion' : 'declining_performance',
        timeTaken:      attempt.timeTaken,
      };

    case 'show_conceptual_prompt':
      return {
        prompt: 'Before you answer: identify the operation in the expression, write out what it means in words, then choose your answer.',
        reason:    'guessing_detected',
        timeTaken: attempt.timeTaken,
      };

    case 'guided_solution':
      return {
        showFullSolution: true,
        reason:           'learning_stall',
        accuracy:         stats.accuracy,
        totalAttempts:    profile.totalAttempts,
      };

    default:
      return {};
  }
}

// ─────────────────────────────────────────────
// Default message (no rule fired)
// ─────────────────────────────────────────────

/**
 * Generate a personalised positive or gentle message when the learner
 * is progressing normally and no intervention is needed.
 */
function buildDefaultMessage(attempt, metrics, stats) {
  if (attempt.isCorrect && attempt.hintsUsed === 0) {
    if (metrics.confidenceScore >= 0.70) {
      return "Great work — you got it right on your own. Your understanding is solid!";
    }
    return "Correct! Nice work — keep it up.";
  }

  if (attempt.isCorrect && attempt.hintsUsed > 0) {
    if (attempt.hintsUsed === 1) {
      return "Well done! One hint was all you needed — try the next one without it.";
    }
    return "Good job getting it right! The hints helped you think it through.";
  }

  if (!attempt.isCorrect) {
    if (stats.accuracy > 0.6) {
      return "Not quite this time — review the explanation carefully. You've been doing well overall.";
    }
    return "That's not right — but every mistake shows us what to practice. Check the explanation.";
  }

  return "Keep going — you're making progress!";
}

// ─────────────────────────────────────────────
// Diagnostic helper
// ─────────────────────────────────────────────

/**
 * Return all matching rules (not just the top one).
 * Useful for admin dashboards, logging, or "why did the system do X?" explanations.
 *
 * @param {object} context
 * @returns {Array} all matched rules sorted by priority
 */
export function getAllMatchedRules(context) {
  return evaluateRules(context);
}
