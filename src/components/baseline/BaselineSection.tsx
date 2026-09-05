"use client";

import React from "react";
import Link from "next/link";
import { SectionHeading } from "@/ui/SectionHeading";
import { MetricCard } from "@/ui/MetricCard";
import { FEATURED_PROJECT } from "@/lib/mock-data/projects";
import { 
  Layers, 
  Droplets, 
  Trees, 
  Maximize2, 
  Info, 
  CheckCircle2, 
  Database,
  ArrowRight 
} from "lucide-react";
import { cn } from "@/lib/utils";

interface BaselineSectionProps {
  isWorkspace?: boolean;
}

export const BaselineSection: React.FC<BaselineSectionProps> = ({ isWorkspace = false }) => {
  const { baseline } = FEATURED_PROJECT;
  const { metrics } = baseline;

  return (
    <section 
      id={isWorkspace ? undefined : "baseline"} 
      className={cn(
        "relative overflow-hidden",
        isWorkspace ? "py-4 sm:py-6 bg-transparent" : "py-20 sm:py-28 bg-[#F6F8F3] border-b border-forest-100"
      )}
    >
      {/* Background subtle topographic pattern */}
      {!isWorkspace && (
        <div className="absolute inset-0 bg-topo-pattern opacity-40 pointer-events-none" aria-hidden="true" />
      )}

      <div className={cn(isWorkspace ? "w-full" : "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", "relative z-10")}>
        
        <div className={cn("flex flex-col md:flex-row md:items-end justify-between gap-4", isWorkspace ? "mb-6" : "mb-12")}>
          <SectionHeading
            badge="CAPABILITY 01 // ENVIRONMENTAL BASELINE GENERATOR"
            badgeTone="green"
            title="Start With Day Zero."
            subtitle="Historical satellite observations establish an objective pre-intervention baseline, eliminating retrospective guesswork."
            align="left"
            className="mb-0"
          />

          {/* Project Spec Box */}
          <div className="p-3.5 rounded-xl bg-white border border-forest-200/90 shadow-2xs text-xs font-mono text-stone-600 flex flex-col gap-1 min-w-[260px]">
            <div className="flex items-center justify-between text-forest-900 font-bold pb-1.5 border-b border-stone-100">
              <span>{FEATURED_PROJECT.title}</span>
              <span className="text-[10px] bg-forest-100 text-forest-800 px-1.5 py-0.5 rounded">
                {FEATURED_PROJECT.code}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-stone-600">Observation Period:</span>
              <span className="text-stone-800 font-medium">Oct 2023 - Jan 2024</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-stone-600">Constellation:</span>
              <span className="text-forest-700 font-semibold">Sentinel-2 (10m)</span>
            </div>
          </div>
        </div>

        {/* 4 Elegant Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <MetricCard
            label="Vegetation Index (NDVI)"
            value={metrics.ndvi.toFixed(2)}
            badge="B4 / B8 Ratio"
            subtext="Baseline canopy chlorophyll reflectance across riparian zone."
            changeType="neutral"
            change="Pre-work Reference"
            sensor="Sentinel-2 MSI 10m"
            icon={Trees}
          />

          <MetricCard
            label="Water Index (NDWI)"
            value={metrics.ndwi.toFixed(2)}
            badge="B3 / B8 Ratio"
            subtext="Surface moisture and open liquid water delineation."
            changeType="neutral"
            change="Pre-work Reference"
            sensor="Sentinel-2 MSI 10m"
            icon={Droplets}
          />

          <MetricCard
            label="Water Body Extent"
            value={metrics.waterExtentHa}
            unit="ha"
            badge="Dec 2023 Capture"
            subtext="Calculated seasonal pool area prior to desilting intervention."
            changeType="neutral"
            change="Pre-work Reference"
            sensor="Multi-spectral Polygon"
            icon={Maximize2}
          />

          <MetricCard
            label="Vegetation Coverage"
            value={metrics.vegetationCoveragePercent}
            unit="%"
            badge="Fringe Area"
            subtext="Fractional vegetative ground cover within 50m catchment buffer."
            changeType="neutral"
            change="Pre-work Reference"
            sensor="10m Spatial Resolution"
            icon={Layers}
          />
        </div>

        {/* Satellite Imagery / Earth Observation Card */}
        <div className="mt-8 rounded-2xl bg-white border border-forest-200/90 p-6 sm:p-8 shadow-soft">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Visual Simulated Satellite Viewfinder */}
            <div className="lg:col-span-6">
              <div className="relative rounded-xl overflow-hidden bg-[#1E3A2B] border border-forest-300 aspect-[16/10] flex flex-col justify-between p-4 shadow-inner group">
                
                {/* Photographic Aerial Wetland Texture Overlay */}
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80')`,
                  }}
                  aria-hidden="true" 
                />
                <div 
                  className="absolute inset-0 bg-gradient-to-t from-forest-950/90 via-forest-900/50 to-forest-950/70"
                  aria-hidden="true"
                />
                <div 
                  className="absolute inset-0 bg-satellite-grid opacity-30 pointer-events-none" 
                  aria-hidden="true" 
                />

                {/* Simulated contour lines of Day Zero silt basin */}
                <svg className="absolute inset-0 w-full h-full opacity-40" viewBox="0 0 400 250" fill="none">
                  <path d="M40 180 Q120 120 200 160 T360 130" stroke="#74C69D" strokeWidth="1.5" strokeDasharray="4 4" />
                  <path d="M60 210 Q150 140 240 190 T380 160" stroke="#89C2D9" strokeWidth="1.5" />
                  <ellipse cx="210" cy="140" rx="90" ry="50" fill="#2A6F97" fillOpacity="0.4" stroke="#468FAF" strokeWidth="1.5" />
                </svg>

                {/* Overpass Metadata Badges */}
                <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-white">
                  <span className="px-2 py-0.5 rounded bg-black/60 backdrop-blur-xs border border-white/20">
                    SENTINEL-2 L2A • ORTHORECTIFIED
                  </span>
                  <span className="px-2 py-0.5 rounded bg-forest-900/80 backdrop-blur-xs text-emerald-300 border border-emerald-400/30">
                    CLOUD COVER: 1.2%
                  </span>
                </div>

                {/* Bottom Center Day Zero Verification Pin */}
                <div className="relative z-10 p-3 rounded-lg bg-black/60 backdrop-blur-md border border-white/20 text-white">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-emerald-300">DAY ZERO CALIBRATION</span>
                    <span className="font-mono text-[10px] text-stone-300">GEO-HASH: 77.421, 12.548</span>
                  </div>
                  <p className="text-[11px] text-stone-300 mt-1 leading-tight">
                    {baseline.preInterventionNotes}
                  </p>
                </div>
              </div>
            </div>

            {/* Explanation & Baseline Significance */}
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-50 border border-forest-200 text-forest-800 text-xs font-semibold">
                <Database className="h-3.5 w-3.5" />
                <span>Standardized Spatial Calibration</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-forest-950">
                Why Day Zero changes conservation governance.
              </h3>

              <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
                Before ground machinery enters the water body or saplings are planted, the platform computes 3-year historical reflectance curves to isolate seasonal water ebbs from structural degradation.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-emerald-700 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-sm font-semibold text-forest-950">
                      Eliminates Baseline Manipulation:
                    </span>{" "}
                    <span className="text-sm text-stone-600">
                      Pre-intervention figures cannot be selectively chosen to inflate post-completion success ratios.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-emerald-700 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-sm font-semibold text-forest-950">
                      Multi-Spectral Truth:
                    </span>{" "}
                    <span className="text-sm text-stone-600">
                      Combines Near-Infrared (NIR) and Short-Wave Infrared (SWIR) to see beneath floating weeds and turbid surface water.
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-100 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs text-stone-600 font-mono">
                  <Info className="h-4 w-4 text-forest-700 flex-shrink-0" />
                  <span>Demonstration baseline: Ramanagara District minor irrigation reservoir records.</span>
                </div>
                {!isWorkspace && (
                  <Link
                    href="/projects/prj-42/baseline"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-forest-800 hover:bg-forest-700 text-white text-xs font-semibold shadow-2xs transition-all hover:shadow-xs"
                  >
                    <span>Explore Baseline Analysis</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                )}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
