import React from 'react';
import { ArrowRight, Compass } from 'lucide-react';
import { BUSINESS_COPY } from '../../data/businessCopyDeck';
import { ArchitecturalConvergenceSvg } from './ArchitecturalConvergenceSvg';

interface Section01HeroProps {
  onOpenDiscovery: (source: string) => void;
}

export const Section01Hero: React.FC<Section01HeroProps> = ({ onOpenDiscovery }) => {
  return (
    <section className="relative min-h-[85vh] lg:min-h-[92vh] flex items-center justify-center bg-[#070B14] py-20 lg:py-28 overflow-hidden border-b border-white/10">
      {/* Background Architectural Convergence Vector System */}
      <ArchitecturalConvergenceSvg variant="hero" />

      {/* Subtle Top Radial Illumination */}
      <div 
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 hero-radial-glow" 
        aria-hidden="true" 
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 text-center flex flex-col items-center">
        
        {/* Section Eyebrow */}
        <div className="inline-flex items-center gap-2 mb-6 sm:mb-8">
          <span className="font-mono text-xs uppercase tracking-[0.18em] text-[#C59B5F] bg-[#111726]/80 px-3.5 py-1.5 rounded-full border border-[#C59B5F]/30 backdrop-blur-sm shadow-sm">
            {BUSINESS_COPY.S1_EYEBROW}
          </span>
        </div>

        {/* Primary Authority Headline */}
        <h1 className="font-headline text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#F9FAFB] leading-[1.08] mb-8 max-w-3xl">
          {BUSINESS_COPY.S1_H1}
        </h1>

        {/* Three Architectural Paragraphs */}
        <div className="space-y-4 max-w-2xl mb-10 text-base sm:text-lg leading-relaxed text-[#9CA3AF]">
          <p className="text-gray-300">
            {BUSINESS_COPY.S1_P1}
          </p>
          <p className="text-gray-400">
            {BUSINESS_COPY.S1_P2}
          </p>
          <p className="text-[#F9FAFB] font-medium pt-1">
            {BUSINESS_COPY.S1_P3}
          </p>
        </div>

        {/* Primary Executive CTA Button */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <button
            onClick={() => onOpenDiscovery('Hero Section Button (S1_CTA_PRIMARY)')}
            className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#C59B5F] hover:bg-[#d6aa6d] text-[#070B14] font-semibold text-base rounded-lg border border-[#E5C185] shadow-lg shadow-[#C59B5F]/15 hover:shadow-[#C59B5F]/30 transition-all duration-200 cursor-pointer"
          >
            <span>{BUSINESS_COPY.S1_CTA_PRIMARY}</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Subtle Architectural Coordinate Footnote */}
        <div className="mt-14 inline-flex items-center gap-2 text-xs font-mono text-gray-500 tracking-wider">
          <Compass className="w-3.5 h-3.5 text-[#C59B5F]/70" />
          <span>PROPRIETARY WHOLE-SYSTEM ARCHITECTURAL DIAGNOSTICS</span>
        </div>

      </div>
    </section>
  );
};
