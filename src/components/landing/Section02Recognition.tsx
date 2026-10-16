import React from 'react';
import { BUSINESS_COPY } from '../../data/businessCopyDeck';

export const Section02Recognition: React.FC = () => {
  const recognitionItems = [
    { id: 'item-1', index: '01', text: BUSINESS_COPY.S2_ITEM_1 },
    { id: 'item-2', index: '02', text: BUSINESS_COPY.S2_ITEM_2 },
    { id: 'item-3', index: '03', text: BUSINESS_COPY.S2_ITEM_3 },
    { id: 'item-4', index: '04', text: BUSINESS_COPY.S2_ITEM_4 },
  ];

  return (
    <section className="bg-[#F7F5F0] py-20 md:py-32 border-b border-[#0F172A]/10 text-[#0F172A]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 md:mb-18">
          <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0F172A] leading-[1.15]">
            {BUSINESS_COPY.S2_H2}
          </h2>
        </div>

        {/* 2x2 Architectural Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {recognitionItems.map((item) => (
            <div
              key={item.id}
              className="group relative bg-white p-8 sm:p-10 rounded-lg shadow-sm border border-slate-200/80 border-l-[3px] border-l-[#C59B5F] hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
            >
              {/* Card Index Marker */}
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#C59B5F]">
                  Friction Pattern {item.index}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#C59B5F] opacity-60 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Exact Verbatim Item Copy */}
              <p className="font-headline text-lg sm:text-xl font-semibold text-[#0F172A] leading-snug">
                "{item.text}"
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
