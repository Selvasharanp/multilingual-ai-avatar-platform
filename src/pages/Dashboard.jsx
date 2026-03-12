import React from 'react';
import { Link } from 'react-router-dom';
import { PlusCircle, Activity, Users, Settings, Play } from 'lucide-react';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-slate-900 flex flex-col md:flex-row">
      {/* Sidebar */}
      <aside className="w-full md:w-64 border-b md:border-b-0 md:border-r border-slate-800 p-6 flex flex-col">
        <div className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500 mb-10">
          AvatarComm
        </div>
        <nav className="space-y-4 flex-grow">
          <Link to="/dashboard" className="flex items-center gap-3 text-blue-400 bg-blue-500/10 px-4 py-3 rounded-xl font-medium">
            <Activity size={20} /> Dashboard
          </Link>
          <Link to="/create-avatar" className="flex items-center gap-3 text-slate-400 hover:text-white px-4 py-3 rounded-xl transition-colors">
            <PlusCircle size={20} /> Create Avatar
          </Link>
          <Link to="/audiences" className="flex items-center gap-3 text-slate-400 hover:text-white px-4 py-3 rounded-xl transition-colors">
            <Users size={20} /> Audiences
          </Link>
          <Link to="/settings" className="flex items-center gap-3 text-slate-400 hover:text-white px-4 py-3 rounded-xl transition-colors">
            <Settings size={20} /> Settings
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-grow p-8">
        <header className="flex justify-between items-center mb-10">
          <h1 className="text-3xl font-bold">Welcome back, Leader</h1>
          <Link to="/create-avatar" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl flex items-center gap-2 shadow-lg shadow-blue-500/30 transition-all font-medium">
            <PlusCircle size={18} /> New Avatar
          </Link>
        </header>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-slate-800/40 p-6 rounded-2xl border border-slate-700/50 text-left">
            <p className="text-slate-400 font-medium mb-1">Total Interactions</p>
            <p className="text-4xl font-bold text-white">12,450</p>
            <p className="text-emerald-400 text-sm mt-2 flex items-center gap-1">+14% this week</p>
          </div>
          <div className="bg-slate-800/40 p-6 rounded-2xl border border-slate-700/50 text-left">
            <p className="text-slate-400 font-medium mb-1">Active Avatars</p>
            <p className="text-4xl font-bold text-white">3</p>
          </div>
          <div className="bg-slate-800/40 p-6 rounded-2xl border border-slate-700/50 text-left">
            <p className="text-slate-400 font-medium mb-1">Languages Spoken</p>
            <p className="text-4xl font-bold text-white">8</p>
          </div>
        </div>

        {/* Recent Avatars */}
        <h2 className="text-xl font-bold mb-4 text-left">Your Digital Avatars</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="group bg-slate-800/40 border border-slate-700/50 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all">
            <div className="h-48 bg-slate-700 flex items-center justify-center relative">
              {/* Placeholder for Avatar Image Preview */}
              <div className="w-24 h-24 rounded-full bg-slate-600 shadow-xl border-4 border-slate-800 flex items-center justify-center text-slate-400 relative z-10">
                Avatar 1
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
            </div>
            <div className="p-5 text-left">
              <h3 className="text-lg font-bold mb-1">Product Launch AI</h3>
              <p className="text-sm text-slate-400 mb-4">Trained on Product Q3 Docs</p>
              <Link to="/live/demo-avatar" className="w-full bg-slate-700 hover:bg-slate-600 text-white rounded-xl py-2 flex items-center justify-center gap-2 transition-colors">
                <Play size={16} /> Start Live Session
              </Link>
            </div>
          </div>
          
          <Link to="/create-avatar" className="border-2 border-dashed border-slate-700 hover:border-blue-500/50 bg-slate-800/20 rounded-2xl flex flex-col items-center justify-center text-slate-400 hover:text-blue-400 transition-all min-h-[320px]">
            <PlusCircle size={48} className="mb-4" />
            <span className="font-medium text-lg">Create New Avatar</span>
          </Link>
        </div>
      </main>
    </div>
  );
}
