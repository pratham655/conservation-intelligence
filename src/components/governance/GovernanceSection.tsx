"use client";

import React from "react";
import Link from "next/link";
import { SectionHeading } from "@/ui/SectionHeading";
import { 
  ShieldAlert, 
  CheckCircle2, 
  Info, 
  Landmark,
  ArrowRight
} from "lucide-react";
import { cn } from "@/lib/utils";

interface GovernanceSectionProps {
  isWorkspace?: boolean;
}

export const GovernanceSection: React.FC<GovernanceSectionProps> = ({ isWorkspace = false }) => {
  return (
    <section 
      id={isWorkspace ? undefined : "governance"} 
      className={cn(
        "relative overflow-hidden",
        isWorkspace ? "py-4 sm:py-6 bg-transparent" : "py-20 sm:py-28 bg-[#FBFBF8] border-b border-forest-100"
      )}
    >
      <div className={cn(isWorkspace ? "w-full" : "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8")}>
        
        <SectionHeading
          badge="INTEGRITY & REVIEW FRAMEWORK"
          badgeTone="amber"
          title="Connect Environmental Outcomes With Project Progress."
          subtitle="Cross-referencing treasury disbursements against satellite-verified bio-physical progress to flag discrepancies requiring ground inspection."
          align="left"
          className={isWorkspace ? "mb-6" : "mb-10"}
        />

        {/* Big Governance Integrity Matrix Card */}
        <div className="mt-10 rounded-2xl bg-white border border-forest-200 p-6 sm:p-10 shadow-soft">
          
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-stone-100">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-stone-500">
                <Landmark className="h-4 w-4 text-forest-700" />
                <span>STATE &amp; CENTRAL RECOVERY RECONCILIATION</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-forest-950 mt-1">
                Lake Restoration Project #42 — Progress Integrity Evaluation
              </h3>
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amberState-50 border border-amberState-300 text-amberState-900 text-xs font-bold font-mono">
              <ShieldAlert className="h-4 w-4 text-amberState-700" />
              <span>STATUS: REVIEW RECOMMENDED</span>
            </div>
          </div>

          {/* Visual Comparison: Funds Utilized vs Environmental Recovery */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-8 items-center">
            
            {/* Financial Progress Bar */}
            <div className="p-5 rounded-xl bg-stone-50 border border-stone-200/80 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase text-stone-500 font-semibold">
                  PUBLIC FUNDS UTILIZED
                </span>
                <span className="text-2xl font-black font-mono text-amberState-800">
                  82% <span className="text-xs font-normal text-stone-500">(₹1.97 Cr of ₹2.4 Cr)</span>
                </span>
              </div>

              <div className="h-3 w-full bg-stone-200 rounded-full overflow-hidden">
                <div className="h-full bg-amberState-600 rounded-full w-[82%]" />
              </div>

              <div className="flex items-center justify-between text-xs text-stone-500 font-mono">
                <span>Phase 3 Contractor Invoices Paid</span>
                <span className="text-forest-800 font-semibold">Minor Irrigation Dept</span>
              </div>
            </div>

            {/* Environmental Recovery Bar */}
            <div className="p-5 rounded-xl bg-stone-50 border border-stone-200/80 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase text-stone-500 font-semibold">
                  SATELLITE-VERIFIED RECOVERY
                </span>
                <span className="text-2xl font-black font-mono text-forest-900">
                  46% <span className="text-xs font-normal text-stone-500">(Carrying Capacity Target)</span>
                </span>
              </div>

              <div className="h-3 w-full bg-stone-200 rounded-full overflow-hidden">
                <div className="h-full bg-forest-600 rounded-full w-[46%]" />
              </div>

              <div className="flex items-center justify-between text-xs text-stone-500 font-mono">
                <span>Sentinel-2 NDWI / NDVI Index</span>
                <span className="text-rose-700 font-semibold">36% Discrepancy Margin</span>
              </div>
            </div>

          </div>

          {/* Objective Explanatory Callout (Crucial SIH Requirement: No direct accusations) */}
          <div className="p-4 sm:p-5 rounded-xl bg-forest-50/70 border border-forest-200/90 flex items-start gap-3.5">
            <Info className="h-5 w-5 text-forest-700 flex-shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-stone-700 leading-relaxed">
              <span className="font-bold text-forest-950 block mb-0.5">
                Objective Integrity &amp; Review Protocol:
              </span>
              Satellite observations alone do not claim illegal diversion or financial malfeasance. The system identifies physical inconsistencies between expenditure records and ground canopy/hydrology recovery to trigger targeted human verification and departmental peer review.
            </div>
          </div>

          {/* Audit Steps Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6 pt-6 border-t border-stone-100 text-xs">
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="h-4 w-4 text-emerald-700 flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-forest-950">Automated Flagging:</span>
                <p className="text-stone-600 mt-0.5">
                  Algorithm highlights contracts where utilization exceeds recovery by &gt; 25%.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="h-4 w-4 text-emerald-700 flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-forest-950">Human Verification:</span>
                <p className="text-stone-600 mt-0.5">
                  Field officer dispatched with geofenced mobile verification app for photo-sampling.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="h-4 w-4 text-emerald-700 flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-forest-950">Public Audit Trail:</span>
                <p className="text-stone-600 mt-0.5">
                  Reconciliation summary integrated into state department and auditor quarterly reviews.
                </p>
              </div>
            </div>
          </div>

          {/* Navigation CTA */}
          {!isWorkspace && (
            <div className="mt-8 p-4 rounded-2xl bg-white border border-forest-200/90 shadow-2xs flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs text-stone-500 font-mono">
                Biophysical ground recovery metrics paired with Treasury expenditure audit trails.
              </span>
              <Link
                href="/projects/prj-42/governance"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-forest-800 hover:bg-forest-700 text-white text-xs font-semibold shadow-2xs transition-all hover:shadow-xs"
              >
                <span>Review Fund Integrity & Governance</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
