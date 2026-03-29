import React from 'react';
import { useLearnerState } from './hooks/useLearnerState.js';
import Dashboard from './components/Dashboard.jsx';
import LearningPage from './components/LearningPage.jsx';
import PracticePage from './components/PracticePage.jsx';
import RemedialLesson from './components/RemedialLesson.jsx';

export default function App() {
  const its = useLearnerState();
  const { currentView, currentNodeId, showRemedial } = its;

  const renderView = () => {
    if (showRemedial && currentNodeId) {
      return <RemedialLesson its={its} />;
    }
    switch (currentView) {
      case 'learn':
        return <LearningPage its={its} />;
      case 'practice':
      case 'practice_complete':
        return <PracticePage its={its} />;
      default:
        return <Dashboard its={its} />;
    }
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <div className="header-left">
          <button
            className="logo-btn"
            onClick={its.goToDashboard}
            aria-label="Go to home"
          >
            <span className="logo-icon">📐</span>
            <span className="logo-text">AlgebraQuest</span>
          </button>
        </div>
        <div className="header-right">
          <div className="points-badge">
            <span className="points-icon">⭐</span>
            <span className="points-value">{its.learnerState.totalPoints}</span>
          </div>
          {its.learnerState.streak > 1 && (
            <div className="streak-badge">
              <span>🔥 {its.learnerState.streak}</span>
            </div>
          )}
        </div>
      </header>

      <main className="app-main">
        {renderView()}
      </main>
    </div>
  );
}
