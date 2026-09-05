"use client";

import React from "react";
import { FeatureVisualHero } from "@/components/ui/FeatureVisualHero";
import { MonitoringSection } from "@/components/monitoring/MonitoringSection";

export default function ProjectMonitoringPage() {
  return (
    <div className="space-y-4">
      <FeatureVisualHero featureKey="monitoring" compact={true} />
      <div className="rounded-2xl overflow-hidden border border-forest-200/90 bg-white p-6 shadow-2xs">
        <MonitoringSection isWorkspace={true} />
      </div>
    </div>
  );
}
