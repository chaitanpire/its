/**
 * adaptiveEngine/metricsCalculator.js
 *
 * Computes four continuous behavioral metrics from a concept profile.
 * These are NOT binary flags — they are real-valued signals [0,1] or [-1,1]
 * that the adaptation engine reads as a multi-dimensional learner state.
 *
 * ┌────────────────────┬──────────┬──────────────────────────────────────────┐
 * │ Metric             │ Range    │ What it measures                         │
 * ├────────────────────┼──────────┼──────────────────────────────────────────┤
 * │ confidenceScore    │ [0, 1]   │ Independent, fast, accurate performance  │
 * │ engagementLevel    │ [0, 1]   │ Deliberate & consistent time-on-task     │
 * │ learningEfficiency │ [-1, 1]  │ Improvement trend across attempts        │
 * │ misconceptionScore │ [0, 1]   │ Error concentration around one type      │
 * └────────────────────┴──────────┴──────────────────────────────────────────┘
 */

import { getProfileStats } from './learnerModel.js';

// ─────────────────────────────────────────────
// Time thresholds (seconds) calibrated for algebra word problems.
// These are exported so ruleEngine.js can share the same constants.
// ─────────────────────────────────────────────
export const TIME_THRESHOLDS = {
  VERY_FAST:  8,   // < 8s wrong → almost certainly guessing
  FAST:       15,  // < 15s → quick but plausible for simple questions
  NORMAL_MAX: 75,  // 15–75s → deliberate, expected range
  SLOW:       90,  // > 90s → confusion or distraction
};

// ─────────────────────────────────────────────
// 1. Confidence Score  [0, 1]
// ─────────────────────────────────────────────
/**
 * Measures how independently and quickly a learner answers correctly.
 *
 * Intuition:
 *   High confidence = recent correct answers, no hints, reasonable speed.
 *   Low confidence = using many hints, answering very slowly or very fast+wrong.
 *
 * Weights (sum = 1.0):
 *   0.40 — recent accuracy (rewards improvement, not just historical average)
 *   0.35 — speed quality (fast+correct → high; fast+wrong → penalised)
 *   0.25 — hint independence (1 - normalised hint ratio)
 *
 * @param {object} profile  - concept profile from learnerModel
 * @param {object} attempt  - latest attempt { isCorrect, timeTaken, hintsUsed }
 * @returns {number} confidenceScore [0, 1]
 */
export function computeConfidenceScore(profile, attempt) {
  const { recentAccuracy, hintRatio } = getProfileStats(profile);

  // Normalise timeTaken against the SLOW threshold (90s = 1.0, 0s = 0.0)
  const normalizedTime = Math.min(attempt.timeTaken / TIME_THRESHOLDS.SLOW, 1);

  // Speed quality:
  //   Correct answer → reward speed slightly, but don't over-penalise slowness
  //   Incorrect answer → fast wrong = near 0 (guessing), slow wrong = some partial credit for effort
  const speedScore = attempt.isCorrect
    ? Math.max(0.2, 1 - normalizedTime * 0.6)  // correct: 1.0 → 0.2 as time grows
    : Math.min(0.4, normalizedTime * 0.4);      // wrong: fast=0, slow=up to 0.4 (was at least thinking)

  const hintIndependence = 1 - hintRatio;

  return Math.max(0, Math.min(1,
    0.40 * recentAccuracy +
    0.35 * speedScore +
    0.25 * hintIndependence,
  ));
}

// ─────────────────────────────────────────────
// 2. Engagement Level  [0, 1]
// ─────────────────────────────────────────────
/**
 * Measures how deliberately and consistently the learner is engaging.
 *
 * An engaged learner spends meaningful, CONSISTENT time per question.
 * Signs of low engagement:
 *   - Wildly variable response times (CV > 1)
 *   - Consistently clicking very fast (< 8s average)
 *
 * Method: Coefficient of Variation (CV = σ/μ) on recent attempt times.
 * Low CV → consistent timing → engaged. High CV → erratic → possibly disengaged.
 *
 * Weights:
 *   0.60 — time consistency (1 - CV, clamped)
 *   0.40 — time quality (penalise if average is < VERY_FAST, allow slow)
 *
 * @param {object} profile - concept profile
 * @returns {number} engagementLevel [0, 1]
 */
