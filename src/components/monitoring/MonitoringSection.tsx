"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "@/ui/SectionHeading";
import { FEATURED_PROJECT } from "@/lib/mock-data/projects";
import { 
  Droplets, 
  Trees, 
  Activity, 
  Eye,
  ArrowRight
} from "lucide-react";
import { cn } from "@/lib/utils";

interface MonitoringSectionProps {
  isWorkspace?: boolean;
}

export const MonitoringSection: React.FC<MonitoringSectionProps> = ({ isWorkspace = false }) => {
  const timeline = FEATURED_PROJECT.monitoringTimeline;
  const [activeIdx, setActiveIdx] = useState(3); // Default to Month 6 (or Month 12)

  const activeMilestone = timeline[activeIdx];

  return (
    <section 
      id={isWorkspace ? undefined : "monitoring"} 
      className={cn(
        "relative overflow-hidden",
        isWorkspace ? "py-4 sm:py-6 bg-transparent" : "py-20 sm:py-28 bg-[#FBFBF8] border-b border-forest-100"
      )}
    >
      <div className={cn(isWorkspace ? "w-full" : "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8")}>
        
        <SectionHeading
          badge="CAPABILITY 02 // MULTI-TEMPORAL SURVEILLANCE"
          badgeTone="water"
          title="Don't Just Compare Before and After."
          subtitle="True ecological recovery is non-linear. Continuous satellite observations track seasonal pulses, intervention milestones, and early signs of stagnation."
          align="left"
          className={isWorkspace ? "mb-6" : "mb-10"}
        />

        {/* Milestone Selector Tabs / Scrubber Bar */}
        <div className="mt-8 relative">
          <div className="flex items-center justify-between pb-2 text-xs font-mono text-stone-500">
            <span className="flex items-center gap-1.5 font-semibold text-forest-900">
              <Eye className="h-3.5 w-3.5 text-forest-700" />
              SELECT OBSERVATION EPOCH:
            </span>
            <span className="text-amber-800 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded text-[11px]">
              Demonstration Sentinel-2 Time-Series
            </span>
          </div>

          {/* Timeline Milestones Row */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 sm:gap-3">
            {timeline.map((item, idx) => {
              const isSelected = idx === activeIdx;
              return (
                <button
                  key={item.milestone}
                  type="button"
                  onClick={() => setActiveIdx(idx)}
                  className={cn(
                    "p-3 rounded-xl border text-left transition-all relative overflow-hidden focus:outline-hidden",
                    isSelected
                      ? "bg-forest-800 text-white border-forest-900 shadow-md scale-[1.02]"
                      : "bg-white text-stone-700 border-forest-200/90 hover:bg-forest-50/70 hover:border-forest-300"
                  )}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={cn(
                        "text-xs font-mono font-bold uppercase",
                        isSelected ? "text-emerald-300" : "text-forest-800"
                      )}
                    >
                      {item.milestone}
                    </span>
                    <span
                      className={cn(
                        "text-[10px] font-mono",
                        isSelected ? "text-stone-300" : "text-stone-600"
                      )}
                    >
                      {item.date}
                    </span>
                  </div>

                  <div className="mt-2 text-xs font-semibold truncate">
                    {item.statusLabel}
                  </div>

                  <div className="mt-1 flex items-center gap-2 text-[11px]">
                    <span className={isSelected ? "text-emerald-200" : "text-forest-700"}>
                      NDVI: {item.ndvi.toFixed(2)}
                    </span>
                    <span className={isSelected ? "text-water-200" : "text-water-700"}>
                      NDWI: {item.ndwi.toFixed(2)}
                    </span>
                  </div>

                  {/* Top indicator bar for selected tab */}
                  {isSelected && (
                    <motion.div
                      layoutId="activeTimelineGlow"
                      className="absolute bottom-0 left-0 right-0 h-1 bg-emerald-400"
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Milestone Detailed Observation Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeMilestone.milestone}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.35 }}
            className="mt-6 rounded-2xl bg-white border border-forest-200/90 p-6 sm:p-8 shadow-soft"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Multi-temporal Environmental Metrics */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-stone-200">
                  <div>
                    <span className="text-xs font-mono font-bold text-forest-800 tracking-wider">
                      EPOCH {activeMilestone.milestone.toUpperCase()} TELEMETRY
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-forest-950 mt-0.5">
                      {activeMilestone.statusLabel}
                    </h3>
                  </div>

                  <span className="px-3 py-1 rounded-full text-xs font-mono bg-forest-50 border border-forest-200 text-forest-900">
                    Observation Date: {activeMilestone.date}
                  </span>
                </div>

                <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
                  {activeMilestone.changeDescription}
                </p>

                {/* 4 Interactive Snapshot Metrics */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div className="p-3.5 rounded-xl bg-forest-50/60 border border-forest-100">
                    <div className="flex items-center gap-1.5 text-xs text-forest-800 font-medium">
                      <Droplets className="h-3.5 w-3.5 text-water-600" />
                      <span>Water Extent</span>
                    </div>
                    <div className="mt-1 text-2xl font-bold text-forest-950 font-mono">
                      {activeMilestone.waterExtentHa} <span className="text-xs font-sans font-normal text-stone-500">ha</span>
                    </div>
                    <div className="text-[11px] text-stone-500 mt-0.5">
                      Δ {(activeMilestone.waterExtentHa - 12.4).toFixed(1)} ha vs baseline
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-forest-50/60 border border-forest-100">
                    <div className="flex items-center gap-1.5 text-xs text-forest-800 font-medium">
                      <Trees className="h-3.5 w-3.5 text-forest-700" />
                      <span>Vegetation</span>
                    </div>
                    <div className="mt-1 text-2xl font-bold text-forest-950 font-mono">
                      {activeMilestone.vegetationCoveragePercent} <span className="text-xs font-sans font-normal text-stone-500">%</span>
                    </div>
                    <div className="text-[11px] text-stone-500 mt-0.5">
                      Riparian perimeter
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-forest-50/60 border border-forest-100">
                    <div className="flex items-center gap-1.5 text-xs text-forest-800 font-medium">
                      <Activity className="h-3.5 w-3.5 text-emerald-700" />
                      <span>NDVI Index</span>
                    </div>
                    <div className="mt-1 text-2xl font-bold text-forest-950 font-mono">
                      {activeMilestone.ndvi.toFixed(2)}
                    </div>
                    <div className="text-[11px] text-emerald-700 font-medium mt-0.5">
                      +{(activeMilestone.ndvi - 0.42).toFixed(2)} shift
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-forest-50/60 border border-forest-100">
                    <div className="flex items-center gap-1.5 text-xs text-forest-800 font-medium">
                      <Droplets className="h-3.5 w-3.5 text-water-700" />
                      <span>NDWI Index</span>
                    </div>
                    <div className="mt-1 text-2xl font-bold text-forest-950 font-mono">
                      {activeMilestone.ndwi.toFixed(2)}
                    </div>
                    <div className="text-[11px] text-water-700 font-medium mt-0.5">
                      +{(activeMilestone.ndwi - 0.31).toFixed(2)} shift
                    </div>
                  </div>
                </div>

                {/* Anomaly Drift Bar */}
                <div className="pt-2">
                  <div className="flex items-center justify-between text-xs font-mono text-stone-600 mb-1">
                    <span>ANOMALY DIVERGENCE SCORE</span>
                    <span className={cn(
                      "font-bold",
                      activeMilestone.anomalyScore > 0.5 ? "text-amber-700" : "text-emerald-700"
                    )}>
                      {(activeMilestone.anomalyScore * 100).toFixed(0)}%
                      {activeMilestone.anomalyScore > 0.5 ? " (Divergence Flagged)" : " (Nominal Variance)"}
                    </span>
                  </div>
                  <div className="h-2 w-full bg-stone-100 rounded-full overflow-hidden border border-stone-200">
                    <div
                      className={cn(
                        "h-full transition-all duration-500",
                        activeMilestone.anomalyScore > 0.5
                          ? "bg-gradient-to-r from-emerald-500 via-amber-500 to-rose-500"
                          : "bg-emerald-600"
                      )}
                      style={{ width: `${Math.max(8, activeMilestone.anomalyScore * 100)}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Right Column: Visual Spectral Water Spread Simulated Map */}
              <div className="lg:col-span-5">
                <div className="relative rounded-xl overflow-hidden bg-forest-950 aspect-[4/3] p-4 text-white flex flex-col justify-between border border-forest-300/80 shadow-md">
                  {/* Photographic Natural Lake Surface Texture */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center opacity-60"
                    style={{
                      backgroundImage: `url('https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80')`,
                    }}
                    aria-hidden="true" 
                  />
                  <div 
                    className="absolute inset-0 bg-gradient-to-tr from-forest-950/90 via-forest-900/60 to-[#1E4D68]/80" 
                    aria-hidden="true" 
                  />
                  <div 
                    className="absolute inset-0 bg-satellite-grid opacity-25 pointer-events-none" 
                    aria-hidden="true" 
                  />

                  {/* Dynamic Water Shape Simulation according to water extent */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <motion.div
                      animate={{
                        scale: [1, 1.03, 1],
                        width: `${Math.min(88, 40 + (activeMilestone.waterExtentHa / 25) * 45)}%`,
                        height: `${Math.min(75, 30 + (activeMilestone.waterExtentHa / 25) * 40)}%`,
                      }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                      className="rounded-[40%_60%_70%_30%/40%_50%_60%_55%] bg-gradient-to-br from-water-500/60 to-water-700/80 border-2 border-water-300 shadow-[0_0_24px_rgba(46,134,184,0.4)] backdrop-blur-xs flex items-center justify-center"
                    >
                      <span className="text-[11px] font-mono text-white/90 bg-black/40 px-2 py-0.5 rounded">
                        {activeMilestone.waterExtentHa} ha Pool
                      </span>
                    </motion.div>
                  </div>

                  <div className="relative z-10 flex items-center justify-between text-[11px] font-mono">
                    <span className="bg-black/50 px-2 py-0.5 rounded border border-white/20">
                      EPOCH {activeMilestone.milestone}
                    </span>
                    <span className="bg-forest-900/80 px-2 py-0.5 rounded text-emerald-300 border border-emerald-400/30">
                      SENTINEL-2 RGB/SWIR
                    </span>
                  </div>

                  <div className="relative z-10 p-2.5 rounded-lg bg-black/55 backdrop-blur-sm border border-white/20 text-xs">
                    <div className="font-semibold text-emerald-300">{activeMilestone.satelliteThumbnailDesc}</div>
                    <div className="text-[10px] text-stone-300 font-mono mt-0.5">
                      Ground GSD: 10m • Cloud Probability &lt; 2%
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>

        {/* Feature Navigation CTA */}
        {!isWorkspace && (
          <div className="mt-8 p-4 rounded-2xl bg-white border border-forest-200/90 shadow-2xs flex flex-wrap items-center justify-between gap-4">
            <div className="text-xs text-stone-600 font-mono">
              <span>Continuous time-series analysis coregistered across 5-day Sentinel-2 overpasses.</span>
            </div>
            <Link
              href="/projects/prj-42/monitoring"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-forest-800 hover:bg-forest-700 text-white text-xs font-semibold shadow-2xs transition-all hover:shadow-xs"
            >
              <span>Explore Multi-Temporal Scrubber</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        )}

      </div>
    </section>
  );
};
