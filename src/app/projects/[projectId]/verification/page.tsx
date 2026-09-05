"use client";

import React from "react";
import { FeatureVisualHero } from "@/components/ui/FeatureVisualHero";
import { VerificationSection } from "@/components/verification/VerificationSection";

export default function ProjectVerificationPage() {
  return (
    <div className="space-y-4">
      <FeatureVisualHero featureKey="verification" compact={true} />
      <div className="rounded-2xl overflow-hidden border border-forest-200/90 bg-white p-6 shadow-2xs">
        <VerificationSection isWorkspace={true} />
      </div>
    </div>
  );
}
