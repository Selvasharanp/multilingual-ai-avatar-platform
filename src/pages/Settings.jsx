import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PlusCircle, Activity, Users, Settings, Bell, Lock, Globe2, CreditCard } from 'lucide-react';

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('profile');

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col md:flex-row">
      {/* Sidebar - Reused from Dashboard style */}
      <aside className="w-full md:w-64 border-b md:border-b-0 md:border-r border-slate-800 p-6 flex flex-col shrink-0">
        <div className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500 mb-10">
          AvatarComm
        </div>
        <nav className="space-y-4 flex-grow">
          <Link to="/dashboard" className="flex items-center gap-3 text-slate-400 hover:text-white px-4 py-3 rounded-xl transition-colors">
            <Activity size={20} /> Dashboard
          </Link>
          <Link to="/create-avatar" className="flex items-center gap-3 text-slate-400 hover:text-white px-4 py-3 rounded-xl transition-colors">
            <PlusCircle size={20} /> Create Avatar
          </Link>
          <Link to="/audiences" className="flex items-center gap-3 text-slate-400 hover:text-white px-4 py-3 rounded-xl transition-colors">
            <Users size={20} /> Audiences
          </Link>
          <Link to="/settings" className="flex items-center gap-3 text-blue-400 bg-blue-500/10 px-4 py-3 rounded-xl font-medium">
            <Settings size={20} /> Settings
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-grow p-8 max-w-5xl">
        <header className="mb-10">
          <h1 className="text-3xl font-bold mb-2">Platform Settings</h1>
          <p className="text-slate-400">Manage your account, avatar presets, and integration settings.</p>
        </header>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Settings Nav */}
          <div className="w-full md:w-64 space-y-2">
            <button 
              onClick={() => setActiveTab('profile')}
              className={`w-full text-left px-4 py-3 rounded-xl flex items-center gap-3 transition-colors ${activeTab === 'profile' ? 'bg-slate-800 text-white font-medium shadow-sm' : 'text-slate-400 hover:bg-slate-800/50 hover:text-white'}`}
            >
              <Users size={18} /> Account Profile
            </button>
            <button 
              onClick={() => setActiveTab('security')}
              className={`w-full text-left px-4 py-3 rounded-xl flex items-center gap-3 transition-colors ${activeTab === 'security' ? 'bg-slate-800 text-white font-medium shadow-sm' : 'text-slate-400 hover:bg-slate-800/50 hover:text-white'}`}
            >
              <Lock size={18} /> Security
            </button>
            <button 
              onClick={() => setActiveTab('localization')}
              className={`w-full text-left px-4 py-3 rounded-xl flex items-center gap-3 transition-colors ${activeTab === 'localization' ? 'bg-slate-800 text-white font-medium shadow-sm' : 'text-slate-400 hover:bg-slate-800/50 hover:text-white'}`}
            >
              <Globe2 size={18} /> Avatar Defaults
            </button>
            <button 
              onClick={() => setActiveTab('notifications')}
              className={`w-full text-left px-4 py-3 rounded-xl flex items-center gap-3 transition-colors ${activeTab === 'notifications' ? 'bg-slate-800 text-white font-medium shadow-sm' : 'text-slate-400 hover:bg-slate-800/50 hover:text-white'}`}
            >
              <Bell size={18} /> Notifications
            </button>
            <button 
              onClick={() => setActiveTab('billing')}
              className={`w-full text-left px-4 py-3 rounded-xl flex items-center gap-3 transition-colors ${activeTab === 'billing' ? 'bg-slate-800 text-white font-medium shadow-sm' : 'text-slate-400 hover:bg-slate-800/50 hover:text-white'}`}
            >
              <CreditCard size={18} /> Plan & Billing
            </button>
          </div>

          {/* Settings Content Area */}
          <div className="flex-grow bg-slate-800/30 border border-slate-700/50 rounded-2xl p-8 backdrop-blur-sm">
            {activeTab === 'profile' && (
              <div className="space-y-6 animate-in fade-in zoom-in-95 duration-200">
                <h2 className="text-xl font-semibold mb-6 pb-4 border-b border-slate-700/50">Public Profile</h2>
                
                <div className="flex items-center gap-6 mb-8">
                  <div className="w-24 h-24 rounded-full bg-slate-700 flex items-center justify-center text-2xl font-bold border-4 border-slate-800 shadow-xl">
                    JD
                  </div>
                  <div>
                    <button className="bg-slate-700 hover:bg-slate-600 px-4 py-2 rounded-lg text-sm font-medium transition-colors mb-2">Change Avatar</button>
                    <p className="text-sm text-slate-400">JPG, GIF or PNG. 5MB max.</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">First Name</label>
                    <input type="text" defaultValue="John" className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 focus:outline-none focus:border-blue-500 transition-colors" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Last Name</label>
                    <input type="text" defaultValue="Doe" className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 focus:outline-none focus:border-blue-500 transition-colors" />
                  </div>
                  <div className="col-span-1 md:col-span-2">
                    <label className="block text-sm font-medium text-slate-300 mb-2">Email Address</label>
                    <input type="email" defaultValue="john.doe@enterprise.com" className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 focus:outline-none focus:border-blue-500 transition-colors" />
                  </div>
                  <div className="col-span-1 md:col-span-2">
                    <label className="block text-sm font-medium text-slate-300 mb-2">Organization</label>
                    <input type="text" defaultValue="Enterprise Innovates Ltd." className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 focus:outline-none focus:border-blue-500 transition-colors" />
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-700/50 flex justify-end">
                  <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2.5 rounded-xl font-medium transition-all shadow-lg shadow-blue-500/20">
                    Save Changes
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'localization' && (
              <div className="space-y-6 animate-in fade-in zoom-in-95 duration-200">
                <h2 className="text-xl font-semibold mb-6 pb-4 border-b border-slate-700/50">Avatar Default Preferences</h2>
                <p className="text-slate-400 mb-6">Set the default speaking voice and translation settings for your new avatars.</p>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Default Base Voice Pitch</label>
                    <input type="range" className="w-full accent-blue-500" min="0" max="100" defaultValue="50" />
                    <div className="flex justify-between text-xs text-slate-500 mt-2">
                      <span>Deeper</span>
                      <span>Default</span>
                      <span>Higher</span>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Auto-Translate to Region</label>
                    <select className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors text-slate-200">
                       <option value="detect">Auto-Detect from IP</option>
                       <option value="en">Force English</option>
                       <option value="es">Force Spanish</option>
                    </select>
                  </div>
                  
                  <div className="flex items-center gap-4 bg-slate-900/50 p-4 rounded-xl border border-slate-700">
                    <input type="checkbox" id="profanity" defaultChecked className="w-5 h-5 rounded bg-slate-800 border-slate-600 text-blue-500 focus:ring-blue-500" />
                    <label htmlFor="profanity" className="font-medium text-slate-300">Enable profanity filter on Avatar responses</label>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-700/50 flex justify-end">
                  <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2.5 rounded-xl font-medium transition-all shadow-lg shadow-blue-500/20">
                    Update Preferences
                  </button>
                </div>
              </div>
            )}
            
            {(activeTab !== 'profile' && activeTab !== 'localization') && (
              <div className="py-20 flex flex-col items-center justify-center text-slate-500 animate-in fade-in zoom-in-90">
                 <Settings size={48} className="mb-4 opacity-50" />
                 <h3 className="text-xl font-medium mb-2 text-slate-300">Section Under Construction</h3>
                 <p className="text-center max-w-sm">This settings area is not fully implemented in the current prototype build.</p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
