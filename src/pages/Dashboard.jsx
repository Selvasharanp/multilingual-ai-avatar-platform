import React from 'react';
import { Link } from 'react-router-dom';
import { PlusCircle, Activity, Users, Settings, Play } from 'lucide-react';

export default function Dashboard() {
  return (
    <div className="d-flex flex-column flex-md-row min-vh-100 bg-dark-custom text-light-custom">
      {/* Sidebar */}
      <aside className="sidebar-custom p-4 d-flex flex-column" style={{ minWidth: '250px' }}>
        <div className="fs-4 fw-bold text-gradient-custom mb-5">
          AvatarComm
        </div>
        <nav className="d-flex flex-column gap-2 flex-grow-1">
          <Link to="/dashboard" className="d-flex align-items-center gap-3 text-primary bg-primary bg-opacity-10 px-3 py-2 rounded text-decoration-none fw-medium">
            <Activity size={20} /> Dashboard
          </Link>
          <Link to="/create-avatar" className="d-flex align-items-center gap-3 text-secondary px-3 py-2 rounded text-decoration-none custom-hover">
            <PlusCircle size={20} /> Create Avatar
          </Link>
          <Link to="/audiences" className="d-flex align-items-center gap-3 text-secondary px-3 py-2 rounded text-decoration-none custom-hover">
            <Users size={20} /> Audiences
          </Link>
          <Link to="/settings" className="d-flex align-items-center gap-3 text-secondary px-3 py-2 rounded text-decoration-none custom-hover">
            <Settings size={20} /> Settings
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-grow-1 p-4 p-md-5">
        <header className="d-flex justify-content-between align-items-center mb-5">
          <h1 className="fs-2 fw-bold m-0">Welcome back, Leader</h1>
          <Link to="/create-avatar" className="btn btn-primary d-flex align-items-center gap-2 shadow">
            <PlusCircle size={18} /> New Avatar
          </Link>
        </header>

        {/* Stats */}
        <div className="row g-4 mb-5">
          <div className="col-12 col-md-4">
            <div className="card-custom p-4 rounded-4 h-100">
              <p className="text-secondary fw-medium mb-1">Total Interactions</p>
              <p className="fs-2 fw-bold mb-0">12,450</p>
              <p className="text-success small mt-2 mb-0 d-flex align-items-center gap-1">+14% this week</p>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="card-custom p-4 rounded-4 h-100">
              <p className="text-secondary fw-medium mb-1">Active Avatars</p>
              <p className="fs-2 fw-bold mb-0">3</p>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="card-custom p-4 rounded-4 h-100">
              <p className="text-secondary fw-medium mb-1">Languages Spoken</p>
              <p className="fs-2 fw-bold mb-0">8</p>
            </div>
          </div>
        </div>

        {/* Recent Avatars */}
        <h2 className="fs-4 fw-bold mb-4">Your Digital Avatars</h2>
        <div className="row g-4">
          <div className="col-12 col-md-6 col-lg-4">
            <div className="card-custom rounded-4 overflow-hidden h-100 d-flex flex-column">
              <div className="bg-secondary bg-opacity-25 d-flex align-items-center justify-content-center position-relative" style={{ height: '200px' }}>
                <div className="bg-dark text-secondary rounded-circle d-flex align-items-center justify-content-center shadow border border-secondary" style={{ width: '100px', height: '100px' }}>
                  Avatar 1
                </div>
              </div>
              <div className="p-4 d-flex flex-column flex-grow-1">
                <h3 className="fs-5 fw-bold mb-1">Product Launch AI</h3>
                <p className="small text-secondary mb-4">Trained on Product Q3 Docs</p>
                <div className="mt-auto">
                    <Link to="/live/demo-avatar" className="btn btn-outline-light w-100 d-flex align-items-center justify-content-center gap-2">
                        <Play size={16} /> Start Live Session
                    </Link>
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-12 col-md-6 col-lg-4">
            <Link to="/create-avatar" className="text-decoration-none text-secondary">
                <div className="card-custom rounded-4 d-flex flex-column align-items-center justify-content-center h-100" style={{ minHeight: '320px', borderStyle: 'dashed !important' }}>
                <PlusCircle size={48} className="mb-3" />
                <span className="fw-medium fs-5">Create New Avatar</span>
                </div>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
