"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { FeatureVisualHero } from "@/components/ui/FeatureVisualHero";
import { getProjectById } from "@/lib/mock-data/projects";
import { MetricCard } from "@/ui/MetricCard";
import { StatusBadge } from "@/ui/StatusBadge";
import { 
  ShieldAlert, 
  AlertTriangle, 
  Droplets, 
  Trees, 
  TrendingDown, 
  CloudRain, 
  Layers, 
  CheckCircle2, 
  Sparkles,
  ArrowRight,
  MapPin
} from "lucide-react";
import { cn } from "@/lib/utils";

interface AnomalyCluster {
  id: string;
  zone: string;
  type: "moisture" | "canopy" | "sediment" | "thermal";
  severity: "critical" | "warning" | "advisory";
  delta: string;
  confidence: number;
  detectedDate: string;
  sensor: string;
  description: string;
  whyFlagged: string;
  recommendedAction: string;
  coordinates: string;
}

export default function ProjectAnomaliesPage() {
  const params = useParams();
  const projectId = (params?.projectId as string) || "prj-42";
  const project = getProjectById(projectId);

  const [selectedSeverity, setSelectedSeverity] = useState<string>("all");
  const [activeClusterId, setActiveClusterId] = useState<string>("ANOM-01");

  const anomalyClusters: AnomalyCluster[] = [
    {
      id: "ANOM-01",
      zone: "Sector C-2 // Feeder Canal Confluence",
      type: "moisture",
      severity: "critical",
      delta: "-26% NDWI",
      confidence: 96,
      detectedDate: "14 Jan 2025",
      sensor: "Sentinel-2 MSI 10m",
      description: "Severe surface moisture deficit at the primary 400m feeder inflow channel. Silt obstruction impeding stormwater recharge.",
      whyFlagged: "Pixel NDWI fell from 0.42 to 0.16 post-monsoon, while regional precipitation remained within normal deciles (+5mm anomaly).",
      recommendedAction: "Dispatch mechanical excavation unit for targeted desilting across 400m feeder sector.",
      coordinates: "12.552° N, 77.428° E",
    },
    {
      id: "ANOM-02",
      zone: "Sector B-1 // Eastern Shallow Lagoon",
      type: "sediment",
      severity: "warning",
      delta: "+34% Turbidity",
      confidence: 88,
      detectedDate: "09 Jan 2025",
      sensor: "Sentinel-2 B04/B08 Index",
      description: "Turbidity increase detected indicating high suspended particulate matter and reduced water transparency.",
      whyFlagged: "Suspended sediment reflectance surged 34% compared to calibrated Day Zero benchmark.",
      recommendedAction: "Establish vegetative filter strips along eastern peripheral catchment bunds.",
      coordinates: "12.548° N, 77.435° E",
    },
    {
      id: "ANOM-03",
      zone: "Sector A-4 // Northern Embankment Fringe",
      type: "canopy",
      severity: "advisory",
      delta: "-12% NDVI Delta",
      confidence: 82,
      detectedDate: "04 Jan 2025",
      sensor: "Landsat-9 OLI-2",
      description: "Localized vegetative canopy thinning along upper bund slope due to seasonal grazing encroachment.",
      whyFlagged: "Marginal reduction in near-infrared reflectance along peripheral boundary strip.",
      recommendedAction: "Erect community bio-fencing and reinforce native vetiver grass planting.",
      coordinates: "12.556° N, 77.420° E",
    },
    {
      id: "ANOM-04",
      zone: "Sector D-3 // South Sluice Outlet",
      type: "thermal",
      severity: "advisory",
      delta: "+1.6°C Surface Temp",
      confidence: 78,
      detectedDate: "28 Dec 2024",
      sensor: "Landsat-9 TIRS (100m)",
      description: "Micro-climatic thermal anomaly along exposed shallow mudflats accelerating localized evaporation.",
      whyFlagged: "Thermal infrared channel registers 1.6°C above surrounding water surface baseline.",
      recommendedAction: "Maintain minimum 0.5m ecological pool depth via sluice gate regulation.",
      coordinates: "12.541° N, 77.419° E",
    },
  ];

  const filteredClusters = selectedSeverity === "all" 
    ? anomalyClusters 
    : anomalyClusters.filter(c => c.severity === selectedSeverity);

  const activeCluster = anomalyClusters.find(c => c.id === activeClusterId) || anomalyClusters[0];

  return (
    <div className="space-y-4">
      {/* 1. Distinct Environmental Visual Banner (Compact) */}
      <FeatureVisualHero featureKey="anomalies" compact={true} />

      {/* 2. Top Summary Bar: Project Health & 4 Core Indicators */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        
        {/* Overall Project Health Score Card */}
        <div className="lg:col-span-4 rounded-2xl bg-white border border-forest-200/90 p-5 shadow-2xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-2 mb-3 border-b border-stone-100 text-xs font-mono text-stone-500">
              <span className="flex items-center gap-1.5 font-bold text-forest-900">
                <ShieldAlert className="h-4 w-4 text-amberState-700" />
                PROJECT HEALTH AUDIT
              </span>
              <span className="font-bold text-forest-800">{project.code}</span>
            </div>

            <div className="flex items-baseline justify-between">
              <div>
                <span className="text-[10px] font-mono text-stone-500 uppercase">Composite Health Score</span>
                <div className="flex items-baseline gap-2 mt-0.5">
                  <span className="text-4xl sm:text-5xl font-extrabold font-mono text-forest-950">
                    68
                  </span>
                  <span className="text-sm font-bold font-mono text-stone-600">/ 100</span>
                </div>
              </div>

              <div className="text-right">
                <StatusBadge status="needs_attention" size="md" />
              </div>
            </div>

            <p className="mt-3 text-xs text-stone-600 leading-relaxed">
              Composite index reflects successful civil basin desilting, offset by high-priority water retention stagnation in quadrant C-2.
            </p>
          </div>

          {/* Quick Indicator Lights */}
          <div className="mt-4 pt-3 border-t border-stone-100 grid grid-cols-3 gap-2 text-center text-xs font-mono">
            <div className="p-2 rounded-xl bg-forest-50/70 border border-forest-100">
              <span className="text-[9px] text-stone-500 block">Earthworks</span>
              <span className="font-bold text-emerald-700 flex items-center justify-center gap-1 mt-0.5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Optimal
              </span>
            </div>
            <div className="p-2 rounded-xl bg-amberState-50 border border-amberState-200">
              <span className="text-[9px] text-stone-500 block">Inflow</span>
              <span className="font-bold text-amberState-900 flex items-center justify-center gap-1 mt-0.5">
                <span className="h-1.5 w-1.5 rounded-full bg-amberState-500 animate-pulse" />
                Deficit
              </span>
            </div>
            <div className="p-2 rounded-xl bg-forest-50/70 border border-forest-100">
              <span className="text-[9px] text-stone-500 block">Canopy</span>
              <span className="font-bold text-emerald-700 flex items-center justify-center gap-1 mt-0.5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Greening
              </span>
            </div>
          </div>
        </div>

        {/* 4 Core Health Indicators Grid */}
        <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
          <MetricCard
            label="Water Recovery"
            value="18.1"
            unit="ha"
            badge="Plateaued"
            subtext="Surface volume is 26% under hydraulic carrying target."
            changeType="warning"
            change="Needs Flow"
            sensor="Sentinel-2 NDWI"
            icon={Droplets}
          />
          <MetricCard
            label="Vegetation Health"
            value="0.53"
            badge="NDVI Index"
            subtext="Sapling survival along southern bunds shows solid vigor."
            changeType="positive"
            change="+0.11 Shift"
            sensor="10m Multi-spectral"
            icon={Trees}
          />
          <MetricCard
            label="Recovery Trajectory"
            value="-18"
            unit="%"
            badge="Deviation"
            subtext="Divergence between actual satellite pass and benchmark target."
            changeType="negative"
            change="Deficit Q3-Q4"
            sensor="Model Benchmark"
            icon={TrendingDown}
          />
          <MetricCard
            label="Rainfall Context"
            value="+5"
            unit="mm"
            badge="Normal"
            subtext="Local rainfall matches deciles; rules out regional drought."
            changeType="neutral"
            change="Within Range"
            sensor="CHIRPS Gridded"
            icon={CloudRain}
          />
        </div>

      </div>

      {/* 3. Spatial Anomaly Visualizer & Interactive Cluster Analysis */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        
        {/* Left Column: Spatial Heatmap / Satellite Anomaly Viewfinder */}
        <div className="lg:col-span-7 rounded-2xl bg-white border border-forest-200/90 p-5 shadow-2xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-stone-100">
              <div>
                <h3 className="text-base font-bold text-forest-950 flex items-center gap-2">
                  <Layers className="h-4 w-4 text-forest-700" />
                  <span>Spatial Anomaly Heatmap &amp; Stress Clusters</span>
                </h3>
                <p className="text-xs text-stone-500 font-mono mt-0.5">
                  Coregistered 10m multi-spectral difference overlay for {project.code}
                </p>
              </div>

              {/* Severity Legend */}
              <div className="hidden sm:flex items-center gap-3 text-[11px] font-mono">
                <span className="flex items-center gap-1 text-rose-800 font-semibold">
                  <span className="h-2 w-2 rounded-full bg-rose-500 animate-pulse" />
                  Critical
                </span>
                <span className="flex items-center gap-1 text-amber-800 font-semibold">
                  <span className="h-2 w-2 rounded-full bg-amber-500" />
                  Warning
                </span>
                <span className="flex items-center gap-1 text-emerald-800 font-semibold">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  Nominal
                </span>
              </div>
            </div>

            {/* Simulated Satellite Frame with Interactive Anomaly Hotspots */}
            <div 
              className="relative h-72 sm:h-80 rounded-xl overflow-hidden bg-cover bg-center border border-forest-300 p-4 text-white flex flex-col justify-between shadow-inner"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1541675154750-0444c7d51e8e?auto=format&fit=crop&w=1400&q=80')`,
              }}
            >
              {/* Natural Darkening Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-forest-950/90 via-forest-950/40 to-forest-950/60" />
              <div className="absolute inset-0 bg-satellite-grid opacity-30 pointer-events-none" />

              {/* Vector Contours for Catchment Outline */}
              <svg className="absolute inset-0 w-full h-full opacity-40 pointer-events-none" viewBox="0 0 500 320" fill="none">
                <path d="M50 220 C120 140, 220 200, 320 150 S 460 220, 480 160" stroke="#74C69D" strokeWidth="2" strokeDasharray="5 5" />
                <ellipse cx="260" cy="170" rx="140" ry="75" fill="#1B4332" fillOpacity="0.4" stroke="#52B788" strokeWidth="1.5" />
                {/* Feeder Canal line */}
                <path d="M120 70 Q 180 110, 210 145" stroke="#F59E0B" strokeWidth="3" strokeDasharray="3 3" />
              </svg>

              {/* Hotspot Pins overlaid on the satellite frame */}
              <div className="absolute inset-0 pointer-events-none">
                {/* ANOM-01 Pin */}
                <button
                  type="button"
                  onClick={() => setActiveClusterId("ANOM-01")}
                  className={cn(
                    "absolute top-[38%] left-[40%] -translate-x-1/2 -translate-y-1/2 p-2 rounded-full pointer-events-auto transition-transform hover:scale-110 focus:outline-hidden",
                    activeClusterId === "ANOM-01" ? "ring-4 ring-rose-400/60 scale-110" : ""
                  )}
                  title="Sector C-2 Feeder Choke"
                >
                  <span className="relative flex h-5 w-5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-5 w-5 bg-rose-600 border-2 border-white items-center justify-center text-[9px] font-bold">1</span>
                  </span>
                </button>

                {/* ANOM-02 Pin */}
                <button
                  type="button"
                  onClick={() => setActiveClusterId("ANOM-02")}
                  className={cn(
                    "absolute top-[52%] left-[68%] -translate-x-1/2 -translate-y-1/2 p-2 rounded-full pointer-events-auto transition-transform hover:scale-110 focus:outline-hidden",
                    activeClusterId === "ANOM-02" ? "ring-4 ring-amber-400/60 scale-110" : ""
                  )}
                  title="Sector B-1 Turbidity"
                >
                  <span className="relative flex h-4 w-4">
                    <span className="relative inline-flex rounded-full h-4 w-4 bg-amber-500 border-2 border-white items-center justify-center text-[9px] font-bold">2</span>
                  </span>
                </button>

                {/* ANOM-03 Pin */}
                <button
                  type="button"
                  onClick={() => setActiveClusterId("ANOM-03")}
                  className={cn(
                    "absolute top-[22%] left-[28%] -translate-x-1/2 -translate-y-1/2 p-2 rounded-full pointer-events-auto transition-transform hover:scale-110 focus:outline-hidden",
                    activeClusterId === "ANOM-03" ? "ring-4 ring-emerald-400/60 scale-110" : ""
                  )}
                  title="Sector A-4 Canopy"
                >
                  <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-600 border-2 border-white items-center justify-center text-[9px] font-bold">3</span>
                </button>
              </div>

              {/* Viewfinder Overpass Details */}
              <div className="relative z-10 flex items-center justify-between text-[11px] font-mono">
                <span className="px-2 py-0.5 rounded bg-black/60 backdrop-blur-xs border border-white/20">
                  SENTINEL-2 L2A • ORTHORECTIFIED 10m
                </span>
                <span className="px-2 py-0.5 rounded bg-forest-900/80 backdrop-blur-xs text-emerald-300 border border-emerald-400/30">
                  SCENE: 20250114_L2A
                </span>
              </div>

              {/* Selected Cluster Info Strip */}
              <div className="relative z-10 p-3 rounded-xl bg-black/65 backdrop-blur-md border border-white/20 flex items-center justify-between">
                <div>
                  <div className="text-[11px] text-emerald-300 font-mono font-bold flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5 text-rose-400" />
                    <span>{activeCluster.zone}</span>
                  </div>
                  <div className="text-xs text-stone-200 mt-0.5 font-medium truncate max-w-md">
                    {activeCluster.description}
                  </div>
                </div>
                <span className={cn(
                  "px-2.5 py-1 rounded-md text-[11px] font-mono font-bold border shrink-0",
                  activeCluster.severity === "critical" ? "bg-rose-950/80 text-rose-200 border-rose-500/50" :
                  activeCluster.severity === "warning" ? "bg-amber-950/80 text-amber-200 border-amber-500/50" :
                  "bg-emerald-950/80 text-emerald-200 border-emerald-500/50"
                )}>
                  {activeCluster.delta}
                </span>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-stone-100 flex flex-wrap items-center justify-between gap-3 text-xs text-stone-500 font-mono">
            <span>Grid Coordinates: {project.coordinates.lat}° N, {project.coordinates.lng}° E</span>
            <span className="text-emerald-700 font-semibold flex items-center gap-1">
              <CheckCircle2 className="h-3.5 w-3.5" />
              Sensor Co-registration Verified
            </span>
          </div>
        </div>

        {/* Right Column: Detected Anomaly List & Deep Diagnostic */}
        <div className="lg:col-span-5 rounded-2xl bg-white border border-forest-200/90 p-5 shadow-2xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-stone-100">
              <div>
                <h3 className="text-base font-bold text-forest-950">
                  Detected Anomaly Clusters
                </h3>
                <span className="text-xs text-stone-500 font-mono">
                  {filteredClusters.length} active spatial clusters flagged
                </span>
              </div>

              {/* Filter Tabs */}
              <div className="flex items-center gap-1 p-1 bg-stone-100 rounded-lg text-[11px] font-mono">
                {["all", "critical", "warning"].map((sev) => (
                  <button
                    key={sev}
                    type="button"
                    onClick={() => setSelectedSeverity(sev)}
                    className={cn(
                      "px-2 py-0.5 rounded capitalize transition-colors font-semibold",
                      selectedSeverity === sev 
                        ? "bg-white text-forest-950 shadow-2xs" 
                        : "text-stone-500 hover:text-stone-800"
                    )}
                  >
                    {sev}
                  </button>
                ))}
              </div>
            </div>

            {/* List of Clusters */}
            <div className="space-y-2.5 max-h-[300px] overflow-y-auto no-scrollbar pr-1">
              {filteredClusters.map((cluster) => {
                const isSelected = cluster.id === activeClusterId;
                return (
                  <button
                    key={cluster.id}
                    type="button"
                    onClick={() => setActiveClusterId(cluster.id)}
                    className={cn(
                      "w-full text-left p-3 rounded-xl border transition-all relative",
                      isSelected
                        ? "bg-forest-50/80 border-forest-300 shadow-2xs ring-1 ring-forest-300"
                        : "bg-white border-stone-200/80 hover:bg-stone-50 hover:border-forest-200"
                    )}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-bold text-forest-950 truncate">
                        {cluster.zone}
                      </span>
                      <span className={cn(
                        "text-[10px] font-mono font-bold px-2 py-0.5 rounded-full border shrink-0 uppercase",
                        cluster.severity === "critical" ? "bg-rose-50 text-rose-800 border-rose-200" :
                        cluster.severity === "warning" ? "bg-amberState-50 text-amberState-900 border-amberState-200" :
                        "bg-emerald-50 text-emerald-800 border-emerald-200"
                      )}>
                        {cluster.severity}
                      </span>
                    </div>

                    <div className="mt-1 flex items-center justify-between text-[11px] font-mono">
                      <span className="text-stone-500">{cluster.detectedDate}</span>
                      <span className="font-bold text-forest-900">{cluster.delta}</span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* "Why was this flagged?" Card */}
            <div className="mt-4 p-3.5 rounded-xl bg-amberState-50/70 border border-amberState-200/90 space-y-1.5">
              <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-amberState-950">
                <AlertTriangle className="h-3.5 w-3.5 text-amberState-700 shrink-0" />
                <span>WHY WAS THIS FLAGGED?</span>
              </div>
              <p className="text-xs text-stone-700 leading-relaxed">
                {activeCluster.whyFlagged}
              </p>
              <div className="pt-2 border-t border-amberState-200/70 flex items-center justify-between text-[11px] text-amberState-900 font-mono">
                <span>Confidence: {activeCluster.confidence}%</span>
                <span>Sensor: {activeCluster.sensor}</span>
              </div>
            </div>
          </div>

          {/* Action CTA leading directly to Corrective Actions route */}
          <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between gap-3">
            <span className="text-xs font-mono text-stone-500">
              Sector: {activeCluster.coordinates}
            </span>
            <Link
              href={`/projects/${projectId}/actions`}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-forest-800 hover:bg-forest-700 text-white text-xs font-semibold shadow-2xs transition-all hover:shadow-xs shrink-0"
            >
              <span>Dispatch Action Order</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>

      </div>

      {/* 4. Temporal Trend & Correlation Analysis Matrix */}
      <div className="rounded-2xl bg-white border border-forest-200/90 p-5 shadow-2xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 mb-4 border-b border-stone-100">
          <div>
            <h3 className="text-base font-bold text-forest-950 flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-emerald-700" />
              <span>Multi-temporal Anomaly Progression &amp; Cross-Correlation</span>
            </h3>
            <p className="text-xs text-stone-500 font-mono mt-0.5">
              5-day cadence temporal trajectory isolating genuine ecological decline from seasonal weather fluctuations
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-md bg-forest-50 border border-forest-200 text-[11px] font-mono text-forest-800 font-semibold">
              Temporal Window: Oct 2023 &ndash; Jan 2025
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          <div className="p-4 rounded-xl bg-stone-50/80 border border-stone-200/80 space-y-1.5">
            <span className="font-mono font-bold text-forest-950 uppercase text-[11px] block">
              1. Moisture Inflow Plateau
            </span>
            <p className="text-stone-600 leading-relaxed">
              Post-monsoon surface water retention stabilized at 18.1 ha instead of climbing to the 24.5 ha carrying capacity target.
            </p>
            <div className="pt-2 text-[11px] font-mono text-amberState-800 font-semibold">
              Variance flagged: Month 6 &ndash; Month 12
            </div>
          </div>

          <div className="p-4 rounded-xl bg-stone-50/80 border border-stone-200/80 space-y-1.5">
            <span className="font-mono font-bold text-forest-950 uppercase text-[11px] block">
              2. Meteorological Decile Validation
            </span>
            <p className="text-stone-600 leading-relaxed">
              CHIRPS precipitation model registers a +5mm rainfall anomaly across the micro-catchment, ruling out climatic drought.
            </p>
            <div className="pt-2 text-[11px] font-mono text-emerald-700 font-semibold">
              Root cause: Hydrological civil bottleneck
            </div>
          </div>

          <div className="p-4 rounded-xl bg-stone-50/80 border border-stone-200/80 space-y-1.5">
            <span className="font-mono font-bold text-forest-950 uppercase text-[11px] block">
              3. Prescriptive Hotspot Priority
            </span>
            <p className="text-stone-600 leading-relaxed">
              Clearing Sector C-2 feeder canal is projected to recover +22% water holding volume within 2 post-remediation overpasses.
            </p>
            <div className="pt-2 text-[11px] font-mono text-forest-800 font-semibold">
              Confidence level: 96%
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
