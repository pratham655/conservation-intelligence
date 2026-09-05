"use client";

import React from "react";
import { FeatureVisualHero } from "@/components/ui/FeatureVisualHero";
import { GovernanceSection } from "@/components/governance/GovernanceSection";

export default function ProjectGovernancePage() {
  return (
    <div className="space-y-4">
      <FeatureVisualHero featureKey="governance" compact={true} />
      <div className="rounded-2xl overflow-hidden border border-forest-200/90 bg-white p-6 shadow-2xs">
        <GovernanceSection isWorkspace={true} />
      </div>
    </div>
  );
}
