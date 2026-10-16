import React, { useState } from 'react';
import { ArrowRight, Play, Clock } from 'lucide-react';

import { BUSINESS_COPY } from '../data/businessCopyDeck';

interface BroadcastBlogStage4Props {
  onOpenDiscovery: (source: string) => void;
}

export const BroadcastBlogStage4: React.FC<BroadcastBlogStage4Props> = ({ onOpenDiscovery }) => {
  const [activeTab, setActiveTab] = useState<'broadcasts' | 'pathways'>('pathways');

  const pathways = [
    {
      title: 'Executive Discovery Consultation',
      duration: 'Initial Session',
      desc: 'Systemic reconnaissance examining the dynamic interplay between leadership, personnel, and operational delivery.',
    },
    {
      title: '30/60/90-Day Strategic Architecture Roadmap',
      duration: 'Intensive Sprint',
      desc: 'Concrete operational sequencing to unblock execution bottlenecks, re-align roles, and safeguard capital allocation.',
    },
    {
      title: 'Executive Reset & Ongoing Advisory',
      duration: 'Ongoing Cadence',
      desc: 'Continuous systemic oversight ensuring that resolved disconnects do not recur as the enterprise scales.',
    },
  ];

  const broadcasts = [
    {
      id: 'ep-01',
      title: 'Why Solved Organizational Problems Keep Returning',
      duration: '6:12',
      type: 'Video Explainer',
      summary: 'Exploring why addressing isolated departmental symptoms causes systemic friction to migrate elsewhere.',
    },
    {
      id: 'ep-02',
      title: 'The Hidden Relational Tax of Functional Misalignment',
      duration: '5:45',
      type: 'Audio Briefing',
      summary: 'How talented teams with the right intentions fail to produce compounding results due to unmapped relational disconnects.',
    },
    {
      id: 'ep-03',
      title: 'Architectural Diagnostics for Venture Inception',
      duration: '7:04',
      type: 'Executive Briefing',
      summary: 'Preventing foundational traps and co-founder tension before organizational inertia hardens.',
    },
  ];

  return (
    <div className="w-full bg-[#070B14] text-[#F9FAFB] py-16 sm:py-24">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        
        {/* Header */}
        <div className="mb-12">
          <span className="font-mono text-xs uppercase tracking-[0.18em] text-[#C59B5F] bg-[#111726] px-3.5 py-1.5 rounded border border-[#C59B5F]/30">
            Advisory Insights & Engagement Pathways
          </span>
          <h1 className="font-headline text-3xl sm:text-5xl font-bold tracking-tight text-white mt-4 mb-4">
            Strategic Guidance & Broadcasts
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl leading-relaxed">
            Concise 5–7 minute executive explainers and structured engagement formats designed for founders, CEOs, and organizational leaders.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex border-b border-white/10 mb-10 gap-6">
          <button
            onClick={() => setActiveTab('pathways')}
            className={`pb-3 text-sm font-semibold tracking-tight transition-colors cursor-pointer relative ${
              activeTab === 'pathways' ? 'text-[#E5C185]' : 'text-gray-400 hover:text-white'
            }`}
          >
            Engagement Pathways
            {activeTab === 'pathways' && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C59B5F]" />
            )}
          </button>
          <button
            onClick={() => setActiveTab('broadcasts')}
            className={`pb-3 text-sm font-semibold tracking-tight transition-colors cursor-pointer relative ${
              activeTab === 'broadcasts' ? 'text-[#E5C185]' : 'text-gray-400 hover:text-white'
            }`}
          >
            Executive Broadcasts & Explainers
            {activeTab === 'broadcasts' && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C59B5F]" />
            )}
          </button>
        </div>

        {/* Pathways Tab */}
        {activeTab === 'pathways' && (
          <div className="space-y-6 mb-16">
            {pathways.map((p, i) => (
              <div key={p.title} className="p-8 rounded-xl bg-[#111726] border border-white/10 hover:border-[#C59B5F]/40 transition-all">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <span className="font-mono text-xs text-[#C59B5F] font-bold">FORMAT 0{i + 1}</span>
                  <span className="font-mono text-xs text-gray-500 bg-[#070B14] px-2.5 py-1 rounded border border-white/5">{p.duration}</span>
                </div>
                <h3 className="font-headline text-xl font-bold text-white mb-2">{p.title}</h3>
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6">{p.desc}</p>
                <button
                  onClick={() => onOpenDiscovery(`Pathway Request: ${p.title}`)}
                  className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#E5C185] hover:text-white transition-colors cursor-pointer"
                >
                  <span>Inquire About This Format</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Broadcasts Tab */}
        {activeTab === 'broadcasts' && (
          <div className="space-y-6 mb-16">
            {broadcasts.map((b) => (
              <div key={b.id} className="p-6 sm:p-8 rounded-xl bg-[#111726] border border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 hover:border-[#C59B5F]/40 transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#070B14] border border-[#C59B5F]/40 flex items-center justify-center shrink-0 text-[#E5C185]">
                    <Play className="w-5 h-5 ml-0.5 fill-[#E5C185]/20" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <span className="font-mono text-[11px] uppercase tracking-wider text-[#C59B5F]">{b.type}</span>
                      <span className="flex items-center gap-1 font-mono text-[11px] text-gray-500">
                        <Clock className="w-3 h-3" /> {b.duration}
                      </span>
                    </div>
                    <h3 className="font-headline text-lg font-bold text-white mb-1">{b.title}</h3>
                    <p className="text-gray-400 text-sm">{b.summary}</p>
                  </div>
                </div>
                <button
                  onClick={() => onOpenDiscovery(`Broadcast Inquiry: ${b.title}`)}
                  className="px-4 py-2 rounded-lg bg-[#070B14] border border-white/10 hover:border-[#C59B5F] text-xs font-mono uppercase tracking-wider text-gray-300 hover:text-white transition-all shrink-0 cursor-pointer"
                >
                  Listen / Briefing
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Final CTA */}
        <div className="text-center pt-8 border-t border-white/10">
          <button
            onClick={() => onOpenDiscovery('Insights Page CTA')}
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
