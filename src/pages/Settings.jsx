import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PlusCircle, Activity, Users, Settings, Bell, Lock, Globe2, CreditCard } from 'lucide-react';

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('profile');

  return (
    <div className="d-flex flex-column flex-md-row min-vh-100 bg-dark-custom text-light-custom">
      {/* Sidebar - Reused from Dashboard style */}
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
          <Link to="/audiences" className="d-flex align-items-center gap-3 text-secondary px-3 py-2 rounded text-decoration-none custom-hover">
            <Users size={20} /> Audiences
          </Link>
          <Link to="/settings" className="d-flex align-items-center gap-3 text-primary bg-primary bg-opacity-10 px-3 py-2 rounded text-decoration-none fw-medium">
            <Settings size={20} /> Settings
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-grow-1 p-4 p-md-5 mx-auto" style={{ maxWidth: '1000px', width: '100%' }}>
        <header className="mb-5">
          <h1 className="fs-2 fw-bold mb-2">Platform Settings</h1>
          <p className="text-secondary mb-0">Manage your account, avatar presets, and integration settings.</p>
        </header>

        <div className="row g-5">
          {/* Settings Nav */}
          <div className="col-12 col-md-4 col-lg-3">
            <div className="d-flex flex-column gap-2">
                <button 
                onClick={() => setActiveTab('profile')}
                className={`btn text-start d-flex align-items-center gap-3 py-3 w-100 ${activeTab === 'profile' ? 'btn-secondary text-light fw-medium shadow-sm' : 'btn-outline-secondary text-secondary border-0 custom-hover'}`}
                >
                <Users size={18} /> Account Profile
                </button>
                <button 
                onClick={() => setActiveTab('security')}
                className={`btn text-start d-flex align-items-center gap-3 py-3 w-100 ${activeTab === 'security' ? 'btn-secondary text-light fw-medium shadow-sm' : 'btn-outline-secondary text-secondary border-0 custom-hover'}`}
                >
                <Lock size={18} /> Security
                </button>
                <button 
                onClick={() => setActiveTab('localization')}
                className={`btn text-start d-flex align-items-center gap-3 py-3 w-100 ${activeTab === 'localization' ? 'btn-secondary text-light fw-medium shadow-sm' : 'btn-outline-secondary text-secondary border-0 custom-hover'}`}
                >
                <Globe2 size={18} /> Avatar Defaults
                </button>
                <button 
                onClick={() => setActiveTab('notifications')}
                className={`btn text-start d-flex align-items-center gap-3 py-3 w-100 ${activeTab === 'notifications' ? 'btn-secondary text-light fw-medium shadow-sm' : 'btn-outline-secondary text-secondary border-0 custom-hover'}`}
                >
                <Bell size={18} /> Notifications
                </button>
                <button 
                onClick={() => setActiveTab('billing')}
                className={`btn text-start d-flex align-items-center gap-3 py-3 w-100 ${activeTab === 'billing' ? 'btn-secondary text-light fw-medium shadow-sm' : 'btn-outline-secondary text-secondary border-0 custom-hover'}`}
                >
                <CreditCard size={18} /> Plan & Billing
                </button>
            </div>
          </div>

          {/* Settings Content Area */}
          <div className="col-12 col-md-8 col-lg-9">
            <div className="glass-panel p-4 p-md-5 rounded-4 h-100">
                {activeTab === 'profile' && (
                <div className="fade show">
                    <h2 className="fs-4 fw-semibold mb-4 pb-3 border-bottom border-secondary">Public Profile</h2>
                    
                    <div className="d-flex align-items-center gap-4 mb-5">
                    <div className="bg-secondary bg-opacity-50 text-light fw-bold fs-2 rounded-circle d-flex align-items-center justify-content-center shadow border border-secondary" style={{ width: '96px', height: '96px' }}>
                        JD
                    </div>
                    <div>
                        <button className="btn btn-secondary btn-sm fw-medium mb-2">Change Avatar</button>
                        <p className="small text-secondary mb-0">JPG, GIF or PNG. 5MB max.</p>
                    </div>
                    </div>

                    <div className="row g-4">
                    <div className="col-12 col-md-6">
                        <label className="form-label text-secondary fw-medium small mb-2">First Name</label>
                        <input type="text" defaultValue="John" className="form-control bg-dark border-secondary text-light py-2" />
                    </div>
                    <div className="col-12 col-md-6">
                        <label className="form-label text-secondary fw-medium small mb-2">Last Name</label>
                        <input type="text" defaultValue="Doe" className="form-control bg-dark border-secondary text-light py-2" />
                    </div>
                    <div className="col-12">
                        <label className="form-label text-secondary fw-medium small mb-2">Email Address</label>
                        <input type="email" defaultValue="john.doe@enterprise.com" className="form-control bg-dark border-secondary text-light py-2" />
                    </div>
                    <div className="col-12">
                        <label className="form-label text-secondary fw-medium small mb-2">Organization</label>
                        <input type="text" defaultValue="Enterprise Innovates Ltd." className="form-control bg-dark border-secondary text-light py-2" />
                    </div>
                    </div>

                    <div className="mt-5 pt-4 border-top border-secondary d-flex justify-content-end">
                    <button className="btn btn-primary px-4 py-2 fw-medium shadow">
                        Save Changes
                    </button>
                    </div>
                </div>
                )}

                {activeTab === 'localization' && (
                <div className="fade show">
                    <h2 className="fs-4 fw-semibold mb-4 pb-3 border-bottom border-secondary">Avatar Default Preferences</h2>
                    <p className="text-secondary mb-4">Set the default speaking voice and translation settings for your new avatars.</p>
                    
                    <div className="d-flex flex-column gap-4">
                    <div>
                        <label className="form-label text-secondary fw-medium small mb-2">Default Base Voice Pitch</label>
                        <input type="range" className="form-range" id="pitchRange" min="0" max="100" defaultValue="50" />
                        <div className="d-flex justify-content-between text-secondary small mt-1">
                        <span>Deeper</span>
                        <span>Default</span>
                        <span>Higher</span>
                        </div>
                    </div>
                    
                    <div>
                        <label className="form-label text-secondary fw-medium small mb-2">Auto-Translate to Region</label>
                        <select className="form-select bg-dark border-secondary text-light py-2">
                        <option value="detect">Auto-Detect from IP</option>
                        <option value="en">Force English</option>
                        <option value="es">Force Spanish</option>
                        </select>
                    </div>
                    
                    <div className="form-check d-flex align-items-center gap-2 bg-dark bg-opacity-50 p-3 rounded border border-secondary">
                        <input className="form-check-input mt-0" type="checkbox" id="profanityCheck" defaultChecked style={{ borderColor: '#6c757d', backgroundColor: '#212529' }} />
                        <label className="form-check-label fw-medium text-light m-0 ms-2" htmlFor="profanityCheck">
                        Enable profanity filter on Avatar responses
                        </label>
                    </div>
                    </div>

                    <div className="mt-5 pt-4 border-top border-secondary d-flex justify-content-end">
                    <button className="btn btn-primary px-4 py-2 fw-medium shadow">
                        Update Preferences
                    </button>
                    </div>
                </div>
                )}
                
                {(activeTab !== 'profile' && activeTab !== 'localization') && (
                <div className="py-5 d-flex flex-column align-items-center justify-content-center text-center text-secondary fade show">
                    <Settings size={48} className="mb-4 opacity-50" />
                    <h3 className="fs-5 fw-medium text-light mb-2">Section Under Construction</h3>
                    <p className="mb-0 mx-auto" style={{ maxWidth: '300px' }}>This settings area is not fully implemented in the current prototype build.</p>
                </div>
                )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
