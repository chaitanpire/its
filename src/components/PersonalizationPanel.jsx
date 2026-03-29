import React, { useState } from 'react';

export default function PersonalizationPanel({ intervention }) {
  const [dismissed, setDismissed] = useState(false);

  if (!intervention || dismissed) return null;

  return (
    <div
      className="personalization-banner card"
      style={{ borderLeft: `5px solid ${intervention.colour || '#f59e0b'}` }}
    >
      <div className="pers-header">
        <span className="pers-icon">🎯</span>
        <div>
          <h3 className="pers-title">{intervention.title}</h3>
          <p className="pers-message">{intervention.message}</p>
        </div>
        <button
          className="btn btn-ghost btn-sm dismiss-btn"
          onClick={() => setDismissed(true)}
          aria-label="Dismiss"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
