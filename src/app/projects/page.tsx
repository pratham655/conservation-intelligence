"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/navigation/Navbar";
import { FinalCtaAndFooter } from "@/components/footer/FinalCtaAndFooter";
import { StatusBadge } from "@/ui/StatusBadge";
import { FeatureVisualHero } from "@/components/ui/FeatureVisualHero";
import { getAllProjects } from "@/lib/mock-data/projects";
import {
  Search,
  MapPin,
  ArrowRight,
  LayoutDashboard,
  FolderKanban,
  Map,
  GitCompare,
  Sparkles,
  FileText,
  ChevronRight,
  Activity,
  ShieldCheck,
  Droplets,
  TreePine,
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function ProjectsDirectoryPage() {
  const allProjects = getAllProjects();

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState("All");
  const [selectedStatus, setSelectedStatus] = useState("All");

  const filteredProjects = allProjects.filter((p) => {
    const matchesSearch =
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.state.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.district.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesType =
      selectedType === "All" ||
      p.interventionType
        .toLowerCase()
        .includes(selectedType.toLowerCase());

    const matchesStatus =
      selectedStatus === "All" ||
      p.status.toLowerCase() === selectedStatus.toLowerCase();

    return matchesSearch && matchesType && matchesStatus;
  });

  const totalProjects = allProjects.length;

  const averageImpact =
    totalProjects > 0
      ? Math.round(
          allProjects.reduce((sum, project) => sum + project.impactScore, 0) /
            totalProjects
        )
      : 0;

  const projectsNeedingAttention = allProjects.filter(
    (project) =>
      project.status.toLowerCase() === "needs_attention" ||
      project.status.toLowerCase() === "underperforming" ||
      project.status.toLowerCase() === "stagnating"
  ).length;

  const totalUtilization =
    totalProjects > 0
      ? Math.round(
          allProjects.reduce(
            (sum, project) => sum + project.governance.utilizationPercent,
            0
          ) / totalProjects
        )
      : 0;

  const sidebarLinks = [
    {
      label: "Platform Overview",
      href: "/",
      icon: LayoutDashboard,
    },
    {
      label: "Project Registry",
      href: "/projects",
      icon: FolderKanban,
    },
    {
      label: "Impact Map",
      href: "/map",
      icon: Map,
    },
    {
      label: "Compare Projects",
      href: "/compare",
      icon: GitCompare,
    },
    {
      label: "Conservation Copilot",
      href: "/copilot",
      icon: Sparkles,
    },
    {
      label: "Evidence Reports",
      href: "/reports",
      icon: FileText,
    },
  ];

  return (
    <div className="min-h-screen bg-[#FBFBF8] text-stone-900">
      <Navbar />

      <div className="pt-[82px]">
        {/* Mobile portfolio navigation */}
        <div className="lg:hidden border-b border-forest-200/70 bg-white px-4 py-3 sticky top-[70px] z-30">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
            {sidebarLinks.map((item) => {
              const Icon = item.icon;
              const active = item.href === "/projects";

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "shrink-0 inline-flex items-center gap-2 px-3 py-2 rounded-xl border text-xs font-medium",
                    active
                      ? "bg-forest-800 text-white border-forest-800"
                      : "bg-white text-stone-700 border-stone-200"
                  )}
                >
                  <Icon className="h-3.5 w-3.5" />
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>

        <div className="flex max-w-[1600px] mx-auto">
          {/* Portfolio Sidebar */}
          <aside className="hidden lg:flex w-[260px] shrink-0 min-h-[calc(100vh-82px)] border-r border-forest-200/70 bg-white/90 sticky top-[82px] self-start">
            <div className="w-full p-5">
              {/* Portfolio identity */}
              <div className="pb-5 border-b border-stone-200">
                <div className="flex items-center gap-2 text-[10px] font-mono font-semibold tracking-widest text-stone-500">
                  <Activity className="h-3.5 w-3.5 text-forest-700" />
                  PLATFORM WORKSPACE
                </div>

                <h2 className="mt-2 text-base font-bold text-forest-950">
                  Conservation Portfolio
                </h2>

                <p className="mt-1 text-xs leading-relaxed text-stone-500">
                  Monitor environmental interventions, recovery trajectories,
                  and project-level evidence.
                </p>
              </div>

              {/* Navigation */}
              <div className="mt-6">
                <p className="px-3 mb-2 text-[10px] font-mono font-semibold tracking-widest text-stone-400">
                  NAVIGATION
                </p>

                <nav className="space-y-1">
                  {sidebarLinks.map((item) => {
                    const Icon = item.icon;
                    const active = item.href === "/projects";

                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={cn(
                          "group flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-all",
                          active
                            ? "bg-forest-800 text-white shadow-sm"
                            : "text-stone-700 hover:bg-forest-50 hover:text-forest-900"
                        )}
                      >
                        <Icon
                          className={cn(
                            "h-4 w-4",
                            active
                              ? "text-emerald-300"
                              : "text-stone-400 group-hover:text-forest-700"
                          )}
                        />

                        <span className="flex-1">{item.label}</span>

                        {active && (
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
                        )}
                      </Link>
                    );
                  })}
                </nav>
              </div>

              {/* Portfolio snapshot */}
              <div className="mt-8">
                <p className="px-3 mb-2 text-[10px] font-mono font-semibold tracking-widest text-stone-400">
                  PORTFOLIO SNAPSHOT
                </p>

                <div className="space-y-2">
                  <div className="p-3 rounded-xl bg-stone-50 border border-stone-200">
                    <div className="flex items-center gap-2 text-[10px] font-mono text-stone-500 uppercase">
                      <FolderKanban className="h-3.5 w-3.5" />
                      Active Projects
                    </div>

                    <div className="mt-1 text-xl font-bold text-forest-950">
                      {totalProjects}
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-stone-50 border border-stone-200">
                    <div className="flex items-center gap-2 text-[10px] font-mono text-stone-500 uppercase">
                      <ShieldCheck className="h-3.5 w-3.5" />
                      Avg. Impact
                    </div>

                    <div className="mt-1 text-xl font-bold text-forest-950">
                      {averageImpact}
                      <span className="text-xs font-normal text-stone-400">
                        {" "}
                        / 100
                      </span>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-stone-50 border border-stone-200">
                    <div className="flex items-center gap-2 text-[10px] font-mono text-stone-500 uppercase">
                      <Droplets className="h-3.5 w-3.5" />
                      Avg. Utilization
                    </div>

                    <div className="mt-1 text-xl font-bold text-forest-950">
                      {totalUtilization}%
                    </div>
                  </div>
                </div>
              </div>

              {/* Attention indicator */}
              <div className="mt-6 p-3.5 rounded-xl border border-amber-200 bg-amber-50/70">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-amber-500" />
                  <span className="text-xs font-semibold text-amber-900">
                    Review Queue
                  </span>
                </div>

                <p className="mt-1.5 text-[11px] leading-relaxed text-amber-800">
                  {projectsNeedingAttention} project
                  {projectsNeedingAttention === 1 ? "" : "s"} currently
                  require additional review.
                </p>
              </div>
            </div>
          </aside>

          {/* Main workspace */}
          <main className="flex-1 min-w-0 px-4 sm:px-6 lg:px-8 py-8 lg:py-10">
            <div className="max-w-7xl mx-auto">
              {/* Header */}
              <div className="mb-7">
                <div className="flex flex-col xl:flex-row xl:items-end xl:justify-between gap-5">
                  <div>
                    <div className="flex items-center gap-2 text-[10px] font-mono font-semibold tracking-widest text-forest-700">
                      <TreePine className="h-3.5 w-3.5" />
                      CONSERVATION PORTFOLIO
                    </div>

                    <h1 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-forest-950">
                      Project Registry
                    </h1>

                    <p className="mt-2 max-w-2xl text-sm sm:text-base leading-relaxed text-stone-600">
                      Select an environmental intervention to enter its
                      evidence-driven project workspace, inspect satellite
                      observations, recovery trajectories, impact scores, and
                      governance indicators.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    <div className="px-4 py-3 rounded-xl bg-white border border-forest-200/80">
                      <div className="text-[9px] font-mono uppercase tracking-widest text-stone-400">
                        Projects
                      </div>
                      <div className="mt-1 text-xl font-bold text-forest-950">
                        {totalProjects}
                      </div>
                    </div>

                    <div className="px-4 py-3 rounded-xl bg-white border border-forest-200/80">
                      <div className="text-[9px] font-mono uppercase tracking-widest text-stone-400">
                        Avg Impact
                      </div>
                      <div className="mt-1 text-xl font-bold text-forest-950">
                        {averageImpact}
                      </div>
                    </div>

                    <div className="col-span-2 sm:col-span-1 px-4 py-3 rounded-xl bg-white border border-forest-200/80">
                      <div className="text-[9px] font-mono uppercase tracking-widest text-stone-400">
                        Review Queue
                      </div>
                      <div className="mt-1 text-xl font-bold text-amber-700">
                        {projectsNeedingAttention}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Visual hero */}
              <div className="mb-7">
                <FeatureVisualHero
                  featureKey="overview"
                  customTitle="Environmental Intervention Portfolio"
                  customSubtitle="A consolidated view of active conservation projects, satellite-derived environmental indicators, recovery status, and governance signals."
                />
              </div>

              {/* Search & filters */}
              <div className="p-4 rounded-2xl bg-white border border-forest-200/90 shadow-2xs mb-8 space-y-4">
                <div className="flex flex-col sm:flex-row items-center gap-3">
                  <div className="relative flex-1 w-full">
                    <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-stone-400" />

                    <input
                      type="text"
                      placeholder="Search project, code, state or district..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-stone-200 bg-stone-50/50 text-sm focus:outline-hidden focus:ring-2 focus:ring-forest-600 focus:bg-white text-stone-900"
                    />
                  </div>

                  <div className="w-full sm:w-56">
                    <select
                      value={selectedStatus}
                      onChange={(e) => setSelectedStatus(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-xl border border-stone-200 bg-white text-sm text-stone-700 focus:outline-hidden focus:ring-2 focus:ring-forest-600"
                    >
                      <option value="All">All Health Statuses</option>
                      <option value="improving">Improving / On Track</option>
                      <option value="stable">Stable / Watch</option>
                      <option value="needs_attention">
                        Needs Attention
                      </option>
                      <option value="stagnating">Stagnating</option>
                      <option value="underperforming">
                        Underperforming
                      </option>
                    </select>
                  </div>
                </div>

                <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar text-xs">
                  <span className="text-stone-500 font-mono font-medium shrink-0">
                    Intervention:
                  </span>

                  {[
                    "All",
                    "Lake",
                    "Forest",
                    "Watershed",
                    "Grassland",
                    "Mangrove",
                  ].map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setSelectedType(type)}
                      className={cn(
                        "px-3 py-1 rounded-full whitespace-nowrap transition-colors border",
                        selectedType === type
                          ? "bg-forest-800 text-white border-forest-900 font-medium shadow-2xs"
                          : "bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100"
                      )}
                    >
                      {type === "All"
                        ? "All Ecosystems"
                        : `${type} Restoration`}
                    </button>
                  ))}
                </div>
              </div>

              {/* Project cards */}
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-xs font-mono uppercase tracking-widest text-stone-400">
                    Available Workspaces
                  </p>

                  <h2 className="mt-1 text-xl font-bold text-forest-950">
                    Conservation Projects
                  </h2>
                </div>

                <span className="text-xs text-stone-500">
                  {filteredProjects.length} result
                  {filteredProjects.length === 1 ? "" : "s"}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProjects.map((project) => (
                  <div
                    key={project.id}
                    className="rounded-2xl bg-white border border-forest-200/90 shadow-2xs hover:shadow-soft transition-all duration-200 flex flex-col justify-between overflow-hidden group hover:border-forest-300"
                  >
                    <div className="p-6">
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="px-2.5 py-0.5 rounded-md bg-forest-100/70 border border-forest-200 text-forest-900 font-mono font-bold text-xs">
                          {project.code}
                        </span>

                        <StatusBadge status={project.status} size="sm" />
                      </div>

                      <h3 className="text-lg font-bold text-forest-950 group-hover:text-forest-800 transition-colors leading-snug">
                        {project.title}
                      </h3>

                      <div className="flex items-center gap-1.5 text-xs text-stone-500 mt-1">
                        <MapPin className="h-3.5 w-3.5 text-stone-400" />
                        <span>
                          {project.district}, {project.state}
                        </span>
                      </div>

                      <div className="mt-3 inline-block text-xs font-medium text-forest-800 bg-forest-50 px-2.5 py-1 rounded-md border border-forest-100">
                        {project.interventionType}
                      </div>

                      <div className="grid grid-cols-2 gap-2 mt-5 pt-4 border-t border-stone-100 text-xs font-mono">
                        <div className="p-2.5 rounded-lg bg-stone-50 border border-stone-100">
                          <span className="text-stone-500 text-[10px] uppercase block">
                            Impact Score
                          </span>

                          <span className="text-base font-bold text-forest-950">
                            {project.impactScore} / 100
                          </span>
                        </div>

                        <div className="p-2.5 rounded-lg bg-stone-50 border border-stone-100">
                          <span className="text-stone-500 text-[10px] uppercase block">
                            Budget Utilization
                          </span>

                          <span className="text-base font-bold text-forest-950">
                            {project.governance.utilizationPercent}%
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 bg-stone-50/70 border-t border-stone-100 flex items-center justify-between">
                      <span className="text-xs text-stone-500 font-mono">
                        {project.baseline.sensor.split(" ")[0]} · 10m
                      </span>

                      <Link
                        href={`/projects/${project.id}`}
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-forest-800 hover:bg-forest-700 text-white text-xs font-medium transition-all group-hover:shadow-xs"
                      >
                        <span>Open Workspace</span>

                        <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>

              {filteredProjects.length === 0 && (
                <div className="text-center py-16 bg-white rounded-2xl border border-dashed border-stone-300 p-8">
                  <p className="text-stone-600 font-medium">
                    No conservation projects match your filters.
                  </p>

                  <button
                    type="button"
                    onClick={() => {
                      setSearchQuery("");
                      setSelectedType("All");
                      setSelectedStatus("All");
                    }}
                    className="mt-3 text-xs text-forest-800 underline font-semibold"
                  >
                    Clear all filters
                  </button>
                </div>
              )}

              {/* Entry explanation */}
              <div className="mt-10 p-5 rounded-2xl border border-forest-200/80 bg-forest-50/60">
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  <div className="h-10 w-10 shrink-0 rounded-xl bg-white border border-forest-200 flex items-center justify-center">
                    <ChevronRight className="h-5 w-5 text-forest-700" />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-sm font-bold text-forest-950">
                      Enter a project workspace
                    </h3>

                    <p className="mt-1 text-xs leading-relaxed text-stone-600">
                      Each workspace contains the full environmental
                      intelligence workflow: baseline, monitoring, recovery,
                      anomaly detection, prediction, impact, governance,
                      corrective actions, and verification.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>

      <FinalCtaAndFooter />
    </div>
  );
}