/**
 * useLearnerState.js
 * Central React hook managing all learner state with localStorage persistence.
 * Provides actions for: answering questions, requesting hints, completing remedial,
 * navigating nodes, and reading adaptive insights.
 */

import { useState, useCallback, useEffect } from 'react';
import {
  buildInitialLearnerState,
  processAttempt,
  resolveNodeStatus,
  MASTERY_THRESHOLD,
} from '../engine/learnerModel.js';
import { clearAdaptiveData } from '../adaptiveEngine/index.js';
import {
  classifyLearner,
  getAdaptiveDifficulty,
  getPersonalizedMessage,
  getMostUrgentIntervention,
  getNextRecommendation,
} from '../engine/adaptationEngine.js';
import { KNOWLEDGE_NODES } from '../data/knowledgeNodes.js';
import { ASSESSMENT_BANK } from '../data/assessmentBank.js';
import { HINT_SCAFFOLDS } from '../data/hintScaffolds.js';
import { REMEDIAL_CONTENT } from '../data/remedialContent.js';

const STORAGE_KEY = 'aq_learner_state_v2';
const SESSION_QUESTION_LIMIT = 10;

// ─────────────────────────────────────────────
// Adaptive difficulty helpers
// ─────────────────────────────────────────────
function updateDifficultyLevel(currentDifficulty, recentPerformance) {
  if (recentPerformance.length === 0) return currentDifficulty;
  const correct = recentPerformance.filter((x) => x).length;
  const accuracy = correct / recentPerformance.length;
  if (accuracy >= 0.8) return Math.min(3, currentDifficulty + 1);
  if (accuracy < 0.5) return Math.max(1, currentDifficulty - 1);
  return currentDifficulty;
}

function pickAdaptiveQuestion(questions, targetDifficulty, usedIds) {
  // Exact difficulty, excluding used
  let pool = questions.filter(
    (q) => q.difficulty === targetDifficulty && !usedIds.has(q.id)
  );
  // Fallback: adjacent difficulty
  if (pool.length === 0) {
    pool = questions.filter(
      (q) => Math.abs(q.difficulty - targetDifficulty) === 1 && !usedIds.has(q.id)
    );
  }
  // Final fallback: any unused
  if (pool.length === 0) {
    pool = questions.filter((q) => !usedIds.has(q.id));
  }
  if (pool.length === 0) return null;
  return pool[Math.floor(Math.random() * pool.length)];
}

// ─────────────────────────────────────────────
// Persistence helpers
// ─────────────────────────────────────────────
function loadFromStorage() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

function saveToStorage(state) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // silent fail (private browsing, storage full, etc.)
  }
}

