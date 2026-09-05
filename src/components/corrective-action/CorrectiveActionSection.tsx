"use client";

import React from "react";
import Link from "next/link";
import { SectionHeading } from "@/ui/SectionHeading";
import { Wrench, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface CorrectiveActionSectionProps {
  isWorkspace?: boolean;
}

export const CorrectiveActionSection: React.FC<CorrectiveActionSectionProps> = ({ isWorkspace = false }) => {
  const steps = [
    {
      num: 1,
      title: "Problem Detected",
      sub: "Month 9 Trajectory Deficit",
      desc: "Sentinel-2 overpass registers -18% deviation against baseline water holding model in quadrant C-2.",
      status: "completed",
    },
    {
      num: 2,
      title: "Contributing Factors",
      sub: "XAI Diagnostic Attribution",
      desc: "Hydrological analysis isolates a 400m feeder-canal sediment choke point impeding runoff inflow.",
      status: "completed",
    },
    {
      num: 3,
      title: "Recommended Action",
      sub: "Prescriptive Directive",
      desc: "Prioritize focused mechanical desilting in hotspot sector C-2 and enforce 50m riparian buffer.",
      status: "active",
      highlight: true,
    },
    {
      num: 4,
      title: "Action Implemented",
      sub: "Ground Execution",
      desc: "Department dispatches targeted excavator machinery; field officer validates clearance via geotagged photo.",
      status: "scheduled",
    },
    {
      num: 5,
      title: "Post-Action Monitoring",
      sub: "Continuous Verification",
      desc: "Next scheduled satellite overpasses (5-day cadence) track restored NDWI water expansion curve.",
      status: "scheduled",
    },
  ];

  return (
    <section 
      id={isWorkspace ? undefined : "corrective-action"} 
      className={cn(
        "relative overflow-hidden",
        isWorkspace ? "py-4 sm:py-6 bg-transparent" : "py-20 sm:py-28 bg-[#FBFBF8] border-b border-forest-100"
      )}
    >
      <div className={cn(isWorkspace ? "w-full" : "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8")}>
        
        <SectionHeading
          badge="CAPABILITY 07 // CORRECTIVE ACTION RECOMMENDATION ENGINE"
          badgeTone="green"
          title="Turn Detection Into Action."
          subtitle="Moving beyond passive diagnostics to automated, location-specific engineering directives that prevent project abandonment."
          align="left"
          className={isWorkspace ? "mb-6" : "mb-10"}
        />

        {/* 5-Step Process Flow Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-5 gap-4 relative">
          {steps.map((step) => (
            <div
              key={step.title}
              className={cn(
                "p-5 rounded-2xl border flex flex-col justify-between transition-all relative",
                step.highlight
                  ? "bg-forest-800 text-white border-forest-900 shadow-elevated scale-[1.02]"
                  : "bg-white text-stone-800 border-forest-200/90 shadow-2xs hover:border-forest-300"
              )}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={cn(
                      "h-7 w-7 rounded-full flex items-center justify-center font-mono text-xs font-bold",
                      step.highlight
                        ? "bg-emerald-400 text-forest-950"
                        : "bg-forest-100 text-forest-800"
                    )}
                  >
                    0{step.num}
                  </span>
                  <span
                    className={cn(
                      "text-[10px] font-mono uppercase px-2 py-0.5 rounded",
                      step.highlight
                        ? "bg-forest-900 text-emerald-300 border border-emerald-500/30"
                        : "bg-stone-100 text-stone-600"
                    )}
                  >
                    {step.status}
                  </span>
                </div>

                <h4
                  className={cn(
                    "text-sm font-bold",
                    step.highlight ? "text-white" : "text-forest-950"
                  )}
                >
                  {step.title}
                </h4>
                <div
                  className={cn(
                    "text-[11px] font-mono mt-0.5",
                    step.highlight ? "text-emerald-300" : "text-forest-700"
                  )}
                >
                  {step.sub}
                </div>

                <p
                  className={cn(
                    "text-xs mt-3 leading-relaxed",
                    step.highlight ? "text-stone-200" : "text-stone-600"
                  )}
                >
                  {step.desc}
                </p>
              </div>

              {step.highlight && (
                <div className="mt-4 pt-3 border-t border-forest-700/80 text-[11px] font-mono text-emerald-300 flex items-center gap-1.5">
                  <Wrench className="h-3.5 w-3.5" />
                  <span>ACTIONABLE DIRECTIVE GENERATED</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Featured Recommendation Detailed Directive Card */}
        <div className="mt-8 rounded-2xl bg-white border border-forest-200 p-6 sm:p-8 shadow-soft">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-stone-100">
            <div className="flex items-center gap-2">
              <span className="p-2 rounded-xl bg-forest-100 text-forest-800">
                <Wrench className="h-5 w-5" />
              </span>
              <div>
                <span className="text-xs font-mono text-stone-500 uppercase">
                  RECOMMENDED INTERVENTION ORDER // PRJ-42
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-forest-950">
                  Targeted Channel Desilting &amp; Eco-Buffer Reinforcement
                </h3>
              </div>
            </div>

            <span className="px-3 py-1 rounded-full text-xs font-mono bg-emerald-50 border border-emerald-200 text-emerald-800 font-bold">
              ESTIMATED RECOVERY GAIN: +22%
            </span>
          </div>

          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200/80">
              <span className="font-bold text-stone-900 block">Specific Action:</span>
              <p className="text-stone-600 mt-1 leading-relaxed">
                Prioritize desilting in identified hotspot area (feeder canal C-2) and review buffer-zone protection.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200/80">
              <span className="font-bold text-stone-900 block">Optimal Execution Window:</span>
              <p className="text-stone-600 mt-1 leading-relaxed">
                Execute within 3 weeks prior to pre-monsoon shower threshold to prevent canal re-sedimentation.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200/80">
              <span className="font-bold text-stone-900 block">Verification Protocol:</span>
              <p className="text-stone-600 mt-1 leading-relaxed">
                Post-dredging bathymetry and Sentinel-2 overpass day +7 will automatically audit water flow rate.
              </p>
            </div>
          </div>

          {/* Navigation CTA */}
          {!isWorkspace && (
            <div className="mt-6 pt-4 border-t border-stone-100 flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs text-stone-500 font-mono">
                Directives generated automatically from satellite anomaly clusters and watershed flow vectors.
              </span>
              <Link
                href="/projects/prj-42/actions"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-forest-800 hover:bg-forest-700 text-white text-xs font-semibold shadow-2xs transition-all hover:shadow-xs"
              >
                <span>Manage Corrective Actions</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
