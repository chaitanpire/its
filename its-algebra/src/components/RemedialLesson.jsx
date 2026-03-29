import React, { useState } from 'react';

/**
 * Max times we loop back to the lesson when the retryTask is answered wrong.
 * After this many failed retryTask attempts the learner sees a full worked
 * solution and can then continue — we never leave them permanently blocked.
 */
const MAX_REMEDIAL_LOOPS = 3;

export default function RemedialLesson({ its }) {
  const { currentNodeId, getRemedialContent, getNodeInfo, completeRemedial, goToDashboard } = its;
  const remedial = getRemedialContent(currentNodeId);
  const { node } = getNodeInfo(currentNodeId);

  const [phase, setPhase] = useState('lesson'); // 'lesson' | 'retry' | 'done'
  const [retrySelected, setRetrySelected] = useState(null);
  const [retrySubmitted, setRetrySubmitted] = useState(false);

  // How many times the student has already looped back after a wrong retryTask answer.
  // Starts at 0 on the first showing of this remedial lesson.
  const [loopCount, setLoopCount] = useState(0);

  if (!remedial || !node) {
    completeRemedial();
    return null;
  }

  const isLastLoop = loopCount >= MAX_REMEDIAL_LOOPS - 1;

  const handleRetrySubmit = () => {
    if (!retrySelected) return;
    setRetrySubmitted(true);
  };

  /**
   * Called when the student answered the retryTask INCORRECTLY and we decide
   * whether to loop back to the lesson or show the final worked solution.
   */
  const handleLoopBack = () => {
    // Go back to the lesson with a fresh retry state
    setPhase('lesson');
    setRetrySelected(null);
    setRetrySubmitted(false);
    setLoopCount((c) => c + 1);
  };

  /** Called when the student is ready to return to the practice question. */
  const handleContinue = () => {
    completeRemedial();
  };

  // ── Lesson phase ───────────────────────────────────────────────────────────
  const lessonSubtitle = loopCount === 0
    ? "Let's revisit this concept — a fresh angle makes all the difference!"
    : loopCount < MAX_REMEDIAL_LOOPS - 1
      ? `Let's look at this again — carefully this time. (Review ${loopCount + 1} of ${MAX_REMEDIAL_LOOPS})`
      : `Final review — read through this one more time before we try again.`;

  return (
    <div className="remedial-page">
      {/* ── Header ── */}
      <div
        className="remedial-header"
        style={{ background: node.color + '15', borderBottom: `3px solid ${node.color}` }}
      >
        <div className="remedial-badge" style={{ background: node.color }}>
          {loopCount === 0 ? '🔄 Micro-Lesson' : `🔁 Revisit ${loopCount + 1} of ${MAX_REMEDIAL_LOOPS}`}
        </div>
        <h2>{remedial.title}</h2>
        <p className="remedial-subtitle">{lessonSubtitle}</p>
      </div>

      {/* ── Lesson content ── */}
      {phase === 'lesson' && (
        <div className="remedial-content">
          {/* Story / Context */}
          <div className="remedial-story card" style={{ borderLeft: `4px solid ${node.color}` }}>
            <h3>📖 Let's Think About It Differently</h3>
            {remedial.story.split('\n').filter(Boolean).map((line, i) => (
              <p key={i}>{line.trim()}</p>
            ))}
          </div>

          {/* Core Concept */}
          <div className="remedial-concept card">
            <h3>💡 The Key Idea</h3>
            <div className="concept-box">
              {remedial.concept.split('\n').filter(Boolean).map((line, i) => (
                <p key={i} className="concept-line">{line.trim()}</p>
              ))}
            </div>
          </div>

          {/* Analogy */}
          <div className="remedial-analogy card" style={{ borderLeft: `4px solid ${node.color}` }}>
            <h3>🎨 Remember It This Way</h3>
            <p className="analogy-text">{remedial.analogy}</p>
          </div>

          <button
            className="btn btn-primary btn-lg"
            onClick={() => setPhase('retry')}
          >
            {loopCount === 0 ? "I'm Ready to Try Again! →" : "Try the Check Again →"}
          </button>
        </div>
      )}

      {/* ── Retry phase ── */}
      {phase === 'retry' && (
        <div className="remedial-retry card">
          <h3>✏️ Quick Check</h3>
          <p className="retry-intro">Let's confirm the concept has clicked:</p>

          <div className="retry-question">
            <p className="retry-stem">{remedial.retryTask.stem}</p>
            <p className="retry-hint">💭 {remedial.retryTask.hint}</p>
          </div>

          <div className="options-grid">
            {remedial.retryTask.options.map((opt) => {
              let cls = 'option';
              if (retrySubmitted) {
                if (opt === remedial.retryTask.correct) cls = 'option correct';
                else if (opt === retrySelected) cls = 'option incorrect';
                else cls = 'option dimmed';
              } else if (retrySelected === opt) {
                cls = 'option selected';
              }
              return (
                <button
                  key={opt}
                  className={cls}
                  onClick={() => !retrySubmitted && setRetrySelected(opt)}
                  disabled={retrySubmitted}
                >
                  {opt}
                  {retrySubmitted && opt === remedial.retryTask.correct && (
                    <span className="opt-icon correct-icon">✓</span>
                  )}
                </button>
              );
            })}
          </div>

          {!retrySubmitted ? (
            <button
              className="btn btn-primary"
              disabled={!retrySelected}
              onClick={handleRetrySubmit}
            >
              Check Answer
            </button>
          ) : retrySelected === remedial.retryTask.correct ? (
            /* ── Correct retryTask answer ── */
            <div className="retry-feedback">
              <div className="retry-success">
                <p>🎉 Correct! Great — the concept has clicked. Let's continue with the practice!</p>
              </div>
              <button className="btn btn-primary btn-lg" onClick={handleContinue}>
                Continue Practice →
              </button>
            </div>
          ) : !isLastLoop ? (
            /* ── Wrong retryTask answer — loops available — go back to lesson ── */
            <div className="retry-feedback">
              <div className="retry-fail">
                <p>
                  The correct answer is <strong>{remedial.retryTask.correct}</strong>.
                  That's okay — let's revisit the lesson one more time.
                </p>
              </div>
              <button className="btn btn-primary btn-lg" onClick={handleLoopBack}>
                🔁 Let's Revisit This Concept Again
              </button>
            </div>
          ) : (
            /* ── Wrong retryTask answer — max loops reached — show worked solution ── */
            <div className="retry-feedback">
              <div className="retry-fail">
                <p>
                  The correct answer is <strong>{remedial.retryTask.correct}</strong>.
                  You've reviewed this concept {MAX_REMEDIAL_LOOPS} times — that's real persistence!
                </p>
              </div>

              {/* Worked solution: re-show the key concept prominently */}
              <div className="remedial-worked-solution card" style={{ borderLeft: `4px solid ${node.color}`, marginTop: '1rem' }}>
                <h4>📝 Worked Solution</h4>
                <p className="worked-hint">{remedial.retryTask.hint}</p>
                <div className="concept-box">
                  {remedial.concept.split('\n').filter(Boolean).map((line, i) => (
                    <p key={i} className="concept-line">{line.trim()}</p>
                  ))}
                </div>
                <p className="worked-answer">
                  Correct answer: <strong>{remedial.retryTask.correct}</strong>
                </p>
              </div>

              <p className="remedial-encourage">
                It's okay — take a moment to study the solution above, then continue. You'll get another chance to practice this concept.
              </p>
              <button className="btn btn-primary btn-lg" onClick={handleContinue}>
                I've Reviewed — Let's Continue →
              </button>
            </div>
          )}

          {/* Always allow going back to the lesson while in retry phase */}
          {!retrySubmitted && (
            <button
              className="btn btn-ghost btn-sm"
              onClick={() => setPhase('lesson')}
            >
              ← Back to Lesson
            </button>
          )}
        </div>
      )}

      <button className="btn btn-ghost btn-sm remedial-exit" onClick={goToDashboard}>
        Return to Dashboard
      </button>
    </div>
  );
}
