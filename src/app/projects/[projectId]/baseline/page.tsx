"use client";

import React from "react";
import { FeatureVisualHero } from "@/components/ui/FeatureVisualHero";
import { BaselineSection } from "@/components/baseline/BaselineSection";

export default function ProjectBaselinePage() {
  return (
    <div className="space-y-4">
      <FeatureVisualHero featureKey="baseline" compact={true} />
      <div className="rounded-2xl overflow-hidden border border-forest-200/90 bg-white p-6 shadow-2xs">
        <BaselineSection isWorkspace={true} />
      </div>
    </div>
  );
}
