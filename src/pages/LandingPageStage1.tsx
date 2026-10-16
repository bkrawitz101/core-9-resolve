import React from 'react';
import { Section01Hero } from '../components/landing/Section01Hero';
import { Section02Recognition } from '../components/landing/Section02Recognition';
import { Section03Difference } from '../components/landing/Section03Difference';
import { Section04Pathway } from '../components/landing/Section04Pathway';
import { Section05Invitation } from '../components/landing/Section05Invitation';

interface LandingPageStage1Props {
  onOpenDiscovery: (source: string) => void;
  onNavigateToApproach: () => void;
}

export const LandingPageStage1: React.FC<LandingPageStage1Props> = ({
  onOpenDiscovery,
  onNavigateToApproach,
}) => {
  return (
    <main className="w-full">
      {/* 01 / HERO — PROBLEM + PROMISE */}
      <Section01Hero onOpenDiscovery={onOpenDiscovery} />

      {/* 02 / RECOGNITION */}
      <Section02Recognition />

      {/* 03 / THE DIFFERENCE */}
      <Section03Difference onNavigateToApproach={onNavigateToApproach} />

      {/* 04 / THE PATHWAY */}
      <Section04Pathway />

      {/* 05 / INVITATION */}
      <Section05Invitation onOpenDiscovery={onOpenDiscovery} />
    </main>
  );
};
