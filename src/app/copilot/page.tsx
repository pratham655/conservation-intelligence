"use client";

import React from "react";
import { Navbar } from "@/components/navigation/Navbar";
import { FeatureVisualHero } from "@/components/ui/FeatureVisualHero";
import { CopilotSection } from "@/components/copilot/CopilotSection";
import { FinalCtaAndFooter } from "@/components/footer/FinalCtaAndFooter";

export default function DedicatedCopilotPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FBFBF8]">
      <Navbar />

      <main className="flex-1 pt-24 sm:pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
          <FeatureVisualHero featureKey="copilot" />
        </div>
        <CopilotSection />
      </main>

      <FinalCtaAndFooter />
    </div>
  );
}
