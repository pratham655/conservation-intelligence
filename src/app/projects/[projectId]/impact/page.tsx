"use client";

import React from "react";
import { FeatureVisualHero } from "@/components/ui/FeatureVisualHero";
import { ImpactScoreSection } from "@/components/impact-score/ImpactScoreSection";

export default function ProjectImpactPage() {
  return (
    <div className="space-y-4">
      <FeatureVisualHero featureKey="impact" compact={true} />
      <div className="rounded-2xl overflow-hidden border border-forest-200/90 bg-white p-6 shadow-2xs">
        <ImpactScoreSection isWorkspace={true} />
      </div>
    </div>
  );
}
