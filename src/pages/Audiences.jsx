import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PlusCircle, Activity, Users, Settings, Search, Filter } from 'lucide-react';

export default function Audiences() {
  const [searchTerm, setSearchTerm] = useState('');

  const audiences = [
    { id: 1, name: 'Global Sales Team', members: 1240, location: 'Worldwide', lastActive: '2 hours ago' },
    { id: 2, name: 'Q3 Product Launch Attendees', members: 850, location: 'North America', lastActive: '1 day ago' },
    { id: 3, name: 'Customer Support EMEA', members: 320, location: 'Europe', lastActive: '5 hours ago' },
    { id: 4, name: 'Beta Testers V2', members: 150, location: 'Mixed', lastActive: '3 days ago' },
  ];

  return (
    <div className="d-flex flex-column flex-md-row min-vh-100 bg-dark-custom text-light-custom">
      {/* Sidebar */}
      <aside className="sidebar-custom p-4 d-flex flex-column flex-shrink-0" style={{ minWidth: '250px' }}>
        <div className="fs-4 fw-bold text-gradient-custom mb-5">
          AvatarComm
        </div>
        <nav className="d-flex flex-column gap-2 flex-grow-1">
          <Link to="/dashboard" className="d-flex align-items-center gap-3 text-secondary px-3 py-2 rounded text-decoration-none custom-hover">
            <Activity size={20} /> Dashboard
          </Link>
          <Link to="/create-avatar" className="d-flex align-items-center gap-3 text-secondary px-3 py-2 rounded text-decoration-none custom-hover">
            <PlusCircle size={20} /> Create Avatar
          </Link>
          <Link to="/audiences" className="d-flex align-items-center gap-3 text-primary bg-primary bg-opacity-10 px-3 py-2 rounded text-decoration-none fw-medium">
            <Users size={20} /> Audiences
          </Link>
          <Link to="/settings" className="d-flex align-items-center gap-3 text-secondary px-3 py-2 rounded text-decoration-none custom-hover">
            <Settings size={20} /> Settings
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-grow-1 p-4 p-md-5 overflow-auto">
        <header className="d-flex justify-content-between align-items-center mb-5">
          <div>
            <h1 className="fs-2 fw-bold mb-2">Audience Management</h1>
            <p className="text-secondary mb-0">Manage and segment the global groups your Avatar interacts with.</p>
          </div>
          <button className="btn btn-primary d-flex align-items-center gap-2 shadow">
            <PlusCircle size={18} /> Import Audience
          </button>
        </header>

        {/* Filters & Search */}
        <div className="d-flex flex-column flex-md-row gap-3 mb-5">
          <div className="flex-grow-1 position-relative">
            <Search className="position-absolute top-50 start-0 translate-middle-y ms-3 text-secondary" size={20} />
            <input 
              type="text" 
              placeholder="Search audiences..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="form-control bg-dark border-secondary text-light ps-5 py-2 shadow-none"
            />
          </div>
          <button className="btn btn-outline-secondary d-flex align-items-center gap-2">
            <Filter size={18} /> Filters
          </button>
        </div>

        {/* Audience List */}
        <div className="card-custom rounded-4 overflow-hidden shadow">
          <div className="row g-0 p-3 border-bottom border-secondary text-secondary fw-medium small px-4 d-none d-md-flex">
            <div className="col-5">Audience Segment</div>
            <div className="col-2">Members</div>
            <div className="col-3">Primary Location</div>
            <div className="col-2 text-end">Last Interaction</div>
          </div>
          
          <div className="list-group list-group-flush bg-transparent">
            {audiences.map((aud) => (
              <div key={aud.id} className="list-group-item bg-transparent text-light border-secondary p-4 d-flex flex-column flex-md-row align-items-md-center gap-3 custom-hover">
                <div className="col-md-5 d-flex align-items-center gap-3">
                  <div className="bg-primary bg-opacity-25 rounded-circle d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
                    <Users size={18} className="text-primary" />
                  </div>
                  <span className="fw-semibold">{aud.name}</span>
                </div>
                <div className="col-md-2 text-secondary">
                  <span className="d-md-none fw-bold me-2">Members:</span>
                  {aud.members.toLocaleString()}
                </div>
                <div className="col-md-3 d-flex align-items-center gap-2 text-secondary">
                  <span className="d-md-none fw-bold me-2">Location:</span>
                  <span className="bg-success rounded-circle" style={{ width: '6px', height: '6px' }}></span>
                  {aud.location}
                </div>
                <div className="col-md-2 text-md-end text-secondary small">
                   <span className="d-md-none fw-bold me-2 text-light">Last Active:</span>
                  {aud.lastActive}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
