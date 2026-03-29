import React, { useState, useEffect } from 'react';

/**
 * Fisher-Yates shuffle — returns a NEW array with elements in random order.
 * The original array is never mutated.
 * Since question.correct is stored as a VALUE string (not an index),
 * the correct-answer reference needs no adjustment after shuffling.
 */
function getDifficultyLabel(level) {
  if (level === 1) return '🔹 Easy';
  if (level === 2) return '🔸 Medium';
  return '🔴 Hard';
}

function getDifficultyClass(level) {
  if (level === 1) return 'easy';
  if (level === 2) return 'medium';
  return 'hard';
}

function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
import { MASTERY_THRESHOLD } from '../engine/learnerModel.js';
import ProgressBar from './ProgressBar.jsx';
import HintPanel from './HintPanel.jsx';
import AdaptiveInsightPanel from './AdaptiveInsightPanel.jsx';
import { analyzeAndAdapt } from '../adaptiveEngine/index.js';

export default function PracticePage({ its }) {
  const {
    currentView,
    currentNodeId,
    currentQuestions,
    currentQuestionIndex,
    currentHintLevel,
    lastFeedback,
    getNodeInfo,
    getCurrentQuestion,
    submitAnswer,
    requestHint,
    getHintText,
    nextQuestion,
    startLearn,
    goToDashboard,
    learnerState,
    adaptiveDifficulty,
    difficultyMessage,
    clearDifficultyMessage,
    SESSION_QUESTION_LIMIT,
    hasNextQuestion,
  } = its;

  const { node, state } = getNodeInfo(currentNodeId);
  const question = getCurrentQuestion();
  const [selectedOption, setSelectedOption] = useState(null);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [showHints, setShowHints] = useState(false);
  const [timerSeconds, setTimerSeconds] = useState(0);
  const [adaptiveDecision, setAdaptiveDecision] = useState(null);
  // When retry_without_hints fires, disable hints for the next question
  const [hintsDisabled, setHintsDisabled] = useState(false);
  // Shuffled display order of the current question's options.
  // Lazy initialiser runs on every mount (including remount after remedial),
  // so options are re-shuffled automatically when returning from RemedialLesson.
  const [shuffledOptions, setShuffledOptions] = useState(() =>
    shuffleArray(currentQuestions[currentQuestionIndex]?.options ?? [])
  );

  // Timer for time-spent tracking
  useEffect(() => {
    const interval = setInterval(() => setTimerSeconds((t) => t + 1), 1000);
    return () => clearInterval(interval);
  }, [currentQuestionIndex]);

  // Reset on new question and re-shuffle options so the order is unpredictable
  useEffect(() => {
    setSelectedOption(null);
    setHasSubmitted(false);
    setShowHints(false);
    setTimerSeconds(0);
    setAdaptiveDecision(null);
    // Re-shuffle whenever the question changes
    const q = currentQuestions[currentQuestionIndex];
    if (q?.options) setShuffledOptions(shuffleArray(q.options));
    // hintsDisabled persists across the next question (set by retry_without_hints),
    // then clears itself after one question via the flag below
  }, [currentQuestionIndex, currentNodeId]);

  if (currentView === 'practice_complete' || !node || !question) {
    // Practice complete view
    return <PracticeComplete its={its} node={node} state={state} />;
  }

  const handleSubmit = () => {
    if (!selectedOption || hasSubmitted) return;
    const feedback = submitAnswer(selectedOption);
    setHasSubmitted(true);

    // DEBUG — remove before production
    const allQ = its.ASSESSMENT_BANK?.[currentNodeId] || [];
    console.debug('[PracticePage] answer submitted', {
      currentQuestionIndex,
      totalInQueue:        currentQuestions.length,
      sessionLimit:        SESSION_QUESTION_LIMIT,
      hasNextQuestion,
      bankSize:            allQ.length,
      selectedDifficulty:  adaptiveDifficulty,
      usedQuestionIds:     currentQuestions.map((q) => q.id),
    });

    // Run the adaptive engine pipeline after every submission
    const result = analyzeAndAdapt({
      questionId:     question.id,
      conceptId:      currentNodeId,
      isCorrect:      feedback.isCorrect,
      timeTaken:      timerSeconds,
      hintsUsed:      currentHintLevel,
      attempts:       1,
      selectedOption,
      correctOption:  question.correct,
      errorType:      feedback.errorTag || null,
    });

    setAdaptiveDecision(result.decision);

    // If the engine recommends disabling hints next round, set the flag
    if (result.decision.nextAction === 'retry_without_hints') {
      setHintsDisabled(true);
    }
  };

  const handleNext = () => {
    if (!hasSubmitted) return;

    // DEBUG — remove before production
    console.debug('[PracticePage] advancing to next question', {
      currentQuestionIndex,
      hasNextQuestion,
      selectedDifficulty: adaptiveDifficulty,
      usedQuestionIds:    currentQuestions.map((q) => q.id),
    });

    nextQuestion(lastFeedback?.shouldTriggerRemedial);
    setSelectedOption(null);
    setHasSubmitted(false);
    setShowHints(false);
    // Clear hints-disabled after one question (one-shot effect)
    setHintsDisabled(false);
  };

  const handleHint = () => {
    setShowHints(true);
    requestHint();
  };

  const mastery = state?.mastery || 0;
  const progress = (currentQuestionIndex / SESSION_QUESTION_LIMIT) * 100;

  const optionClass = (opt) => {
    if (!hasSubmitted) {
      return selectedOption === opt ? 'option selected' : 'option';
    }
    if (opt === question.correct) return 'option correct';
    if (opt === selectedOption && opt !== question.correct) return 'option incorrect';
    return 'option dimmed';
  };

  return (
    <div className="practice-page">
      {/* ── Nav ── */}
      <div className="page-nav">
        <button className="btn btn-ghost btn-sm" onClick={goToDashboard}>← Dashboard</button>
        <div className="node-breadcrumb">
          <span className="node-pill" style={{ background: node.color + '22', color: node.color }}>
            {node.id}
          </span>
          <span>{node.title}</span>
        </div>
        <button className="btn btn-outline btn-sm" onClick={() => startLearn(currentNodeId)}>
          📖 Review
        </button>
      </div>

      {/* ── Progress Bar ── */}
      <div className="practice-progress">
        <div className="progress-row">
          <span className="q-counter">Question {currentQuestionIndex + 1} of {SESSION_QUESTION_LIMIT}</span>
          <span className="difficulty-badge">
            {'⭐'.repeat(question.difficulty)}
          </span>
        </div>
        <div className="progress-track">
          <div className="progress-fill" style={{ width: `${progress}%`, background: node.color }} />
        </div>
      </div>

      {/* ── Mastery Indicator ── */}
      <div className="mastery-row">
        <span>Mastery:</span>
        <ProgressBar value={mastery} max={1} color={node.color} compact />
        <span className="mastery-pct">{Math.round(mastery * 100)}%</span>
        {mastery >= MASTERY_THRESHOLD && <span className="mastery-star">⭐ Mastered!</span>}
      </div>

      {/* ── Difficulty Change Toast ── */}
      {difficultyMessage && (
        <div className={`difficulty-toast difficulty-toast--${getDifficultyClass(adaptiveDifficulty)}`}>
          <span>{difficultyMessage}</span>
          <button className="difficulty-toast-close" onClick={clearDifficultyMessage}>✕</button>
        </div>
      )}

      {/* ── Question Card ── */}
      <div className="question-card card">
        <div className={`difficulty-badge difficulty-badge--${getDifficultyClass(question.difficulty)}`}>
          {getDifficultyLabel(question.difficulty)}
        </div>
        <div className="question-stem">{question.stem}</div>

        <div className="options-grid">
          {/* shuffledOptions gives a fresh random order every question/remount.
              question.correct is a value string so it stays correct regardless of order. */}
          {shuffledOptions.map((opt) => (
            <button
              key={opt}
              className={optionClass(opt)}
              onClick={() => !hasSubmitted && setSelectedOption(opt)}
              disabled={hasSubmitted}
            >
              <span className="opt-text">{opt}</span>
              {hasSubmitted && opt === question.correct && <span className="opt-icon correct-icon">✓</span>}
              {hasSubmitted && opt === selectedOption && opt !== question.correct && (
                <span className="opt-icon wrong-icon">✗</span>
              )}
            </button>
          ))}
        </div>

        {/* ── Hint Section ── */}
        {!hasSubmitted && (
          <div className="hint-controls">
            {hintsDisabled ? (
              <p className="hint-disabled-notice">💪 No hints this round — you've got this!</p>
            ) : !showHints ? (
              <button className="btn btn-hint" onClick={handleHint}>
                💡 Need a Hint?
              </button>
            ) : (
              <HintPanel
                questionId={question.id}
                currentLevel={currentHintLevel}
                getHintText={getHintText}
                requestHint={handleHint}
              />
            )}
          </div>
        )}

        {/* ── Submit / Next ── */}
        <div className="question-actions">
          {!hasSubmitted ? (
            <button
              className="btn btn-primary btn-lg"
              onClick={handleSubmit}
              disabled={!selectedOption}
            >
              Submit Answer
            </button>
          ) : (
            <button className="btn btn-primary btn-lg" onClick={handleNext}>
              {lastFeedback?.shouldTriggerRemedial
                ? '📚 Show Me How →'
                : hasNextQuestion
                  ? 'Next Question →'
                  : '🏁 Finish Practice'}
            </button>
          )}
        </div>
      </div>

      {/* ── Feedback Panel ── */}
      {hasSubmitted && lastFeedback && (
        <FeedbackPanel
          feedback={lastFeedback}
          nodeColor={node.color}
        />
      )}

      {/* ── Adaptive Engine Insight ── */}
      {hasSubmitted && (
        <AdaptiveInsightPanel
          decision={adaptiveDecision}
          onDismiss={() => setAdaptiveDecision(null)}
        />
      )}
    </div>
  );
}

