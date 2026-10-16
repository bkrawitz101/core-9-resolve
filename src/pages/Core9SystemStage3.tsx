import React from 'react';
import { ArrowRight, Layers } from 'lucide-react';

import { BUSINESS_COPY } from '../data/businessCopyDeck';

interface Core9SystemStage3Props {
  onOpenDiscovery: (source: string) => void;
}

export const Core9SystemStage3: React.FC<Core9SystemStage3Props> = ({ onOpenDiscovery }) => {
  const spheres = [
    { title: 'Leadership & Vision', desc: 'Directing orientation, strategic coherence, and foundational mandate.', code: 'SPHERE 01' },
    { title: 'Functional Synchronization', desc: 'Connecting distinct roles, people, and competencies across all departments.', code: 'SPHERE 02' },
    { title: 'Operational Architecture', desc: 'Optimizing procedural workflows, decision pathways, and resource movement.', code: 'SPHERE 03' },
    { title: 'Execution & Evolution', desc: 'Measuring performance, validating milestones, and compounding systemic value.', code: 'SPHERE 04' },
  ];

  return (
    <div className="w-full bg-[#070B14] text-[#F9FAFB] py-16 sm:py-24">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        
        {/* Header */}
        <div className="mb-14">
          <span className="font-mono text-xs uppercase tracking-[0.18em] text-[#C59B5F] bg-[#111726] px-3.5 py-1.5 rounded border border-[#C59B5F]/30">
            Systemic Architecture • Stage 3
          </span>
          <h1 className="font-headline text-3xl sm:text-5xl font-bold tracking-tight text-white mt-4 mb-4">
            The Living-System Framework
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl leading-relaxed">
            Every organization functions as a dynamic organism. We analyze the relational fabric between parts to eliminate hidden friction and unlock organic execution.
          </p>
        </div>

        {/* Four Spheres of Organizational Vitality */}
        <div className="mb-16">
          <h2 className="font-headline text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <Layers className="w-5 h-5 text-[#C59B5F]" />
            <span>The Four Structural Spheres</span>
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {spheres.map((s) => (
              <div key={s.code} className="p-6 sm:p-8 rounded-xl bg-[#111726] border border-white/10 hover:border-[#C59B5F]/40 transition-all">
                <span className="font-mono text-xs text-[#E5C185] uppercase tracking-wider block mb-2">{s.code}</span>
                <h3 className="font-headline text-xl font-bold text-white mb-2">{s.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Engine Breakdown */}
        <div className="p-8 sm:p-10 rounded-2xl bg-[#111726] border border-[#C59B5F]/20 mb-16">
          <h2 className="font-headline text-2xl font-bold text-white mb-4">
            {BUSINESS_COPY.ENGINE_TITLE}
          </h2>
          <p className="text-gray-300 text-base leading-relaxed mb-8">
            {BUSINESS_COPY.ENGINE_SUMMARY}
          </p>

          <div className="space-y-4 font-mono text-xs sm:text-sm">
            <div className="p-4 rounded-lg bg-[#070B14] border border-white/10 text-gray-300">
              <span className="text-[#C59B5F] font-bold">CORE:</span> Connect → Observe → Redesign → Execute
            </div>
            <div className="p-4 rounded-lg bg-[#070B14] border border-white/10 text-gray-300">
              <span className="text-[#E5C185] font-bold">NINE:</span> Navigate → Integrate → Network → Elevate
            </div>
            <div className="p-4 rounded-lg bg-[#070B14] border border-white/10 text-gray-300">
              <span className="text-[#C59B5F] font-bold">RESOLVE:</span> Realize → Examine → Strategize → Optimize → Lead → Validate → Evolve
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center pt-8 border-t border-white/10">
          <button
            onClick={() => onOpenDiscovery('Core9 System Page CTA')}
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#C59B5F] hover:bg-[#d6aa6d] text-[#070B14] font-semibold text-base rounded-lg border border-[#E5C185] transition-all cursor-pointer"
          >
            <span>{BUSINESS_COPY.NAV_CTA_PRIMARY}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
