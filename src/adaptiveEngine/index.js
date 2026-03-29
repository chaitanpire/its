/**
 * adaptiveEngine/index.js
 *
 * Public API for the Advanced Pedagogical Engine.
 * Import from this file — do not import sub-modules directly from React components.
 *
 * Primary export:  analyzeAndAdapt(attemptData)
 * Secondary:       getAdaptiveProfile(conceptId)
 * Reset:           clearAdaptiveData()
 *
 * ─── Pipeline ────────────────────────────────────────────────────────────────
 *
 *   attemptData
 *       │
 *       ▼
 *  [1] recordAttempt()          ← learnerModel.js
 *       Update behavioral profile in localStorage
 *       │
 *       ▼
 *  [2] getConceptProfile()      ← learnerModel.js
 *       Retrieve the freshly updated profile
 *       │
 *       ▼
 *  [3] computeMetrics()         ← metricsCalculator.js
 *       confidenceScore, engagementLevel, learningEfficiency, misconceptionScore
 *       │
 *       ▼
 *  [4] analyzeErrors()          ← errorAnalyzer.js
 *       dominantError, isMisconception, pattern, allErrors
 *       │
 *       ▼
 *  [5] decide()                 ← adaptationEngine.js (via ruleEngine.js)
 *       nextAction, urgency, message, recommendation, feedbackTone, diagnostics
 *       │
 *       ▼
 *   Return { decision, metrics, errors, profile, stats }
 *
 * ─── Input (attemptData) ─────────────────────────────────────────────────────
 *
 * {
 *   questionId:     string,            e.g. 'K01_Q2'
 *   conceptId:      string,            e.g. 'K01'
 *   isCorrect:      boolean,
 *   timeTaken:      number,            seconds the learner spent on this question
 *   hintsUsed:      number,            0–3 (hint level used)
 *   attempts:       number,            attempts on this question instance
 *   selectedOption: string,            what the learner picked
 *   correctOption:  string,            the correct answer
 *   errorType:      string | null,     errorTag if wrong (from assessmentBank)
 * }
 *
 * ─── Output ──────────────────────────────────────────────────────────────────
 *
 * {
 *   decision: {
 *     nextAction:     'micro_lesson' | 'increase_difficulty' | 'retry_without_hints'
 *                     | 'simplify_explanation' | 'show_conceptual_prompt'
 *                     | 'guided_solution' | 'continue',
 *     urgency:        'high' | 'medium' | 'low',
 *     message:        string,           personalised text for the learner
 *     recommendation: object,           action-specific parameters for the UI
 *     feedbackTone:   string,
 *     uiHint:         string | null,
 *     triggeredRule:  string,
 *     diagnostics:    object,
 *   },
 *   metrics: {
 *     confidenceScore:    number [0, 1],
 *     engagementLevel:    number [0, 1],
 *     learningEfficiency: number [-1, 1],
 *     misconceptionScore: number [0, 1],
 *   },
 *   errors: {
 *     dominantError:  string | null,
 *     dominantCount:  number,
 *     isMisconception: boolean,
 *     pattern:        'none' | 'emerging' | 'established' | 'persistent',
 *     allErrors:      Array<{ type, count, percentage }>,
 *     totalErrors:    number,
 *   },
 *   profile: object,   behavioral profile snapshot after this attempt
 *   stats:   { accuracy, avgTime, hintRatio, recentAccuracy },
 * }
 */

import {
  recordAttempt,
  getConceptProfile,
  getProfileStats,
  clearBehavioralState,
} from './learnerModel.js';

import { computeMetrics }   from './metricsCalculator.js';
import { analyzeErrors }    from './errorAnalyzer.js';
import { decide }           from './adaptationEngine.js';

// ─────────────────────────────────────────────
// Primary export
// ─────────────────────────────────────────────

/**
 * Process a question attempt through the full adaptive engine pipeline.
 * Call this immediately after the learner submits an answer.
 *
 * @param {object} attemptData - see shape above
 * @returns {object} { decision, metrics, errors, profile, stats }
 */
export function analyzeAndAdapt(attemptData) {
  // ── Step 1: Record attempt in behavioral model ──────────────────────────
  recordAttempt(attemptData);

  // ── Step 2: Retrieve updated profile ────────────────────────────────────
  const profile = getConceptProfile(attemptData.conceptId);
  const stats   = getProfileStats(profile);

  // ── Step 3: Compute behavioral metrics ──────────────────────────────────
  const metrics = computeMetrics(profile, attemptData);

  // ── Step 4: Analyze error patterns ──────────────────────────────────────
  const errors = analyzeErrors(profile.errorCounts);

  // ── Step 5: Run rule engine and produce pedagogical decision ────────────
  const context  = { attempt: attemptData, metrics, errors, profile, stats };
  const decision = decide(context);

  return { decision, metrics, errors, profile, stats };
}

// ─────────────────────────────────────────────
// Secondary exports
// ─────────────────────────────────────────────

/**
 * Retrieve the current behavioral profile for a concept without
 * recording an attempt. Useful at the start of a practice session
 * to pre-load the learner's behavioral context.
 *
 * @param {string} conceptId
 * @returns {{ profile: object, stats: object }}
 */
export function getAdaptiveProfile(conceptId) {
  const profile = getConceptProfile(conceptId);
  const stats   = getProfileStats(profile);
  return { profile, stats };
}

/**
 * Clear all adaptive engine data.
 * Call this alongside useLearnerState's resetAll() to give a fresh start.
 */
export { clearBehavioralState as clearAdaptiveData };
