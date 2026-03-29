import React, { useState } from 'react';

export default function LearningPage({ its }) {
  const { currentNodeId, getNodeInfo, startPractice, goToDashboard } = its;
  const { node, state } = getNodeInfo(currentNodeId);

  const [activeSection, setActiveSection] = useState('story');
  const [exampleIdx, setExampleIdx] = useState(0);

  if (!node) return null;

  const sections = ['story', 'concepts', 'examples', 'mistakes', 'analogy'];
  const sectionLabels = {
    story: '📖 Story',
    concepts: '💡 Concepts',
    examples: '🔢 Examples',
    mistakes: '⚠️ Common Mistakes',
    analogy: '🎨 Analogy',
  };

  return (
    <div className="learning-page">
      {/* ── Top Nav ── */}
      <div className="page-nav">
        <button className="btn btn-ghost btn-sm" onClick={goToDashboard}>← Dashboard</button>
        <div className="node-breadcrumb">
          <span className="node-pill" style={{ background: node.color + '22', color: node.color }}>
            {node.id}
          </span>
          <span>{node.title}</span>
        </div>
        <button className="btn btn-primary btn-sm" onClick={() => startPractice(currentNodeId)}>
          Practice →
        </button>
      </div>

      {/* ── Header ── */}
      <div className="learning-header" style={{ borderBottom: `4px solid ${node.color}` }}>
        <span className="learning-emoji">{node.emoji}</span>
        <div>
          <p className="subtopic-label">{node.subtopic}</p>
          <h1 className="learning-title">{node.title}</h1>
        </div>
      </div>

      {/* ── Connection to Prior Knowledge ── */}
      {node.connectionToPrior && (
        <div className="connection-banner">
          <span className="conn-icon">🔗</span>
          <p>{node.connectionToPrior}</p>
        </div>
      )}

      {/* ── Section Tabs ── */}
      <div className="section-tabs">
        {sections.map((s) => (
          <button
            key={s}
            className={`tab-btn ${activeSection === s ? 'active' : ''}`}
            onClick={() => setActiveSection(s)}
            style={activeSection === s ? { borderBottom: `3px solid ${node.color}`, color: node.color } : {}}
          >
            {sectionLabels[s]}
          </button>
        ))}
      </div>

      {/* ── Section Content ── */}
      <div className="section-content">
        {/* STORY */}
        {activeSection === 'story' && (
          <div className="story-section">
            <div className="story-card" style={{ borderLeft: `5px solid ${node.color}` }}>
              <div className="story-header">
                <span className="story-icon">📖</span>
                <h2>The Story</h2>
              </div>
              <div className="story-text">
                {node.storyHook.split('\n').filter(Boolean).map((line, i) => (
                  <p key={i}>{line.trim()}</p>
                ))}
              </div>
              <div className="story-cta">
                <p>Now let's understand the concept more precisely →</p>
                <button
                  className="btn btn-primary"
                  onClick={() => setActiveSection('concepts')}
                >
                  Continue to Concepts 💡
                </button>
              </div>
            </div>
          </div>
        )}

        {/* CONCEPTS */}
        {activeSection === 'concepts' && (
          <div className="concepts-section">
            {node.conceptExplanation.map((concept, idx) => (
              <div key={idx} className="concept-card" style={{ borderTop: `3px solid ${node.color}` }}>
                <h3 className="concept-title">
                  <span className="concept-num" style={{ background: node.color }}>
                    {idx + 1}
                  </span>
                  {concept.point}
                </h3>
                <div className="concept-body">
                  {concept.detail.split('\n').filter(Boolean).map((line, i) => (
                    <p key={i}>{line.trim()}</p>
                  ))}
                </div>
              </div>
            ))}
            <div className="section-nav">
              <button className="btn btn-outline" onClick={() => setActiveSection('story')}>← Story</button>
              <button className="btn btn-primary" onClick={() => setActiveSection('examples')}>Worked Examples →</button>
            </div>
          </div>
        )}

        {/* WORKED EXAMPLES */}
        {activeSection === 'examples' && (
          <div className="examples-section">
            <div className="example-nav-top">
              <span>Example {exampleIdx + 1} of {node.workedExamples.length}</span>
              <div className="example-dots">
                {node.workedExamples.map((_, i) => (
                  <button
                    key={i}
                    className={`dot ${i === exampleIdx ? 'active' : ''}`}
                    onClick={() => setExampleIdx(i)}
                    style={i === exampleIdx ? { background: node.color } : {}}
                  />
                ))}
              </div>
            </div>

            <ExampleCard example={node.workedExamples[exampleIdx]} color={node.color} />

            <div className="example-nav-btns">
              <button
                className="btn btn-outline"
                disabled={exampleIdx === 0}
                onClick={() => setExampleIdx((i) => i - 1)}
              >
                ← Previous
              </button>
              {exampleIdx < node.workedExamples.length - 1 ? (
                <button
                  className="btn btn-primary"
                  onClick={() => setExampleIdx((i) => i + 1)}
                >
                  Next Example →
                </button>
              ) : (
                <button
                  className="btn btn-primary"
                  onClick={() => setActiveSection('mistakes')}
                >
                  Common Mistakes →
                </button>
              )}
            </div>
          </div>
        )}

        {/* COMMON MISTAKES */}
        {activeSection === 'mistakes' && (
          <div className="mistakes-section">
            <h2>⚠️ Common Mistakes & Why They Happen</h2>
            <p className="mistakes-intro">
              Understanding WHY mistakes happen helps you avoid them. These are the most common errors for this concept:
            </p>
            {node.commonMistakes.map((m, idx) => (
              <div key={idx} className="mistake-card">
                <div className="mistake-header">
                  <span className="mistake-icon">❌</span>
                  <h3>{m.mistake}</h3>
                </div>
                <div className="mistake-example">
                  <strong>Example of the mistake:</strong>
                  <code>{m.example}</code>
                </div>
                <div className="mistake-why">
                  <strong>Why this happens:</strong>
                  <p>{m.why}</p>
                </div>
                <div className="mistake-fix">
                  <span className="fix-icon">✅</span>
                  <p><strong>Fix:</strong> {m.fix}</p>
                </div>
              </div>
            ))}
            <div className="section-nav">
              <button className="btn btn-outline" onClick={() => setActiveSection('examples')}>← Examples</button>
              <button className="btn btn-primary" onClick={() => setActiveSection('analogy')}>Visual Analogy →</button>
            </div>
          </div>
        )}

        {/* ANALOGY */}
        {activeSection === 'analogy' && (
          <div className="analogy-section">
            <div className="analogy-card" style={{ borderLeft: `5px solid ${node.color}` }}>
              <h2>🎨 Visual Analogy</h2>
              <div className="analogy-text">
                {node.visualAnalogy.split('\n').filter(Boolean).map((line, i) => (
                  <p key={i}>{line.trim()}</p>
                ))}
              </div>
            </div>

            <div className="ready-card">
              <h2>Ready to Test Yourself? ✏️</h2>
              <p>You've gone through the story, concepts, examples, and analogies. Time to practise!</p>
              <button
                className="btn btn-primary btn-lg"
                onClick={() => startPractice(currentNodeId)}
              >
                🚀 Start Practice
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function ExampleCard({ example, color }) {
  const [revealedSteps, setRevealedSteps] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const reveal = () => {
    if (revealedSteps < example.steps.length) {
      setRevealedSteps((r) => r + 1);
    } else {
      setShowAnswer(true);
    }
  };

  return (
    <div className="example-card" style={{ border: `2px solid ${color}33` }}>
      <div className="example-problem" style={{ background: color + '11' }}>
        <strong>Problem:</strong> {example.problem}
      </div>

      <div className="example-steps">
        <h4>Solution — step by step:</h4>
        {example.steps.slice(0, revealedSteps).map((step, i) => (
          <div key={i} className="step" style={{ borderLeft: `3px solid ${color}` }}>
            <span className="step-num" style={{ background: color }}>Step {i + 1}</span>
            <span className="step-text">{step}</span>
          </div>
        ))}
      </div>

      {showAnswer && (
        <div className="example-answer" style={{ background: color + '22', border: `2px solid ${color}` }}>
          <strong>✅ Answer:</strong> {example.answer}
        </div>
      )}

      {!showAnswer && (
        <button className="btn btn-outline reveal-btn" onClick={reveal}>
          {revealedSteps < example.steps.length
            ? `Reveal Step ${revealedSteps + 1} →`
            : 'Show Answer ✓'}
        </button>
      )}

      {(revealedSteps > 0 || showAnswer) && (
        <button
          className="btn btn-ghost btn-sm"
          onClick={() => { setRevealedSteps(0); setShowAnswer(false); }}
        >
          ↺ Restart Example
        </button>
      )}
    </div>
  );
}
