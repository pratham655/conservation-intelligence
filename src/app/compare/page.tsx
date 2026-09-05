"use client";

import React from "react";
import { Navbar } from "@/components/navigation/Navbar";
import { FeatureVisualHero } from "@/components/ui/FeatureVisualHero";
import { ComparisonAndReportsSection } from "@/components/comparison/ComparisonAndReportsSection";
import { FinalCtaAndFooter } from "@/components/footer/FinalCtaAndFooter";

export default function DedicatedComparePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FBFBF8]">
      <Navbar />

      <main className="flex-1 pt-24 sm:pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
          <FeatureVisualHero
            featureKey="overview"
            customTitle="Multi-Project Intervention Comparator"
            customSubtitle="Cross-biome benchmarking comparing vegetation index gains, water persistence, and fund efficiency across national interventions."
          />
        </div>
        <ComparisonAndReportsSection />
      </main>

      <FinalCtaAndFooter />
    </div>
  );
}
