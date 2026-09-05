"use client";

import React from "react";
import { FeatureVisualHero } from "@/components/ui/FeatureVisualHero";
import { PredictionSection } from "@/components/prediction/PredictionSection";

export default function ProjectPredictionPage() {
  return (
    <div className="space-y-4">
      <FeatureVisualHero featureKey="prediction" compact={true} />
      <div className="rounded-2xl overflow-hidden border border-forest-200/90 bg-white p-6 shadow-2xs">
        <PredictionSection isWorkspace={true} />
      </div>
    </div>
  );
}
