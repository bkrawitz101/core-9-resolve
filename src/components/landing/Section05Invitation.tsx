import React from 'react';
import { ArrowRight, ShieldCheck, Mail } from 'lucide-react';
import { BUSINESS_COPY } from '../../data/businessCopyDeck';
import { ArchitecturalConvergenceSvg } from './ArchitecturalConvergenceSvg';

interface Section05InvitationProps {
  onOpenDiscovery: (source: string) => void;
}

export const Section05Invitation: React.FC<Section05InvitationProps> = ({
  onOpenDiscovery,
}) => {
  return (
    <section className="relative bg-[#070B14] py-24 sm:py-32 lg:py-40 text-[#F9FAFB] overflow-hidden">
      {/* Background Converging Vectors Frame */}
      <ArchitecturalConvergenceSvg variant="invitation" />

      {/* Ambient Top Glow */}
      <div 
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-80 bg-radial from-[#162038]/40 via-transparent to-transparent" 
        aria-hidden="true" 
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 text-center flex flex-col items-center">
        {/* Primary Invitation Headline */}
        <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F9FAFB] leading-[1.12] mb-6 max-w-3xl">
          {BUSINESS_COPY.S5_H2}
        </h2>

        {/* Executive Body Copy */}
        <p className="text-lg sm:text-xl text-[#9CA3AF] leading-relaxed max-w-2xl mb-10">
          {BUSINESS_COPY.S5_BODY}
        </p>

        {/* Primary CTA Button */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-10">
          <button
            onClick={() => onOpenDiscovery('Invitation Section Button (S5_CTA_PRIMARY)')}
            className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#C59B5F] hover:bg-[#d6aa6d] text-[#070B14] font-semibold text-base rounded-lg border border-[#E5C185] shadow-lg shadow-[#C59B5F]/20 hover:shadow-[#C59B5F]/35 transition-all duration-200 cursor-pointer"
          >
            <span>{BUSINESS_COPY.S5_CTA_PRIMARY}</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Confidentiality & Direct Contact Information */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-gray-400 pt-4 border-t border-white/10 w-full max-w-md">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#C59B5F]" />
            <span>Strict Executive Confidentiality</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Mail className="w-4 h-4 text-[#C59B5F]" />
            <span>advisory@core9resolve.com</span>
          </div>
        </div>

      </div>
    </section>
  );
};
