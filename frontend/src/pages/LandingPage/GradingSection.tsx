import React, { useState } from 'react';
import { Calculator, Check, ChevronRight, CheckCircle2 } from 'lucide-react';

interface StudentGradeRecord {
  id: string;
  name: string;
  written: number; // Max 40
  perf: number;    // Max 50
  exam: number;    // Max 50
}

interface GradingSectionProps {
  onOpenAuth: (type: 'signup' | 'login') => void;
}

export const GradingSection: React.FC<GradingSectionProps> = ({ onOpenAuth }) => {
  const [gradingList, setGradingList] = useState<StudentGradeRecord[]>([
    { id: 'TM-01', name: 'Sophia Alvarez', written: 38, perf: 48, exam: 46 },
    { id: 'TM-02', name: 'Liam Ethan Chen', written: 35, perf: 46, exam: 44 },
    { id: 'TM-03', name: 'Mateo De Leon', written: 31, perf: 42, exam: 39 },
    { id: 'TM-04', name: 'Emma Rose Rivera', written: 39, perf: 49, exam: 48 },
  ]);

  // DepEd Elementary Grading standard representation (30% Written, 50% Performance, 20% Quarterly Exam)
  const calculateFinalGrade = (w: number, p: number, e: number) => {
    const wPct = (w / 40) * 100;
    const pPct = (p / 50) * 100;
    const ePct = (e / 50) * 100;
    const initial = wPct * 0.3 + pPct * 0.5 + ePct * 0.2;
    return Math.round(initial);
  };

  const updateStudentScore = (id: string, field: 'written' | 'perf' | 'exam', val: number) => {
    setGradingList((prev) =>
      prev.map((s) => (s.id === id ? { ...s, [field]: Number.isNaN(val) ? 0 : val } : s))
    );
  };

  const averageClassGrade = Math.round(
    gradingList.reduce((acc, curr) => acc + calculateFinalGrade(curr.written, curr.perf, curr.exam), 0) /
      gradingList.length
  );

  return (
    <section id="grading" className="split-highlight-section alt-bg">
      <div className="container">
        <div className="split-grid reverse-mobile">
          {/* Left side: Grading Value Pitch */}
          <div className="split-text-col">
            <div className="split-eyebrow">
              <Calculator size={16} />
              <span>GRADING</span>
            </div>
            <h2 className="split-headline">Take the manual work out of grading.</h2>
            <p className="split-desc">
              Enter student scores and let TeachMate handle the calculations so you can focus
              more on teaching and less on spreadsheets.
            </p>

            <ul className="feature-checklist">
              <li className="feature-check-item">
                <div className="check-circle"><Check size={14} /></div>
                <span>Record student scores across quizzes, tasks, and periodic tests</span>
              </li>
              <li className="feature-check-item">
                <div className="check-circle"><Check size={14} /></div>
                <span>Automatically calculate grades with standard weighted formulas</span>
              </li>
              <li className="feature-check-item">
                <div className="check-circle"><Check size={14} /></div>
                <span>View individual student performance and identify pupils who need help</span>
              </li>
              <li className="feature-check-item">
                <div className="check-circle"><Check size={14} /></div>
                <span>Monitor class averages in real time</span>
              </li>
              <li className="feature-check-item">
                <div className="check-circle"><Check size={14} /></div>
                <span>Keep grading organized without broken Excel formulas</span>
              </li>
            </ul>

            <button
              className="btn-primary"
              onClick={() => onOpenAuth('signup')}
            >
              Calculate Your Class Grades
              <ChevronRight size={16} />
            </button>
          </div>

          {/* Right side: Interactive Grading Dashboard Preview */}
          <div className="interactive-card-frame">
            <div className="card-header-bar">
              <div>
                <div className="card-header-title">Grading Sheet — Science 4</div>
                <div className="card-header-sub">Grading Weights: Written (30%) • Perf (50%) • Exam (20%)</div>
              </div>
              <div className="date-pill" style={{ background: '#F3F0FF', borderColor: '#DDD6FE', color: '#7C5CFC' }}>
                <span>DepEd Standard</span>
              </div>
            </div>

            <div style={{ overflowX: 'auto' }}>
              <table className="grading-table">
                <thead>
                  <tr>
                    <th>Student</th>
                    <th>Written (40)</th>
                    <th>Perf (50)</th>
                    <th>Exam (50)</th>
                    <th>Final Grade</th>
                  </tr>
                </thead>
                <tbody>
                  {gradingList.map((student) => {
                    const finalGrade = calculateFinalGrade(student.written, student.perf, student.exam);
                    return (
                      <tr key={student.id}>
                        <td>
                          <div style={{ fontWeight: 700, color: '#1E1B39' }}>{student.name}</div>
                          <div style={{ fontSize: '0.72rem', color: '#7E7A9B' }}>{student.id}</div>
                        </td>
                        <td>
                          <input
                            type="number"
                            className="score-input-pill"
                            min={0}
                            max={40}
                            value={student.written}
                            onChange={(e) => updateStudentScore(student.id, 'written', parseInt(e.target.value))}
                          />
                        </td>
                        <td>
                          <input
                            type="number"
                            className="score-input-pill"
                            min={0}
                            max={50}
                            value={student.perf}
                            onChange={(e) => updateStudentScore(student.id, 'perf', parseInt(e.target.value))}
                          />
                        </td>
                        <td>
                          <input
                            type="number"
                            className="score-input-pill"
                            min={0}
                            max={50}
                            value={student.exam}
                            onChange={(e) => updateStudentScore(student.id, 'exam', parseInt(e.target.value))}
                          />
                        </td>
                        <td>
                          <span className="grade-pill-highlight">
                            Final: {finalGrade}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <div className="grading-calc-footer">
              <div>
                Class Average: <strong style={{ color: '#7C5CFC', fontSize: '0.95rem' }}>{averageClassGrade}%</strong>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#10B981', fontWeight: 700 }}>
                <CheckCircle2 size={15} />
                <span>Instant DepEd Transmutation</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
