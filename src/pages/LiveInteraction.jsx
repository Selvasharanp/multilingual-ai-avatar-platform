import React, { useState, useEffect, useRef } from 'react';
import { Mic, Send, Globe, Volume2, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function LiveInteraction() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [language, setLanguage] = useState('en');
  const [isSpeaking, setIsSpeaking] = useState(false);
  const ws = useRef(null);
  const messagesEndRef = useRef(null);
  const audioRef = useRef(null);

  useEffect(() => {
    // Connect to Backend WebSocket
    ws.current = new WebSocket('ws://localhost:8000/ws/chat');
    
    ws.current.onopen = () => {
      console.log("WebSocket Connected");
      // Add initial greeting from system
      setMessages([{ sender: 'bot', text: 'Connection established. Your Avatar is listening.', lang: 'en' }]);
    };

    ws.current.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.text) {
        setMessages(prev => [...prev, { sender: 'bot', text: data.text, lang: data.language }]);
        
        // Handle Audio
        if (data.audio) {
          setIsSpeaking(true);
          const audioSrc = `data:audio/mp3;base64,${data.audio}`;
          if (audioRef.current) {
            audioRef.current.src = audioSrc;
            audioRef.current.play().catch(e => console.error("Audio playback failed:", e));
            audioRef.current.onended = () => setIsSpeaking(false);
          }
        }
      }
    };

    return () => {
      if (ws.current) ws.current.close();
    };
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = (e) => {
    e.preventDefault();
    if (!input.trim() || !ws.current) return;
    
    const msg = { text: input, language: language };
    ws.current.send(JSON.stringify(msg));
    
    setMessages(prev => [...prev, { sender: 'user', text: input, lang: language }]);
    setInput('');
  };

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Spanish' },
    { code: 'fr', name: 'French' },
    { code: 'hi', name: 'Hindi' },
    { code: 'ta', name: 'Tamil' },
    { code: 'zh-CN', name: 'Chinese (Simplified)' }
  ];

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col relative overflow-hidden">
      {/* Background Ambience */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[120px] -z-10 transition-all duration-700 ${isSpeaking ? 'bg-blue-600/30 scale-110' : 'bg-indigo-900/20 scale-100'}`}></div>

      {/* Header */}
      <header className="p-4 border-b border-slate-800 flex justify-between items-center bg-slate-900/50 backdrop-blur-md z-10">
        <Link to="/dashboard" className="text-slate-400 hover:text-white flex items-center gap-2">
          <ArrowLeft size={20} /> Dashboard
        </Link>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-700">
            <Globe size={16} className="text-indigo-400" />
            <select 
              className="bg-transparent text-sm text-slate-200 outline-none"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            >
              {languages.map(l => (
                  <option key={l.code} value={l.code} className="bg-slate-800">{l.name}</option>
              ))}
            </select>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5">
             {isSpeaking ? <Volume2 size={20} className="text-emerald-400 animate-pulse" /> : <Volume2 size={20} className="text-slate-500" />}
          </div>
        </div>
      </header>

      {/* Main Interaction Area */}
      <main className="flex-grow flex flex-col md:flex-row max-w-7xl mx-auto w-full p-4 lg:p-8 gap-8 overflow-hidden z-10">
        
        {/* Avatar Visualizer */}
        <div className="flex-1 flex flex-col items-center justify-center relative min-h-[300px] md:min-h-full">
            {/* The Avatar */}
            <div className={`relative transition-all duration-300 ${isSpeaking ? 'scale-105' : 'scale-100'}`}>
               <div className={`absolute inset-0 rounded-full blur-2xl transition-all duration-300 ${isSpeaking ? 'bg-blue-500/50 scale-150 animate-pulse' : 'bg-transparent scale-100'}`}></div>
               <div className="w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-slate-700 shadow-2xl relative overflow-hidden bg-slate-800 flex items-center justify-center">
                  {/* Mock Abstract Avatar Inner Glow */}
                  <div className={`w-full h-full bg-gradient-to-br from-indigo-500 to-purple-600 opacity-80 ${isSpeaking ? 'animate-pulse' : ''}`}></div>
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent"></div>
                  
                  {/* Minimalistic Face/Core indicator */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-6">
                     <div className="flex gap-10">
                        <div className={`w-3 h-3 rounded-full bg-white transition-all ${isSpeaking ? 'h-4 bg-blue-200' : ''}`}></div>
                        <div className={`w-3 h-3 rounded-full bg-white transition-all ${isSpeaking ? 'h-4 bg-blue-200' : ''}`}></div>
                     </div>
                     <div className={`w-12 h-1 bg-white/50 rounded-full transition-all duration-100 ${isSpeaking ? 'h-4 w-8 rounded-xl bg-blue-300' : ''}`}></div>
                  </div>
               </div>
            </div>
            <h2 className="mt-8 text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
               Nexus AI
            </h2>
            <p className="text-slate-400">Status: {isSpeaking ? <span className="text-blue-400">Speaking...</span> : 'Listening'}</p>
        </div>

        {/* Chat History Panel */}
        <div className="flex-1 flex flex-col bg-slate-800/40 rounded-3xl border border-slate-700/50 backdrop-blur-sm overflow-hidden shadow-2xl h-[500px] md:h-auto">
          <div className="flex-grow overflow-y-auto p-6 space-y-6">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-4 rounded-2xl ${
                  msg.sender === 'user' 
                    ? 'bg-blue-600 text-white rounded-tr-sm shadow-lg shadow-blue-500/20' 
                    : 'bg-slate-700 text-slate-200 rounded-tl-sm shadow-md'
                }`}>
                  <p className="text-sm md:text-base leading-relaxed">{msg.text}</p>
                  <span className="text-[10px] opacity-60 uppercase mt-2 block w-full text-right">{msg.lang}</span>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={sendMessage} className="p-4 bg-slate-800/80 border-t border-slate-700 flex gap-2">
            <button type="button" className="p-3 text-slate-400 hover:text-white hover:bg-slate-700 rounded-xl transition-colors">
               <Mic size={20} />
            </button>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={`Ask something in ${languages.find(l => l.code === language)?.name}...`}
              className="flex-grow bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
            />
            <button type="submit" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 p-3 rounded-xl text-white shadow-lg shadow-blue-500/20 transition-all flex items-center justify-center disabled:opacity-50" disabled={!input.trim()}>
              <Send size={20} className="translate-x-[-1px] translate-y-[1px]" />
            </button>
          </form>
        </div>

      </main>

      <audio ref={audioRef} className="hidden" />
    </div>
  );
}
