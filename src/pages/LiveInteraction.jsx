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
    <div className="d-flex flex-column min-vh-100 bg-dark-custom text-light-custom position-relative overflow-hidden">
      {/* Background Ambience */}
      <div 
        className="position-absolute top-50 start-50 translate-middle rounded-circle" 
        style={{ 
            width: '800px', 
            height: '800px', 
            filter: 'blur(120px)', 
            zIndex: 0,
            transition: 'all 0.7s ease',
            backgroundColor: isSpeaking ? 'rgba(37, 99, 235, 0.3)' : 'rgba(49, 46, 129, 0.2)',
            transform: `translate(-50%, -50%) scale(${isSpeaking ? 1.1 : 1})`
        }}
      ></div>

      {/* Header */}
      <header className="p-3 border-bottom border-secondary d-flex justify-content-between align-items-center" style={{ backgroundColor: 'rgba(15, 23, 42, 0.5)', backdropFilter: 'blur(12px)', zIndex: 10 }}>
        <Link to="/dashboard" className="text-secondary hover:text-white d-flex align-items-center gap-2 text-decoration-none custom-hover">
          <ArrowLeft size={20} /> Dashboard
        </Link>
        <div className="d-flex align-items-center gap-3">
          <div className="d-flex align-items-center gap-2 bg-dark px-3 py-1 rounded border border-secondary">
            <Globe size={16} style={{ color: '#818cf8' }} />
            <select 
              className="bg-transparent text-light border-0 py-1 pe-4 form-select-sm outline-none shadow-none text-sm"
              style={{ minWidth: '100px', appearance: 'none' }}
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            >
              {languages.map(l => (
                  <option key={l.code} value={l.code} className="bg-dark text-light">{l.name}</option>
              ))}
            </select>
          </div>
          <div className="px-2">
             <Volume2 size={20} className={isSpeaking ? 'text-success' : 'text-secondary'} style={{ transition: 'color 0.3s ease' }} />
          </div>
        </div>
      </header>

      {/* Main Interaction Area */}
      <main className="flex-grow-1 d-flex flex-column flex-md-row mx-auto w-100 p-3 p-md-5 gap-4 overflow-hidden" style={{ maxWidth: '1280px', zIndex: 10 }}>
        
        {/* Avatar Visualizer */}
        <div className="flex-grow-1 d-flex flex-column align-items-center justify-content-center position-relative" style={{ minHeight: '300px' }}>
            {/* The Avatar */}
            <div className="position-relative" style={{ transition: 'all 0.3s ease', transform: `scale(${isSpeaking ? 1.05 : 1})` }}>
               <div className="position-absolute w-100 h-100 rounded-circle" style={{ filter: 'blur(24px)', transition: 'all 0.3s ease', backgroundColor: isSpeaking ? 'rgba(59, 130, 246, 0.5)' : 'transparent', transform: `scale(${isSpeaking ? 1.5 : 1})` }}></div>
               <div className="rounded-circle border border-4 border-secondary shadow-lg position-relative overflow-hidden bg-dark d-flex align-items-center justify-content-center" style={{ width: '256px', height: '256px' }}>
                  {/* Mock Abstract Avatar Inner Glow */}
                  <div className="w-100 h-100 opacity-75" style={{ background: 'linear-gradient(135deg, #6366f1, #9333ea)', transition: 'opacity 0.3s', opacity: isSpeaking ? 0.9 : 0.7 }}></div>
                  <div className="position-absolute bottom-0 start-0 w-100 h-50" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)' }}></div>
                  
                  {/* Minimalistic Face/Core indicator */}
                  <div className="position-absolute top-50 start-50 translate-middle d-flex flex-column align-items-center gap-4">
                     <div className="d-flex gap-5">
                        <div className="rounded-circle bg-light" style={{ width: '12px', height: isSpeaking ? '16px' : '12px', transition: 'all 0.1s ease', backgroundColor: isSpeaking ? '#bfdbfe' : '#ffffff' }}></div>
                        <div className="rounded-circle bg-light" style={{ width: '12px', height: isSpeaking ? '16px' : '12px', transition: 'all 0.1s ease', backgroundColor: isSpeaking ? '#bfdbfe' : '#ffffff' }}></div>
                     </div>
                     <div className="rounded-pill" style={{ width: isSpeaking ? '32px' : '48px', height: isSpeaking ? '16px' : '4px', backgroundColor: isSpeaking ? '#93c5fd' : 'rgba(255,255,255,0.5)', transition: 'all 0.1s ease' }}></div>
                  </div>
               </div>
            </div>
            <h2 className="mt-5 fs-3 fw-bold text-gradient-custom mb-1">
               Nexus AI
            </h2>
            <p className="text-secondary small">Status: {isSpeaking ? <span className="text-primary fw-medium">Speaking...</span> : 'Listening'}</p>
        </div>

        {/* Chat History Panel */}
        <div className="flex-grow-1 d-flex flex-column glass-panel rounded-4 overflow-hidden shadow-lg h-100" style={{ maxHeight: '600px', flexBasis: '0', flexGrow: 1 }}>
          <div className="flex-grow-1 overflow-auto p-4 d-flex flex-column gap-3">
            {messages.map((msg, idx) => (
              <div key={idx} className={`d-flex ${msg.sender === 'user' ? 'justify-content-end' : 'justify-content-start'}`}>
                <div className={`p-3 rounded-4 ${
                  msg.sender === 'user' 
                    ? 'bg-primary text-light shadow-sm' 
                    : 'bg-secondary bg-opacity-25 text-light shadow-sm'
                }`} style={{ maxWidth: '80%', borderTopRightRadius: msg.sender === 'user' ? '0' : '1rem', borderTopLeftRadius: msg.sender !== 'user' ? '0' : '1rem' }}>
                  <p className="mb-0 fs-6" style={{ lineHeight: '1.5' }}>{msg.text}</p>
                  <span className="d-block w-100 text-end opacity-50 mt-1 fw-bold text-uppercase" style={{ fontSize: '10px' }}>{msg.lang}</span>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={sendMessage} className="p-3 border-top border-secondary d-flex gap-2" style={{ backgroundColor: 'rgba(30, 41, 59, 0.8)' }}>
            <button type="button" className="btn btn-dark text-secondary custom-hover px-3 rounded-3 border-0">
               <Mic size={20} />
            </button>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={`Ask something in ${languages.find(l => l.code === language)?.name || 'English'}...`}
              className="form-control bg-dark border-secondary text-light rounded-3 px-3 py-2 shadow-none"
            />
            <button type="submit" className="btn btn-primary px-3 rounded-3 shadow-sm d-flex align-items-center justify-content-center" disabled={!input.trim()}>
              <Send size={18} className="ms-1" />
            </button>
          </form>
        </div>

      </main>

      <audio ref={audioRef} className="d-none" />
    </div>
  );
}