export function computeEngagementLevel(profile) {
  const recent = profile.recentAttempts;

  // Need at least 2 data points to compute variance
  if (recent.length < 2) return 0.5; // neutral prior

  const times = recent.map((a) => a.timeTaken).filter((t) => t > 0);
  if (times.length < 2) return 0.5;

  const mean = times.reduce((s, t) => s + t, 0) / times.length;
  const variance = times.reduce((s, t) => s + (t - mean) ** 2, 0) / times.length;
  const stdDev = Math.sqrt(variance);

  // CV: lower is better (more consistent = more engaged)
  // Clamp at 2.0 so extreme outliers don't floor the score to 0
  const cv = mean > 0 ? Math.min(stdDev / mean, 2.0) : 1.0;
  const consistencyScore = Math.max(0, 1 - cv / 2); // maps [0, 2] → [1, 0]

  // Time quality: penalise very fast average (rushing), slightly penalise very slow
  let timeQuality;
  if (mean < TIME_THRESHOLDS.VERY_FAST) {
    timeQuality = 0.2; // almost certainly not reading questions
  } else if (mean < TIME_THRESHOLDS.FAST) {
    timeQuality = 0.6; // quick but possible
  } else if (mean <= TIME_THRESHOLDS.NORMAL_MAX) {
    timeQuality = 1.0; // ideal deliberate range
  } else {
    timeQuality = 0.7; // slow but still engaged (just struggling)
  }

  return Math.max(0, Math.min(1, 0.60 * consistencyScore + 0.40 * timeQuality));
}

// ─────────────────────────────────────────────
// 3. Learning Efficiency  [-1, 1]
// ─────────────────────────────────────────────
/**
 * Measures whether performance is improving across attempts on this concept.
 *
 * Method: Split all attempts into first half and second half.
 * Compare accuracy of second half vs. first half.
 *
 * Returns:
 *    1.0 → perfect improvement (0% → 100% accuracy)
 *    0.0 → no change
 *   -1.0 → full decline (100% → 0%)
 *
 * Requires at least 4 attempts for a meaningful signal — returns 0 otherwise.
 *
 * @param {object} profile - concept profile
 * @returns {number} learningEfficiency [-1, 1]
 */
export function computeLearningEfficiency(profile) {
  const attempts = profile.attempts;
  if (attempts.length < 4) return 0; // not enough data

  const mid = Math.floor(attempts.length / 2);
  const firstHalf = attempts.slice(0, mid);
  const secondHalf = attempts.slice(mid);

  const firstAccuracy = firstHalf.filter((a) => a.isCorrect).length / firstHalf.length;
  const secondAccuracy = secondHalf.filter((a) => a.isCorrect).length / secondHalf.length;

  // Direct delta: positive = improving, negative = declining
  return Math.max(-1, Math.min(1, secondAccuracy - firstAccuracy));
}

// ─────────────────────────────────────────────
// 4. Misconception Score  [0, 1]
// ─────────────────────────────────────────────
/**
 * Measures how concentrated errors are around a single error type.
 *
 * A score near 1.0 means almost all errors are the same type and have
 * occurred multiple times — a strong signal of a systematic misconception.
 *
 * Formula:
 *   dominance  = topErrorCount / totalErrors   (how concentrated)
 *   persistence = bonus if topError appeared ≥ 3 times (how established)
 *
 * @param {object} errorCounts - { [errorType]: count }
 * @returns {number} misconceptionScore [0, 1]
 */
export function computeMisconceptionScore(errorCounts) {
  const entries = Object.entries(errorCounts || {});
  if (entries.length === 0) return 0;

  const totalErrors = entries.reduce((s, [, c]) => s + c, 0);
  if (totalErrors === 0) return 0;

  // Find the dominant error type
  entries.sort(([, a], [, b]) => b - a);
  const [, topCount] = entries[0];

  const dominance = topCount / totalErrors;

  // Boost score when the error has been seen 3+ times (not just once by chance)
  const persistenceBoost = topCount >= 3 ? 0.2 : topCount === 2 ? 0.1 : 0;

  return Math.min(1, dominance + persistenceBoost);
}

// ─────────────────────────────────────────────
// Combined metric computation
// ─────────────────────────────────────────────
/**
 * Compute all four metrics in one call and return a structured object.
 * This is the primary export used by the pipeline in index.js.
 *
 * @param {object} profile  - concept behavioral profile from learnerModel
 * @param {object} attempt  - latest attempt data
 * @returns {object} {
 *   confidenceScore:    number [0, 1],
 *   engagementLevel:    number [0, 1],
 *   learningEfficiency: number [-1, 1],
 *   misconceptionScore: number [0, 1],
 * }
 */
export function computeMetrics(profile, attempt) {
  return {
    confidenceScore:    computeConfidenceScore(profile, attempt),
    engagementLevel:    computeEngagementLevel(profile),
    learningEfficiency: computeLearningEfficiency(profile),
    misconceptionScore: computeMisconceptionScore(profile.errorCounts),
  };
}
