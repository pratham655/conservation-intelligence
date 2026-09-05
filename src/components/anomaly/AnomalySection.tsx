"use client";

import React from "react";
import Link from "next/link";
import { SectionHeading } from "@/ui/SectionHeading";
import { StatusBadge } from "@/ui/StatusBadge";
import { FEATURED_PROJECT } from "@/lib/mock-data/projects";
import { 
  Droplets, 
  Trees, 
  TrendingDown, 
  CloudRain, 
  ShieldAlert,
  ArrowRight
} from "lucide-react";
import { cn } from "@/lib/utils";

interface AnomalySectionProps {
  isWorkspace?: boolean;
}

export const AnomalySection: React.FC<AnomalySectionProps> = ({ isWorkspace = false }) => {

  const indicatorConfigs = [
    {
      name: "Water Recovery",
      status: "Stable",
      statusColor: "text-amber-800 bg-amber-50 border-amber-200",
      value: "18.1 ha",
      trend: "stable",
      icon: Droplets,
      desc: "Water volume plateaued; seasonal monsoon retention is 26% under hydraulic target.",
    },
    {
      name: "Vegetation Health",
      status: "Improving",
      statusColor: "text-emerald-800 bg-emerald-50 border-emerald-200",
      value: "NDVI 0.53",
      trend: "up",
      icon: Trees,
      desc: "Sapling survival along southern peripheral bunds demonstrates solid vigor.",
    },
    {
      name: "Recovery Trajectory",
      status: "Stagnating",
      statusColor: "text-orange-900 bg-orange-50 border-orange-200",
      value: "-18% Deviation",
      trend: "down",
      icon: TrendingDown,
      desc: "Divergence between satellite observation and ecological target has widened.",
    },
    {
      name: "Rainfall Context",
      status: "Normal",
      statusColor: "text-emerald-800 bg-emerald-50 border-emerald-200",
      value: "+5mm Anomaly",
      trend: "stable",
      icon: CloudRain,
      desc: "Precipitation matches local meteorological deciles, ruling out drought.",
    },
  ];

  return (
    <section 
      id={isWorkspace ? undefined : "anomaly"} 
      className={cn(
        "relative overflow-hidden",
        isWorkspace ? "py-4 sm:py-6 bg-transparent" : "py-20 sm:py-28 bg-[#FBFBF8] border-b border-forest-100"
      )}
    >
      <div className={cn(isWorkspace ? "w-full" : "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8")}>
        
        <SectionHeading
          badge="CAPABILITY 03 & 06 // CONTINUOUS ANOMALY DETECTION & XAI"
          badgeTone="amber"
          title="Detect Change Before It Becomes Failure."
          subtitle="Multi-spectral pixel variance flags ecological stress weeks before it is visible in manual walk-through surveys."
          align="left"
        />

        {/* Project Health Panel Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mt-10">
          
          {/* Left Column: Overall Health Score Card */}
          <div className="lg:col-span-5 rounded-2xl bg-gradient-to-br from-white to-forest-50/60 border border-forest-200 p-6 sm:p-8 flex flex-col justify-between shadow-soft">
            <div>
              <div className="flex items-center justify-between pb-3 mb-6 border-b border-forest-100 text-xs font-mono text-stone-500">
                <span>PROJECT HEALTH AUDIT</span>
                <span className="text-forest-800 font-bold">{FEATURED_PROJECT.code}</span>
              </div>

              <div className="flex items-baseline gap-2">
                <span className="text-5xl sm:text-6xl font-extrabold font-mono text-forest-950 tracking-tight">
                  68
                </span>
                <span className="text-xl font-bold text-stone-600 font-mono">/ 100</span>
              </div>

              <div className="mt-3">
                <StatusBadge status="needs_attention" size="lg" />
              </div>

              <p className="mt-4 text-sm text-stone-700 leading-relaxed">
                Project composite health reflects strong initial earthworks offset by recent water retention stagnation in quadrant C-2.
              </p>
            </div>

            {/* Why Flagged Box */}
            <div className="mt-8 p-4 rounded-xl bg-amberState-50 border border-amberState-200 space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-amberState-900">
                <ShieldAlert className="h-4 w-4 text-amberState-700" />
                <span>WHY WAS THIS FLAGGED?</span>
              </div>
              <ul className="text-xs text-stone-700 space-y-1.5 list-disc list-inside">
                <li>Recovery trajectory dropped 18% below expected target</li>
                <li>Reduced water persistence in northern feeder canal</li>
                <li>Vegetation delta growth rate slowing down</li>
              </ul>
            </div>
          </div>

          {/* Right Column: 4 Health Indicator Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {indicatorConfigs.map((ind) => {
              const Icon = ind.icon;
              return (
                <div
                  key={ind.name}
                  className="rounded-xl bg-white border border-forest-200/90 p-5 shadow-2xs hover:shadow-subtle transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider">
                        {ind.name}
                      </span>
                      <div className="p-1.5 rounded-lg bg-stone-50 text-forest-800 border border-stone-200">
                        <Icon className="h-4 w-4" />
                      </div>
                    </div>

                    <div className="mt-2 flex items-center justify-between">
                      <span className="text-2xl font-bold font-mono text-forest-950">
                        {ind.value}
                      </span>
                      <span className={cn("text-xs font-semibold px-2.5 py-0.5 rounded-full border", ind.statusColor)}>
                        {ind.status}
                      </span>
                    </div>

                    <p className="mt-3 text-xs text-stone-600 leading-relaxed">
                      {ind.desc}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-600">
                    <span>Telemetry Status</span>
                    <span className="font-mono text-forest-800 font-semibold">Verified Overpass</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Navigation CTA: Full width container outside the 12-column indicator grid */}
        <div className="mt-8 p-5 rounded-2xl bg-white border border-forest-200/90 shadow-2xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="text-xs font-mono font-bold text-forest-900 uppercase tracking-wider mb-1">
              PIXEL-LEVEL ANOMALY ANALYSIS
            </div>
            <p className="text-xs text-stone-600 font-sans max-w-xl">
              Pixel-level stress identification cross-referenced with meteorological and moisture indicators.
            </p>
          </div>
          <Link
            href="/projects/prj-42/anomalies"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-forest-800 hover:bg-forest-700 text-white text-xs font-semibold shadow-2xs transition-all hover:shadow-xs shrink-0"
          >
            <span>Inspect Anomaly Clusters</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

      </div>
    </section>
  );
};
