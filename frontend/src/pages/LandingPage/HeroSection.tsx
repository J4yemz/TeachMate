import React from 'react';
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Users,
  UserCheck,
  Award,
  ShieldCheck,
  BookOpen,
  LayoutDashboard,
  GraduationCap,
  CalendarCheck,
  Calculator,
  Settings,
  Check,
  Clock,
  AlertCircle
} from 'lucide-react';

interface HeroSectionProps {
  onOpenAuth: (type: 'signup' | 'login') => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenAuth }) => {
  return (
    <section className="hero-section">
      <div className="hero-bg-accent" />
      <div className="container hero-content">
        <div className="hero-pill">
          <Sparkles size={15} className="hero-pill-sparkle" />
          <span>Built Specifically for Elementary Teachers</span>
        </div>

        <h1 className="hero-headline">
          Spend Less Time Managing Grades.{' '}
          <span className="highlight">More Time Teaching.</span>
        </h1>

        <p className="hero-subtext">
          TeachMate helps elementary teachers organize their students, track attendance,
          and manage grades with less manual work.
        </p>

        <div className="hero-ctas">
          <button
            className="btn-primary"
            style={{ padding: '14px 28px', fontSize: '1.05rem' }}
            onClick={() => onOpenAuth('signup')}
          >
            Get Started Free
            <ArrowRight size={18} />
          </button>
          <a
            href="#how-it-works"
            className="btn-secondary"
            style={{ padding: '14px 26px', fontSize: '1.05rem' }}
          >
            See How It Works
          </a>
        </div>

        <div className="hero-micro-trust">
          <div className="trust-bullet">
            <CheckCircle2 size={16} />
            <span>No credit card required</span>
          </div>
          <div className="trust-bullet">
            <CheckCircle2 size={16} />
            <span>DepEd-aligned grading formulas</span>
          </div>
          <div className="trust-bullet">
            <CheckCircle2 size={16} />
            <span>Setup in 3 minutes</span>
          </div>
        </div>
      </div>

      {/* Hero Visual: Realistic Teacher Dashboard on Browser Mockup */}
      <div className="container hero-mockup-wrapper">
        {/* Floating UI Badges */}
        <div className="floating-badge badge-students">
          <div className="floating-icon icon-purple">
            <Users size={20} />
          </div>
          <div>
            <div className="badge-val">28 Students</div>
            <div className="badge-lbl">Grade 4 - St. Francis</div>
          </div>
        </div>

        <div className="floating-badge badge-attendance">
          <div className="floating-icon icon-emerald">
            <UserCheck size={20} />
          </div>
          <div>
            <div className="badge-val">95% Attendance</div>
            <div className="badge-lbl">27/28 Present Today</div>
          </div>
        </div>

        <div className="floating-badge badge-average">
          <div className="floating-icon icon-blue">
            <Award size={20} />
          </div>
          <div>
            <div className="badge-val">Class Average: 89.4</div>
            <div className="badge-lbl">Quarter 1 Performance</div>
          </div>
        </div>

        {/* Browser Window Mockup */}
        <div className="browser-window">
          <div className="browser-topbar">
            <div className="window-dots">
              <span className="dot dot-red" />
              <span className="dot dot-yellow" />
              <span className="dot dot-green" />
            </div>
            <div className="browser-url-pill">
              <ShieldCheck size={13} style={{ color: '#10B981' }} />
              <span>teachmate.app/dashboard/grade4-st-francis</span>
            </div>
          </div>

          <div className="mockup-app">
            {/* Sidebar */}
            <aside className="mockup-sidebar">
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '6px 10px', marginBottom: '10px' }}>
                <div style={{ width: '28px', height: '28px', borderRadius: '8px', background: '#7C5CFC', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
                  <BookOpen size={16} />
                </div>
                <strong style={{ fontSize: '0.9rem', color: '#1E1B39' }}>TeachMate</strong>
              </div>

              <div className="mockup-nav-item active">
                <LayoutDashboard size={16} />
                <span>Dashboard</span>
              </div>
              <div className="mockup-nav-item">
                <GraduationCap size={16} />
                <span>My Classes</span>
              </div>
              <div className="mockup-nav-item">
                <Users size={16} />
                <span>Students</span>
              </div>
              <div className="mockup-nav-item">
                <CalendarCheck size={16} />
                <span>Attendance</span>
              </div>
              <div className="mockup-nav-item">
                <Calculator size={16} />
                <span>Grades</span>
              </div>
              <div className="mockup-nav-item" style={{ marginTop: 'auto' }}>
                <Settings size={16} />
                <span>Settings</span>
              </div>
            </aside>

            {/* Main Content Preview */}
            <div className="mockup-main">
              <div className="mockup-top-header">
                <div>
                  <h3 className="mockup-title">Grade 4 — St. Francis</h3>
                  <p className="mockup-sub">Adviser: Teacher Sarah Martinez • Room 204</p>
                </div>
                <div className="class-pill-selector">
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10B981' }} />
                  <span>Quarter 1 • Active</span>
                </div>
              </div>

              {/* 3 Metric Summary Cards */}
              <div className="mockup-stats-grid">
                <div className="stat-card-mini">
                  <div className="stat-icon icon-purple">
                    <Users size={18} />
                  </div>
                  <div className="stat-meta">
                    <h4>28</h4>
                    <p>Total Students</p>
                  </div>
                </div>
                <div className="stat-card-mini">
                  <div className="stat-icon icon-emerald">
                    <CalendarCheck size={18} />
                  </div>
                  <div className="stat-meta">
                    <h4>96.4%</h4>
                    <p>Today's Attendance</p>
                  </div>
                </div>
                <div className="stat-card-mini">
                  <div className="stat-icon icon-blue">
                    <Award size={18} />
                  </div>
                  <div className="stat-meta">
                    <h4>89.4</h4>
                    <p>Quarter Average</p>
                  </div>
                </div>
              </div>

              {/* Dual Column in Mockup */}
              <div className="mockup-grid-cols">
                {/* Attendance Activity */}
                <div className="mockup-panel">
                  <div className="panel-header">
                    <h5>Recent Attendance (Today)</h5>
                    <span className="panel-badge" style={{ background: '#ECFDF5', color: '#065F46' }}>
                      27 Present
                    </span>
                  </div>
                  <table className="micro-table">
                    <thead>
                      <tr>
                        <th>Student</th>
                        <th>Time</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><strong>Sophia Alvarez</strong></td>
                        <td>7:45 AM</td>
                        <td><span className="status-chip present"><Check size={11} /> Present</span></td>
                      </tr>
                      <tr>
                        <td><strong>Mateo De Leon</strong></td>
                        <td>8:05 AM</td>
                        <td><span className="status-chip late"><Clock size={11} /> Late (10m)</span></td>
                      </tr>
                      <tr>
                        <td><strong>Lucas Bautista</strong></td>
                        <td>—</td>
                        <td><span className="status-chip absent"><AlertCircle size={11} /> Absent</span></td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Grade Overview */}
                <div className="mockup-panel">
                  <div className="panel-header">
                    <h5>Grade Overview (Science)</h5>
                    <span className="panel-badge" style={{ background: '#F3F0FF', color: '#7C5CFC' }}>
                      DepEd Formula
                    </span>
                  </div>
                  <table className="micro-table">
                    <thead>
                      <tr>
                        <th>Student</th>
                        <th>Written (30%)</th>
                        <th>Perf (50%)</th>
                        <th>Final</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><strong>Sophia Alvarez</strong></td>
                        <td>38/40</td>
                        <td>48/50</td>
                        <td><strong style={{ color: '#7C5CFC' }}>94</strong></td>
                      </tr>
                      <tr>
                        <td><strong>Liam Chen</strong></td>
                        <td>35/40</td>
                        <td>46/50</td>
                        <td><strong style={{ color: '#7C5CFC' }}>91</strong></td>
                      </tr>
                      <tr>
                        <td><strong>Emma Rivera</strong></td>
                        <td>39/40</td>
                        <td>49/50</td>
                        <td><strong style={{ color: '#7C5CFC' }}>96</strong></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
