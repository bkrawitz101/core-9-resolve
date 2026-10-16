import React from 'react';
import { BUSINESS_COPY } from '../../data/businessCopyDeck';

export const Section04Pathway: React.FC = () => {
  const steps = [
    {
      num: BUSINESS_COPY.S4_STEP_01_NUM,
      title: BUSINESS_COPY.S4_STEP_01_TITLE,
      desc: BUSINESS_COPY.S4_STEP_01_DESC,
    },
    {
      num: BUSINESS_COPY.S4_STEP_02_NUM,
      title: BUSINESS_COPY.S4_STEP_02_TITLE,
      desc: BUSINESS_COPY.S4_STEP_02_DESC,
    },
    {
      num: BUSINESS_COPY.S4_STEP_03_NUM,
      title: BUSINESS_COPY.S4_STEP_03_TITLE,
      desc: BUSINESS_COPY.S4_STEP_03_DESC,
    },
    {
      num: BUSINESS_COPY.S4_STEP_04_NUM,
      title: BUSINESS_COPY.S4_STEP_04_TITLE,
      desc: BUSINESS_COPY.S4_STEP_04_DESC,
    },
  ];

  return (
    <section className="bg-[#F7F5F0] py-20 md:py-32 border-b border-[#0F172A]/10 text-[#0F172A]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-24">
          <div className="inline-block mb-3">
            <span className="font-mono text-xs uppercase tracking-[0.18em] text-[#C59B5F] font-semibold bg-white/60 px-3 py-1 rounded border border-[#C59B5F]/20">
              {BUSINESS_COPY.S4_EYEBROW}
            </span>
          </div>
          <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0F172A] leading-[1.15]">
            {BUSINESS_COPY.S4_H2}
          </h2>
        </div>

        {/* 4-Column Connected Architectural Timeline */}
        <div className="relative">
          
          {/* Continuous Connecting Line (Desktop) */}
          <div 
            className="hidden lg:block absolute top-[28px] left-[5%] right-[5%] h-[1.5px] bg-[#C59B5F]/35 z-0" 
            aria-hidden="true" 
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={step.num} className="flex flex-col group">
                
                {/* Monospace Bronze Numeral with Anchor Node */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-14 h-14 rounded-lg bg-white border border-[#C59B5F]/40 flex items-center justify-center shadow-sm group-hover:border-[#C59B5F] group-hover:shadow-md transition-all">
                    <span className="font-mono text-xl font-bold text-[#C59B5F]">
                      {step.num}
                    </span>
                  </div>
                  {/* Subtle index divider line for mobile */}
                  <div className="lg:hidden flex-1 h-[1px] bg-[#C59B5F]/30" />
                </div>

                {/* Step Title */}
                <h3 className="font-headline text-xl sm:text-2xl font-bold text-[#0F172A] tracking-tight mb-2 group-hover:text-[#9A7432] transition-colors">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {step.desc}
                </p>

                {/* Architectural Stage Indicator */}
                <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>STAGE {index + 1} OF 4</span>
                  <span className="text-[#C59B5F] font-bold">→</span>
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
