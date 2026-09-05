"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  ArrowDown, 
  Satellite, 
  Layers, 
  Eye, 
  TrendingUp, 
  ShieldCheck, 
  Compass, 
  Sparkles,
  CheckCircle2
} from "lucide-react";

export const HeroSection: React.FC = () => {
  return (
    <section 
      id="hero" 
      className="relative min-h-[94vh] sm:min-h-screen flex flex-col justify-between pt-24 sm:pt-28 pb-12 overflow-hidden bg-[#FBFBF8]"
    >
      {/* High-Resolution Natural Aerial Watershed & Wetland Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-25 pointer-events-none mix-blend-multiply transition-opacity duration-1000"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=2000&q=80')`,
        }}
        aria-hidden="true"
      />

      {/* Natural Warm Overlays to ensure pristine text readability */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-[#FBFBF8]/92 via-[#F6F8F3]/85 to-[#FBFBF8] pointer-events-none" 
        aria-hidden="true" 
      />

      {/* Delicate Satellite Coordinate Grid Overlay */}
      <div 
        className="absolute inset-0 bg-satellite-grid opacity-30 pointer-events-none" 
        aria-hidden="true" 
      />

      {/* Top Orbital Telemetry Tag */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-4 sm:pt-6 z-10">
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 border border-forest-300/80 text-forest-900 text-xs sm:text-sm font-medium shadow-2xs backdrop-blur-xs"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-700" />
          </span>
          <span className="font-mono text-[11px] sm:text-xs tracking-wide">
            EARTH OBSERVATION TELEMETRY • SENTINEL-2 &bull; LANDSAT-9 &bull; MULTI-SPECTRAL
          </span>
        </motion.div>
      </div>

      {/* Main Hero Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8 sm:py-12 my-auto z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Headlines & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-forest-950 leading-[1.12] text-balance">
                See the impact. <br />
                Understand the change. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-forest-800 via-forest-600 to-water-700">
                  Act before recovery stalls.
                </span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg sm:text-xl text-stone-700 font-normal leading-relaxed max-w-2xl"
            >
              Satellite observations and explainable environmental intelligence to monitor conservation interventions over time, identify trajectory gaps, and verify durable ecological recovery.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <Link
                href="/projects"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-forest-800 hover:bg-forest-700 text-white font-semibold text-base shadow-soft hover:shadow-elevated transition-all duration-200 active:scale-98 group"
              >
                <Compass className="h-5 w-5 text-emerald-300 group-hover:rotate-45 transition-transform" />
                <span>Explore Conservation Projects</span>
              </Link>

              <a
                href="#overview"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-forest-50/80 border border-forest-300/80 text-forest-900 font-semibold text-base shadow-2xs transition-all duration-200"
              >
                <span>See How It Works</span>
              </a>
            </motion.div>

            {/* Professional Environmental Verification Pill row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="pt-4 flex flex-wrap items-center gap-y-2.5 gap-x-6 text-xs text-stone-700 font-medium"
            >
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-700" />
                <span>Objective Pre-Intervention Baselines</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-700" />
                <span>Explainable AI Risk Predictor</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-700" />
                <span>Evidence-Grounding Audit Trail</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Photographic Earth Observation & Telemetry Viewfinder */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="relative rounded-2xl bg-white/95 border border-forest-200/90 p-5 shadow-elevated backdrop-blur-xs"
            >
              {/* Top Sensor Header */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-stone-200 text-xs font-mono text-stone-500">
                <div className="flex items-center gap-2 text-forest-900 font-semibold">
                  <Satellite className="h-4 w-4 text-forest-700" />
                  <span>EARTH OBSERVATION TELEMETRY</span>
                </div>
                <span className="text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded font-bold border border-emerald-200 text-[11px]">
                  5-DAY CADENCE
                </span>
              </div>

              {/* Natural Satellite Wetland Photograph with Overlay Viewfinder */}
              <div 
                className="relative h-60 sm:h-68 rounded-xl overflow-hidden bg-cover bg-center p-4 text-white flex flex-col justify-between shadow-inner border border-forest-300"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1439853941329-a99ce0457e8a?auto=format&fit=crop&w=1200&q=80')`,
                }}
              >
                {/* Subtle gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/50" aria-hidden="true" />
                
                {/* Elevation Contours & Crosshair simulation */}
                <div className="absolute inset-0 bg-satellite-grid opacity-30 pointer-events-none" aria-hidden="true" />
                
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 border border-white/40 rounded-full flex items-center justify-center pointer-events-none">
                  <div className="w-16 h-16 border border-emerald-300/50 rounded-full animate-ping" />
                  <div className="w-2.5 h-2.5 bg-emerald-400 rounded-full shadow-[0_0_8px_#34d399]" />
                </div>

                <div className="relative z-10 flex items-start justify-between">
                  <span className="px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md text-xs font-mono border border-white/20">
                    LAT 12.548° N, LNG 77.421° E
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-forest-900/80 backdrop-blur-md text-xs font-mono border border-emerald-400/40 text-emerald-200">
                    SENTINEL-2 L2A (10M)
                  </span>
                </div>

                <div className="relative z-10 bg-black/60 backdrop-blur-md p-3 rounded-lg border border-white/20">
                  <div className="flex items-center justify-between text-xs font-medium">
                    <span className="text-white font-semibold">Lake Restoration Project #42</span>
                    <span className="text-emerald-300 font-mono font-bold">NDVI 0.53 • NDWI 0.45</span>
                  </div>
                  <div className="mt-2 h-1.5 w-full bg-white/20 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-amber-400 via-emerald-400 to-water-400 w-[68%]" />
                  </div>
                </div>
              </div>

              {/* Bottom Quick Metric Pills */}
              <div className="grid grid-cols-3 gap-2 mt-3 pt-3 border-t border-stone-100 text-center">
                <div className="p-2 rounded-lg bg-stone-50 border border-stone-200/60">
                  <div className="text-[10px] uppercase font-mono text-stone-600">Baseline Water</div>
                  <div className="text-sm font-bold text-forest-950 font-mono mt-0.5">12.4 ha</div>
                </div>
                <div className="p-2 rounded-lg bg-stone-50 border border-stone-200/60">
                  <div className="text-[10px] uppercase font-mono text-stone-600">Month 12 Water</div>
                  <div className="text-sm font-bold text-forest-950 font-mono mt-0.5">18.1 ha</div>
                </div>
                <div className="p-2 rounded-lg bg-stone-50 border border-stone-200/60">
                  <div className="text-[10px] uppercase font-mono text-stone-600">Impact Score</div>
                  <div className="text-sm font-bold text-amber-800 font-mono mt-0.5">68 / 100</div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Core Intelligence Loop Ribbon */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-4 z-10">
        <div className="rounded-xl bg-white border border-forest-200/90 p-3 sm:p-4 shadow-subtle">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2.5 text-xs font-mono text-stone-600">
            <span className="font-semibold text-forest-900 tracking-wider">CORE ENVIRONMENTAL INTELLIGENCE LOOP:</span>
            <span className="text-emerald-800 font-semibold">NATURE → OBSERVATION → INTELLIGENCE → ACTION → RECOVERY</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2">
            {[
              { stage: "BASELINE", desc: "Day Zero Sentinel index", icon: Layers },
              { stage: "MONITOR", desc: "Continuous multi-temporal", icon: Eye },
              { stage: "DETECT", desc: "Anomaly & drift spotting", icon: TrendingUp },
              { stage: "PREDICT", desc: "Intervention risk model", icon: Sparkles },
              { stage: "ACT", desc: "Prescriptive directives", icon: Compass },
              { stage: "VERIFY", desc: "Closed-loop trajectory", icon: ShieldCheck },
            ].map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.stage}
                  className="flex items-center gap-2.5 p-2 rounded-lg bg-forest-50/70 border border-forest-100 hover:bg-forest-100/60 transition-colors"
                >
                  <div className="h-7 w-7 rounded bg-forest-800 text-emerald-300 flex items-center justify-center flex-shrink-0 text-xs font-bold">
                    <Icon className="h-3.5 w-3.5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs font-bold text-forest-950 font-mono tracking-tight flex items-center gap-1">
                      <span>{idx + 1}.</span> {step.stage}
                    </div>
                    <div className="text-[10px] text-stone-600 truncate">{step.desc}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Scroll down indicator */}
        <div className="flex justify-center pt-6">
          <a
            href="#overview"
            className="flex items-center gap-1.5 text-xs text-stone-600 hover:text-forest-900 transition-colors font-mono"
            aria-label="Scroll to The Problem Overview"
          >
            <span>DISCOVER THE ENVIRONMENTAL SYSTEM</span>
            <ArrowDown className="h-3.5 w-3.5 animate-bounce text-forest-700" />
          </a>
        </div>
      </div>
    </section>
  );
};
