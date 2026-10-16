import React, { useState, useEffect } from 'react';
import { ExecutiveNavbar } from './components/layout/ExecutiveNavbar';
import { ExecutiveFooter } from './components/layout/ExecutiveFooter';
import { LandingPageStage1 } from './pages/LandingPageStage1';
import { OurApproachStage2 } from './pages/OurApproachStage2';
import { OurTeamStage2 } from './pages/OurTeamStage2';
import { Core9SystemStage3 } from './pages/Core9SystemStage3';
import { BroadcastBlogStage4 } from './pages/BroadcastBlogStage4';
import { DiscoveryInquiryModal } from './components/modals/DiscoveryInquiryModal';

export const App: React.FC = () => {
  // Simple hash-based router for clean navigation and shareable visiting card URLs
  const getInitialRoute = () => {
    const hash = window.location.hash.replace('#', '').toLowerCase();
    if (['approach', 'team', 'system', 'insights'].includes(hash)) {
      return hash;
    }
    return 'home';
  };

  const [currentRoute, setCurrentRoute] = useState<string>(getInitialRoute);
  const [discoveryOpen, setDiscoveryOpen] = useState<boolean>(false);
  const [discoverySource, setDiscoverySource] = useState<string>('General CTA');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (['home', 'approach', 'team', 'system', 'insights'].includes(hash)) {
        setCurrentRoute(hash);
      } else if (!hash) {
        setCurrentRoute('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (route: string) => {
    setCurrentRoute(route);
    window.location.hash = route === 'home' ? '' : route;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenDiscovery = (source: string) => {
    setDiscoverySource(source);
    setDiscoveryOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#070B14] text-[#F9FAFB] selection:bg-[#C59B5F]/20 selection:text-[#E5C185]">
      {/* Executive Navbar */}
      <ExecutiveNavbar
        currentRoute={currentRoute}
        onNavigate={handleNavigate}
        onOpenDiscovery={handleOpenDiscovery}
      />

      {/* Main Content Area based on Route */}
      <div className="flex-1">
        {currentRoute === 'home' && (
          <LandingPageStage1
            onOpenDiscovery={handleOpenDiscovery}
            onNavigateToApproach={() => handleNavigate('approach')}
          />
        )}

        {currentRoute === 'approach' && (
          <OurApproachStage2 onOpenDiscovery={handleOpenDiscovery} />
        )}

        {currentRoute === 'team' && (
          <OurTeamStage2 onOpenDiscovery={handleOpenDiscovery} />
        )}

        {currentRoute === 'system' && (
          <Core9SystemStage3 onOpenDiscovery={handleOpenDiscovery} />
        )}

        {currentRoute === 'insights' && (
          <BroadcastBlogStage4 onOpenDiscovery={handleOpenDiscovery} />
        )}
      </div>

      {/* Executive Footer */}
      <ExecutiveFooter
        onNavigate={handleNavigate}
        onOpenDiscovery={handleOpenDiscovery}
      />

      {/* Central Discovery Safeguard Modal */}
      <DiscoveryInquiryModal
        isOpen={discoveryOpen}
        onClose={() => setDiscoveryOpen(false)}
        initialSource={discoverySource}
      />
    </div>
  );
};

export default App;