// ─────────────────────────────────────────────
// Hook
// ─────────────────────────────────────────────
export function useLearnerState() {
  const [learnerState, setLearnerState] = useState(() => {
    return loadFromStorage() || buildInitialLearnerState();
  });

  // Current navigation state
  const [currentNodeId, setCurrentNodeId] = useState(null);
  const [currentView, setCurrentView] = useState('dashboard'); // 'dashboard' | 'learn' | 'practice' | 'remedial'
  const [currentQuestions, setCurrentQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentHintLevel, setCurrentHintLevel] = useState(0);
  const [questionStartTime, setQuestionStartTime] = useState(null);
  const [lastFeedback, setLastFeedback] = useState(null);
  const [showRemedial, setShowRemedial] = useState(false);
  const [sessionLog, setSessionLog] = useState([]);

  // Adaptive difficulty tracking (per practice session)
  const [adaptiveDifficulty, setAdaptiveDifficulty] = useState(2);
  const [recentPerformance, setRecentPerformance] = useState([]);
  const [sessionUsedIds, setSessionUsedIds] = useState(() => new Set());
  const [difficultyMessage, setDifficultyMessage] = useState(null);

  // Persist state to localStorage on every update
  useEffect(() => {
    saveToStorage(learnerState);
  }, [learnerState]);

  // ─────────────────────────────────────────────
  // Navigation
  // ─────────────────────────────────────────────
  const navigateTo = useCallback((view, nodeId = null) => {
    setCurrentView(view);
    if (nodeId) setCurrentNodeId(nodeId);
    setLastFeedback(null);
  }, []);

  const startLearn = useCallback((nodeId) => {
    setCurrentNodeId(nodeId);
    setCurrentView('learn');
    setLastFeedback(null);
  }, []);

  const startPractice = useCallback((nodeId) => {
    const allQuestions = ASSESSMENT_BANK[nodeId] || [];

    // Determine starting difficulty from learner profile
    const profile = classifyLearner(learnerState, nodeId);
    const initialDiff = Math.min(3, Math.max(1,
      getAdaptiveDifficulty(profile, learnerState.nodeStates[nodeId]?.mastery || 0)
    ));

    // Pick first question adaptively
    const firstQ = pickAdaptiveQuestion(allQuestions, initialDiff, new Set());
    const firstQuestions = firstQ ? [firstQ] : allQuestions.slice(0, 1);
    const initialUsedIds = new Set(firstQuestions.map((q) => q.id));

    setCurrentNodeId(nodeId);
    setCurrentQuestions(firstQuestions);
    setCurrentQuestionIndex(0);
    setCurrentHintLevel(0);
    setCurrentView('practice');
    setShowRemedial(false);
    setLastFeedback(null);
    setQuestionStartTime(Date.now());
    setAdaptiveDifficulty(initialDiff);
    setRecentPerformance([]);
    setSessionUsedIds(initialUsedIds);
    setDifficultyMessage(null);
    setSessionLog([]);
  }, [learnerState]);

  const goToDashboard = useCallback(() => {
    setCurrentView('dashboard');
    setCurrentNodeId(null);
    setLastFeedback(null);
  }, []);

  // ─────────────────────────────────────────────
  // Answering Questions
  // ─────────────────────────────────────────────
  const submitAnswer = useCallback((selectedOption) => {
    const question = currentQuestions[currentQuestionIndex];
    if (!question || !currentNodeId) return null;

    const isCorrect = selectedOption === question.correct;
    const timeSpent = questionStartTime ? Math.round((Date.now() - questionStartTime) / 1000) : 10;
    const errorTag = !isCorrect ? (question.errorTags?.[selectedOption] || 'unknown_error') : null;
    const explanation = question.explanations?.[selectedOption] || question.explanations?.correct;

    // Determine hint level used for scoring
    const hintLevelUsed = currentHintLevel;

    const { newState, pointsEarned, masteryDelta, shouldTriggerRemedial } = processAttempt(
      learnerState,
      currentNodeId,
      isCorrect,
      hintLevelUsed,
      errorTag,
      timeSpent
    );

    setLearnerState(newState);

    const profile = classifyLearner(newState, currentNodeId);
    const feedbackEvent = isCorrect
      ? hintLevelUsed > 0 ? 'correct_with_hint' : 'correct_first'
      : 'incorrect_encourage';
    const message = getPersonalizedMessage(feedbackEvent, profile, newState.streak);

    const feedback = {
      isCorrect,
      selectedOption,
      correctAnswer: question.correct,
      explanation,
      message,
      pointsEarned,
      masteryDelta,
      errorTag,
      shouldTriggerRemedial,
      hintLevelUsed,
      newMastery: newState.nodeStates[currentNodeId].mastery,
    };

    setLastFeedback(feedback);
    setSessionLog((prev) => [...prev, { ...feedback, questionId: question.id, nodeId: currentNodeId }]);

    // If mastery achieved, generate congratulations
    if (newState.nodeStates[currentNodeId].mastery >= MASTERY_THRESHOLD &&
        learnerState.nodeStates[currentNodeId].mastery < MASTERY_THRESHOLD) {
      feedback.masteryAchieved = true;
      feedback.message = getPersonalizedMessage('mastery_achieved', profile, newState.streak);
    }

    return feedback;
  }, [currentQuestions, currentQuestionIndex, currentNodeId, currentHintLevel, questionStartTime, learnerState]);

  // ─────────────────────────────────────────────
  // Hint System
  // ─────────────────────────────────────────────
  const requestHint = useCallback(() => {
    const newLevel = Math.min(currentHintLevel + 1, 3);
    setCurrentHintLevel(newLevel);
    return newLevel;
  }, [currentHintLevel]);

  const getHintText = useCallback((level) => {
    const question = currentQuestions[currentQuestionIndex];
    if (!question) return null;
    const hints = HINT_SCAFFOLDS[question.id];
    if (!hints) return level === 1 ? (question.hint || null) : null;
    return hints[`L${level}`] || null;
  }, [currentQuestions, currentQuestionIndex]);

  // ─────────────────────────────────────────────
  // Move to Next Question
  // ─────────────────────────────────────────────
  const nextQuestion = useCallback((triggerRemedial = false) => {
    if (triggerRemedial) {
      setShowRemedial(true);
      return;
    }

    // ── Adaptive: update performance and recompute difficulty ──
    const isCorrect = lastFeedback?.isCorrect ?? false;
    const updatedRecentPerf = [...recentPerformance, isCorrect].slice(-5);
    const newDifficulty = updateDifficultyLevel(adaptiveDifficulty, updatedRecentPerf);

    let msg = null;
    if (newDifficulty > adaptiveDifficulty) {
      msg = newDifficulty === 3
        ? 'Level up! Hard questions unlocked 🔥'
        : 'Nice work! Moving up to Medium 📈';
    } else if (newDifficulty < adaptiveDifficulty) {
      msg = newDifficulty === 1
        ? "Let's build confidence — back to Easy 💪"
        : "Let's practice a bit more on Medium 🔄";
    }

    // ── Session limit check ──
    const nextIndex = currentQuestionIndex + 1;
    if (nextIndex >= SESSION_QUESTION_LIMIT) {
      setCurrentView('practice_complete');
      return;
    }

    // ── Pick next question adaptively ──
    const allQ = ASSESSMENT_BANK[currentNodeId] || [];
    const updatedUsedIds = new Set(sessionUsedIds);
    const currentQId = currentQuestions[currentQuestionIndex]?.id;
    if (currentQId) updatedUsedIds.add(currentQId);

    const nextQ = pickAdaptiveQuestion(allQ, newDifficulty, updatedUsedIds);
    if (!nextQ) {
      // Bank exhausted — end practice
      setCurrentView('practice_complete');
      return;
    }

    setAdaptiveDifficulty(newDifficulty);
    setRecentPerformance(updatedRecentPerf);
    setSessionUsedIds(updatedUsedIds);
    setDifficultyMessage(msg);
    setCurrentQuestions((prev) => [...prev, nextQ]);
    setCurrentQuestionIndex(nextIndex);
    setCurrentHintLevel(0);
    setLastFeedback(null);
    setQuestionStartTime(Date.now());
  }, [
    lastFeedback, recentPerformance, adaptiveDifficulty,
    currentQuestionIndex, currentNodeId, sessionUsedIds, currentQuestions,
  ]);

  // ─────────────────────────────────────────────
  // Remedial Complete
  // ─────────────────────────────────────────────
  const completeRemedial = useCallback(() => {
    setShowRemedial(false);
    setCurrentHintLevel(0);
    setLastFeedback(null);
    setQuestionStartTime(Date.now());
    // Don't advance question — learner retries the same question
  }, []);

  // ─────────────────────────────────────────────
  // Reset (new learner)
  // ─────────────────────────────────────────────
  const resetAll = useCallback(() => {
    const fresh = buildInitialLearnerState();
    setLearnerState(fresh);
    saveToStorage(fresh);
    clearAdaptiveData();
    setCurrentView('dashboard');
    setCurrentNodeId(null);
    setSessionLog([]);
  }, []);

  // ─────────────────────────────────────────────
  // Computed / Adaptive Insights
  // ─────────────────────────────────────────────
  const getLearnerProfile = useCallback((nodeId) => {
    return classifyLearner(learnerState, nodeId || currentNodeId);
  }, [learnerState, currentNodeId]);

  const getAdaptiveInsights = useCallback(() => {
    const urgentIntervention = getMostUrgentIntervention(learnerState.flaggedPatterns);
    const nextRec = getNextRecommendation(learnerState);
    return { urgentIntervention, nextRec };
  }, [learnerState]);

  const getNodeInfo = useCallback((nodeId) => {
    const node = KNOWLEDGE_NODES.find((n) => n.id === nodeId);
    const state = learnerState.nodeStates[nodeId];
    return { node, state };
  }, [learnerState]);

  const getRemedialContent = useCallback((nodeId) => {
    return REMEDIAL_CONTENT[nodeId] || null;
  }, []);

  const getCurrentQuestion = useCallback(() => {
    return currentQuestions[currentQuestionIndex] || null;
  }, [currentQuestions, currentQuestionIndex]);

  const isNodeAccessible = useCallback((nodeId) => {
    const status = resolveNodeStatus(nodeId, learnerState.nodeStates);
    return status !== 'locked';
  }, [learnerState]);

  // ─────────────────────────────────────────────
  // Lookahead: is there a next question available?
  // The adaptive queue grows lazily (one question appended per nextQuestion call),
  // so currentQuestions.length === currentQuestionIndex + 1 at render time —
  // making the old `currentQuestionIndex + 1 >= currentQuestions.length` check
  // always true. This lookahead checks the actual bank instead.
  // ─────────────────────────────────────────────
  const hasNextQuestion = (() => {
    if (!currentNodeId) return false;
    if (currentQuestionIndex + 1 >= SESSION_QUESTION_LIMIT) return false;
    const allQ = ASSESSMENT_BANK[currentNodeId] || [];
    // Treat the current question as used for the purposes of this check
    const usedWithCurrent = new Set(sessionUsedIds);
    const currentQId = currentQuestions[currentQuestionIndex]?.id;
    if (currentQId) usedWithCurrent.add(currentQId);
    return allQ.some((q) => !usedWithCurrent.has(q.id));
  })();

  // ─────────────────────────────────────────────
  // Return API
  // ─────────────────────────────────────────────
  return {
    // State
    learnerState,
    currentNodeId,
    currentView,
    currentQuestions,
    currentQuestionIndex,
    currentHintLevel,
    lastFeedback,
    showRemedial,
    sessionLog,

    // Navigation
    startLearn,
    startPractice,
    goToDashboard,
    navigateTo,

    // Actions
    submitAnswer,
    requestHint,
    getHintText,
    nextQuestion,
    completeRemedial,
    resetAll,

    // Queries
    getLearnerProfile,
    getAdaptiveInsights,
    getNodeInfo,
    getRemedialContent,
    getCurrentQuestion,
    isNodeAccessible,

    // Adaptive difficulty
    adaptiveDifficulty,
    difficultyMessage,
    clearDifficultyMessage: () => setDifficultyMessage(null),
    SESSION_QUESTION_LIMIT,
    hasNextQuestion,

    // Data references
    KNOWLEDGE_NODES,
    ASSESSMENT_BANK,
  };
}

export default useLearnerState;
