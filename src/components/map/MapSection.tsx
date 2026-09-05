"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "@/ui/SectionHeading";
import { StatusBadge } from "@/ui/StatusBadge";
import { ResponsiveDrawer } from "@/ui/ResponsiveDrawer";
import { ALL_PROJECTS } from "@/lib/mock-data/projects";
import { ConservationProject } from "@/types";
import { 
  Compass, 
  ExternalLink,
  ArrowRight
} from "lucide-react";
import { cn } from "@/lib/utils";

export const MapSection: React.FC = () => {
  const [selectedType, setSelectedType] = useState<string>("All");
  const [hoveredProject, setHoveredProject] = useState<ConservationProject | null>(null);
  const [drawerProject, setDrawerProject] = useState<ConservationProject | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Filter projects
  const filteredProjects = ALL_PROJECTS.filter((p) => {
    if (selectedType === "All") return true;
    return p.interventionType.toLowerCase().includes(selectedType.toLowerCase());
  });

  const getMarkerColor = (status: string) => {
    switch (status) {
      case "improving":
        return "bg-emerald-600 text-white ring-emerald-300";
      case "stable":
        return "bg-amber-500 text-white ring-amber-200";
      case "needs_attention":
        return "bg-amber-600 text-white ring-amber-300";
      case "stagnating":
        return "bg-orange-500 text-white ring-orange-200";
      case "underperforming":
        return "bg-rose-600 text-white ring-rose-200";
      default:
        return "bg-slate-400 text-white ring-slate-200";
    }
  };

  const handleMarkerClick = (project: ConservationProject) => {
    setDrawerProject(project);
    setIsDrawerOpen(true);
  };

  return (
    <section id="map" className="py-20 sm:py-28 bg-[#F6F8F3] relative overflow-hidden border-b border-forest-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
          <SectionHeading
            badge="CAPABILITY 10 // GEOSPATIAL IMPACT DASHBOARD"
            badgeTone="water"
            title="See Every Intervention on One Map."
            subtitle="Explore monitored wetlands, afforestation corridors, and watersheds across India. Hover on desktop or tap on mobile for detailed telemetry."
            align="left"
            className="mb-0"
          />

          {/* Interactive Legend */}
          <div className="p-3 rounded-xl bg-white border border-forest-200 shadow-2xs flex flex-wrap items-center gap-3 text-xs font-mono">
            <span className="text-stone-600 font-bold">STATUS:</span>
            <span className="flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-full bg-emerald-600" /> Successful</span>
            <span className="flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-full bg-amber-600" /> Needs Attention</span>
            <span className="flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-full bg-orange-500" /> Stagnating</span>
            <span className="flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-full bg-rose-600" /> Underperforming</span>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 no-scrollbar">
          {["All", "Lake", "Forest", "Watershed", "Grassland", "Mangrove"].map((type) => (
            <button
              key={type}
              type="button"
              onClick={() => setSelectedType(type)}
              className={cn(
                "px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all border",
                selectedType === type
                  ? "bg-forest-800 text-white border-forest-900 shadow-xs"
                  : "bg-white text-stone-700 border-forest-200 hover:bg-forest-50"
              )}
            >
              {type === "All" ? "All Interventions (6 Active)" : `${type} Interventions`}
            </button>
          ))}
        </div>

        {/* The Map Simulation Canvas */}
        <div className="relative rounded-2xl bg-[#E8EDE4] border border-forest-300/80 overflow-hidden shadow-soft min-h-[480px] sm:min-h-[580px] flex flex-col justify-between">
          {/* Topographic Background Map Lines */}
          <div className="absolute inset-0 bg-topo-pattern opacity-60 pointer-events-none" />
          <div className="absolute inset-0 bg-satellite-grid opacity-25 pointer-events-none" />

          {/* India Boundary SVG abstraction */}
          <svg className="absolute inset-0 w-full h-full opacity-35" viewBox="0 0 800 600" fill="none">
            {/* Outline simulation */}
            <path
              d="M 280 120 Q 340 70 410 110 T 510 160 T 580 260 T 550 380 T 430 520 T 360 480 T 300 360 T 260 260 Z"
              stroke="#2D6A4F"
              strokeWidth="2"
              fill="#D4E2D2"
              fillOpacity="0.4"
            />
            {/* Elevation rings */}
            <circle cx="390" cy="310" r="140" stroke="#B7CEB5" strokeWidth="1" strokeDasharray="4 4" />
            <circle cx="390" cy="310" r="80" stroke="#9AB998" strokeWidth="1" strokeDasharray="3 3" />
          </svg>

          {/* Top Map HUD Bar */}
          <div className="relative z-10 p-4 sm:p-5 flex flex-wrap items-center justify-between gap-3 bg-gradient-to-b from-white/90 to-transparent">
            <div className="flex items-center gap-2">
              <span className="p-1.5 rounded-lg bg-forest-800 text-emerald-300">
                <Compass className="h-4 w-4" />
              </span>
              <div>
                <span className="text-xs font-bold text-forest-950 font-mono">
                  NATIONAL CONSERVATION OBSERVATION GRID
                </span>
                <p className="text-[11px] text-stone-500 font-mono">
                  Coordinate Datum: WGS 84 • Sentinel-2 Tile Mesh
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono bg-white/80 backdrop-blur-xs px-3 py-1 rounded-lg border border-forest-200">
              <span className="text-stone-500">DISPLAYING:</span>
              <span className="font-bold text-forest-900">{filteredProjects.length} Projects</span>
            </div>
          </div>

          {/* Interactive Project Pins on Map (Relative positioning matching Indian regions) */}
          <div className="relative z-10 w-full h-[360px] sm:h-[440px]">
            {filteredProjects.map((project) => {
              // Convert lat/lng to percentage approximations within India box
              // Latitude 8°N to 36°N, Longitude 68°E to 97°E
              const topPercent = Math.max(12, Math.min(84, ((33 - project.coordinates.lat) / 23) * 100));
              const leftPercent = Math.max(16, Math.min(84, ((project.coordinates.lng - 70) / 22) * 100));

              const isHovered = hoveredProject?.id === project.id;

              return (
                <div
                  key={project.id}
                  style={{ top: `${topPercent}%`, left: `${leftPercent}%` }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                  onMouseEnter={() => setHoveredProject(project)}
                  onMouseLeave={() => setHoveredProject(null)}
                  onClick={() => handleMarkerClick(project)}
                >
                  {/* Pin Circle */}
                  <div
                    className={cn(
                      "relative h-8 w-8 sm:h-9 sm:w-9 rounded-full flex items-center justify-center font-mono font-bold text-xs shadow-md ring-4 transition-all duration-200 group-hover:scale-125",
                      getMarkerColor(project.status)
                    )}
                  >
                    <span>{project.impactScore}</span>
                    {/* Pulsing ring */}
                    <span className="absolute inset-0 rounded-full animate-ping opacity-25 bg-current pointer-events-none" />
                  </div>

                  {/* Project Code Label below pin */}
                  <span className="mt-1 block text-[10px] font-mono font-bold text-forest-950 bg-white/90 px-1.5 py-0.5 rounded shadow-xs text-center border border-stone-200 pointer-events-none whitespace-nowrap">
                    {project.code}
                  </span>

                  {/* Desktop Hover Card (Hidden on Mobile) */}
                  <AnimatePresence>
                    {isHovered && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.96 }}
                        transition={{ duration: 0.15 }}
                        className="hidden lg:block absolute bottom-full mb-3 left-1/2 -translate-x-1/2 w-64 rounded-xl bg-white/95 border border-forest-300 p-4 shadow-elevated z-50 text-left backdrop-blur-md"
                      >
                        <div className="flex items-center justify-between pb-1.5 mb-2 border-b border-stone-100 text-xs">
                          <span className="font-bold text-forest-950 font-mono">{project.code}</span>
                          <StatusBadge status={project.status} size="sm" />
                        </div>

                        <h4 className="text-sm font-bold text-forest-950 leading-snug">
                          {project.title}
                        </h4>
                        <p className="text-xs text-stone-500 mt-0.5">{project.state}</p>

                        <div className="mt-3 pt-2 border-t border-stone-100 grid grid-cols-2 gap-2 text-xs font-mono">
                          <div>
                            <span className="text-stone-500 text-[10px] block">Impact Score:</span>
                            <span className="font-bold text-forest-900">{project.impactScore} / 100</span>
                          </div>
                          <div>
                            <span className="text-stone-500 text-[10px] block">Cost / Disbursed:</span>
                            <span className="font-bold text-forest-900">
                              ₹{project.governance.probableCostCr} Cr ({project.governance.utilizationPercent}%)
                            </span>
                          </div>
                        </div>

                        <div className="mt-2 text-[10px] text-forest-700 font-medium flex items-center gap-1">
                          <span>Click marker for full audit sheet</span>
                          <ExternalLink className="h-3 w-3" />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Bottom Banner */}
          <div className="relative z-10 p-3 sm:p-4 bg-white/90 border-t border-forest-200/90 flex flex-wrap items-center justify-between gap-3 text-xs">
            <span className="text-stone-600 font-mono">
              💡 Tap any project pin on map or inspect full pan-India spatial telemetry.
            </span>
            <Link
              href="/map"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-forest-800 hover:bg-forest-700 text-white font-semibold text-xs transition-colors"
            >
              <Compass className="h-3.5 w-3.5 text-emerald-300" />
              <span>Open Fullscreen Geospatial Map</span>
              <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
        </div>

        {/* Mobile & Tablet Drawer Modal */}
        <ResponsiveDrawer
          isOpen={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}
          title={drawerProject?.title}
          subtitle={`${drawerProject?.state} • ${drawerProject?.interventionType}`}
        >
          {drawerProject && (
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-stone-100">
                <StatusBadge status={drawerProject.status} size="md" />
                <div className="text-right">
                  <span className="text-xs text-stone-500 block font-mono">Impact Score</span>
                  <span className="text-2xl font-bold font-mono text-forest-950">
                    {drawerProject.impactScore} / 100
                  </span>
                </div>
              </div>

              {/* Financial & Agency Breakdown */}
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="p-3 rounded-xl bg-forest-50 border border-forest-100">
                  <span className="text-stone-500 block font-mono">Probable Cost:</span>
                  <span className="text-base font-bold text-forest-950 font-mono">
                    ₹{drawerProject.governance.probableCostCr} Cr
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-forest-50 border border-forest-100">
                  <span className="text-stone-500 block font-mono">Funds Utilized:</span>
                  <span className="text-base font-bold text-forest-950 font-mono">
                    {drawerProject.governance.utilizationPercent}% (₹{drawerProject.governance.fundsUtilizedCr} Cr)
                  </span>
                </div>
              </div>

              {/* Department */}
              <div className="p-3 rounded-xl bg-stone-50 border border-stone-200 text-xs">
                <span className="font-semibold text-stone-900 block">Department:</span>
                <span className="text-stone-600">{drawerProject.governance.department}</span>
                <span className="block mt-1 text-forest-800 font-mono">
                  Scheme: {drawerProject.governance.scheme}
                </span>
              </div>

              {/* Baseline Metrics */}
              <div className="p-3 rounded-xl bg-stone-50 border border-stone-200 text-xs font-mono space-y-1">
                <div className="font-semibold text-stone-900 mb-1">Baseline Indices:</div>
                <div className="flex justify-between">
                  <span>Vegetation (NDVI):</span>
                  <span className="font-bold">{drawerProject.baseline.metrics.ndvi}</span>
                </div>
                <div className="flex justify-between">
                  <span>Water Extent:</span>
                  <span className="font-bold">{drawerProject.baseline.metrics.waterExtentHa} ha</span>
                </div>
              </div>

              {/* Integrity Remark */}
              <div className="p-3 rounded-xl bg-amberState-50 border border-amberState-200 text-xs text-amberState-900">
                <span className="font-bold block">Integrity Status: {drawerProject.governance.integrityStatus}</span>
                <p className="mt-0.5 text-stone-700">{drawerProject.governance.integrityRemarks}</p>
              </div>

              <div className="flex flex-col gap-2 pt-2">
                <Link
                  href={`/projects/${drawerProject.id}`}
                  className="w-full flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-forest-800 text-white font-semibold text-xs shadow-2xs hover:bg-forest-700 transition-colors"
                >
                  <span>Open Full Project Dashboard</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
                <button
                  type="button"
                  onClick={() => setIsDrawerOpen(false)}
                  className="w-full py-2 rounded-xl border border-stone-200 text-stone-600 font-medium text-xs hover:bg-stone-50"
                >
                  Close Summary
                </button>
              </div>
            </div>
          )}
        </ResponsiveDrawer>

      </div>
    </section>
  );
};
