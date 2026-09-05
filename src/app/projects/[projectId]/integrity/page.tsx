"use client";

import React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { FeatureVisualHero } from "@/components/ui/FeatureVisualHero";
import { getProjectById } from "@/lib/mock-data/projects";
import { 
  ShieldAlert, 
  ShieldCheck, 
  ArrowRight,
  Camera
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function IntegrityReviewPage() {
  const params = useParams();
  const projectId = (params?.projectId as string) || "prj-42";
  const project = getProjectById(projectId);

  const { governance } = project;

  const milestoneAudits = [
    {
      milestone: "M1 // Civil Basin Desilting & Deepening",
      contractor: "Ramanagara Hydrological Infrastructure Ltd.",
      reportedCost: "₹1.80 Cr",
      disbursedPercent: 100,
      satelliteStatus: "Verified Aligned",
      satelliteCorrelation: "94% Optical / SAR match",
      statusTone: "green",
      findings: "Sentinel-1 SAR coherence drop and Sentinel-2 multi-spectral volume calculations confirm substantial lakebed silt removal matching reported cubic meters.",
    },
    {
      milestone: "M2 // Feeder Canal C-2 Silt Removal (400m)",
      contractor: "Cauvery Basin Earthworks JV",
      reportedCost: "₹0.95 Cr",
      disbursedPercent: 100,
      satelliteStatus: "Evidence Inconsistency Detected",
      satelliteCorrelation: "28% Physical confirmation",
      statusTone: "red",
      findings: "Reported 100% cleared in administrative filing; however, multi-temporal NDWI indicates persistent sediment choke point with only ~60m visibly altered. Review required.",
    },
    {
      milestone: "M3 // Riparian Eco-Shield Native Planting",
      contractor: "Karnataka Eco-Restoration Society",
      reportedCost: "₹0.45 Cr",
      disbursedPercent: 75,
      satelliteStatus: "Verified Aligned",
      satelliteCorrelation: "88% Vegetative increase",
      statusTone: "green",
      findings: "Sentinel-2 NDVI reflectance shows clear expansion of perennial canopy (+18%) along southern perimeter bunds, aligning with disbursement schedule.",
    },
    {
      milestone: "M4 // Automated Inflow Sluice Gate Works",
      contractor: "Apex Hydrometric Systems",
      reportedCost: "₹0.30 Cr",
      disbursedPercent: 40,
      satelliteStatus: "In Progress / On Track",
      satelliteCorrelation: "Structural change detected",
      statusTone: "neutral",
      findings: "Sub-meter commercial tasking and high-resolution optical imagery confirm active masonry civil work around northern sluice channel.",
    },
  ];

  return (
    <div className="space-y-4">
      <FeatureVisualHero featureKey="integrity" compact={true} />

      {/* Mandatory Responsible Language Notice */}
      <div className="p-4 sm:p-5 rounded-2xl bg-amberState-50/80 border border-amberState-200 text-amberState-900 text-xs sm:text-sm leading-relaxed space-y-2">
        <div className="flex items-center gap-2 font-bold font-mono text-amberState-950">
          <ShieldAlert className="h-4 w-4 text-amberState-700 flex-shrink-0" />
          <span>INTEGRITY REVIEW &amp; PHYSICAL EVIDENCE RECONCILIATION</span>
        </div>
        <p>
          <strong>Responsible Use Protocol:</strong> Satellite observations provide empirical physical measurements of surface changes and hydrological flows. <em>Satellite evidence does not independently establish financial misconduct or administrative intent.</em> Discrepancy flags indicate evidence inconsistencies between reported physical milestones and detected biophysical change, serving as triggers for expedited human field verification.
        </p>
      </div>

      {/* Executive Overview Card */}
      <div className="p-6 rounded-2xl bg-white border border-forest-200/90 shadow-2xs">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 border-b border-stone-100">
          <div>
            <span className="text-xs font-mono font-bold text-forest-700 uppercase">
              GOVERNANCE INTEGRITY STATUS // {project.code}
            </span>
            <h3 className="text-2xl font-bold text-forest-950 mt-1">
              Physical Milestone &amp; Expenditure Audit
            </h3>
            <div className="flex items-center gap-2 text-xs text-stone-500 font-mono mt-1">
              <span>Executing Agency: {governance.department}</span>
              <span>•</span>
              <span>Scheme: {governance.scheme}</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-forest-50 border border-forest-100 text-center min-w-[120px]">
              <span className="text-[10px] uppercase font-mono text-stone-500 block">Reported Spend</span>
              <span className="text-lg font-bold font-mono text-forest-950">₹{governance.fundsUtilizedCr.toFixed(1)} Cr</span>
            </div>
            <div className="p-3 rounded-xl bg-amberState-50 border border-amberState-200 text-center min-w-[120px]">
              <span className="text-[10px] uppercase font-mono text-amberState-800 block">Review Flag</span>
              <span className="text-lg font-bold font-mono text-amberState-900">1 Inconsistency</span>
            </div>
          </div>
        </div>

        {/* Milestone Audit Table */}
        <div className="mt-6 space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-bold text-forest-950 font-mono">
              CONTRACT-LEVEL SATELLITE RECONCILIATION
            </h4>
            <span className="text-xs text-stone-500 font-mono">4 Monitored Contracts</span>
          </div>

          <div className="space-y-3">
            {milestoneAudits.map((item) => (
              <div
                key={item.milestone}
                className={cn(
                  "p-5 rounded-2xl border transition-all",
                  item.statusTone === "red"
                    ? "bg-rose-50/40 border-rose-200/90 shadow-2xs"
                    : item.statusTone === "green"
                    ? "bg-white border-forest-200/90"
                    : "bg-stone-50/50 border-stone-200"
                )}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-stone-100/80">
                  <div>
                    <span className="font-bold text-sm text-forest-950">{item.milestone}</span>
                    <span className="text-xs text-stone-500 block font-mono mt-0.5">Contractor: {item.contractor}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className={cn(
                      "px-2.5 py-1 rounded-full text-xs font-semibold border font-mono",
                      item.statusTone === "red"
                        ? "bg-rose-100 text-rose-800 border-rose-300"
                        : item.statusTone === "green"
                        ? "bg-emerald-50 text-emerald-800 border-emerald-200"
                        : "bg-stone-100 text-stone-700 border-stone-200"
                    )}>
                      {item.satelliteStatus}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-mono mt-3 text-stone-600">
                  <div>
                    <span className="text-stone-400 text-[10px] block">Contract Value</span>
                    <span className="font-bold text-stone-900">{item.reportedCost}</span>
                  </div>
                  <div>
                    <span className="text-stone-400 text-[10px] block">Disbursed</span>
                    <span className="font-bold text-forest-900">{item.disbursedPercent}%</span>
                  </div>
                  <div className="col-span-2">
                    <span className="text-stone-400 text-[10px] block">Satellite Correlation</span>
                    <span className="font-bold text-forest-950">{item.satelliteCorrelation}</span>
                  </div>
                </div>

                <p className="text-xs text-stone-700 mt-3 leading-relaxed bg-white/70 p-3 rounded-xl border border-stone-200/60">
                  <strong>Telemetry Findings:</strong> {item.findings}
                </p>

                {item.statusTone === "red" && (
                  <div className="mt-3 flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-rose-200 text-xs">
                    <span className="text-rose-800 font-medium">
                      Action Directive: Requires human field verification &amp; canal cross-section inspection.
                    </span>
                    <button
                      type="button"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-rose-800 text-white font-semibold text-xs shadow-2xs hover:bg-rose-700 transition-colors"
                    >
                      <Camera className="h-3.5 w-3.5" />
                      <span>Dispatch Geofenced Photo Verification</span>
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Cryptographic Audit Trail Card */}
      <div className="p-5 rounded-2xl bg-forest-950 text-white shadow-soft flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-forest-900 text-emerald-300 border border-forest-800">
            <ShieldCheck className="h-5 w-5" />
          </div>
          <div>
            <div className="text-emerald-300 font-bold text-xs uppercase">Cryptographic Audit Ledger</div>
            <div className="text-stone-300 text-[11px] mt-0.5 truncate max-w-md">
              SHA-256 Hash: 0x8F4E...C291 • Verified with Sentinel-2 scene &amp; PFMS Treasury Voucher
            </div>
          </div>
        </div>

        <Link
          href={`/projects/${projectId}/governance`}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white text-forest-950 font-semibold text-xs hover:bg-stone-100 transition-colors shrink-0"
        >
          <span>View Funds Overview</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </div>
  );
}
