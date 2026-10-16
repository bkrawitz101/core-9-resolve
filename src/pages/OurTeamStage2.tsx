import React, { useState } from 'react';
import { Share2, Check, ArrowRight, Shield, Award, Sparkles } from 'lucide-react';

import { BUSINESS_COPY } from '../data/businessCopyDeck';

interface OurTeamStage2Props {
  onOpenDiscovery: (source: string) => void;
}

export const OurTeamStage2: React.FC<OurTeamStage2Props> = ({ onOpenDiscovery }) => {
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="w-full bg-[#070B14] text-[#F9FAFB] py-16 sm:py-24">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        
        {/* Digital Business Card Header Badge & Actions */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 border-b border-white/10 mb-12">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.18em] text-[#C59B5F] bg-[#111726] px-3.5 py-1.5 rounded border border-[#C59B5F]/30">
              {BUSINESS_COPY.TEAM_SUB}
            </span>
          </div>
          <button
            onClick={handleShare}
            className="inline-flex items-center gap-2 self-start sm:self-auto px-4 py-2 rounded-lg bg-[#111726] border border-white/10 text-xs font-mono uppercase tracking-wider text-gray-300 hover:text-white hover:border-[#C59B5F] transition-all cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span>Card Link Copied</span>
              </>
            ) : (
              <>
                <Share2 className="w-4 h-4 text-[#C59B5F]" />
                <span>Share Executive Card</span>
              </>
            )}
          </button>
        </div>

        {/* Hero Authority & Perspective */}
        <div className="max-w-3xl mb-16">
          <h1 className="font-headline text-3xl sm:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
            {BUSINESS_COPY.TEAM_HERO_H1}
          </h1>

          <div className="space-y-4 text-base sm:text-lg text-[#9CA3AF] leading-relaxed">
            <p>{BUSINESS_COPY.TEAM_BODY_1}</p>
            <p>{BUSINESS_COPY.TEAM_BODY_2}</p>
            <p className="text-gray-200 font-medium">{BUSINESS_COPY.TEAM_BODY_3}</p>
          </div>
        </div>

        {/* Authorship & Creator Architecture */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-8">
            <span className="font-mono text-xs uppercase tracking-[0.18em] text-[#C59B5F]">
              Methodological Authorship & Leadership
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            
            {/* Svetlana Pritzker */}
            <div className="p-8 rounded-xl bg-[#111726] border border-white/10 border-t-2 border-t-[#C59B5F] shadow-lg flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-lg bg-[#070B14] border border-[#C59B5F]/40 flex items-center justify-center mb-6">
                  <Award className="w-6 h-6 text-[#E5C185]" />
                </div>
                <h3 className="font-headline text-2xl font-bold text-white mb-3">
                  {BUSINESS_COPY.TEAM_SVETLANA_NAME}
                </h3>
                <p className="text-[#9CA3AF] text-sm sm:text-base leading-relaxed mb-6">
                  {BUSINESS_COPY.TEAM_SVETLANA_ROLE}
                </p>
              </div>
              <div className="pt-4 border-t border-white/5 text-xs font-mono text-gray-500">
                METHODOLOGICAL AUTHOR
              </div>
            </div>

            {/* Vasili Cojemeachin */}
            <div className="p-8 rounded-xl bg-[#111726] border border-white/10 border-t-2 border-t-[#C59B5F] shadow-lg flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-lg bg-[#070B14] border border-[#C59B5F]/40 flex items-center justify-center mb-6">
                  <Shield className="w-6 h-6 text-[#E5C185]" />
                </div>
                <h3 className="font-headline text-2xl font-bold text-white mb-3">
                  {BUSINESS_COPY.TEAM_VASILI_NAME}
                </h3>
                <p className="text-[#9CA3AF] text-sm sm:text-base leading-relaxed mb-6">
                  {BUSINESS_COPY.TEAM_VASILI_ROLE}
                </p>
              </div>
              <div className="pt-4 border-t border-white/5 text-xs font-mono text-gray-500">
                DIAGNOSTIC AUDIT AUTHOR
              </div>
            </div>

          </div>

          {/* Joint Attribution Banner */}
          <div className="p-6 rounded-xl bg-[#111726]/70 border border-[#C59B5F]/30 text-center mb-8">
            <p className="font-headline text-base sm:text-lg font-semibold text-[#E5C185]">
              {BUSINESS_COPY.TEAM_CO_CREATORS}
            </p>
          </div>

          {/* Brian Krawitz */}
          <div className="p-8 rounded-xl bg-[#111726] border border-white/10 border-l-4 border-l-[#C59B5F] shadow-lg">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-[#C59B5F]">Implementation & Experience</span>
                <h3 className="font-headline text-2xl font-bold text-white mt-1">
                  {BUSINESS_COPY.TEAM_BRIAN_NAME}
                </h3>
              </div>
              <div className="w-10 h-10 rounded-lg bg-[#070B14] border border-white/10 flex items-center justify-center shrink-0">
                <Sparkles className="w-5 h-5 text-[#E5C185]" />
              </div>
            </div>
            <p className="text-[#9CA3AF] text-sm sm:text-base leading-relaxed">
              {BUSINESS_COPY.TEAM_BRIAN_ROLE}
            </p>
          </div>

        </div>

        {/* Digital Visiting Card Contact Footer */}
        <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-[#111726] to-[#070B14] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="font-headline text-xl font-bold text-white mb-1">
              Ready to Explore Whole-System Alignment?
            </h4>
            <p className="text-gray-400 text-sm">
              Initiate a confidential Discovery conversation directly with our leadership team.
            </p>
          </div>
          <button
            onClick={() => onOpenDiscovery('Our Team Digital Card CTA')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#C59B5F] hover:bg-[#d6aa6d] text-[#070B14] font-semibold text-sm transition-all cursor-pointer shrink-0"
          >
            <span>{BUSINESS_COPY.NAV_CTA_PRIMARY}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
