/**
 * mergeApi.js
 * Builds, validates, and sends the session-end payload to the host Merge API.
 *
 * student_id and session_id are injected by the Merge portal via URL params.
 * App.jsx reads them on mount and saves them to sessionStorage.
 */

import { ASSESSMENT_BANK } from './data/assessmentBank.js';
import { HINT_SCAFFOLDS } from './data/hintScaffolds.js';
import { KNOWLEDGE_NODES } from './data/knowledgeNodes.js';

export const CHAPTER_ID = 'grade7_simple_equations_and_algebraic_expressions';
const MERGE_API_URL = 'http://100.90.57.38:8200/merge/interactions';

// ─────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────
function slugify(str) {
  return str.toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_+|_+$/g, '');
}

/** Count questions in this node's bank that have at least one hint available. */
function countHintsEmbedded(nodeId) {
  const questions = ASSESSMENT_BANK[nodeId] || [];
  return questions.filter((q) => HINT_SCAFFOLDS[q.id] || q.hint).length;
}

/** Build subtopic_metrics by grouping sessionLog entries by node subtopic. */
function buildSubtopicMetrics(learnerState, sessionLog) {
  const subtopicMap = {};

  for (const entry of sessionLog) {
    const node = KNOWLEDGE_NODES.find((n) => n.id === entry.nodeId);
    if (!node) continue;
    const key = node.subtopic;
    if (!subtopicMap[key]) {
      subtopicMap[key] = {
        subtopic_id: `${CHAPTER_ID}__${slugify(node.subtopic)}`,
        questions_attempted: 0,
        correct_answers: 0,
        wrong_answers: 0,
        hints_used: 0,
        retry_count: 0,
        time_spent_seconds: 0,
      };
    }
    subtopicMap[key].questions_attempted += 1;
    if (entry.isCorrect) {
      subtopicMap[key].correct_answers += 1;
    } else {
      subtopicMap[key].wrong_answers += 1;
    }
    if (entry.hintLevelUsed > 0) {
      subtopicMap[key].hints_used += 1;
    }
  }

  // Fill retry_count and time_spent_seconds from persistent nodeStates
  for (const [subtopic, metrics] of Object.entries(subtopicMap)) {
    const nodes = KNOWLEDGE_NODES.filter((n) => n.subtopic === subtopic);
    metrics.retry_count = nodes.reduce(
      (sum, n) => sum + (learnerState.nodeStates[n.id]?.remedialCount || 0),
      0
    );
    metrics.time_spent_seconds = nodes.reduce(
      (sum, n) => sum + (learnerState.nodeStates[n.id]?.timeSpent || 0),
      0
    );
  }

  return Object.values(subtopicMap);
}

// ─────────────────────────────────────────────
// Build
// ─────────────────────────────────────────────
/**
 * Constructs the full payload from live learner state and the current session log.
 *
 * @param {object} learnerState   - from useLearnerState
 * @param {string} nodeId         - the node being practiced
 * @param {string} sessionStatus  - 'completed' | 'exited_midway'
 * @param {Array}  sessionLog     - per-session answer log from useLearnerState
 */
export function buildPayload(learnerState, nodeId, sessionStatus, sessionLog) {
  const studentId = sessionStorage.getItem('student_id') || '';
  const sessionId = sessionStorage.getItem('session_id') || '';

  const entries = sessionLog.filter((e) => e.nodeId === nodeId);
  const questionsAttempted = entries.length;
  const correctAnswers = entries.filter((e) => e.isCorrect).length;
  const wrongAnswers = questionsAttempted - correctAnswers;
  const hintsUsed = entries.filter((e) => e.hintLevelUsed > 0).length;
  const totalHintsEmbedded = countHintsEmbedded(nodeId);

  const ns = learnerState.nodeStates[nodeId] || {};

  return {
    schema_version: '1.0',
    student_id: studentId,
    session_id: sessionId,
    chapter_id: CHAPTER_ID,
    timestamp: new Date().toISOString(),
    session_status: sessionStatus,
    correct_answers: correctAnswers,
    wrong_answers: wrongAnswers,
    questions_attempted: questionsAttempted,
    total_questions: 10,
    hints_used: hintsUsed,
    total_hints_embedded: totalHintsEmbedded,
    retry_count: ns.remedialCount || 0,
    time_spent_seconds: ns.timeSpent || 0,
    topic_completion_ratio: Math.max(0, Math.min(1, ns.mastery || 0)),
    subtopic_metrics: buildSubtopicMetrics(learnerState, sessionLog),
  };
}

// ─────────────────────────────────────────────
// Validate
// ─────────────────────────────────────────────
/**
 * Runs all slide-13 validation rules.
 * Returns an array of error strings (empty = valid).
 */
export function validatePayload(p) {
  const errors = [];
  if (p.correct_answers + p.wrong_answers > p.questions_attempted)
    errors.push('correct_answers + wrong_answers exceeds questions_attempted');
  if (p.questions_attempted > p.total_questions)
    errors.push('questions_attempted exceeds total_questions');
  if (p.hints_used > p.total_hints_embedded)
    errors.push('hints_used exceeds total_hints_embedded');
  if (p.topic_completion_ratio < 0 || p.topic_completion_ratio > 1)
    errors.push('topic_completion_ratio is outside [0, 1]');
  if (!['completed', 'exited_midway'].includes(p.session_status))
    errors.push('session_status must be "completed" or "exited_midway"');
  if (!p.chapter_id)
    errors.push('chapter_id is missing');
  if (!p.timestamp || isNaN(Date.parse(p.timestamp)))
    errors.push('timestamp is not a valid ISO datetime string');
  return errors;
}

// ─────────────────────────────────────────────
// Send
// ─────────────────────────────────────────────
/**
 * Builds, validates, and POSTs the session payload.
 * Logs errors to the console — never throws so UI flow is unblocked.
 */
export async function sendSessionToMerge(learnerState, nodeId, sessionStatus, sessionLog) {
  if (!nodeId) return;
  if (sessionLog.filter((e) => e.nodeId === nodeId).length === 0) return;

  const payload = buildPayload(learnerState, nodeId, sessionStatus, sessionLog);
  const errors = validatePayload(payload);

  if (errors.length > 0) {
    console.warn('[MergeAPI] Payload validation failed — not sending:', errors, payload);
    return;
  }

  try {
    const response = await fetch(MERGE_API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    if (!response.ok) {
      const message = await response.text();
      console.error(`[MergeAPI] POST failed: ${response.status} ${message}`);
    } else {
      console.log('[MergeAPI] Session payload sent successfully', payload);
    }
  } catch (err) {
    console.error('[MergeAPI] Network error — could not reach Merge API:', err);
  }
}
