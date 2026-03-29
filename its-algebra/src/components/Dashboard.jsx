import React, { useState } from 'react';
import { MASTERY_THRESHOLD, REMEDIAL_THRESHOLD, getMasteredCount, getOverallProgress } from '../engine/learnerModel.js';
import { getMostUrgentIntervention } from '../engine/adaptationEngine.js';
import ProgressBar from './ProgressBar.jsx';
import PersonalizationPanel from './PersonalizationPanel.jsx';

const SUBTOPICS = [
  { name: 'Variables & Expressions', nodes: ['K01', 'K02', 'K13'], icon: '📦' },
  { name: 'Evaluating & Simplifying', nodes: ['K03', 'K04', 'K14'], icon: '✨' },
  { name: 'Simplifying & Structure', nodes: ['K05', 'K06', 'K15'], icon: '⚖️' },
  { name: 'Solving Equations', nodes: ['K07', 'K08', 'K09'], icon: '🔑' },
  { name: 'Equations & Word Problems', nodes: ['K10', 'K11', 'K12'], icon: '🕵️' },
];

function getStatusMeta(status, mastery) {
  if (status === 'locked') return { label: 'Locked', color: '#94a3b8', bg: '#f1f5f9', icon: '🔒' };
  if (mastery >= MASTERY_THRESHOLD) return { label: 'Mastered', color: '#10b981', bg: '#ecfdf5', icon: '✅' };
  if (mastery >= REMEDIAL_THRESHOLD) return { label: 'In Progress', color: '#f59e0b', bg: '#fffbeb', icon: '📚' };
  if (mastery > 0) return { label: 'Needs Help', color: '#ef4444', bg: '#fef2f2', icon: '⚠️' };
  return { label: 'Available', color: '#6C63FF', bg: '#f5f3ff', icon: '▶️' };
}

