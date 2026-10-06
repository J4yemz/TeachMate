import React, { useState } from 'react';
import { CalendarCheck, Check, ChevronRight } from 'lucide-react';

interface AttendanceRecord {
  id: string;
  name: string;
  gender: 'M' | 'F';
  status: 'present' | 'late' | 'absent' | 'excused';
}

interface AttendanceSectionProps {
  onOpenAuth: (type: 'signup' | 'login') => void;
}

export const AttendanceSection: React.FC<AttendanceSectionProps> = ({ onOpenAuth }) => {
  const [attendanceList, setAttendanceList] = useState<AttendanceRecord[]>([
    { id: 'TM-01', name: 'Sophia Alvarez', gender: 'F', status: 'present' },
    { id: 'TM-02', name: 'Liam Ethan Chen', gender: 'M', status: 'present' },
    { id: 'TM-03', name: 'Mateo De Leon', gender: 'M', status: 'late' },
    { id: 'TM-04', name: 'Emma Rose Rivera', gender: 'F', status: 'present' },
    { id: 'TM-05', name: 'Lucas Bautista', gender: 'M', status: 'absent' },
  ]);

  const totalStudents = attendanceList.length;
  const presentCount = attendanceList.filter((s) => s.status === 'present').length;
  const lateCount = attendanceList.filter((s) => s.status === 'late').length;
  const absentCount = attendanceList.filter((s) => s.status === 'absent').length;
  const attendanceRate = Math.round(((presentCount + lateCount) / totalStudents) * 100);

  const setAllAttendance = (status: 'present' | 'absent') => {
    setAttendanceList((prev) => prev.map((s) => ({ ...s, status })));
  };

  const updateStudentStatus = (id: string, status: 'present' | 'late' | 'absent' | 'excused') => {
    setAttendanceList((prev) =>
      prev.map((s) => (s.id === id ? { ...s, status } : s))
    );
  };

  return (
    <section id="attendance" className="split-highlight-section">
      <div className="container">
        <div className="split-grid">
          {/* Left side: Interactive Attendance Dashboard Preview */}
          <div className="interactive-card-frame">
            <div className="card-header-bar">
              <div>
                <div className="card-header-title">Daily Attendance Tracker</div>
                <div className="card-header-sub">Grade 4 - St. Francis • Morning Session</div>
              </div>
              <div className="date-pill">
                <CalendarCheck size={14} style={{ color: '#7C5CFC' }} />
                <span>Today, October 6</span>
              </div>
            </div>

            {/* Attendance Quick Filters & Batch Action */}
            <div className="attendance-actions-bar">
              <div className="summary-pill-group">
                <span className="count-chip" style={{ background: '#ECFDF5', color: '#065F46' }}>
                  {presentCount} Present
                </span>
                <span className="count-chip" style={{ background: '#FFFBEB', color: '#92400E' }}>
                  {lateCount} Late
                </span>
                <span className="count-chip" style={{ background: '#FEF2F2', color: '#991B1B' }}>
                  {absentCount} Absent
                </span>
              </div>

              <button
                className="btn-quick-toggle"
                onClick={() => setAllAttendance('present')}
              >
                Mark All Present
              </button>
            </div>

            {/* Interactive Student Attendance Rows */}
            <div className="attendance-interactive-list">
              <div style={{ fontSize: '0.78rem', color: '#7E7A9B', marginBottom: '8px', fontWeight: 600 }}>
                Click a status button below to simulate marking student attendance:
              </div>
              {attendanceList.map((student) => (
                <div key={student.id} className="att-row">
                  <div className="att-student-info">
                    <div className="student-avatar">
                      {student.name.split(' ').map(n => n[0]).slice(0, 2).join('')}
                    </div>
                    <div>
                      <div className="student-name">{student.name}</div>
                      <div className="student-id">ID: {student.id}</div>
                    </div>
                  </div>

                  <div className="att-pill-selector">
                    <button
                      className={`att-btn ${student.status === 'present' ? 'active-present' : ''}`}
                      onClick={() => updateStudentStatus(student.id, 'present')}
                    >
                      Present
                    </button>
                    <button
                      className={`att-btn ${student.status === 'late' ? 'active-late' : ''}`}
                      onClick={() => updateStudentStatus(student.id, 'late')}
                    >
                      Late
                    </button>
                    <button
                      className={`att-btn ${student.status === 'absent' ? 'active-absent' : ''}`}
                      onClick={() => updateStudentStatus(student.id, 'absent')}
                    >
                      Absent
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="grading-calc-footer">
              <div>
                Daily Attendance Rate: <strong style={{ color: '#10B981' }}>{attendanceRate}%</strong>
              </div>
              <div style={{ fontSize: '0.76rem', color: '#7E7A9B' }}>
                Auto-saved to Monthly SF2 Sheet
              </div>
            </div>
          </div>

          {/* Right side: Attendance Value Pitch */}
          <div className="split-text-col">
            <div className="split-eyebrow">
              <CalendarCheck size={16} />
              <span>ATTENDANCE</span>
            </div>
            <h2 className="split-headline">Know who is present at a glance.</h2>
            <p className="split-desc">
              Quickly record attendance for every class and monitor attendance trends
              without maintaining separate spreadsheets or tallying manual logbooks.
            </p>

            <ul className="feature-checklist">
              <li className="feature-check-item">
                <div className="check-circle"><Check size={14} /></div>
                <span>Mark attendance quickly with one-click presets</span>
              </li>
              <li className="feature-check-item">
                <div className="check-circle"><Check size={14} /></div>
                <span>View attendance history across weeks and months</span>
              </li>
              <li className="feature-check-item">
                <div className="check-circle"><Check size={14} /></div>
                <span>Track present, absent, and late students automatically</span>
              </li>
              <li className="feature-check-item">
                <div className="check-circle"><Check size={14} /></div>
                <span>See attendance percentages ready for school report cards</span>
              </li>
            </ul>

            <button
              className="btn-primary"
              onClick={() => onOpenAuth('signup')}
            >
              Explore Attendance
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
