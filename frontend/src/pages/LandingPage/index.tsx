import React, { useState } from 'react';
import { Navbar } from './Navbar';
import { HeroSection } from './HeroSection';
import { TrustSection } from './TrustSection';
import { FeaturesSection } from './FeaturesSection';
import { AttendanceSection } from './AttendanceSection';
import { GradingSection } from './GradingSection';
import { HowItWorksSection } from './HowItWorksSection';
import { DashboardPreviewSection } from './DashboardPreviewSection';
import { CtaSection } from './CtaSection';
import { Footer } from './Footer';
import { AuthModal } from './AuthModal';

export const LandingPage: React.FC = () => {
  const [modalType, setModalType] = useState<'signup' | 'login' | null>(null);

  const handleOpenAuth = (type: 'signup' | 'login') => {
    setModalType(type);
  };

  const handleCloseAuth = () => {
    setModalType(null);
  };

  return (
    <div className="teachmate-app">
      {/* 1. Navigation Bar */}
      <Navbar onOpenAuth={handleOpenAuth} />

      {/* 2. Hero Section */}
      <HeroSection onOpenAuth={handleOpenAuth} />

      {/* 3. Trust / Value Section */}
      <TrustSection />

      {/* 4. Features Section */}
      <FeaturesSection />

      {/* 5. Feature Highlight: Attendance (Interactive) */}
      <AttendanceSection onOpenAuth={handleOpenAuth} />

      {/* 6. Feature Highlight: Grading (Interactive) */}
      <GradingSection onOpenAuth={handleOpenAuth} />

      {/* 7. How It Works */}
      <HowItWorksSection />

      {/* 8. Dashboard Preview (Full Showcase) */}
      <DashboardPreviewSection />

      {/* 9. Final CTA */}
      <CtaSection onOpenAuth={handleOpenAuth} />

      {/* 10. Footer */}
      <Footer onOpenAuth={handleOpenAuth} />

      {/* Interactive Auth Modal */}
      <AuthModal
        modalType={modalType}
        onClose={handleCloseAuth}
        onSwitchType={setModalType}
      />
    </div>
  );
};

export default LandingPage;