export default function Dashboard({ its }) {
  const { learnerState, KNOWLEDGE_NODES, startLearn, startPractice, resetAll } = its;
  const { nodeStates, totalPoints, streak, longestStreak, flaggedPatterns } = learnerState;

  const [showReset, setShowReset] = useState(false);
  const [expandedSubtopic, setExpandedSubtopic] = useState(0);

  const overallProgress = getOverallProgress(nodeStates);
  const masteredCount = getMasteredCount(nodeStates);
  const urgentIntervention = getMostUrgentIntervention(flaggedPatterns);

  const nextRec = its.getAdaptiveInsights().nextRec;

  return (
    <div className="dashboard">
      {/* ── Welcome Banner ── */}
      <div className="welcome-banner">
        <div className="welcome-text">
          <h1>Welcome to AlgebraQuest! 🚀</h1>
          <p>Your personalised algebra journey — learn, practise, and master at your own pace.</p>
        </div>
        <div className="welcome-stats">
          <div className="stat-chip">
            <span className="stat-num">{masteredCount}</span>
            <span className="stat-lbl">Mastered</span>
          </div>
          <div className="stat-chip">
            <span className="stat-num">{KNOWLEDGE_NODES.length}</span>
            <span className="stat-lbl">Total</span>
          </div>
          <div className="stat-chip">
            <span className="stat-num">🔥 {longestStreak}</span>
            <span className="stat-lbl">Best Streak</span>
          </div>
        </div>
      </div>

      {/* ── Overall Progress ── */}
      <div className="progress-section card">
        <h2>Overall Progress</h2>
        <ProgressBar value={overallProgress} max={1} label={`${Math.round(overallProgress * 100)}% Complete`} />
        <div className="progress-legend">
          <span className="legend-item mastered">✅ Mastered (≥80%)</span>
          <span className="legend-item in-progress">📚 In Progress (40–79%)</span>
          <span className="legend-item remedial">⚠️ Needs Help (&lt;40%)</span>
          <span className="legend-item locked">🔒 Locked</span>
        </div>
      </div>

      {/* ── Adaptive Intervention Banner ── */}
      {urgentIntervention && (
        <PersonalizationPanel intervention={urgentIntervention} />
      )}

      {/* ── Next Recommendation ── */}
      {nextRec && nextRec.action !== 'review' && (
        <div className="recommendation-banner card">
          <div className="rec-icon">💡</div>
          <div className="rec-text">
            <strong>Recommended next:</strong> {nextRec.reason}
          </div>
          {nextRec.targetNode && (
            <button
              className="btn btn-primary btn-sm"
              onClick={() => startLearn(nextRec.targetNode)}
            >
              Go →
            </button>
          )}
        </div>
      )}

      {/* ── Subtopic Sections ── */}
      <div className="subtopics">
        {SUBTOPICS.map((subtopic, sIdx) => {
          const isExpanded = expandedSubtopic === sIdx;
          const subtopicNodes = subtopic.nodes.map((id) => KNOWLEDGE_NODES.find((n) => n.id === id)).filter(Boolean);
          const subtopicMastery = subtopicNodes.reduce((acc, n) => acc + (nodeStates[n.id]?.mastery || 0), 0) / subtopicNodes.length;

          return (
            <div key={subtopic.name} className={`subtopic-section card ${isExpanded ? 'expanded' : ''}`}>
              <button
                className="subtopic-header"
                onClick={() => setExpandedSubtopic(isExpanded ? -1 : sIdx)}
              >
                <span className="subtopic-icon">{subtopic.icon}</span>
                <span className="subtopic-name">{subtopic.name}</span>
                <div className="subtopic-progress">
                  <div className="subtopic-bar">
                    <div
                      className="subtopic-fill"
                      style={{ width: `${Math.round(subtopicMastery * 100)}%` }}
                    />
                  </div>
                  <span className="subtopic-pct">{Math.round(subtopicMastery * 100)}%</span>
                </div>
                <span className="expand-arrow">{isExpanded ? '▲' : '▼'}</span>
              </button>

              {isExpanded && (
                <div className="node-grid">
                  {subtopicNodes.map((node) => {
                    const ns = nodeStates[node.id];
                    const meta = getStatusMeta(ns.status, ns.mastery);
                    const isLocked = ns.status === 'locked';

                    return (
                      <div
                        key={node.id}
                        className={`node-card ${isLocked ? 'locked' : ''} ${ns.mastery >= MASTERY_THRESHOLD ? 'mastered' : ''}`}
                        style={{ borderLeft: `4px solid ${meta.color}`, background: meta.bg }}
                      >
                        <div className="node-header">
                          <span className="node-emoji">{node.emoji}</span>
                          <div className="node-title-block">
                            <span className="node-id">{node.id}</span>
                            <h3 className="node-title">{node.title}</h3>
                          </div>
                          <span className="node-status-badge" style={{ color: meta.color }}>
                            {meta.icon} {meta.label}
                          </span>
                        </div>

                        <ProgressBar
                          value={ns.mastery}
                          max={1}
                          label={`Mastery: ${Math.round(ns.mastery * 100)}%`}
                          color={meta.color}
                          compact
                        />

                        <div className="node-stats">
                          <span title="Attempts">🎯 {ns.attempts}</span>
                          <span title="Time spent">⏱️ {Math.round(ns.timeSpent / 60)}m</span>
                          {ns.maxHintUsed > 0 && <span title="Max hint used">💡 L{ns.maxHintUsed}</span>}
                          {ns.remedialCount > 0 && <span title="Remedial sessions">🔄 {ns.remedialCount}</span>}
                        </div>

                        {!isLocked && (
                          <div className="node-actions">
                            <button
                              className="btn btn-outline btn-sm"
                              onClick={() => startLearn(node.id)}
                            >
                              📖 Learn
                            </button>
                            <button
                              className="btn btn-primary btn-sm"
                              onClick={() => startPractice(node.id)}
                            >
                              ✏️ Practice
                            </button>
                          </div>
                        )}

                        {isLocked && (
                          <div className="locked-message">
                            🔒 Complete prerequisites first
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* ── Points & Gamification ── */}
      <div className="gamification-section card">
        <h2>🏆 Your Achievements</h2>
        <div className="achievement-grid">
          <div className="achievement">
            <span className="ach-icon">⭐</span>
            <span className="ach-val">{totalPoints}</span>
            <span className="ach-lbl">Total XP</span>
          </div>
          <div className="achievement">
            <span className="ach-icon">🔥</span>
            <span className="ach-val">{longestStreak}</span>
            <span className="ach-lbl">Best Streak</span>
          </div>
          <div className="achievement">
            <span className="ach-icon">✅</span>
            <span className="ach-val">{masteredCount}/{KNOWLEDGE_NODES.length}</span>
            <span className="ach-lbl">Mastered</span>
          </div>
          <div className="achievement">
            <span className="ach-icon">🔄</span>
            <span className="ach-val">
              {Object.values(nodeStates).reduce((acc, s) => acc + s.attempts, 0)}
            </span>
            <span className="ach-lbl">Questions</span>
          </div>
        </div>

        {totalPoints >= 100 && (
          <div className="badge-row">
            <span className="badge">🥇 Century Scorer (100+ XP)</span>
          </div>
        )}
        {masteredCount >= 6 && (
          <div className="badge-row">
            <span className="badge">🌟 Half-Way Hero ({masteredCount} mastered)</span>
          </div>
        )}
        {masteredCount === KNOWLEDGE_NODES.length && (
          <div className="badge-row">
            <span className="badge">🏆 Algebra Master — All concepts conquered!</span>
          </div>
        )}
      </div>

      {/* ── Reset ── */}
      <div className="reset-section">
        {!showReset ? (
          <button className="btn btn-ghost btn-sm" onClick={() => setShowReset(true)}>
            Reset Progress
          </button>
        ) : (
          <div className="reset-confirm card">
            <p>This will erase all progress. Are you sure?</p>
            <div className="reset-buttons">
              <button className="btn btn-danger btn-sm" onClick={resetAll}>Yes, reset</button>
              <button className="btn btn-ghost btn-sm" onClick={() => setShowReset(false)}>Cancel</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