// ─────────────────────────────────────────────
// Feedback Panel
// ─────────────────────────────────────────────
function FeedbackPanel({ feedback, nodeColor }) {
  const { isCorrect, explanation, message, pointsEarned, masteryDelta, masteryAchieved } = feedback;

  return (
    <div className={`feedback-panel ${isCorrect ? 'feedback-correct' : 'feedback-wrong'}`}>
      <div className="feedback-header">
        <span className="feedback-icon">{isCorrect ? '🎉' : '🤔'}</span>
        <div>
          <p className="feedback-message">{message}</p>
          {pointsEarned > 0 && (
            <span className="points-earned">+{pointsEarned} XP</span>
          )}
        </div>
      </div>

      <div className="feedback-explanation">
        <strong>Explanation:</strong>
        <p>{explanation}</p>
      </div>

      {masteryDelta > 0 && (
        <div className="mastery-delta positive">
          📈 Mastery increased by {Math.round(masteryDelta * 100)}%
        </div>
      )}
      {masteryDelta < 0 && (
        <div className="mastery-delta negative">
          📉 Mastery decreased by {Math.round(Math.abs(masteryDelta) * 100)}%
        </div>
      )}
      {masteryAchieved && (
        <div className="mastery-achieved">
          🌟 Concept Mastered! Next concept unlocked!
        </div>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────
// Practice Complete Screen
// ─────────────────────────────────────────────
function PracticeComplete({ its, node, state }) {
  const { goToDashboard, startPractice, startLearn, currentNodeId, learnerState } = its;

  if (!node) {
    return (
      <div className="practice-complete card">
        <h2>Practice Complete!</h2>
        <button className="btn btn-primary" onClick={goToDashboard}>← Dashboard</button>
      </div>
    );
  }

  const mastery = state?.mastery || 0;
  const isMastered = mastery >= MASTERY_THRESHOLD;

  return (
    <div className="practice-complete">
      <div className="complete-card card">
        <div className="complete-icon">{isMastered ? '🏆' : '📚'}</div>
        <h2>{isMastered ? 'Concept Mastered!' : 'Practice Complete!'}</h2>
        <p>
          {isMastered
            ? `Brilliant work on ${node.title}! You've crossed the mastery threshold.`
            : `Good effort on ${node.title}! Keep practising to reach mastery.`}
        </p>

        <div className="complete-stats">
          <div className="complete-stat">
            <span className="cs-val">{Math.round(mastery * 100)}%</span>
            <span className="cs-lbl">Mastery</span>
          </div>
          <div className="complete-stat">
            <span className="cs-val">{state?.correctCount || 0}</span>
            <span className="cs-lbl">Correct</span>
          </div>
          <div className="complete-stat">
            <span className="cs-val">{state?.attempts || 0}</span>
            <span className="cs-lbl">Attempts</span>
          </div>
        </div>

        <ProgressBar
          value={mastery}
          max={1}
          label={`${Math.round(mastery * 100)}% Mastery`}
          color={node.color}
        />

        <div className="complete-actions">
          <button className="btn btn-outline" onClick={() => startPractice(currentNodeId)}>
            🔄 Practice Again
          </button>
          <button className="btn btn-outline" onClick={() => startLearn(currentNodeId)}>
            📖 Review Lesson
          </button>
          <button className="btn btn-primary" onClick={goToDashboard}>
            🏠 Dashboard
          </button>
        </div>
      </div>
    </div>
  );
}
