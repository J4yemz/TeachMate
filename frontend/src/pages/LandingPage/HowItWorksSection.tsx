import React from 'react';
import { Users, CalendarCheck, BarChart3 } from 'lucide-react';

export const HowItWorksSection: React.FC = () => {
  return (
    <section id="how-it-works" className="how-it-works-section">
      <div className="container">
        <div className="section-eyebrow">EFFORTLESS ONBOARDING</div>
        <h2 className="section-title">Get your classroom organized in minutes.</h2>
        <p className="section-desc">
          No complex manual setup. Just three simple steps to transition from messy paper notebooks
          to a clean, automatic teaching companion.
        </p>

        <div className="steps-grid">
          <div className="step-card">
            <div className="step-number-tag">01</div>
            <h3>Create Your Class</h3>
            <p>
              Set up your class and add your students. Import your class roster or type names in seconds.
            </p>
            <div className="step-decor-icon">
              <Users size={16} />
              <span>Add students in seconds</span>
            </div>
          </div>

          <div className="step-card">
            <div className="step-number-tag">02</div>
            <h3>Track Attendance & Grades</h3>
            <p>
              Record daily attendance and student scores as you teach during the school week.
            </p>
            <div className="step-decor-icon">
              <CalendarCheck size={16} />
              <span>One-tap check-ins</span>
            </div>
          </div>

          <div className="step-card">
            <div className="step-number-tag">03</div>
            <h3>See Classroom Progress</h3>
            <p>
              View grades, attendance, and class performance in one place without manual formula errors.
            </p>
            <div className="step-decor-icon">
              <BarChart3 size={16} />
              <span>Instant report cards</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
