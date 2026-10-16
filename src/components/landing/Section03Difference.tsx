import React from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';

import { BUSINESS_COPY } from '../../data/businessCopyDeck';

interface Section03DifferenceProps {
  onNavigateToApproach: () => void;
}

export const Section03Difference: React.FC<Section03DifferenceProps> = ({
  onNavigateToApproach,
}) => {
  const nodes = [
    { id: 'leadership', label: 'Leadership', x: 200, y: 55, icon: '01' },
    { id: 'people', label: 'People', x: 335, y: 150, icon: '02' },
    { id: 'processes', label: 'Processes', x: 285, y: 300, icon: '03' },
    { id: 'resources', label: 'Resources', x: 115, y: 300, icon: '04' },
    { id: 'execution', label: 'Execution', x: 65, y: 150, icon: '05' },
  ];

  return (
    <section className="bg-[#111726] py-20 md:py-32 border-b border-white/10 text-[#F9FAFB] relative overflow-hidden">
      {/* Background Subtle Geometric Texture */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" aria-hidden="true">
        <div className="w-full h-full bg-[radial-gradient(#C59B5F_1px,transparent_1px)] [background-size:32px_32px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Split 60/40 Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* 60% Column: Copy Authority */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Section Eyebrow */}
            <div className="inline-block mb-4">
              <span className="font-mono text-xs uppercase tracking-[0.18em] text-[#C59B5F] bg-[#070B14] px-3.5 py-1.5 rounded border border-[#C59B5F]/30">
                {BUSINESS_COPY.S3_EYEBROW}
              </span>
            </div>

            {/* Headline */}
            <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F9FAFB] leading-[1.15] mb-6">
              {BUSINESS_COPY.S3_H2}
            </h2>

            {/* Exact Body Copy */}
            <p className="text-lg sm:text-xl text-[#9CA3AF] leading-relaxed mb-8">
              {BUSINESS_COPY.S3_BODY}
            </p>

            {/* Secondary Action Link */}
            <div>
              <button
                onClick={onNavigateToApproach}
                className="group inline-flex items-center gap-2 text-base font-semibold text-[#E5C185] hover:text-white transition-colors cursor-pointer"
              >
                <span>{BUSINESS_COPY.S3_LINK_SECONDARY}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </button>
            </div>

            {/* Strategic Distinction Note */}
            <div className="mt-10 pt-6 border-t border-white/10 flex items-center gap-3 text-xs font-mono text-gray-400">
              <ShieldCheck className="w-4 h-4 text-[#C59B5F]" />
              <span>WHOLE-SYSTEM LIVING ARCHITECTURE • ZERO ISOLATED SYMPTOM FIXES</span>
            </div>

          </div>

          {/* 40% Column: 5-Node Interconnected Living System Diagram */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md aspect-square rounded-2xl bg-[#070B14]/80 border border-white/10 p-6 flex items-center justify-center shadow-xl">
              
              {/* Subtle Center Emblem */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 rounded-full border border-[#C59B5F]/30 bg-[#111726]/80 flex flex-col items-center justify-center text-center p-2 z-10 shadow-lg">
                <span className="font-mono text-[10px] text-[#C59B5F] uppercase tracking-wider font-semibold">CORE9</span>
                <span className="font-headline text-xs font-bold text-white tracking-tight leading-tight">LIVING SYSTEM</span>
                <span className="text-[9px] font-mono text-gray-400">Synchronized</span>
              </div>

              {/* Interconnecting SVG Vector Mesh */}
              <svg viewBox="0 0 400 400" className="w-full h-full overflow-visible">
                <defs>
                  <linearGradient id="vectorLineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#C59B5F" stopOpacity="0.7" />
                    <stop offset="100%" stopColor="#E5C185" stopOpacity="0.2" />
                  </linearGradient>
                </defs>

                {/* Inner Connecting Web */}
                <line x1="200" y1="55" x2="335" y2="150" stroke="url(#vectorLineGrad)" strokeWidth="1.5" />
                <line x1="335" y1="150" x2="285" y2="300" stroke="url(#vectorLineGrad)" strokeWidth="1.5" />
                <line x1="285" y1="300" x2="115" y2="300" stroke="url(#vectorLineGrad)" strokeWidth="1.5" />
                <line x1="115" y1="300" x2="65" y2="150" stroke="url(#vectorLineGrad)" strokeWidth="1.5" />
                <line x1="65" y1="150" x2="200" y2="55" stroke="url(#vectorLineGrad)" strokeWidth="1.5" />

                {/* Cross-system Diagonal Relational Rays */}
                <line x1="200" y1="55" x2="285" y2="300" stroke="rgba(197, 155, 95, 0.25)" strokeWidth="1" strokeDasharray="3 3" />
                <line x1="200" y1="55" x2="115" y2="300" stroke="rgba(197, 155, 95, 0.25)" strokeWidth="1" strokeDasharray="3 3" />
                <line x1="335" y1="150" x2="115" y2="300" stroke="rgba(197, 155, 95, 0.25)" strokeWidth="1" strokeDasharray="3 3" />
                <line x1="65" y1="150" x2="285" y2="300" stroke="rgba(197, 155, 95, 0.25)" strokeWidth="1" strokeDasharray="3 3" />

                {/* Concentric Ambient Relational Rings */}
                <circle cx="200" cy="200" r="145" fill="none" stroke="rgba(255, 255, 255, 0.04)" strokeWidth="1" />
                <circle cx="200" cy="200" r="85" fill="none" stroke="rgba(197, 155, 95, 0.12)" strokeWidth="1" strokeDasharray="4 4" />

                {/* 5 Structural Nodes */}
                {nodes.map((node) => (
                  <g key={node.id} className="cursor-default">
                    <circle
                      cx={node.x}
                      cy={node.y}
                      r="22"
                      fill="#111726"
                      stroke="#C59B5F"
                      strokeWidth="1.5"
                    />
                    <text
                      x={node.x}
                      y={node.y + 4}
                      fill="#E5C185"
                      fontSize="10"
                      fontFamily="JetBrains Mono"
                      fontWeight="600"
                      textAnchor="middle"
                    >
                      {node.icon}
                    </text>
                    <text
                      x={node.x}
                      y={node.y > 200 ? node.y + 36 : node.y - 28}
                      fill="#F9FAFB"
                      fontSize="11"
                      fontFamily="Plus Jakarta Sans"
                      fontWeight="600"
                      textAnchor="middle"
                    >
                      {node.label}
                    </text>
                  </g>
                ))}
              </svg>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
