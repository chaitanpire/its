import React from 'react';

const HINT_LABELS = {
  1: { label: 'Conceptual Hint', icon: '🧠', desc: 'What concept applies here?' },
  2: { label: 'Procedural Hint', icon: '📋', desc: 'What steps should I take?' },
  3: { label: 'Worked Example', icon: '✏️', desc: 'Show me how to do it' },
};

export default function HintPanel({ questionId, currentLevel, getHintText, requestHint }) {
  const hints = [];
  for (let i = 1; i <= currentLevel; i++) {
    hints.push({ level: i, text: getHintText(i) });
  }

  return (
    <div className="hint-panel">
      <div className="hint-panel-header">
        <span>💡 Hints</span>
        <div className="hint-levels">
          {[1, 2, 3].map((lvl) => (
            <span
              key={lvl}
              className={`hint-level-dot ${lvl <= currentLevel ? 'used' : ''}`}
              title={HINT_LABELS[lvl].label}
            />
          ))}
        </div>
      </div>

      <div className="hint-list">
        {hints.map(({ level, text }) => (
          <div key={level} className={`hint-item hint-l${level}`}>
            <div className="hint-meta">
              <span className="hint-icon">{HINT_LABELS[level].icon}</span>
              <span className="hint-label">{HINT_LABELS[level].label}</span>
            </div>
            <p className="hint-text">{text}</p>
          </div>
        ))}
      </div>

      {currentLevel < 3 && (
        <button className="btn btn-hint-more" onClick={requestHint}>
          {currentLevel === 0
            ? '💡 Show Hint (Level 1)'
            : `Show More Help (Level ${currentLevel + 1})`}
        </button>
      )}

      {currentLevel >= 3 && (
        <p className="hint-max-notice">All hints revealed. Try solving now — you've got this!</p>
      )}
    </div>
  );
}
