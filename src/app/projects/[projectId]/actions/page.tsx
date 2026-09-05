"use client";

import React from "react";
import { FeatureVisualHero } from "@/components/ui/FeatureVisualHero";
import { CorrectiveActionSection } from "@/components/corrective-action/CorrectiveActionSection";

export default function ProjectActionsPage() {
  return (
    <div className="space-y-4">
      <FeatureVisualHero featureKey="actions" compact={true} />
      <div className="rounded-2xl overflow-hidden border border-forest-200/90 bg-white p-6 shadow-2xs">
        <CorrectiveActionSection isWorkspace={true} />
      </div>
    </div>
  );
}
