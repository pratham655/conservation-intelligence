"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "@/ui/SectionHeading";
import { StatusBadge } from "@/ui/StatusBadge";
import { ALL_PROJECTS } from "@/lib/mock-data/projects";
import { 
  FileText, 
  Scale, 
  Download, 
  ChevronRight, 
  ShieldCheck,
  X,
  ArrowRight
} from "lucide-react";

export const ComparisonAndReportsSection: React.FC = () => {
  const [showReportModal, setShowReportModal] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);

  // 3 distinct projects for comparison
  const comparisonProjects = [
    ALL_PROJECTS[0], // Project #42 (Karnataka)
    ALL_PROJECTS[1], // Project #18 (Madhya Pradesh)
    ALL_PROJECTS[3], // Project #55 (West Bengal)
  ];

  const handleGenerateReport = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      setShowReportModal(true);
    }, 600);
  };

  return (
    <section id="reports" className="py-20 sm:py-28 bg-[#FBFBF8] relative overflow-hidden border-b border-forest-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="CAPABILITY 11 & 13 // COMPARATIVE ANALYTICS & REPORTING"
          badgeTone="water"
          title="Compare Interventions. Generate Audit Evidence."
          subtitle="Empower ministries, state secretariats, and district collectors with cross-basin comparative intelligence and automated, verifiable impact dossiers."
          align="left"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mt-10">
          
          {/* Left Column: Multi-Project Intervention Comparator (Capability 11) */}
          <div className="lg:col-span-7 rounded-2xl bg-white border border-forest-200 p-6 sm:p-8 flex flex-col justify-between shadow-soft">
            <div>
              <div className="flex items-center justify-between pb-3 mb-6 border-b border-stone-100">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-forest-900">
                  <Scale className="h-4 w-4 text-forest-700" />
                  <span>MULTI-PROJECT INTERVENTION COMPARATOR</span>
                </div>
                <span className="text-xs text-stone-500 font-mono">3 Eco-Zones</span>
              </div>

              <div className="space-y-3">
                {comparisonProjects.map((p) => (
                  <div
                    key={p.id}
                    className="p-4 rounded-xl bg-[#FAFBF9] border border-forest-100 hover:border-forest-300 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                  >
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono font-bold text-forest-800 bg-forest-100/70 px-1.5 py-0.5 rounded">
                          {p.code}
                        </span>
                        <h4 className="text-sm font-bold text-forest-950 truncate">
                          {p.title}
                        </h4>
                      </div>
                      <div className="text-xs text-stone-500 mt-1 flex items-center gap-2">
                        <span>{p.state}</span>
                        <span>•</span>
                        <span className="text-forest-700 font-medium">{p.interventionType}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 justify-between sm:justify-end flex-shrink-0">
                      <div className="text-right">
                        <div className="text-[10px] uppercase font-mono text-stone-600">Impact Score</div>
                        <div className="text-lg font-bold font-mono text-forest-950">
                          {p.impactScore} <span className="text-xs font-normal text-stone-600">/ 100</span>
                        </div>
                      </div>

                      <StatusBadge status={p.status} size="sm" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-stone-100 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs text-stone-500 font-mono">
                Comparative benchmarks normalized across biomes.
              </span>
              <Link
                href="/compare"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-forest-800 hover:text-forest-950"
              >
                <span>Open Full Intervention Comparator</span>
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Right Column: Automatic Evidence-Based Report Generator (Capability 13) */}
          <div className="lg:col-span-5 rounded-2xl bg-gradient-to-br from-forest-50/80 via-white to-water-50/40 border border-forest-200 p-6 sm:p-8 flex flex-col justify-between shadow-soft">
            <div>
              <div className="flex items-center justify-between pb-3 mb-6 border-b border-forest-100">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-forest-900">
                  <FileText className="h-4 w-4 text-forest-700" />
                  <span>AUTOMATIC IMPACT REPORT DOSSIER</span>
                </div>
                <span className="text-emerald-800 bg-emerald-100/70 border border-emerald-200 px-2 py-0.5 rounded text-[10px] font-mono font-bold">
                  ONE-CLICK AUDIT
                </span>
              </div>

              {/* Sample PDF Preview Card */}
              <div className="p-4 rounded-xl bg-white border border-forest-200 shadow-2xs space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-stone-100 text-xs">
                  <span className="font-bold text-forest-950 font-mono">DOSSIER #MOEFCC-2025-042</span>
                  <span className="text-[10px] text-stone-500 font-mono">15 JAN 2025</span>
                </div>

                <div className="text-xs space-y-2 text-stone-700">
                  <div className="flex items-center justify-between">
                    <span className="text-stone-500">1. Baseline Record:</span>
                    <span className="font-mono font-semibold text-forest-900">Sentinel-2 (10m) MSI Day 0</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-stone-500">2. Satellite Evidence:</span>
                    <span className="font-mono font-semibold text-forest-900">NDVI 0.53 • NDWI 0.45</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-stone-500">3. Recovery Trajectory:</span>
                    <span className="font-mono font-semibold text-amber-700">-18% Month 9 Variance</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-stone-500">4. Impact Score:</span>
                    <span className="font-mono font-semibold text-forest-900">78 / 100 Verified</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-stone-500">5. AI Diagnostic Directives:</span>
                    <span className="font-mono font-semibold text-forest-900">Canal Desilting Order</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-[11px] font-mono text-stone-500">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="h-3.5 w-3.5 text-emerald-700" />
                    Digitally Sealed
                  </span>
                  <span>Pages: 4 (PDF / JSON)</span>
                </div>
              </div>
            </div>

            {/* Generate Report Button & Dedicated Hub Link */}
            <div className="mt-6 pt-4 border-t border-forest-100 flex flex-col gap-2">
              <button
                type="button"
                onClick={handleGenerateReport}
                disabled={isGenerating}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-forest-800 hover:bg-forest-700 text-white font-medium text-sm shadow-xs transition-all active:scale-98 disabled:opacity-75"
              >
                {isGenerating ? (
                  <>
                    <span className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Compiling Satellite Telemetry...</span>
                  </>
                ) : (
                  <>
                    <Download className="h-4 w-4 text-emerald-300" />
                    <span>Generate Evidence-Based Report</span>
                  </>
                )}
              </button>

              <Link
                href="/reports"
                className="w-full text-center py-2 text-xs font-semibold text-forest-800 hover:text-forest-950 hover:underline flex items-center justify-center gap-1"
              >
                <span>Go to Dedicated Reports &amp; Dossiers Repository</span>
                <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          </div>

        </div>

        {/* Modal for Generated Report Dossier */}
        <AnimatePresence>
          {showReportModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setShowReportModal(false)}
                className="fixed inset-0 bg-forest-950/40 backdrop-blur-xs"
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 16 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 16 }}
                className="relative z-10 w-full max-w-2xl rounded-2xl bg-white border border-forest-200 shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto"
              >
                <div className="flex items-start justify-between pb-4 border-b border-stone-200">
                  <div>
                    <span className="text-xs font-mono text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 font-bold">
                      OFFICIAL SATELLITE AUDIT DOSSIER
                    </span>
                    <h3 className="text-xl font-bold text-forest-950 mt-1">
                      Lake Restoration Project #42 — Impact Dossier
                    </h3>
                    <p className="text-xs text-stone-500 font-mono mt-0.5">
                      Ramanagara / Kanakapura Basin • Karnataka State Minor Irrigation
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setShowReportModal(false)}
                    className="p-2 rounded-lg text-stone-400 hover:bg-stone-100 hover:text-stone-700"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                <div className="py-5 space-y-4 text-xs sm:text-sm text-stone-700">
                  <div className="p-4 rounded-xl bg-forest-50 border border-forest-200">
                    <h5 className="font-bold text-forest-950 mb-1">Executive Summary</h5>
                    <p className="leading-relaxed">
                      This audit dossier summarizes 12 months of multi-spectral observations (Sentinel-2 L2A) covering Lake Restoration Project #42. Following initial civil desilting, water extent reached 18.1 ha (vs baseline 12.4 ha). A Month 9 trajectory deviation (-18%) was flagged due to sediment choking in feeder quadrant C-2. Prescriptive canal dredging directive issued.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center font-mono">
                    <div className="p-2.5 rounded-lg bg-stone-50 border border-stone-200">
                      <span className="text-[10px] text-stone-500 block">Baseline NDVI</span>
                      <span className="text-base font-bold text-forest-950">0.42</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-stone-50 border border-stone-200">
                      <span className="text-[10px] text-stone-500 block">Current NDVI</span>
                      <span className="text-base font-bold text-emerald-700">0.53</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-stone-50 border border-stone-200">
                      <span className="text-[10px] text-stone-500 block">Funds Disbursed</span>
                      <span className="text-base font-bold text-amber-700">71%</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-stone-50 border border-stone-200">
                      <span className="text-[10px] text-stone-500 block">Integrity Score</span>
                      <span className="text-base font-bold text-forest-900">78 / 100</span>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-stone-50 border border-stone-200 text-xs font-mono">
                    <span className="font-bold text-stone-900 block mb-1">Blockchain &amp; Department Audit Signature:</span>
                    <p className="text-stone-500 truncate">
                      SHA256: e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-stone-200 flex items-center justify-between gap-3">
                  <span className="text-xs text-stone-500 font-mono">Ready for CAG &amp; MoEFCC submission</span>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setShowReportModal(false)}
                      className="px-4 py-2 rounded-xl border border-stone-300 text-stone-700 text-xs font-medium hover:bg-stone-50"
                    >
                      Close Preview
                    </button>
                    <button
                      type="button"
                      onClick={() => alert("Environmental Audit Dossier (PDF) export initiated.")}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-forest-800 text-white text-xs font-medium hover:bg-forest-700"
                    >
                      <Download className="h-3.5 w-3.5" />
                      <span>Download PDF Dossier</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
