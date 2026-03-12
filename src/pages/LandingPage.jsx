import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, Globe2, Zap, Users } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 lg:px-12 border-b border-slate-800">
        <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500">
          AvatarComm
        </div>
        <div className="space-x-4">
          <Link to="/auth" className="text-slate-300 hover:text-white transition-colors">Login</Link>
          <Link to="/auth" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full font-medium transition-all shadow-lg shadow-blue-500/30">
            Get Started
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex-grow flex flex-col items-center justify-center text-center px-6 py-20 relative overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl -z-10"></div>

        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
          Communicate Globally <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
            At Infinite Scale
          </span>
        </h1>
        <p className="text-xl text-slate-400 max-w-2xl mb-10">
          Create an AI digital avatar capable of presenting, interacting, and breaking language barriers instantly. Perfect for leaders, educators, and global organizations.
        </p>
        <Link to="/auth" className="bg-white text-slate-900 px-8 py-4 rounded-full text-lg font-bold hover:bg-slate-200 transition-all shadow-xl shadow-white/10 flex items-center gap-2">
          Create Your Avatar <Zap size={20} />
        </Link>

        {/* Features Quick List */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24 text-left w-full max-w-5xl">
          <div className="p-6 bg-slate-800/50 rounded-2xl border border-slate-700/50 backdrop-blur-sm">
            <Globe2 className="text-blue-400 mb-4 h-10 w-10" />
            <h3 className="text-xl font-semibold mb-2">Multilingual</h3>
            <p className="text-slate-400">Instantly translate your message and communicate naturally in over 50 languages.</p>
          </div>
          <div className="p-6 bg-slate-800/50 rounded-2xl border border-slate-700/50 backdrop-blur-sm">
            <MessageSquare className="text-indigo-400 mb-4 h-10 w-10" />
            <h3 className="text-xl font-semibold mb-2">Real-Time Interaction</h3>
            <p className="text-slate-400">Answer thousands of questions concurrently with intelligent, context-aware responses.</p>
          </div>
          <div className="p-6 bg-slate-800/50 rounded-2xl border border-slate-700/50 backdrop-blur-sm">
            <Users className="text-purple-400 mb-4 h-10 w-10" />
            <h3 className="text-xl font-semibold mb-2">Always Available</h3>
            <p className="text-slate-400">Your AI digital twin never sleeps. Connect with your audience 24/7/365 without burnout.</p>
          </div>
        </div>
      </main>
    </div>
  );
}
