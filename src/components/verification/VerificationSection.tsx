"use client";

import React from "react";
import Link from "next/link";
import { SectionHeading } from "@/ui/SectionHeading";
import { 
  Repeat, 
  CheckCircle2, 
  ShieldCheck, 
  ArrowRight
} from "lucide-react";
import { cn } from "@/lib/utils";

interface VerificationSectionProps {
  isWorkspace?: boolean;
}

export const VerificationSection: React.FC<VerificationSectionProps> = ({ isWorkspace = false }) => {
  const loopStages = [
    { name: "BASELINE", desc: "Day Zero Sentinel truth" },
    { name: "MONITOR", desc: "Continuous 5-day overpass" },
    { name: "DETECT", desc: "Pixel-level anomaly trigger" },
    { name: "PREDICT", desc: "Trajectory failure risk" },
    { name: "ACT", desc: "Targeted desilting order" },
    { name: "VERIFY", desc: "Outcome-grounded audit" },
  ];

  return (
    <section 
      id={isWorkspace ? undefined : "verification"} 
      className={cn(
        "relative overflow-hidden",
        isWorkspace ? "py-4 sm:py-6 bg-transparent" : "py-20 sm:py-28 bg-gradient-to-b from-[#FBFBF8] to-[#F1F6EE] border-b border-forest-100"
      )}
    >
      <div className={cn(isWorkspace ? "w-full" : "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8")}>
        
        <SectionHeading
          badge="CAPABILITY 08 // CLOSED-LOOP IMPACT VERIFICATION"
          badgeTone="green"
          title="Measure → Act → Verify."
          subtitle="Closing the accountability loop: proving that corrective interventions successfully bent the ecological curve back toward healthy recovery."
          align="left"
          className={isWorkspace ? "mb-6" : "mb-10"}
        />

        {/* Circular Closed Loop Visual Ribbon */}
        <div className="mt-8 rounded-2xl bg-white border border-forest-200 p-6 sm:p-8 shadow-soft">
          <div className="flex items-center justify-between pb-3 mb-6 border-b border-stone-100 text-xs font-mono text-stone-500">
            <span className="font-bold text-forest-900 flex items-center gap-1.5">
              <Repeat className="h-4 w-4 text-emerald-700 animate-spin" style={{ animationDuration: "12s" }} />
              AUTONOMOUS CONTINUOUS VERIFICATION LOOP
            </span>
            <span className="text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded font-semibold border border-emerald-200">
              RESTORATION VERIFIED
            </span>
          </div>

          {/* Loop Stages Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {loopStages.map((stage, idx) => (
              <div
                key={stage.name}
                className="p-3.5 rounded-xl bg-forest-50/70 border border-forest-200/80 hover:bg-forest-100/70 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono font-bold text-forest-950">
                    <span>{stage.name}</span>
                    <span className="text-emerald-700">0{idx + 1}</span>
                  </div>
                  <p className="text-[11px] text-stone-600 mt-1 leading-snug">
                    {stage.desc}
                  </p>
                </div>
                <div className="mt-3 flex items-center justify-end">
                  <ArrowRight className="h-3.5 w-3.5 text-forest-600 opacity-60" />
                </div>
              </div>
            ))}
          </div>

          {/* Before Action vs After Action Comparison Panel */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 pt-8 border-t border-stone-200">
            
            {/* Before Action */}
            <div className="p-5 rounded-2xl bg-amberState-50/70 border border-amberState-200 space-y-3">
              <div className="flex items-center justify-between text-xs font-mono text-amberState-900 font-bold">
                <span>BEFORE ACTION (MONTH 9)</span>
                <span className="px-2 py-0.5 rounded bg-amberState-100 border border-amberState-300">
                  Stagnating
                </span>
              </div>

              <div className="text-lg font-bold text-stone-900">
                Recovery trajectory below expected (-18%)
              </div>

              <p className="text-xs text-stone-600 leading-relaxed">
                Water holding stagnated at 18.1 ha due to silt occlusion at feeder mouth; dry season evaporation outpaced basin recharge.
              </p>

              <div className="pt-2 flex items-center gap-4 text-xs font-mono text-stone-500">
                <span>NDWI: 0.45</span>
                <span>Water Area: 18.1 ha</span>
              </div>
            </div>

            {/* After Action & Verification */}
            <div className="p-5 rounded-2xl bg-emerald-50/80 border border-emerald-200 space-y-3">
              <div className="flex items-center justify-between text-xs font-mono text-emerald-900 font-bold">
                <span>AFTER ACTION (POST-CORRECTION)</span>
                <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 border border-emerald-300">
                  Trend Restored
                </span>
              </div>

              <div className="text-lg font-bold text-emerald-950 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-emerald-700 flex-shrink-0" />
                <span>Recovery trend restored (+21% Trajectory Gain)</span>
              </div>

              <p className="text-xs text-stone-600 leading-relaxed">
                Post-desilting Sentinel-2 overpass recorded immediate inflow expansion to 23.4 ha, rejoining the benchmark ecological trajectory curve.
              </p>

              <div className="pt-2 flex items-center gap-4 text-xs font-mono text-forest-800 font-bold">
                <span>Verified NDWI: 0.52</span>
                <span>Water Area: 23.4 ha</span>
              </div>
            </div>

          </div>

          {/* Verification Audit Statement */}
          <div className="mt-6 p-4 rounded-xl bg-forest-900 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2.5">
              <ShieldCheck className="h-5 w-5 text-emerald-400 flex-shrink-0" />
              <span>
                <strong>Cryptographic Verification Hash:</strong> SHA-256 (0x7F9A...B3D2) locked with Sentinel-2 scene ID &amp; District DPR clearance.
              </span>
            </div>
            {!isWorkspace && (
              <Link
                href="/projects/prj-42/verification"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-emerald-700 hover:bg-emerald-600 text-white font-semibold text-xs transition-colors whitespace-nowrap"
              >
                <span>Verify Closed-Loop Outcomes</span>
                <ArrowRight className="h-3 w-3" />
              </Link>
            )}
          </div>
        </div>

      </div>
    </section>
  );
};
