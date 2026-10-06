import React from 'react';
import { BookOpen, X } from 'lucide-react';

interface AuthModalProps {
  modalType: 'signup' | 'login' | null;
  onClose: () => void;
  onSwitchType: (type: 'signup' | 'login') => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({ modalType, onClose, onSwitchType }) => {
  if (!modalType) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(modalType === 'signup' ? 'Account created! Welcome to TeachMate.' : 'Logged in successfully!');
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
        <button
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close dialog"
        >
          <X size={20} />
        </button>

        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <div className="logo-icon-box" style={{ margin: '0 auto 12px' }}>
            <BookOpen size={20} />
          </div>
          <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#1E1B39', marginBottom: '6px' }}>
            {modalType === 'signup' ? 'Welcome to TeachMate' : 'Welcome Back'}
          </h3>
          <p style={{ fontSize: '0.88rem', color: '#7E7A9B' }}>
            {modalType === 'signup'
              ? 'Start managing your elementary class in 3 minutes.'
              : 'Log in to access your classes and grading sheets.'}
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          {modalType === 'signup' && (
            <div className="form-group">
              <label className="form-label">Full Name</label>
              <input
                type="text"
                required
                placeholder="Teacher Sarah Martinez"
                className="form-input"
              />
            </div>
          )}

          <div className="form-group">
            <label className="form-label">School Email Address</label>
            <input
              type="email"
              required
              placeholder="teacher.sarah@school.edu"
              className="form-input"
            />
          </div>

          {modalType === 'signup' && (
            <div className="form-group">
              <label className="form-label">Class / Grade Level</label>
              <input
                type="text"
                required
                placeholder="Grade 4 - St. Francis"
                className="form-input"
              />
            </div>
          )}

          <div className="form-group">
            <label className="form-label">Password</label>
            <input
              type="password"
              required
              placeholder="••••••••"
              className="form-input"
            />
          </div>

          <button
            type="submit"
            className="btn-primary"
            style={{ width: '100%', marginTop: '12px', padding: '12px' }}
          >
            {modalType === 'signup' ? 'Create Teacher Account' : 'Log In to TeachMate'}
          </button>
        </form>

        <div style={{ textAlign: 'center', marginTop: '18px', fontSize: '0.84rem', color: '#7E7A9B' }}>
          {modalType === 'signup' ? (
            <>
              Already have an account?{' '}
              <button
                onClick={() => onSwitchType('login')}
                style={{ color: '#7C5CFC', fontWeight: 700 }}
              >
                Log In
              </button>
            </>
          ) : (
            <>
              Don't have an account yet?{' '}
              <button
                onClick={() => onSwitchType('signup')}
                style={{ color: '#7C5CFC', fontWeight: 700 }}
              >
                Get Started Free
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
