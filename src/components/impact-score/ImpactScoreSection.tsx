"use client";

import React from "react";
import Link from "next/link";
import { SectionHeading } from "@/ui/SectionHeading";
import { FEATURED_PROJECT } from "@/lib/mock-data/projects";
import { 
  Award, 
  Coins, 
  Building2, 
  ShieldCheck,
  ArrowRight
} from "lucide-react";
import { cn } from "@/lib/utils";

interface ImpactScoreSectionProps {
  isWorkspace?: boolean;
}

export const ImpactScoreSection: React.FC<ImpactScoreSectionProps> = ({ isWorkspace = false }) => {
  const { governance } = FEATURED_PROJECT;

  const scoreComponents = [
    { name: "Trajectory Alignment", score: 82, desc: "Alignment with historical baseline ecological curve." },
    { name: "Environmental Gain", score: 76, desc: "Absolute net expansion of biomass and surface moisture." },
    { name: "Recovery Consistency", score: 74, desc: "Stability across dry-season satellite overpasses." },
    { name: "Water Persistence", score: 81, desc: "Hydro-period holding duration post-monsoon." },
  ];

  return (
    <section 
      id={isWorkspace ? undefined : "impact-score"} 
      className={cn(
        "relative overflow-hidden",
        isWorkspace ? "py-4 sm:py-6 bg-transparent" : "py-20 sm:py-28 bg-[#FBFBF8] border-b border-forest-100"
      )}
    >
      <div className={cn(isWorkspace ? "w-full" : "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8")}>
        
        <SectionHeading
          badge="CAPABILITY 09 // CONSERVATION IMPACT SCORE (0–100)"
          badgeTone="green"
          title="One Score. Complete Project Picture."
          subtitle="Synthesizing multi-spectral vegetation delta, water persistence, trajectory conformity, and seasonal resilience into an authoritative 0–100 index."
          align="left"
          className={isWorkspace ? "mb-6" : "mb-10"}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mt-10">
          
          {/* Left Column: Big Conservation Impact Score */}
          <div className="lg:col-span-5 rounded-2xl bg-gradient-to-br from-forest-900 via-forest-800 to-forest-950 text-white p-6 sm:p-8 flex flex-col justify-between shadow-elevated relative overflow-hidden">
            {/* Ambient subtle glow ring */}
            <div className="absolute -top-12 -right-12 w-64 h-64 rounded-full bg-emerald-500/20 blur-2xl pointer-events-none" />
            <div className="absolute inset-0 bg-satellite-grid opacity-15 pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center justify-between pb-3 mb-6 border-b border-forest-700/80 text-xs font-mono text-emerald-300">
                <span className="flex items-center gap-1.5 font-bold">
                  <Award className="h-4 w-4" />
                  ECOLOGICAL INTEGRITY INDEX
                </span>
                <span className="text-white/80">OVERPASS JAN 2025</span>
              </div>

              <div className="text-center py-4 sm:py-6">
                <div className="text-xs font-mono uppercase tracking-widest text-emerald-300/80">
                  CONSERVATION IMPACT SCORE
                </div>
                <div className="mt-2 flex items-baseline justify-center gap-2">
                  <span className="text-6xl sm:text-7xl font-black font-mono tracking-tight text-white">
                    78
                  </span>
                  <span className="text-2xl font-bold font-mono text-emerald-300/70">/ 100</span>
                </div>
                <div className="mt-4 inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-950/60 border border-emerald-400/40 text-emerald-200 text-xs font-medium backdrop-blur-xs">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Good — Monitoring Recommended</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-stone-200/90 text-center max-w-sm mx-auto mt-2 leading-relaxed">
                Aggregated score demonstrates significant ecological recovery over baseline, with minor variance in seasonal feeder canal inflow.
              </p>
            </div>

            {/* Bottom 4 Score Dimension Bars */}
            <div className="relative z-10 grid grid-cols-2 gap-2 mt-6 pt-5 border-t border-forest-700/80 text-xs">
              {scoreComponents.map((item) => (
                <div key={item.name} className="p-2 rounded-lg bg-white/10 border border-white/10">
                  <div className="flex items-center justify-between text-stone-200">
                    <span className="text-[11px] truncate">{item.name}</span>
                    <span className="font-mono font-bold text-emerald-300">{item.score}</span>
                  </div>
                  <div className="mt-1 h-1 w-full bg-black/30 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-400" style={{ width: `${item.score}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Evidence-Oriented Financial & Department Governance */}
          <div className="lg:col-span-7 rounded-2xl bg-white border border-forest-200 p-6 sm:p-8 flex flex-col justify-between shadow-soft">
            <div>
              <div className="flex items-center justify-between pb-3 mb-6 border-b border-stone-100">
                <div>
                  <h3 className="text-lg font-bold text-forest-950">
                    Department &amp; Financial Governance Matrix
                  </h3>
                  <p className="text-xs text-stone-500 font-mono mt-0.5">
                    Transparent correlation between public expenditure and confirmed environmental gain
                  </p>
                </div>
                <span className="p-2 rounded-lg bg-forest-50 text-forest-800 border border-forest-100">
                  <Coins className="h-5 w-5" />
                </span>
              </div>

              {/* 3 Financial Metrics */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-4 rounded-xl bg-forest-50/60 border border-forest-100">
                  <span className="text-[11px] uppercase font-mono text-stone-500">Probable Project Cost</span>
                  <div className="text-2xl font-bold font-mono text-forest-950 mt-1">
                    ₹{governance.probableCostCr.toFixed(1)} Cr
                  </div>
                  <span className="text-[11px] text-stone-500 mt-1 block">Sanctioned DPR Estimate</span>
                </div>

                <div className="p-4 rounded-xl bg-forest-50/60 border border-forest-100">
                  <span className="text-[11px] uppercase font-mono text-stone-500">Funds Allocated</span>
                  <div className="text-2xl font-bold font-mono text-forest-950 mt-1">
                    ₹{governance.fundsAllocatedCr.toFixed(1)} Cr
                  </div>
                  <span className="text-[11px] text-stone-500 mt-1 block">State + Central Share</span>
                </div>

                <div className="p-4 rounded-xl bg-amberState-50 border border-amberState-200">
                  <span className="text-[11px] uppercase font-mono text-amberState-900">Funds Utilized</span>
                  <div className="text-2xl font-bold font-mono text-amberState-900 mt-1">
                    ₹{governance.fundsUtilizedCr.toFixed(1)} Cr
                  </div>
                  <span className="text-[11px] text-amberState-700 font-semibold mt-1 block">
                    {governance.utilizationPercent}% Disbursed
                  </span>
                </div>
              </div>

              {/* Department Info Box */}
              <div className="mt-5 p-4 rounded-xl bg-stone-50 border border-stone-200/80 space-y-2">
                <div className="flex items-start gap-3">
                  <Building2 className="h-5 w-5 text-forest-800 flex-shrink-0 mt-0.5" />
                  <div className="text-xs">
                    <span className="font-semibold text-stone-900">Executing Agency:</span>
                    <p className="text-stone-700 mt-0.5">{governance.department}</p>
                    <span className="inline-block mt-1 font-mono text-forest-800 bg-forest-100/60 px-2 py-0.5 rounded">
                      Scheme: {governance.scheme}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {!isWorkspace && (
              <div className="mt-6 pt-4 border-t border-stone-100 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs text-stone-500 font-mono">
                  <ShieldCheck className="h-4 w-4 text-emerald-700 flex-shrink-0" />
                  <span>Evidence-oriented metrics linked directly to Treasury PFMS disbursements.</span>
                </div>
                <Link
                  href="/projects/prj-42/impact"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-forest-800 hover:bg-forest-700 text-white text-xs font-semibold shadow-2xs transition-all hover:shadow-xs"
                >
                  <span>View Comprehensive Impact Scorecard</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
