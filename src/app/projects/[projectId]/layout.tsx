"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname, useParams } from "next/navigation";
import { Navbar } from "@/components/navigation/Navbar";
import { FinalCtaAndFooter } from "@/components/footer/FinalCtaAndFooter";
import { StatusBadge } from "@/ui/StatusBadge";
import { getProjectById } from "@/lib/mock-data/projects";
import { PROJECT_NAVIGATION_GROUPS } from "@/lib/constants/navigation";
import { 
  ArrowLeft, 
  MapPin, 
  Menu, 
  X, 
  Compass
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const params = useParams();
  const pathname = usePathname();
  const projectId = (params?.projectId as string) || "prj-42";
  const project = getProjectById(projectId);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const isItemActive = (href: string, exact?: boolean) => {
    if (exact) return pathname === href;
    return pathname === href || pathname.startsWith(href + "/");
  };

  // Find currently active item label for mobile display
  let currentActiveLabel = "Overview";
  for (const group of PROJECT_NAVIGATION_GROUPS) {
    for (const item of group.items) {
      if (isItemActive(item.getHref(projectId), item.exact)) {
        currentActiveLabel = item.label;
        break;
      }
    }
  }

  const SidebarContent = () => (
    <div className="flex flex-col gap-5">
      {/* Back to Projects Directory */}
      <div>
        <Link
          href="/projects"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-stone-500 hover:text-forest-900 transition-colors"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          <span>Projects Directory</span>
        </Link>
      </div>

      {/* Persistent Project Identity Card */}
      <div className="p-3.5 rounded-xl bg-forest-50/70 border border-forest-200/90 shadow-2xs space-y-2.5">
        <div className="flex items-center justify-between gap-1.5">
          <span className="px-2 py-0.5 rounded-md bg-forest-900 text-white font-mono font-bold text-xs">
            {project.code}
          </span>
          <StatusBadge status={project.status} size="sm" />
        </div>

        <div>
          <h2 className="text-sm font-bold text-forest-950 uppercase tracking-tight leading-snug line-clamp-2">
            {project.title}
          </h2>
          <div className="flex items-center gap-1 text-[11px] text-stone-500 mt-0.5">
            <MapPin className="h-3 w-3 text-forest-700 shrink-0" />
            <span className="truncate">{project.district}, {project.state}</span>
          </div>
          <span className="inline-block mt-1 text-[10px] font-medium text-forest-800 bg-white px-2 py-0.5 rounded border border-forest-200">
            {project.interventionType}
          </span>
        </div>

        {/* Dynamic Project Health Stats */}
        <div className="grid grid-cols-2 gap-1.5 pt-2 border-t border-forest-200/70 font-mono text-center text-xs">
          <div className="p-1.5 rounded-lg bg-white border border-forest-100">
            <span className="text-[9px] text-stone-500 uppercase block">Impact</span>
            <span className="text-sm font-bold text-forest-950">{project.impactScore} / 100</span>
          </div>
          <div className="p-1.5 rounded-lg bg-white border border-forest-100">
            <span className="text-[9px] text-stone-500 uppercase block">Risk</span>
            <span className="text-sm font-bold text-amberState-900">{project.failurePrediction.failureRiskPercent}%</span>
          </div>
        </div>
      </div>

      {/* Grouped Feature Navigation List */}
      <nav className="space-y-4" aria-label="Project Feature Navigation">
        {PROJECT_NAVIGATION_GROUPS.map((group) => (
          <div key={group.group} className="space-y-1">
            <div className="px-2.5 text-[10px] font-mono font-bold tracking-wider text-stone-400 uppercase">
              {group.group}
            </div>

            <div className="space-y-0.5">
              {group.items.map((item) => {
                const Icon = item.icon;
                const href = item.getHref(projectId);
                const active = isItemActive(href, item.exact);
                return (
                  <Link
                    key={item.id}
                    href={href}
                    onClick={() => setIsMobileSidebarOpen(false)}
                    className={cn(
                      "flex items-center justify-between px-2.5 py-1.5 rounded-xl text-xs transition-all",
                      active
                        ? "bg-forest-800 text-white font-semibold shadow-xs"
                        : "text-stone-700 hover:text-forest-950 hover:bg-forest-50/80 font-medium"
                    )}
                  >
                    <div className="flex items-center gap-2 min-w-0">
                      <Icon className={cn("h-3.5 w-3.5 shrink-0", active ? "text-emerald-300" : "text-stone-400")} />
                      <span className="truncate">{item.label}</span>
                    </div>
                    {active && (
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shrink-0" />
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </nav>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col bg-[#FBFBF8]">
      <Navbar />

      <main className="flex-1 pt-24 pb-16">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Mobile & Tablet Sub-Header with Active Feature & Drawer Toggle */}
          <div className="lg:hidden mb-4 p-3.5 rounded-2xl bg-white border border-forest-200/90 shadow-2xs">
            <div className="flex items-center justify-between gap-3">
              <div className="min-w-0">
                <div className="flex items-center gap-1.5 mb-0.5">
                  <span className="px-1.5 py-0.5 rounded bg-forest-900 text-white font-mono text-[10px] font-bold">
                    {project.code}
                  </span>
                  <span className="text-xs text-stone-500 truncate">
                    {project.district}, {project.state}
                  </span>
                </div>
                <div className="text-xs font-bold text-forest-950 truncate flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  <span>{currentActiveLabel}</span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsMobileSidebarOpen(true)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-forest-800 text-white text-xs font-semibold shadow-xs shrink-0"
                aria-label="Open project modules navigation"
              >
                <Menu className="h-3.5 w-3.5" />
                <span>Modules</span>
              </button>
            </div>
          </div>

          {/* Desktop Two-Column Layout (260px Left Sidebar + Main Content Area) */}
          <div className="lg:flex lg:items-start lg:gap-6">
            
            {/* Desktop Persistent Left Sidebar (260px wide, fixed height with scroll) */}
            <aside 
              className="hidden lg:block w-[260px] shrink-0 sticky top-20 max-h-[calc(100vh-6rem)] overflow-y-auto no-scrollbar rounded-2xl bg-white border border-forest-200/90 p-4 shadow-2xs"
              aria-label="Project Sidebar"
            >
              <SidebarContent />
            </aside>

            {/* Main Feature Content Area */}
            <div className="flex-1 min-w-0">
              {children}
            </div>

          </div>

        </div>
      </main>

      {/* Mobile Slide-over Drawer containing the EXACT SAME grouped navigation */}
      {isMobileSidebarOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/40 backdrop-blur-xs animate-in fade-in duration-200"
            onClick={() => setIsMobileSidebarOpen(false)}
          />

          {/* Drawer Sheet */}
          <div className="relative ml-auto w-full max-w-xs bg-white h-full shadow-2xl p-5 overflow-y-auto z-10 animate-in slide-in-from-right duration-200 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-stone-200">
                <span className="font-mono text-xs font-bold text-forest-900 uppercase">
                  Project Workspace
                </span>
                <button
                  type="button"
                  onClick={() => setIsMobileSidebarOpen(false)}
                  className="p-1 rounded-lg text-stone-500 hover:bg-stone-100"
                  aria-label="Close navigation"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <SidebarContent />
            </div>

            <div className="pt-4 mt-4 border-t border-stone-100">
              <Link
                href="/projects"
                onClick={() => setIsMobileSidebarOpen(false)}
                className="w-full flex items-center justify-center gap-1.5 py-2 rounded-xl border border-forest-200 text-forest-900 text-xs font-semibold hover:bg-forest-50"
              >
                <Compass className="h-3.5 w-3.5 text-forest-700" />
                <span>Switch Monitored Project</span>
              </Link>
            </div>
          </div>
        </div>
      )}

      <FinalCtaAndFooter />
    </div>
  );
}
