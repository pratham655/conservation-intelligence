"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { FeatureVisualHero } from "@/components/ui/FeatureVisualHero";
import { getProjectById } from "@/lib/mock-data/projects";
import { 
  Scan, 
  Layers, 
  Calendar, 
  Satellite, 
  Info, 
  Sparkles,
  CheckCircle2,
  Droplets,
  Trees,
  SlidersHorizontal
} from "lucide-react";
import { cn } from "@/lib/utils";

type CompositeType = "true_color" | "false_color" | "ndwi" | "ndvi";

export default function ImageAnalysisPage() {
  const params = useParams();
  const projectId = (params?.projectId as string) || "prj-42";
  const project = getProjectById(projectId);

  const [activeComposite, setActiveComposite] = useState<CompositeType>("true_color");
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [activeViewMode, setActiveViewMode] = useState<"split" | "dual">("split");

  const compositeModes: { id: CompositeType; label: string; bands: string; desc: string }[] = [
    { id: "true_color", label: "True Color RGB", bands: "B04, B03, B02", desc: "Natural human eye optical representation." },
    { id: "false_color", label: "Color Infrared (NIR)", bands: "B08, B04, B03", desc: "Highlights vigorous vegetation in deep vermillion." },
    { id: "ndwi", label: "Water Mask (NDWI)", bands: "(B03 - B08) / (B03 + B08)", desc: "Delineates open surface water and turbidity gradients." },
    { id: "ndvi", label: "Canopy Index (NDVI)", bands: "(B08 - B04) / (B08 + B04)", desc: "Measures photosynthetic absorption and vegetative vigor." },
  ];

  return (
    <div className="space-y-4">
      <FeatureVisualHero featureKey="image-analysis" compact={true} />

      {/* Sensor Acquisition Telemetry Card */}
      <div className="p-5 rounded-2xl bg-white border border-forest-200/90 shadow-2xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-stone-100">
          <div>
            <div className="flex items-center gap-2 mb-1 text-xs font-mono">
              <span className="px-2 py-0.5 rounded bg-forest-100 text-forest-800 font-bold border border-forest-200">
                L2A BOTTOM-OF-ATMOSPHERE
              </span>
              <span className="text-stone-500">
                SCENE ID: S2B_MSIL2A_{project.code}_20241014
              </span>
            </div>
            <h3 className="text-xl font-bold text-forest-950">
              Coregistered Satellite Image Analysis
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-mono font-semibold flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Calibrated Overpass</span>
            </span>
          </div>
        </div>

        {/* 4 Sensor Telemetry Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4 text-xs font-mono">
          <div className="p-3 rounded-xl bg-[#FBFBF8] border border-forest-100">
            <span className="text-stone-500 text-[10px] block">Acquisition Date:</span>
            <span className="font-bold text-forest-950 flex items-center gap-1 mt-0.5">
              <Calendar className="h-3.5 w-3.5 text-forest-700" />
              <span>{project.baseline.baselineCaptureDate}</span>
            </span>
          </div>

          <div className="p-3 rounded-xl bg-[#FBFBF8] border border-forest-100">
            <span className="text-stone-500 text-[10px] block">Sensor / Constellation:</span>
            <span className="font-bold text-forest-950 flex items-center gap-1 mt-0.5">
              <Satellite className="h-3.5 w-3.5 text-forest-700" />
              <span className="truncate">{project.baseline.sensor.split(" ")[0]} (10m)</span>
            </span>
          </div>

          <div className="p-3 rounded-xl bg-[#FBFBF8] border border-forest-100">
            <span className="text-stone-500 text-[10px] block">Cloud Cover Probability:</span>
            <span className="font-bold text-emerald-700 flex items-center gap-1 mt-0.5">
              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
              <span>{project.baseline.cloudCoverPercent}% (Clear Sky)</span>
            </span>
          </div>

          <div className="p-3 rounded-xl bg-[#FBFBF8] border border-forest-100">
            <span className="text-stone-500 text-[10px] block">Observation Confidence:</span>
            <span className="font-bold text-forest-900 flex items-center gap-1 mt-0.5">
              <Sparkles className="h-3.5 w-3.5 text-emerald-600" />
              <span>94.6% Coregistered</span>
            </span>
          </div>
        </div>
      </div>

      {/* Interactive Composite Mode Selector */}
      <div className="p-5 rounded-2xl bg-white border border-forest-200/90 shadow-2xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
          <div>
            <h4 className="text-sm font-bold text-forest-950 flex items-center gap-2">
              <Layers className="h-4 w-4 text-forest-700" />
              <span>Spectral Composite &amp; Index Masking</span>
            </h4>
            <p className="text-xs text-stone-500 font-mono mt-0.5">
              Select spectral band combination to inspect canopy vigor or water absorption
            </p>
          </div>

          <div className="flex items-center gap-1.5 p-1 bg-stone-100 rounded-xl text-xs font-mono">
            <button
              type="button"
              onClick={() => setActiveViewMode("split")}
              className={cn(
                "px-3 py-1 rounded-lg transition-colors font-medium",
                activeViewMode === "split" ? "bg-white text-forest-950 shadow-2xs font-bold" : "text-stone-600 hover:text-stone-900"
              )}
            >
              Split Slider
            </button>
            <button
              type="button"
              onClick={() => setActiveViewMode("dual")}
              className={cn(
                "px-3 py-1 rounded-lg transition-colors font-medium",
                activeViewMode === "dual" ? "bg-white text-forest-950 shadow-2xs font-bold" : "text-stone-600 hover:text-stone-900"
              )}
            >
              Side-by-Side
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {compositeModes.map((mode) => (
            <button
              key={mode.id}
              type="button"
              onClick={() => setActiveComposite(mode.id)}
              className={cn(
                "p-3.5 rounded-xl border text-left transition-all",
                activeComposite === mode.id
                  ? "bg-forest-800 text-white border-forest-900 shadow-xs"
                  : "bg-stone-50/70 border-stone-200 text-stone-700 hover:bg-white hover:border-forest-300"
              )}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="font-bold text-xs">{mode.label}</span>
                <span className={cn(
                  "text-[10px] font-mono px-1.5 py-0.5 rounded",
                  activeComposite === mode.id ? "bg-emerald-950 text-emerald-300" : "bg-stone-200 text-stone-700"
                )}>
                  {mode.bands}
                </span>
              </div>
              <p className={cn(
                "text-[11px] leading-relaxed line-clamp-2",
                activeComposite === mode.id ? "text-stone-200" : "text-stone-500"
              )}>
                {mode.desc}
              </p>
            </button>
          ))}
        </div>
      </div>

      {/* Interactive Before & After Satellite Comparison Canvas */}
      <div className="p-5 sm:p-6 rounded-2xl bg-white border border-forest-200/90 shadow-2xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-stone-100">
          <div>
            <span className="text-xs font-mono font-bold text-forest-800">
              DUAL-EPOCH COMPARISON // {project.title}
            </span>
            <div className="text-sm text-stone-600 font-medium mt-0.5">
              Baseline Day Zero (Oct 2023) vs. Current Observed State (Month 12)
            </div>
          </div>

          <div className="flex items-center gap-3 text-xs font-mono text-stone-500">
            <span className="flex items-center gap-1">
              <span className="h-2 w-2 rounded-full bg-amber-500" />
              Day Zero (Left)
            </span>
            <span>vs.</span>
            <span className="flex items-center gap-1">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Current State (Right)
            </span>
          </div>
        </div>

        {/* View Mode 1: Split Slider */}
        {activeViewMode === "split" ? (
          <div className="space-y-3">
            <div className="relative h-80 sm:h-96 w-full rounded-2xl overflow-hidden border border-forest-200 select-none bg-stone-900">
              {/* After Image (Full background) */}
              <div className="absolute inset-0">
                <Image
                  src="https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=80"
                  alt="Restored wetland and water body"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-4 right-4 z-10 px-3 py-1.5 rounded-lg bg-forest-950/80 backdrop-blur-xs text-white text-xs font-mono border border-white/20">
                  <span className="text-emerald-300 font-bold">CURRENT:</span> Water 18.1 ha • NDVI 0.53
                </div>
              </div>

              {/* Before Image (Clipped overlay) */}
              <div 
                className="absolute inset-y-0 left-0 overflow-hidden border-r-2 border-white shadow-2xl"
                style={{ width: `${sliderPosition}%` }}
              >
                <div className="relative h-full w-[1000px] max-w-none">
                  <Image
                    src="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1600&q=80"
                    alt="Degraded pre-intervention lakebed"
                    fill
                    className="object-cover filter saturate-50"
                  />
                  <div className="absolute bottom-4 left-4 z-10 px-3 py-1.5 rounded-lg bg-black/80 backdrop-blur-xs text-white text-xs font-mono border border-white/20">
                    <span className="text-amber-300 font-bold">BASELINE:</span> Water 12.4 ha • NDVI 0.42
                  </div>
                </div>
              </div>

              {/* Central Divider Handle */}
              <div 
                className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize pointer-events-none"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 h-9 w-9 rounded-full bg-forest-900 border-2 border-white text-white flex items-center justify-center shadow-lg">
                  <SlidersHorizontal className="h-4 w-4 text-emerald-300" />
                </div>
              </div>
            </div>

            {/* Slider Range Input */}
            <div className="flex items-center gap-4 px-2">
              <span className="text-xs font-mono text-stone-500 whitespace-nowrap">Baseline 0%</span>
              <input
                type="range"
                min="0"
                max="100"
                value={sliderPosition}
                onChange={(e) => setSliderPosition(Number(e.target.value))}
                className="w-full accent-forest-800 cursor-pointer"
                aria-label="Split slider comparison"
              />
              <span className="text-xs font-mono text-stone-500 whitespace-nowrap">Current 100%</span>
            </div>
          </div>
        ) : (
          /* View Mode 2: Side-by-Side Dual Panels */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Baseline Panel */}
            <div className="rounded-xl overflow-hidden border border-stone-200 relative bg-stone-900">
              <div className="relative h-72 w-full">
                <Image
                  src="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&q=80"
                  alt="Day Zero Baseline Scene"
                  fill
                  className="object-cover filter saturate-50"
                />
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-black/70 text-amber-300 font-mono text-xs border border-white/20">
                  DAY ZERO REFERENCE (OCT 2023)
                </div>
              </div>
              <div className="p-3.5 bg-stone-50 border-t border-stone-200 text-xs font-mono space-y-1">
                <div className="flex justify-between">
                  <span className="text-stone-500">Surface Water Extent:</span>
                  <span className="font-bold text-stone-900">12.4 ha</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500">Canopy Mean NDVI:</span>
                  <span className="font-bold text-stone-900">0.42</span>
                </div>
              </div>
            </div>

            {/* Current Panel */}
            <div className="rounded-xl overflow-hidden border border-stone-200 relative bg-stone-900">
              <div className="relative h-72 w-full">
                <Image
                  src="https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80"
                  alt="Current Monitored Scene"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-forest-950/80 text-emerald-300 font-mono text-xs border border-emerald-400/30">
                  LATEST OVERPASS (OCT 2024)
                </div>
              </div>
              <div className="p-3.5 bg-stone-50 border-t border-stone-200 text-xs font-mono space-y-1">
                <div className="flex justify-between">
                  <span className="text-stone-500">Surface Water Extent:</span>
                  <span className="font-bold text-forest-950">18.1 ha (+45.9%)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500">Canopy Mean NDVI:</span>
                  <span className="font-bold text-emerald-700">0.53 (+26.2%)</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Change Detection Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
          <div className="p-3.5 rounded-xl bg-forest-50/70 border border-forest-100 flex items-start gap-3">
            <Droplets className="h-5 w-5 text-water-700 flex-shrink-0 mt-0.5" />
            <div className="text-xs">
              <span className="font-bold text-forest-950">Net Water Area Gain:</span>
              <p className="text-stone-600 mt-0.5">+5.7 ha expanded surface area retained post-desilting.</p>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-forest-50/70 border border-forest-100 flex items-start gap-3">
            <Trees className="h-5 w-5 text-forest-700 flex-shrink-0 mt-0.5" />
            <div className="text-xs">
              <span className="font-bold text-forest-950">Riparian Greenness:</span>
              <p className="text-stone-600 mt-0.5">+18.4% fractional canopy density along 50m reservoir perimeter.</p>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-amberState-50 border border-amberState-200 flex items-start gap-3">
            <Scan className="h-5 w-5 text-amberState-800 flex-shrink-0 mt-0.5" />
            <div className="text-xs">
              <span className="font-bold text-amberState-900">Inflow Choke Point:</span>
              <p className="text-stone-600 mt-0.5">Sediment obstruction flagged in feeder quadrant C-2.</p>
            </div>
          </div>
        </div>

        {/* Methodology Notice */}
        <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 text-xs text-stone-600 flex items-start gap-2.5 font-mono">
          <Info className="h-4 w-4 text-forest-700 flex-shrink-0 mt-0.5" />
          <span>
            Demonstration imagery calibrated for Ramanagara reservoir catchment. Live Sentinel Hub and Copernicus Open Access API endpoints connect to this interface for real-time scene rendering.
          </span>
        </div>
      </div>
    </div>
  );
}
