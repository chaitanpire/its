/**
 * adaptiveEngine/errorAnalyzer.js
 *
 * Specialised analysis of error patterns within and across concepts.
 *
 * Three layers of analysis:
 *
 *  1. analyzeErrors(errorCounts)
 *     Single-concept error analysis: find dominant error, classify pattern,
 *     and determine if it constitutes a genuine misconception.
 *
 *  2. detectCrossConceptErrors(allConceptProfiles)
 *     Cross-concept analysis: detect when the same error type appears in
 *     multiple concepts — signals a foundational (not surface) misunderstanding.
 *
 *  3. describeErrorPattern(errorAnalysis)
 *     Convert analysis into a natural-language pedagogical message.
 *
 * Misconception definition (research-backed):
 *   A misconception is a persistent, systematic wrong belief — not a slip.
 *   We classify it as a misconception when:
 *     - The same error type has occurred ≥ 3 times (persistence threshold)
 *     - AND it accounts for ≥ 40% of all errors (dominance threshold)
 *   Both conditions must hold to avoid false positives from small samples.
 */

// ─────────────────────────────────────────────
// Thresholds
// ─────────────────────────────────────────────

/** Minimum occurrences of an error type to classify as a misconception. */
const MISCONCEPTION_MIN_COUNT = 3;

/**
 * Minimum fraction of total errors that the dominant type must represent.
 * 40% avoids false positives when a learner makes many different small errors.
 */
const MISCONCEPTION_DOMINANCE_RATIO = 0.40;

// ─────────────────────────────────────────────
// 1. Single-concept error analysis
// ─────────────────────────────────────────────

/**
 * Analyse a concept's error counts and return a structured diagnosis.
 *
 * @param {object} errorCounts - { [errorType]: number }
 * @returns {object} errorAnalysis
 *   {
 *     dominantError:  string | null,   most frequent error type
 *     dominantCount:  number,
 *     isMisconception: boolean,
 *     pattern: 'none' | 'emerging' | 'established' | 'persistent',
 *     allErrors: Array<{ type, count, percentage }>,  sorted by frequency
 *     totalErrors: number,
 *   }
 */
export function analyzeErrors(errorCounts) {
  const entries = Object.entries(errorCounts || {});
  const totalErrors = entries.reduce((s, [, c]) => s + c, 0);

  if (totalErrors === 0) {
    return {
      dominantError: null,
      dominantCount: 0,
      isMisconception: false,
      pattern: 'none',
      allErrors: [],
      totalErrors: 0,
    };
  }

  // Sort by frequency descending
  const sorted = entries
    .sort(([, a], [, b]) => b - a)
    .map(([type, count]) => ({
      type,
      count,
      percentage: Math.round((count / totalErrors) * 100),
    }));

  const { type: dominantError, count: dominantCount } = sorted[0];
  const dominanceRatio = dominantCount / totalErrors;

  // Misconception: both persistence AND dominance thresholds must be met
  const isMisconception = (
    dominantCount >= MISCONCEPTION_MIN_COUNT &&
    dominanceRatio >= MISCONCEPTION_DOMINANCE_RATIO
  );

  // Pattern: how established is this error behaviour?
  let pattern;
  if (dominantCount === 0) {
    pattern = 'none';
  } else if (dominantCount === 1) {
    pattern = 'emerging';     // seen once — monitor, not yet intervene
  } else if (dominantCount === 2) {
    pattern = 'established';  // seen twice — proactively warn
  } else {
    pattern = 'persistent';   // seen 3+ times — must intervene
  }

  return {
    dominantError,
    dominantCount,
    isMisconception,
    pattern,
    allErrors: sorted,
    totalErrors,
  };
}

// ─────────────────────────────────────────────
// 2. Cross-concept error detection
// ─────────────────────────────────────────────

/**
 * Detect error types that appear across multiple concepts.
 * These indicate a foundational gap, not just a local confusion.
 *
 * For example: sign_error appearing in K02, K04, and K07 means the learner
 * has a deep-seated sign handling issue, not just a problem with one node.
 *
 * @param {object} allConceptProfiles - { [conceptId]: conceptProfile }
 * @returns {object} {
 *   crossConceptErrors: Array<{
 *     errorType:   string,
 *     totalCount:  number,
 *     conceptIds:  string[],
 *     isSystemic:  boolean,   // true if count ≥ 4 across 2+ concepts
 *   }>
 * }
 */
export function detectCrossConceptErrors(allConceptProfiles) {
  // Aggregate all error counts across concepts
  const globalMap = {}; // { errorType: { count, conceptIds: Set } }

  Object.entries(allConceptProfiles).forEach(([conceptId, profile]) => {
    Object.entries(profile.errorCounts || {}).forEach(([errorType, count]) => {
      if (!globalMap[errorType]) {
        globalMap[errorType] = { count: 0, conceptIds: new Set() };
      }
      globalMap[errorType].count += count;
      globalMap[errorType].conceptIds.add(conceptId);
    });
  });

  // Keep only errors that appear in 2+ concepts
  const crossConceptErrors = Object.entries(globalMap)
    .filter(([, { conceptIds }]) => conceptIds.size >= 2)
    .map(([errorType, { count, conceptIds }]) => ({
      errorType,
      totalCount: count,
      conceptIds: Array.from(conceptIds),
      isSystemic: count >= 4,
    }))
    .sort((a, b) => b.totalCount - a.totalCount);

  return { crossConceptErrors };
}

// ─────────────────────────────────────────────
// 3. Human-readable pedagogical description
// ─────────────────────────────────────────────

/**
 * Convert an error analysis result into a natural-language message
 * suitable for display to a learner.
 *
 * @param {object} errorAnalysis - result from analyzeErrors()
 * @returns {string|null} message, or null if no pattern to describe
 */
export function describeErrorPattern(errorAnalysis) {
  const { dominantError, dominantCount, pattern, isMisconception } = errorAnalysis;
  if (!dominantError || pattern === 'none') return null;

  const label = formatErrorType(dominantError);

  if (isMisconception) {
    return `You've made ${label} errors ${dominantCount} times — this looks like a systematic misconception worth addressing directly.`;
  }
  if (pattern === 'persistent') {
    return `You've made ${label} errors ${dominantCount} times. Let's address this pattern before it becomes harder to unlearn.`;
  }
  if (pattern === 'established') {
    return `You've made a ${label} error more than once — let's make sure this doesn't become a habit.`;
  }
  if (pattern === 'emerging') {
    return `Watch out for ${label} errors — you've encountered this once already.`;
  }
  return null;
}

// ─────────────────────────────────────────────
// Utility
// ─────────────────────────────────────────────

/**
 * Convert an internal error tag (snake_case) into a human-readable phrase.
 * Must stay in sync with errorTags in assessmentBank.js.
 */
function formatErrorType(errorTag) {
  const labels = {
    sign_error:             'sign',
    order_error:            'operation-order',
    pemdas_violation:       'order-of-operations',
    coefficient_confusion:  'coefficient',
    less_than_reversal:     '"less than" translation',
    exponent_ignored:       'exponent',
    combined_unlike_terms:  'unlike-terms combining',
    invisible_one_error:    'invisible-coefficient',
    variable_vs_constant:   'variable vs. constant',
    constant_confusion:     'constant identification',
    expression_confusion:   'expression parsing',
    missing_constant:       'missing-constant',
    unknown_error:          'conceptual',
  };
  return labels[errorTag] || errorTag.replace(/_/g, ' ');
}
