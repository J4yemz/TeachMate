import React, { useState } from 'react';
import {
  ShieldCheck,
  BookOpen,
  LayoutDashboard,
  GraduationCap,
  Users,
  CalendarCheck,
  Calculator,
  Settings,
  Award,
  FileSpreadsheet,
  ChevronRight,
  UserCheck
} from 'lucide-react';

export const DashboardPreviewSection: React.FC = () => {
  const [selectedDashboardClass, setSelectedDashboardClass] = useState<'Grade 4 - St. Francis' | 'Grade 3 - St. Joseph'>('Grade 4 - St. Francis');

  return (
    <section id="showcase" className="showcase-section">
      <div className="container">
        <div className="section-eyebrow">COMPLETE SYSTEM</div>
        <h2 className="section-title">Your classroom. One simple dashboard.</h2>
        <p className="section-desc">
          Everything elementary teachers need every day — organized in a calm, intuitive interface.
        </p>

        <div className="showcase-container-wrapper">
          <div className="showcase-dashboard-card">
            <div className="browser-topbar">
              <div className="window-dots">
                <span className="dot dot-red" />
                <span className="dot dot-yellow" />
                <span className="dot dot-green" />
              </div>
              <div className="browser-url-pill">
                <ShieldCheck size={13} style={{ color: '#10B981' }} />
                <span>teachmate.app/dashboard</span>
              </div>
            </div>

            <div className="dashboard-full-mockup">
              {/* Full Sidebar Navigation */}
              <aside className="dash-sidebar">
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '24px', paddingLeft: '6px' }}>
                    <div className="logo-icon-box" style={{ width: '34px', height: '34px', borderRadius: '10px' }}>
                      <BookOpen size={18} />
                    </div>
                    <span style={{ fontWeight: 800, fontSize: '1.1rem', color: '#1E1B39' }}>TeachMate</span>
                  </div>

                  <div className="dash-sidebar-menu">
                    <div className="dash-menu-item active">
                      <LayoutDashboard size={18} />
                      <span>Dashboard</span>
                    </div>
                    <div className="dash-menu-item">
                      <GraduationCap size={18} />
                      <span>My Classes</span>
                    </div>
                    <div className="dash-menu-item">
                      <Users size={18} />
                      <span>Students</span>
                    </div>
                    <div className="dash-menu-item">
                      <CalendarCheck size={18} />
                      <span>Attendance</span>
                    </div>
                    <div className="dash-menu-item">
                      <Calculator size={18} />
                      <span>Grades</span>
                    </div>
                    <div className="dash-menu-item">
                      <Settings size={18} />
                      <span>Settings</span>
                    </div>
                  </div>
                </div>

                <div className="dash-user-profile">
                  <div className="teacher-avatar">SM</div>
                  <div>
                    <div style={{ fontSize: '0.84rem', fontWeight: 800, color: '#1E1B39' }}>Sarah Martinez</div>
                    <div style={{ fontSize: '0.72rem', color: '#7E7A9B' }}>Elementary Adviser</div>
                  </div>
                </div>
              </aside>

              {/* Main Dashboard Area */}
              <main className="dash-content-area">
                {/* Top Bar inside mockup */}
                <div className="dash-topbar">
                  <div className="dash-greeting">
                    <h2>Good morning, Teacher Sarah! ☀️</h2>
                    <p>Here is your classroom overview for today, October 6.</p>
                  </div>

                  {/* Class Selector Switcher */}
                  <div className="class-switcher-tabs">
                    <button
                      className={`class-tab ${selectedDashboardClass === 'Grade 4 - St. Francis' ? 'active' : ''}`}
                      onClick={() => setSelectedDashboardClass('Grade 4 - St. Francis')}
                    >
                      Grade 4 — St. Francis
                    </button>
                    <button
                      className={`class-tab ${selectedDashboardClass === 'Grade 3 - St. Joseph' ? 'active' : ''}`}
                      onClick={() => setSelectedDashboardClass('Grade 3 - St. Joseph')}
                    >
                      Grade 3 — St. Joseph
                    </button>
                  </div>
                </div>

                {/* 4 Metric Cards */}
                <div className="dash-metrics-grid">
                  <div className="dash-metric-card">
                    <div className="metric-header">
                      <span className="metric-title">Enrolled Students</span>
                      <div style={{ color: '#7C5CFC' }}><Users size={18} /></div>
                    </div>
                    <div className="metric-value">
                      {selectedDashboardClass === 'Grade 4 - St. Francis' ? '28' : '26'}
                    </div>
                    <div className="metric-trend">
                      <span>All profiles complete</span>
                    </div>
                  </div>

                  <div className="dash-metric-card">
                    <div className="metric-header">
                      <span className="metric-title">Today's Attendance</span>
                      <div style={{ color: '#10B981' }}><CalendarCheck size={18} /></div>
                    </div>
                    <div className="metric-value">96.4%</div>
                    <div className="metric-trend">
                      <span>27 of 28 pupils in class</span>
                    </div>
                  </div>

                  <div className="dash-metric-card">
                    <div className="metric-header">
                      <span className="metric-title">Quarter Average</span>
                      <div style={{ color: '#0EA5E9' }}><Award size={18} /></div>
                    </div>
                    <div className="metric-value">89.4</div>
                    <div className="metric-trend">
                      <span>+2.1% from Preliminary</span>
                    </div>
                  </div>

                  <div className="dash-metric-card">
                    <div className="metric-header">
                      <span className="metric-title">DepEd Grading</span>
                      <div style={{ color: '#F59E0B' }}><FileSpreadsheet size={18} /></div>
                    </div>
                    <div className="metric-value">Form 137</div>
                    <div className="metric-trend">
                      <span>Ready to export</span>
                    </div>
                  </div>
                </div>

                {/* 2-Column Split: Attendance Overview & Recent Grade Submissions */}
                <div className="dash-panels-grid">
                  <div className="dash-panel">
                    <div className="dash-panel-header">
                      <div className="dash-panel-title">Weekly Attendance Breakdown</div>
                      <span className="dash-panel-action">View Full SF2 <ChevronRight size={14} /></span>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', height: '140px', padding: '10px 10px 0' }}>
                      {[
                        { day: 'Mon', rate: 96, present: 27 },
                        { day: 'Tue', rate: 100, present: 28 },
                        { day: 'Wed', rate: 93, present: 26 },
                        { day: 'Thu', rate: 96, present: 27 },
                        { day: 'Fri (Today)', rate: 96, present: 27 },
                      ].map((col) => (
                        <div key={col.day} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', flex: 1 }}>
                          <span style={{ fontSize: '0.72rem', fontWeight: 800, color: '#7C5CFC' }}>{col.rate}%</span>
                          <div
                            style={{
                              width: '36px',
                              height: `${col.rate * 0.9}px`,
                              background: 'linear-gradient(180deg, #7C5CFC 0%, #A78BFA 100%)',
                              borderRadius: '6px 6px 0 0',
                              transition: 'height 0.3s ease'
                            }}
                          />
                          <span style={{ fontSize: '0.72rem', color: '#7E7A9B', fontWeight: 600 }}>{col.day}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="dash-panel">
                    <div className="dash-panel-header">
                      <div className="dash-panel-title">Recent Student Achievements</div>
                      <span className="dash-panel-action">Details <ChevronRight size={14} /></span>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 10px', background: '#FAF9FE', borderRadius: '8px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                          <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#ECFDF5', color: '#10B981', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Award size={16} />
                          </div>
                          <div>
                            <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#1E1B39' }}>Emma Rose Rivera</div>
                            <div style={{ fontSize: '0.7rem', color: '#7E7A9B' }}>Perfect score on Science Performance Task</div>
                          </div>
                        </div>
                        <span style={{ fontSize: '0.78rem', fontWeight: 800, color: '#10B981' }}>50/50</span>
                      </div>

                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 10px', background: '#FAF9FE', borderRadius: '8px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                          <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#F3F0FF', color: '#7C5CFC', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Award size={16} />
                          </div>
                          <div>
                            <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#1E1B39' }}>Sophia Alvarez</div>
                            <div style={{ fontSize: '0.7rem', color: '#7E7A9B' }}>Highest Written Work in Math Quarter 1</div>
                          </div>
                        </div>
                        <span style={{ fontSize: '0.78rem', fontWeight: 800, color: '#7C5CFC' }}>39/40</span>
                      </div>

                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 10px', background: '#FAF9FE', borderRadius: '8px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                          <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#F0F9FF', color: '#0EA5E9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <UserCheck size={16} />
                          </div>
                          <div>
                            <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#1E1B39' }}>Liam Ethan Chen</div>
                            <div style={{ fontSize: '0.7rem', color: '#7E7A9B' }}>100% Attendance for September</div>
                          </div>
                        </div>
                        <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#0EA5E9' }}>Perfect</span>
                      </div>
                    </div>
                  </div>
                </div>
              </main>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
