import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Upload, FileText, CheckCircle2 } from 'lucide-react';

export default function AvatarCreation() {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  const handleNext = () => setStep(2);
  const handleDeploy = () => navigate('/dashboard');

  return (
    <div className="min-h-screen bg-slate-900 p-8 flex flex-col items-center justify-center relative">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl -z-10"></div>
      
      <div className="w-full max-w-3xl">
        <h1 className="text-4xl font-bold mb-2 text-center">Create Your Digital Twin</h1>
        <p className="text-slate-400 text-center mb-10">Train your AI avatar to represent you globally.</p>

        {/* Progress Tracker */}
        <div className="flex justify-center mb-10 gap-4">
          <div className={`flex items-center gap-2 ${step >= 1 ? 'text-blue-400' : 'text-slate-600'}`}>
            <span className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${step >= 1 ? 'border-blue-400 bg-blue-400/10' : 'border-slate-600'}`}>1</span>
            <span className="font-medium hidden sm:inline">Appearance</span>
          </div>
          <div className={`w-12 h-0.5 mt-4 ${step >= 2 ? 'bg-blue-400' : 'bg-slate-700'}`}></div>
          <div className={`flex items-center gap-2 ${step >= 2 ? 'text-blue-400' : 'text-slate-600'}`}>
            <span className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${step >= 2 ? 'border-blue-400 bg-blue-400/10' : 'border-slate-600'}`}>2</span>
            <span className="font-medium hidden sm:inline">Knowledge</span>
          </div>
        </div>

        <div className="bg-slate-800/40 backdrop-blur-md border border-slate-700/50 rounded-3xl p-8 shadow-2xl">
          {step === 1 && (
            <div className="animate-in fade-in zoom-in duration-300">
              <h2 className="text-2xl font-semibold mb-6">Upload Appearance</h2>
              <div className="border-2 border-dashed border-slate-600 hover:border-blue-500 bg-slate-900/50 rounded-2xl p-12 flex flex-col items-center justify-center transition-colors cursor-pointer group">
                <div className="w-20 h-20 bg-blue-500/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition-all">
                  <Upload className="text-blue-400" size={32} />
                </div>
                <p className="text-lg font-medium text-slate-200">Click to upload photo or short video</p>
                <p className="text-sm text-slate-400 mt-2">MP4, PNG, JPG (Max 50MB)</p>
              </div>

              <div className="mt-8 flex justify-end">
                <button onClick={handleNext} className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold shadow-lg shadow-blue-500/30 transition-all flex items-center gap-2">
                  Next Step
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="animate-in fade-in zoom-in duration-300">
              <h2 className="text-2xl font-semibold mb-6">Upload Knowledge Base</h2>
              <p className="text-slate-400 mb-6">What should your avatar know? Upload company docs, FAQs, or scripts.</p>
              
              <div className="border-2 border-dashed border-slate-600 hover:border-purple-500 bg-slate-900/50 rounded-2xl p-10 flex flex-col items-center justify-center transition-colors cursor-pointer group mb-6">
                <FileText className="text-purple-400 mb-4" size={40} />
                <p className="text-lg font-medium text-slate-200">Upload PDF, TXT or DOCX</p>
              </div>

              <div className="bg-slate-900/50 border border-slate-700 rounded-xl p-4 flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-emerald-400" size={24} />
                  <div>
                    <p className="font-medium">Company_Vision_2026.pdf</p>
                    <p className="text-xs text-slate-400">Processed successfully</p>
                  </div>
                </div>
              </div>

              <div className="flex justify-between mt-8">
                <button onClick={() => setStep(1)} className="text-slate-400 hover:text-white px-6 py-3 font-medium transition-colors">
                  Back
                </button>
                <button onClick={handleDeploy} className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white px-8 py-3 rounded-xl font-bold shadow-lg shadow-purple-500/30 transition-all">
                  Generate & Deploy Avatar
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
