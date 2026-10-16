import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { BUSINESS_COPY } from '../../data/businessCopyDeck';

interface ExecutiveNavbarProps {
  currentRoute: string;
  onNavigate: (route: string) => void;
  onOpenDiscovery: (source: string) => void;
}

export const ExecutiveNavbar: React.FC<ExecutiveNavbarProps> = ({
  currentRoute,
  onNavigate,
  onOpenDiscovery,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: BUSINESS_COPY.NAV_LINK_HOME },
    { id: 'approach', label: BUSINESS_COPY.NAV_LINK_APPROACH },
    { id: 'team', label: BUSINESS_COPY.NAV_LINK_TEAM },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-[#070B14]/85 border-b border-white/10 transition-colors">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 h-20 flex items-center justify-between">
        
        {/* Brand Left */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-2 group text-left cursor-pointer focus:outline-none"
        >
          {/* Subtle architectural geometric glyph */}
          <div className="w-8 h-8 rounded border border-[#C59B5F]/60 flex items-center justify-center bg-[#111726] shadow-sm group-hover:border-[#E5C185] transition-all">
            <span className="font-mono text-xs font-bold text-[#E5C185]">9</span>
          </div>
          <div>
            <span className="font-headline font-bold text-lg sm:text-xl tracking-tight text-[#F9FAFB] group-hover:text-white transition-colors">
              {BUSINESS_COPY.NAV_BRAND}
            </span>
            <span className="hidden sm:inline-block ml-2 text-[10px] font-mono uppercase tracking-[0.18em] text-[#C59B5F] bg-[#C59B5F]/10 px-2 py-0.5 rounded border border-[#C59B5F]/20">
              Business
            </span>
          </div>
        </button>

        {/* Desktop Links Center */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navItems.map((item) => {
            const isActive = currentRoute === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`transition-colors py-1 relative cursor-pointer ${
                  isActive
                    ? 'text-white font-semibold'
                    : 'text-[#9CA3AF] hover:text-white'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C59B5F] rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Desktop Primary CTA Right */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={() => onOpenDiscovery('Navigation CTA')}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-[#070B14] bg-[#C59B5F] hover:bg-[#d6aa6d] border border-[#E5C185]/40 shadow-sm transition-all hover:shadow-[#C59B5F]/20 cursor-pointer"
          >
            <span>{BUSINESS_COPY.NAV_CTA_PRIMARY}</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-3">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-gray-400 hover:text-white focus:outline-none rounded-lg hover:bg-white/5"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-white/10 bg-[#111726] px-6 py-6 space-y-4 animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-3">
            {navItems.map((item) => {
              const isActive = currentRoute === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-left py-2 text-base font-medium transition-colors ${
                    isActive ? 'text-[#E5C185] font-semibold' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          <div className="pt-4 border-t border-white/10">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDiscovery('Mobile Menu CTA');
              }}
              className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-sm font-semibold text-[#070B14] bg-[#C59B5F] hover:bg-[#d6aa6d] border border-[#E5C185]/40 transition-all cursor-pointer"
            >
              <span>{BUSINESS_COPY.NAV_CTA_PRIMARY}</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
