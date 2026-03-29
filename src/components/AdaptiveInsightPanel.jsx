/**
 * AdaptiveInsightPanel.jsx
 *
 * Renders the adaptive engine's decision as a contextual insight panel
 * below the existing FeedbackPanel in PracticePage.
 *
 * Visual contract:
 *   - 'high' urgency   → bold bordered card, always visible until dismissed
 *   - 'medium' urgency → standard card, always visible
 *   - 'low' urgency    → shown only on 'increase_difficulty' (celebratory)
 *   - 'continue'       → renders nothing (no noise when nothing is needed)
 *
 * Each action type maps to a distinct visual treatment and icon.
 *
 * Props:
 *   decision  — the decision object from analyzeAndAdapt()
 *   onDismiss — callback when the learner closes the panel
 */

import React from 'react';

// ─────────────────────────────────────────────
// Action display configuration
// ─────────────────────────────────────────────
const ACTION_CONFIG = {
  micro_lesson: {
    icon:       '🔬',
    label:      'Misconception Detected',
    colorVar:   '--danger',
    color:      '#ef4444',
    bgColor:    '#fef2f2',
  },
  show_conceptual_prompt: {
    icon:       '🐢',
    label:      'Slow Down',
    colorVar:   '--warning',
    color:      '#f59e0b',
    bgColor:    '#fffbeb',
  },
  simplify_explanation: {
    icon:       '🗺️',
    label:      'Let\'s Try a Different Approach',
    colorVar:   '--warning',
    color:      '#f59e0b',
    bgColor:    '#fffbeb',
  },
  guided_solution: {
    icon:       '👣',
    label:      'Let\'s Walk Through This Together',
    colorVar:   '--danger',
    color:      '#ef4444',
    bgColor:    '#fef2f2',
  },
  retry_without_hints: {
    icon:       '💪',
    label:      'Independence Challenge',
    colorVar:   '--primary',
    color:      '#6C63FF',
    bgColor:    '#f0effe',
  },
  increase_difficulty: {
    icon:       '🚀',
    label:      'Ready for a Challenge!',
    colorVar:   '--success',
    color:      '#10b981',
    bgColor:    '#f0fdf4',
  },
};

// ─────────────────────────────────────────────
// Sub-components
// ─────────────────────────────────────────────

/**
 * Metric bar — a small labelled progress bar for one metric.
 */
function MetricBar({ label, value, min = 0, max = 1, color }) {
  const pct = Math.round(((value - min) / (max - min)) * 100);
  const displayPct = Math.max(0, Math.min(100, pct));
  return (
    <div className="ai-metric-row">
      <span className="ai-metric-label">{label}</span>
      <div className="ai-metric-track">
        <div
          className="ai-metric-fill"
          style={{ width: `${displayPct}%`, background: color }}
        />
      </div>
      <span className="ai-metric-value">{displayPct}%</span>
    </div>
  );
}

/**
 * Compact diagnostics section (collapsed by default).
 */
function DiagnosticsSection({ diagnostics, accentColor }) {
  const [open, setOpen] = React.useState(false);

  // Map efficiency [-1,1] → [0,1] for the bar
  const efficiencyPct = (diagnostics.learningEfficiency + 1) / 2;

  return (
    <div className="ai-diagnostics">
      <button
        className="ai-diag-toggle"
        onClick={() => setOpen((o) => !o)}
        style={{ color: accentColor }}
      >
        {open ? '▲ Hide metrics' : '▼ Show behavioral metrics'}
      </button>

      {open && (
        <div className="ai-diag-body">
          <MetricBar
            label="Confidence"
            value={diagnostics.confidenceScore}
            color={accentColor}
          />
          <MetricBar
            label="Engagement"
            value={diagnostics.engagementLevel}
            color={accentColor}
          />
          <MetricBar
            label="Learning trend"
            value={efficiencyPct}
            color={accentColor}
          />
          <MetricBar
            label="Misconception risk"
            value={diagnostics.misconceptionScore}
            color="#ef4444"
          />
          {diagnostics.dominantError && (
            <p className="ai-diag-error-tag">
              Top error type: <strong>{diagnostics.dominantError.replace(/_/g, ' ')}</strong>
              {diagnostics.isMisconception && ' ⚠️ misconception'}
            </p>
          )}
        </div>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────
// Main component
// ─────────────────────────────────────────────

export default function AdaptiveInsightPanel({ decision, onDismiss }) {
  // Don't render for normal continuation
  if (!decision || decision.nextAction === 'continue') return null;

  const config = ACTION_CONFIG[decision.nextAction];
  if (!config) return null;

  // 'low' urgency actions only render for celebratory moments
  if (decision.urgency === 'low' && decision.nextAction !== 'increase_difficulty') return null;

  const { icon, label, color, bgColor } = config;
  const isHighUrgency = decision.urgency === 'high';

  return (
    <div
      className={`adaptive-insight-panel ${isHighUrgency ? 'aip-urgent' : ''}`}
      style={{ background: bgColor, borderLeftColor: color }}
    >
      {/* ── Header ── */}
      <div className="aip-header">
        <span className="aip-icon">{icon}</span>
        <div className="aip-header-text">
          <span className="aip-label" style={{ color }}>{label}</span>
          <p className="aip-message">{decision.message}</p>
        </div>
        {onDismiss && (
          <button
            className="btn btn-ghost btn-sm aip-dismiss"
            onClick={onDismiss}
            aria-label="Dismiss insight"
          >
            ✕
          </button>
        )}
      </div>

      {/* ── Action-specific body ── */}
      {decision.nextAction === 'show_conceptual_prompt' &&
        decision.recommendation?.prompt && (
          <div className="aip-prompt-box" style={{ borderColor: color }}>
            <strong>Before you retry:</strong>
            <p>{decision.recommendation.prompt}</p>
          </div>
        )}

      {decision.nextAction === 'retry_without_hints' && (
        <p className="aip-sub-note">
          Hint button will be disabled on your next question.
        </p>
      )}

      {decision.nextAction === 'increase_difficulty' && (
        <p className="aip-sub-note">
          Next question will be more challenging — you've earned it!
        </p>
      )}

      {/* ── Behavioral metrics (collapsible) ── */}
      {decision.diagnostics && (
        <DiagnosticsSection
          diagnostics={decision.diagnostics}
          accentColor={color}
        />
      )}
    </div>
  );
}
