import React, { useState, useEffect } from 'react';
import { BookOpen, ArrowRight, Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenAuth: (type: 'signup' | 'login') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAuth }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile/tablet menu only when expanding to desktop (> 1024px)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Lock body scroll when mobile/tablet drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  const handleToggleMenu = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setMobileMenuOpen((prev) => !prev);
  };

  return (
    <>
      <header className="navbar">
        <div className="container nav-inner">
          <a href="#" className="logo-brand" onClick={handleNavClick}>
            <div className="logo-icon-box">
              <BookOpen size={20} strokeWidth={2.4} />
            </div>
            <span className="logo-text">TeachMate</span>
            <span className="logo-badge">For Elementary</span>
          </a>

          <nav className="desktop-nav">
            <ul className="nav-links">
              <li><a href="#features" className="nav-link">Features</a></li>
              <li><a href="#attendance" className="nav-link">Attendance</a></li>
              <li><a href="#grading" className="nav-link">Grading</a></li>
              <li><a href="#how-it-works" className="nav-link">How It Works</a></li>
              <li><a href="#showcase" className="nav-link">Preview</a></li>
            </ul>
          </nav>

          <div className="nav-actions">
            <button
              type="button"
              className="btn-ghost nav-btn-login"
              onClick={() => onOpenAuth('login')}
            >
              Log in
            </button>
            <button
              type="button"
              className="btn-primary nav-btn-signup"
              onClick={() => onOpenAuth('signup')}
            >
              <span className="btn-signup-text">Get Started</span>
              <span className="btn-signup-subtext"> Free</span>
              <ArrowRight size={15} />
            </button>

            <button
              type="button"
              className="mobile-toggle"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
              onClick={handleToggleMenu}
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile & Tablet Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="mobile-nav-drawer" onClick={(e) => e.stopPropagation()}>
            <a
              href="#features"
              className="mobile-nav-item"
              onClick={handleNavClick}
            >
              Features
            </a>
            <a
              href="#attendance"
              className="mobile-nav-item"
              onClick={handleNavClick}
            >
              Attendance
            </a>
            <a
              href="#grading"
              className="mobile-nav-item"
              onClick={handleNavClick}
            >
              Grading
            </a>
            <a
              href="#how-it-works"
              className="mobile-nav-item"
              onClick={handleNavClick}
            >
              How It Works
            </a>
            <a
              href="#showcase"
              className="mobile-nav-item"
              onClick={handleNavClick}
            >
              Preview
            </a>

            <div className="mobile-drawer-actions">
              <button
                type="button"
                className="btn-secondary"
                style={{ width: '100%', justifyContent: 'center' }}
                onClick={() => { handleNavClick(); onOpenAuth('login'); }}
              >
                Log In
              </button>
              <button
                type="button"
                className="btn-primary"
                style={{ width: '100%', justifyContent: 'center' }}
                onClick={() => { handleNavClick(); onOpenAuth('signup'); }}
              >
                Get Started Free
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Backdrop overlay for mobile menu drawer */}
      {mobileMenuOpen && (
        <div
          className="mobile-drawer-backdrop"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
};
