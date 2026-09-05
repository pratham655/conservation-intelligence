"use client";

import React from "react";
import { FeatureVisualHero } from "@/components/ui/FeatureVisualHero";
import { RecoverySection } from "@/components/recovery/RecoverySection";

export default function ProjectRecoveryPage() {
  return (
    <div className="space-y-4">
      <FeatureVisualHero featureKey="recovery" compact={true} />
      <div className="rounded-2xl overflow-hidden border border-forest-200/90 bg-white p-6 shadow-2xs">
        <RecoverySection isWorkspace={true} />
      </div>
    </div>
  );
}
