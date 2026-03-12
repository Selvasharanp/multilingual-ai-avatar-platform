import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import AvatarCreation from './pages/AvatarCreation';
import LiveInteraction from './pages/LiveInteraction';
import Audiences from './pages/Audiences';
import SettingsPage from './pages/Settings';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-900 text-slate-50 font-sans">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Navigate to="/" replace />} />
          <Route path="/create-avatar" element={<AvatarCreation />} />
          <Route path="/live/:avatarId" element={<LiveInteraction />} />
          <Route path="/audiences" element={<Audiences />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
