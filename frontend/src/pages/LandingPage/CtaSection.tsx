import React from 'react';
import { ArrowRight } from 'lucide-react';

interface CtaSectionProps {
  onOpenAuth: (type: 'signup' | 'login') => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({ onOpenAuth }) => {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-box">
          <div className="cta-bg-circle-1" />
          <div className="cta-bg-circle-2" />
          <h2>Make classroom management simpler.</h2>
          <p>
            TeachMate gives you the tools to manage students, attendance, and grades in one place.
            Free for elementary teachers.
          </p>
          <button
            className="btn-white"
            onClick={() => onOpenAuth('signup')}
          >
            Get Started with TeachMate
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};
