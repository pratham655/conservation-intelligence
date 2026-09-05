"use client";

import React from "react";
import { Navbar } from "@/components/navigation/Navbar";
import { FeatureVisualHero } from "@/components/ui/FeatureVisualHero";
import { MapSection } from "@/components/map/MapSection";
import { FinalCtaAndFooter } from "@/components/footer/FinalCtaAndFooter";

export default function DedicatedMapPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FBFBF8]">
      <Navbar />

      <main className="flex-1 pt-24 sm:pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
          <FeatureVisualHero
            featureKey="monitoring"
            customTitle="Pan-India Geospatial Impact Map"
            customSubtitle="Interactive spatial telemetry mapping all monitored conservation sites across India with live Sentinel and Landsat overpasses."
          />
        </div>
        <MapSection />
      </main>

      <FinalCtaAndFooter />
    </div>
  );
}
