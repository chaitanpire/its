/**
 * adaptiveEngine/learnerModel.js
 *
 * Maintains a rich behavioral profile per concept in localStorage.
 * This is SEPARATE from src/engine/learnerModel.js which handles WMA mastery.
 * That model answers "how well does the learner know this?" (mastery score).
 * This model answers "HOW does the learner behave?" (speed, hints, trends).
 *
 * Persisted under 'aq_adaptive_v1' to avoid conflicts with existing state.
 *
 * Profile shape per concept:
 * {
 *   attempts:        Array<AttemptEntry>,   full history
 *   recentAttempts:  Array<AttemptEntry>,   rolling window (last 5)
 *   errorCounts:     { [errorType]: number },
 *   totalAttempts:   number,
 *   correctAttempts: number,
 *   totalTimeTaken:  number,  (seconds)
 *   totalHintsUsed:  number,
 * }
 *
 * AttemptEntry:
 * {
 *   questionId:  string,
 *   isCorrect:   boolean,
 *   timeTaken:   number,
 *   hintsUsed:   number,
 *   errorType:   string | null,
 *   timestamp:   number,
 * }
 */

const STORAGE_KEY = 'aq_adaptive_v1';

/**
 * How many recent attempts to keep in the rolling window for trend analysis.
 * 5 gives enough signal without making the window too stale.
 */
const RECENT_WINDOW = 5;

// ─────────────────────────────────────────────
// Internal helpers
// ─────────────────────────────────────────────

function emptyConceptProfile() {
  return {
    attempts: [],
    recentAttempts: [],
    errorCounts: {},
    totalAttempts: 0,
    correctAttempts: 0,
    totalTimeTaken: 0,
    totalHintsUsed: 0,
  };
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { conceptProfiles: {} };
    return JSON.parse(raw);
  } catch {
    return { conceptProfiles: {} };
  }
}

function saveState(state) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // silent fail: private browsing or quota exceeded
  }
}

// ─────────────────────────────────────────────
// Public API
// ─────────────────────────────────────────────

/**
 * Record a question attempt in the behavioral model.
 * Mutates the stored profile for the given concept and persists it.
 *
 * @param {object} attemptData
 *   { questionId, conceptId, isCorrect, timeTaken, hintsUsed, errorType }
 * @returns {object} the full updated behavioral state
 */
export function recordAttempt(attemptData) {
  const { questionId, conceptId, isCorrect, timeTaken, hintsUsed, errorType } = attemptData;

  const state = loadState();

  if (!state.conceptProfiles[conceptId]) {
    state.conceptProfiles[conceptId] = emptyConceptProfile();
  }

  const profile = state.conceptProfiles[conceptId];

  const entry = {
    questionId,
    isCorrect,
    timeTaken: timeTaken || 0,
    hintsUsed: hintsUsed || 0,
    errorType: errorType || null,
    timestamp: Date.now(),
  };

  // Append to full history
  profile.attempts.push(entry);
  profile.totalAttempts += 1;
  profile.totalTimeTaken += entry.timeTaken;
  profile.totalHintsUsed += entry.hintsUsed;

  if (isCorrect) {
    profile.correctAttempts += 1;
  } else if (errorType) {
    // Only count errors on incorrect attempts
    profile.errorCounts[errorType] = (profile.errorCounts[errorType] || 0) + 1;
  }

  // Maintain the rolling recent-window (slice to last RECENT_WINDOW)
  profile.recentAttempts = [...profile.recentAttempts, entry].slice(-RECENT_WINDOW);

  saveState(state);
  return state;
}

/**
 * Retrieve the behavioral profile for a concept.
 * Returns an empty profile if this concept has no recorded attempts yet.
 *
 * @param {string} conceptId
 * @returns {object} conceptProfile
 */
export function getConceptProfile(conceptId) {
  const state = loadState();
  return state.conceptProfiles[conceptId] || emptyConceptProfile();
}

/**
 * Compute basic aggregate statistics from a profile.
 * These aggregates are inputs to metricsCalculator.
 *
 * @param {object} profile - from getConceptProfile()
 * @returns {object} { accuracy, avgTime, hintRatio, recentAccuracy }
 */
export function getProfileStats(profile) {
  const n = profile.totalAttempts;

  if (n === 0) {
    return { accuracy: 0, avgTime: 0, hintRatio: 0, recentAccuracy: 0 };
  }

  const accuracy = profile.correctAttempts / n;
  const avgTime = profile.totalTimeTaken / n;

  // hintRatio: normalised over [0,1]. Max possible hints = 3 per attempt.
  const hintRatio = Math.min(profile.totalHintsUsed / (n * 3), 1);

  // recentAccuracy: computed only over the rolling window
  const recent = profile.recentAttempts;
  const recentAccuracy = recent.length > 0
    ? recent.filter((a) => a.isCorrect).length / recent.length
    : 0;

  return { accuracy, avgTime, hintRatio, recentAccuracy };
}

/**
 * Clear all adaptive engine behavioral data.
 * Call this when the existing resetAll() is invoked.
 */
export function clearBehavioralState() {
  saveState({ conceptProfiles: {} });
}
