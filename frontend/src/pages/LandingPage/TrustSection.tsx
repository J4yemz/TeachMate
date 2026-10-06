import React from 'react';
import { Users, Calculator, Heart } from 'lucide-react';

export const TrustSection: React.FC = () => {
  return (
    <section className="value-section">
      <div className="container">
        <div className="section-eyebrow">BUILT FOR EVERYDAY TEACHING</div>
        <h2 className="section-title">Everything you need to manage your classroom.</h2>
        <p className="section-desc">
          No convoluted settings, no heavy software. TeachMate gives you clear, simple tools
          crafted around a teacher's real daily routine.
        </p>

        <div className="value-cards-grid">
          <div className="value-card">
            <div className="value-icon-box" style={{ background: '#F3F0FF', color: '#7C5CFC' }}>
              <Users size={26} />
            </div>
            <h3>Organized</h3>
            <p>Keep your students and classes in one place.</p>
            <div style={{ marginTop: 'auto', paddingTop: '16px', fontSize: '0.86rem', color: '#7C5CFC', fontWeight: 700 }}>
              Instant class roster & pupil records →
            </div>
          </div>

          <div className="value-card">
            <div className="value-icon-box" style={{ background: '#ECFDF5', color: '#10B981' }}>
              <Calculator size={26} />
            </div>
            <h3>Accurate</h3>
            <p>Automatically calculate grades and reduce manual errors.</p>
            <div style={{ marginTop: 'auto', paddingTop: '16px', fontSize: '0.86rem', color: '#10B981', fontWeight: 700 }}>
              No spreadsheet formula breaks →
            </div>
          </div>

          <div className="value-card">
            <div className="value-icon-box" style={{ background: '#F0F9FF', color: '#0EA5E9' }}>
              <Heart size={26} />
            </div>
            <h3>Simple</h3>
            <p>Designed for teachers who want less administrative work.</p>
            <div style={{ marginTop: 'auto', paddingTop: '16px', fontSize: '0.86rem', color: '#0EA5E9', fontWeight: 700 }}>
              Zero training curve →
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
