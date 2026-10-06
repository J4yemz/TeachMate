import React from 'react';
import { GraduationCap, CalendarCheck, Calculator } from 'lucide-react';

export const FeaturesSection: React.FC = () => {
  return (
    <section id="features" className="features-section">
      <div className="container">
        <div className="section-eyebrow">POWERFUL SIMPLICITY</div>
        <h2 className="section-title">Everything you need for everyday classroom management</h2>
        <p className="section-desc">
          Three core pillars designed so you can organize your class, track attendance, and
          compute final marks without headache.
        </p>

        <div className="features-grid">
          {/* Feature Card 1 — STUDENT MANAGEMENT */}
          <div className="feature-col-card">
            <div className="feature-card-content">
              <div className="feature-pill-icon">
                <GraduationCap size={22} />
              </div>
              <h3>Manage Your Students</h3>
              <p>
                Create classes and easily add, view, edit, and manage students throughout the school year.
              </p>
            </div>

            <div className="feature-preview-box">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#1E1B39' }}>Grade 4 - St. Francis</span>
                <span style={{ fontSize: '0.72rem', background: '#F3F0FF', color: '#7C5CFC', padding: '2px 8px', borderRadius: '10px', fontWeight: 700 }}>
                  28 Enrolled
                </span>
              </div>
              <div style={{ background: '#FFFFFF', borderRadius: '10px', border: '1px solid #EDEBF5', overflow: 'hidden' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 12px', borderBottom: '1px solid #F1F0F7' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: '#F3F0FF', color: '#7C5CFC', fontSize: '0.7rem', fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>SA</div>
                    <div>
                      <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#1E1B39' }}>Sophia Alvarez</div>
                      <div style={{ fontSize: '0.68rem', color: '#7E7A9B' }}>LRN: 1092837401</div>
                    </div>
                  </div>
                  <span style={{ fontSize: '0.7rem', color: '#7C5CFC', fontWeight: 700, background: '#F3F0FF', padding: '2px 6px', borderRadius: '6px' }}>Active</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 12px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: '#F0F9FF', color: '#0EA5E9', fontSize: '0.7rem', fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>LC</div>
                    <div>
                      <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#1E1B39' }}>Liam Ethan Chen</div>
                      <div style={{ fontSize: '0.68rem', color: '#7E7A9B' }}>LRN: 1092837402</div>
                    </div>
                  </div>
                  <span style={{ fontSize: '0.7rem', color: '#7C5CFC', fontWeight: 700, background: '#F3F0FF', padding: '2px 6px', borderRadius: '6px' }}>Active</span>
                </div>
              </div>
            </div>
          </div>

          {/* Feature Card 2 — ATTENDANCE */}
          <div className="feature-col-card">
            <div className="feature-card-content">
              <div className="feature-pill-icon" style={{ background: '#ECFDF5', color: '#10B981' }}>
                <CalendarCheck size={22} />
              </div>
              <h3>Track Attendance Easily</h3>
              <p>
                Record daily attendance in seconds and quickly see attendance patterns for your class.
              </p>
            </div>

            <div className="feature-preview-box">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#1E1B39' }}>Monday, Oct 6</span>
                <span style={{ fontSize: '0.72rem', background: '#ECFDF5', color: '#065F46', padding: '2px 8px', borderRadius: '10px', fontWeight: 700 }}>
                  96% Rate
                </span>
              </div>
              <div style={{ background: '#FFFFFF', borderRadius: '10px', border: '1px solid #EDEBF5', padding: '10px 12px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem' }}>
                  <span>Sophia Alvarez</span>
                  <span className="status-chip present" style={{ padding: '1px 6px', fontSize: '0.68rem' }}>Present</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem' }}>
                  <span>Mateo De Leon</span>
                  <span className="status-chip late" style={{ padding: '1px 6px', fontSize: '0.68rem' }}>Late</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem' }}>
                  <span>Lucas Bautista</span>
                  <span className="status-chip absent" style={{ padding: '1px 6px', fontSize: '0.68rem' }}>Absent</span>
                </div>
              </div>
            </div>
          </div>

          {/* Feature Card 3 — GRADING */}
          <div className="feature-col-card">
            <div className="feature-card-content">
              <div className="feature-pill-icon" style={{ background: '#FFFBEB', color: '#D97706' }}>
                <Calculator size={22} />
              </div>
              <h3>Calculate Grades Automatically</h3>
              <p>
                Record student scores and let TeachMate calculate grades automatically based on your grading setup.
              </p>
            </div>

            <div className="feature-preview-box">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#1E1B39' }}>Subject: Science</span>
                <span style={{ fontSize: '0.72rem', background: '#F3F0FF', color: '#7C5CFC', padding: '2px 8px', borderRadius: '10px', fontWeight: 700 }}>
                  Class Avg: 89.2
                </span>
              </div>
              <div style={{ background: '#FFFFFF', borderRadius: '10px', border: '1px solid #EDEBF5', padding: '10px 12px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                  <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#1E1B39' }}>Sophia Alvarez</span>
                  <span className="grade-pill-highlight" style={{ fontSize: '0.78rem', padding: '2px 8px' }}>
                    Final Grade: 92
                  </span>
                </div>
                <div style={{ display: 'flex', gap: '8px', fontSize: '0.7rem', color: '#7E7A9B' }}>
                  <span>Written: 38/40</span>
                  <span>•</span>
                  <span>Perf: 48/50</span>
                  <span>•</span>
                  <span>Exam: 46/50</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
