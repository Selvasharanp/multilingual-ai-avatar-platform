import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Upload, FileText, CheckCircle2, ArrowLeft } from 'lucide-react';

export default function AvatarCreation() {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  const handleNext = () => setStep(2);
  const handleDeploy = () => navigate('/dashboard');

  return (
    <div className="min-vh-100 bg-dark-custom text-light-custom d-flex flex-column align-items-center justify-content-center p-4">
      <div className="w-100" style={{ maxWidth: '800px' }}>
        
        <div className="mb-4">
             <Link to="/dashboard" className="text-secondary text-decoration-none d-flex align-items-center gap-2 custom-hover w-auto">
                <ArrowLeft size={20} /> Back to Dashboard
             </Link>
        </div>

        <div className="text-center mb-5">
            <h1 className="display-5 fw-bold mb-3">Create Your Digital Twin</h1>
            <p className="text-secondary fs-5">Train your AI avatar to represent you globally.</p>
        </div>

        {/* Progress Tracker */}
        <div className="d-flex justify-content-center align-items-center mb-5 gap-3">
          <div className={`d-flex align-items-center gap-2 ${step >= 1 ? 'text-primary' : 'text-secondary'}`}>
            <span className={`rounded-circle d-flex align-items-center justify-content-center border ${step >= 1 ? 'border-primary bg-primary bg-opacity-10' : 'border-secondary'}`} style={{ width: '32px', height: '32px' }}>1</span>
            <span className="fw-medium d-none d-sm-inline">Appearance</span>
          </div>
          <div className={`rounded ${step >= 2 ? 'bg-primary' : 'bg-secondary'}`} style={{ width: '50px', height: '2px' }}></div>
          <div className={`d-flex align-items-center gap-2 ${step >= 2 ? 'text-primary' : 'text-secondary'}`}>
            <span className={`rounded-circle d-flex align-items-center justify-content-center border ${step >= 2 ? 'border-primary bg-primary bg-opacity-10' : 'border-secondary'}`} style={{ width: '32px', height: '32px' }}>2</span>
            <span className="fw-medium d-none d-sm-inline">Knowledge</span>
          </div>
        </div>

        <div className="card-custom rounded-4 p-4 p-md-5 shadow-lg">
          {step === 1 && (
            <div className="fade show">
              <h2 className="fs-4 fw-semibold mb-4">Upload Appearance</h2>
              <div className="border border-2 border-dashed border-secondary rounded-4 p-5 d-flex flex-column align-items-center justify-content-center text-center custom-hover mb-4" style={{ cursor: 'pointer', backgroundColor: 'rgba(15, 23, 42, 0.5)' }}>
                <div className="bg-primary bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center mb-3" style={{ width: '80px', height: '80px' }}>
                  <Upload className="text-primary" size={32} />
                </div>
                <p className="fs-5 fw-medium mb-1">Click to upload photo or short video</p>
                <p className="small text-secondary mb-0">MP4, PNG, JPG (Max 50MB)</p>
              </div>

              <div className="d-flex justify-content-end mt-4">
                <button onClick={handleNext} className="btn btn-primary px-4 py-2 fw-semibold shadow">
                  Next Step
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="fade show">
              <h2 className="fs-4 fw-semibold mb-3">Upload Knowledge Base</h2>
              <p className="text-secondary mb-4">What should your avatar know? Upload company docs, FAQs, or scripts.</p>
              
              <div className="border border-2 border-dashed border-secondary rounded-4 p-5 d-flex flex-column align-items-center justify-content-center text-center custom-hover mb-4" style={{ cursor: 'pointer', backgroundColor: 'rgba(15, 23, 42, 0.5)' }}>
                <FileText className="text-purple mb-3" size={40} style={{ color: '#a855f7' }} />
                <p className="fs-5 fw-medium mb-0">Upload PDF, TXT or DOCX</p>
              </div>

              <div className="bg-dark border border-secondary rounded p-3 d-flex align-items-center justify-content-between mb-4">
                <div className="d-flex align-items-center gap-3">
                  <CheckCircle2 className="text-success" size={24} />
                  <div>
                    <p className="fw-medium mb-0">Company_Vision_2026.pdf</p>
                    <p className="small text-secondary mb-0">Processed successfully</p>
                  </div>
                </div>
              </div>

              <div className="d-flex justify-content-between mt-5">
                <button onClick={() => setStep(1)} className="btn btn-outline-secondary px-4 py-2 fw-medium">
                  Back
                </button>
                <button onClick={handleDeploy} className="btn btn-primary px-4 py-2 fw-bold shadow">
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
