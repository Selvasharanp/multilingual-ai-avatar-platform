import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PlusCircle, Activity, Users, Settings, Play, Search, Mail, Filter } from 'lucide-react';

export default function Audiences() {
  const [searchTerm, setSearchTerm] = useState('');

  const audiences = [
    { id: 1, name: 'Global Sales Team', members: 1240, location: 'Worldwide', lastActive: '2 hours ago' },
    { id: 2, name: 'Q3 Product Launch Attendees', members: 850, location: 'North America', lastActive: '1 day ago' },
    { id: 3, name: 'Customer Support EMEA', members: 320, location: 'Europe', lastActive: '5 hours ago' },
    { id: 4, name: 'Beta Testers V2', members: 150, location: 'Mixed', lastActive: '3 days ago' },
  ];

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
          <Link to="/audiences" className="flex items-center gap-3 text-blue-400 bg-blue-500/10 px-4 py-3 rounded-xl font-medium">
            <Users size={20} /> Audiences
          </Link>
          <Link to="/settings" className="flex items-center gap-3 text-slate-400 hover:text-white px-4 py-3 rounded-xl transition-colors">
            <Settings size={20} /> Settings
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-grow p-8 overflow-y-auto">
        <header className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-3xl font-bold mb-2">Audience Management</h1>
            <p className="text-slate-400">Manage and segment the global groups your Avatar interacts with.</p>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl flex items-center gap-2 shadow-lg shadow-blue-500/30 transition-all font-medium">
            <PlusCircle size={18} /> Import Audience
          </button>
        </header>

        {/* Filters & Search */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-grow relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={20} />
            <input 
              type="text" 
              placeholder="Search audiences..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-800/50 border border-slate-700 rounded-xl pl-12 pr-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            />
          </div>
          <button className="flex items-center gap-2 bg-slate-800 border border-slate-700 px-6 py-3 rounded-xl hover:bg-slate-700 transition-colors">
            <Filter size={18} /> Filters
          </button>
        </div>

        {/* Audience List */}
        <div className="bg-slate-800/40 border border-slate-700/50 rounded-2xl overflow-hidden shadow-xl">
          <div className="grid grid-cols-12 gap-4 p-4 border-b border-slate-700/50 text-slate-400 font-medium text-sm px-6">
            <div className="col-span-5">Audience Segment</div>
            <div className="col-span-2">Members</div>
            <div className="col-span-3">Primary Location</div>
            <div className="col-span-2 text-right">Last Interaction</div>
          </div>
          
          <div className="divide-y divide-slate-700/50">
            {audiences.map((aud) => (
              <div key={aud.id} className="grid grid-cols-12 gap-4 p-6 items-center hover:bg-slate-700/20 transition-colors cursor-pointer group">
                <div className="col-span-5 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center border border-indigo-500/30">
                    <Users size={18} className="text-indigo-400" />
                  </div>
                  <span className="font-semibold text-slate-200 group-hover:text-blue-400 transition-colors">{aud.name}</span>
                </div>
                <div className="col-span-2 text-slate-300">
                  {aud.members.toLocaleString()}
                </div>
                <div className="col-span-3 flex items-center gap-2 text-slate-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  {aud.location}
                </div>
                <div className="col-span-2 flex items-center justify-end gap-3 text-sm text-slate-400">
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
