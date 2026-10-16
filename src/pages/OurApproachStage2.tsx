import React from 'react';
import { ArrowRight, BarChart3 } from 'lucide-react';

import { BUSINESS_COPY } from '../data/businessCopyDeck';

interface OurApproachStage2Props {
  onOpenDiscovery: (source: string) => void;
}

export const OurApproachStage2: React.FC<OurApproachStage2Props> = ({ onOpenDiscovery }) => {
  const gaps = [
    { title: BUSINESS_COPY.APP_GAP_1_TITLE, desc: BUSINESS_COPY.APP_GAP_1_DESC, idx: '01' },
    { title: BUSINESS_COPY.APP_GAP_2_TITLE, desc: BUSINESS_COPY.APP_GAP_2_DESC, idx: '02' },
    { title: BUSINESS_COPY.APP_GAP_3_TITLE, desc: BUSINESS_COPY.APP_GAP_3_DESC, idx: '03' },
    { title: BUSINESS_COPY.APP_GAP_4_TITLE, desc: BUSINESS_COPY.APP_GAP_4_DESC, idx: '04' },
  ];

  const roadSteps = [
    { title: BUSINESS_COPY.PATH_STEP_1_TITLE, desc: BUSINESS_COPY.PATH_STEP_1_DESC, step: '01' },
    { title: BUSINESS_COPY.PATH_STEP_2_TITLE, desc: BUSINESS_COPY.PATH_STEP_2_DESC, step: '02' },
    { title: BUSINESS_COPY.PATH_STEP_3_TITLE, desc: BUSINESS_COPY.PATH_STEP_3_DESC, step: '03' },
  ];

  return (
    <div className="w-full bg-[#070B14] text-[#F9FAFB]">
      
      {/* Approach Hero */}
      <section className="relative py-20 lg:py-28 px-6 sm:px-8 border-b border-white/10 overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <div className="inline-block mb-4">
            <span className="font-mono text-xs uppercase tracking-[0.18em] text-[#C59B5F] bg-[#111726] px-3.5 py-1.5 rounded border border-[#C59B5F]/30">
              Methodology & Diagnostics
            </span>
          </div>

          <h1 className="font-headline text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
            {BUSINESS_COPY.APP_HERO_H1}
          </h1>

          <p className="text-lg sm:text-xl text-[#9CA3AF] leading-relaxed max-w-3xl mb-10">
            {BUSINESS_COPY.APP_HERO_BODY}
          </p>

          <div className="p-6 sm:p-8 rounded-xl bg-[#111726] border-l-4 border-l-[#C59B5F] border border-white/10 shadow-lg">
            <blockquote className="text-base sm:text-lg italic text-gray-200 leading-relaxed font-headline">
              "{BUSINESS_COPY.APP_TENET_QUOTE}"
            </blockquote>
          </div>
        </div>
      </section>

      {/* Functional Gaps & Performance Loss Matrix */}
      <section className="py-20 px-6 sm:px-8 bg-[#111726] border-b border-white/10">
        <div className="max-w-5xl mx-auto">
          
          <div className="mb-12">
            <span className="font-mono text-xs uppercase tracking-[0.18em] text-[#C59B5F]">
              Diagnostic Audit
            </span>
            <h2 className="font-headline text-2xl sm:text-4xl font-bold text-white mt-2 mb-4">
              {BUSINESS_COPY.APP_MATRIX_TITLE}
            </h2>
            <p className="text-lg text-[#E5C185] font-medium max-w-2xl">
              {BUSINESS_COPY.APP_MATRIX_QUESTION}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {gaps.map((gap) => (
              <div
                key={gap.idx}
                className="p-6 sm:p-8 rounded-lg bg-[#070B14] border border-white/10 border-l-2 border-l-[#C59B5F] hover:border-[#C59B5F] transition-all"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs font-bold text-[#C59B5F]">CATEGORY {gap.idx}</span>
                  <BarChart3 className="w-4 h-4 text-gray-500" />
                </div>
                <h3 className="text-xl font-bold font-headline text-white mb-2">
                  {gap.title}
                </h3>
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                  {gap.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="p-6 rounded-lg bg-[#070B14]/80 border border-[#C59B5F]/20 text-sm sm:text-base text-gray-300 leading-relaxed">
            {BUSINESS_COPY.APP_MATRIX_POS}
          </div>

        </div>
      </section>

      {/* The Functional Engine (CORE • NINE • RESOLVE) */}
      <section className="py-20 px-6 sm:px-8 bg-[#070B14] border-b border-white/10">
        <div className="max-w-5xl mx-auto">
          
          <div className="mb-12">
            <span className="font-mono text-xs uppercase tracking-[0.18em] text-[#C59B5F]">
              Systemic Architecture
            </span>
            <h2 className="font-headline text-2xl sm:text-4xl font-bold text-white mt-2 mb-4">
              {BUSINESS_COPY.ENGINE_TITLE}
            </h2>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-3xl">
              {BUSINESS_COPY.ENGINE_SUMMARY}
            </p>
          </div>

          <div className="space-y-6">
            <div className="p-6 rounded-xl bg-[#111726] border border-white/10">
              <span className="font-mono text-xs uppercase tracking-wider text-[#C59B5F] block mb-2 font-bold">Foundation</span>
              <p className="text-white font-mono text-sm sm:text-base">
                {BUSINESS_COPY.ENGINE_CORE}
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#111726] border border-[#C59B5F]/40 shadow-sm">
              <span className="font-mono text-xs uppercase tracking-wider text-[#E5C185] block mb-2 font-bold">Integration</span>
              <p className="text-white font-mono text-sm sm:text-base">
                {BUSINESS_COPY.ENGINE_NINE}
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#111726] border border-white/10">
              <span className="font-mono text-xs uppercase tracking-wider text-[#C59B5F] block mb-2 font-bold">Transformation</span>
              <p className="text-white font-mono text-sm sm:text-base">
                {BUSINESS_COPY.ENGINE_RESOLVE}
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 3-Step Execution Roadmap */}
      <section className="py-20 px-6 sm:px-8 bg-[#111726] border-b border-white/10">
        <div className="max-w-5xl mx-auto">
          
          <div className="mb-12">
            <span className="font-mono text-xs uppercase tracking-[0.18em] text-[#C59B5F]">
              Advisory Engagement
            </span>
            <h2 className="font-headline text-2xl sm:text-4xl font-bold text-white mt-2">
              The 3-Step Transformation Pathway
            </h2>
          </div>

          <div className="space-y-6">
            {roadSteps.map((step) => (
              <div key={step.step} className="p-8 rounded-xl bg-[#070B14] border border-white/10 flex flex-col md:flex-row gap-6 items-start">
                <div className="w-12 h-12 rounded-lg bg-[#111726] border border-[#C59B5F] flex items-center justify-center font-mono text-lg font-bold text-[#E5C185] shrink-0">
                  {step.step}
                </div>
                <div>
                  <h3 className="font-headline text-xl font-bold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => onOpenDiscovery('Our Approach Page CTA')}
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#C59B5F] hover:bg-[#d6aa6d] text-[#070B14] font-semibold text-base rounded-lg border border-[#E5C185] transition-all cursor-pointer"
            >
              <span>{BUSINESS_COPY.NAV_CTA_PRIMARY}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

    </div>
  );
};
