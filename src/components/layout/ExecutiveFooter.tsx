import React from 'react';
import { ArrowUpRight, Mail, Lock } from 'lucide-react';

import { BUSINESS_COPY } from '../../data/businessCopyDeck';

interface ExecutiveFooterProps {
  onNavigate: (route: string) => void;
  onOpenDiscovery: (source: string) => void;
}

export const ExecutiveFooter: React.FC<ExecutiveFooterProps> = ({
  onNavigate,
  onOpenDiscovery,
}) => {
  return (
    <footer className="w-full bg-[#070B14] border-t border-white/10 text-gray-400 py-16 px-6 sm:px-8 lg:px-12">
      <div className="max-w-6xl mx-auto">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand & Purpose Column */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 rounded border border-[#C59B5F]/60 flex items-center justify-center bg-[#111726]">
                <span className="font-mono text-xs font-bold text-[#E5C185]">9</span>
              </div>
              <span className="font-headline font-bold text-lg text-white tracking-tight">
                {BUSINESS_COPY.NAV_BRAND}
              </span>
              <span className="text-[10px] font-mono uppercase tracking-[0.18em] text-[#C59B5F] bg-[#C59B5F]/10 px-2 py-0.5 rounded border border-[#C59B5F]/20">
                Business
              </span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed max-w-sm mb-6">
              A proprietary whole-system advisory methodology. Identifying hidden structural and functional disconnects, aligning moving parts, and transforming potential into measurable profitability.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-[#E5C185]">
              <Mail className="w-3.5 h-3.5 text-[#C59B5F]" />
              <span>advisory@core9resolve.com</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3">
            <h4 className="font-mono text-xs uppercase tracking-[0.18em] text-[#C59B5F] mb-4 font-semibold">
              Architecture
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  {BUSINESS_COPY.NAV_LINK_HOME}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('approach')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  {BUSINESS_COPY.NAV_LINK_APPROACH} & Diagnostics
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('team')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  {BUSINESS_COPY.NAV_LINK_TEAM}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('system')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  The Living-System Framework
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('insights')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Insights & Strategic Broadcasts
                </button>
              </li>
              <li className="pt-2 border-t border-white/5">
                <a
                  href="./styleguide-studio.html"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#E5C185] transition-colors cursor-pointer text-left text-xs font-mono inline-flex items-center gap-1.5 text-[#C59B5F]"
                >
                  <span>Styleguide Studio</span>
                  <span className="text-[10px]">↗</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Separation of Worlds Notice & Authorship */}
          <div className="md:col-span-4">
            <h4 className="font-mono text-xs uppercase tracking-[0.18em] text-[#C59B5F] mb-4 font-semibold">
              Separation of Worlds
            </h4>
            <div className="p-4 rounded-lg bg-[#111726] border border-white/10 text-xs space-y-2 mb-4">
              <div className="flex items-center gap-1.5 text-gray-300 font-medium">
                <Lock className="w-3.5 h-3.5 text-[#C59B5F]" />
                <span>Door 1: Commercial & Enterprise Door</span>
              </div>
              <p className="text-gray-400 leading-relaxed text-[11px]">
                CORE9 RESOLVE™ Business operates as a structured executive door. The SAGE experiential playground for human potential is maintained in a completely distinct environment.
              </p>
            </div>
            <button
              onClick={() => onOpenDiscovery('Footer Discovery CTA')}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#111726] hover:bg-[#162038] border border-[#C59B5F]/40 hover:border-[#E5C185] text-[#E5C185] text-xs font-mono uppercase tracking-wider transition-all cursor-pointer"
            >
              <span>{BUSINESS_COPY.NAV_CTA_PRIMARY}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Bottom Attribution & Legal */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-gray-500">
          <div>
            © {new Date().getFullYear()} CORE9 RESOLVE™ Business. All rights reserved.
          </div>
          <div className="text-center md:text-right">
            Methodology by Svetlana Pritzker & Vasili Cojemeachin • Digital Architecture by Brian Krawitz
          </div>
        </div>

      </div>
    </footer>
  );
};
