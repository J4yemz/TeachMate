import React from 'react';
import { BookOpen, Heart } from 'lucide-react';

interface FooterProps {
  onOpenAuth: (type: 'signup' | 'login') => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAuth }) => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="logo-brand">
              <div className="logo-icon-box">
                <BookOpen size={20} strokeWidth={2.4} />
              </div>
              <span>TeachMate</span>
            </div>
            <p>Your everyday teaching companion.</p>
            <p style={{ fontSize: '0.84rem', color: '#7E7A9B', marginTop: '8px' }}>
              Dedicated to helping elementary educators reclaim their time and teach with joy.
            </p>
          </div>

          <div className="footer-links-group">
            <div className="footer-col">
              <h4>Product</h4>
              <ul>
                <li><a href="#features">Features</a></li>
                <li><a href="#attendance">Attendance Tracker</a></li>
                <li><a href="#grading">Grade Calculator</a></li>
                <li><a href="#showcase">Dashboard Preview</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Resources</h4>
              <ul>
                <li><a href="#how-it-works">How It Works</a></li>
                <li><a href="#how-it-works">DepEd Formula Guide</a></li>
                <li><a href="#features">Elementary Templates</a></li>
                <li><a href="#features">Help & Guides</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Account</h4>
              <ul>
                <li>
                  <a
                    href="#login"
                    onClick={(e) => {
                      e.preventDefault();
                      onOpenAuth('login');
                    }}
                  >
                    Login
                  </a>
                </li>
                <li>
                  <a
                    href="#signup"
                    onClick={(e) => {
                      e.preventDefault();
                      onOpenAuth('signup');
                    }}
                  >
                    Get Started Free
                  </a>
                </li>
                <li><a href="#features">Privacy Policy</a></li>
                <li><a href="#features">Terms of Service</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div>
            © {new Date().getFullYear()} TeachMate. All rights reserved.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span>Crafted with</span>
            <Heart size={14} style={{ color: '#EF4444', fill: '#EF4444' }} />
            <span>for elementary school teachers</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
