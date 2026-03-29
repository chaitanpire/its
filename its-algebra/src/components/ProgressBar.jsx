import React from 'react';

export default function ProgressBar({
  value,
  max = 1,
  label,
  color = '#6C63FF',
  compact = false,
}) {
  const pct = Math.min(100, Math.max(0, (value / max) * 100));

  const fillColor = pct >= 80 ? '#10b981' : pct >= 40 ? '#f59e0b' : pct > 0 ? '#ef4444' : '#e2e8f0';

  return (
    <div className={`progress-bar-wrap ${compact ? 'compact' : ''}`}>
      {label && !compact && <span className="progress-label">{label}</span>}
      <div className="progress-track-bar">
        <div
          className="progress-fill-bar"
          style={{
            width: `${pct}%`,
            background: color || fillColor,
            transition: 'width 0.5s ease',
          }}
        />
      </div>
      {compact && label && <span className="progress-label-compact">{label}</span>}
    </div>
  );
}
