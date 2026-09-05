"use client";

import React from "react";
import Link from "next/link";
import { SectionHeading } from "@/ui/SectionHeading";
import { StatusBadge } from "@/ui/StatusBadge";
import { FEATURED_PROJECT } from "@/lib/mock-data/projects";
import { 
  ResponsiveContainer, 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip 
} from "recharts";
import { AlertTriangle, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface TooltipPayloadItem {
  dataKey?: string | number;
  value?: number | string;
}

interface CustomTooltipProps {
  active?: boolean;
  payload?: TooltipPayloadItem[];
  label?: string;
}

interface RecoverySectionProps {
  isWorkspace?: boolean;
}

export const RecoverySection: React.FC<RecoverySectionProps> = ({ isWorkspace = false }) => {
  const data = FEATURED_PROJECT.trajectory;

  // Custom tooltip for Recharts
  const CustomTooltip = ({ active, payload, label }: CustomTooltipProps) => {
    if (active && payload && payload.length) {
      const expectedVal = Number(payload.find((p) => p.dataKey === "expected")?.value ?? 0);
      const actualVal = Number(payload.find((p) => p.dataKey === "actual")?.value ?? 0);
      const diff = actualVal - expectedVal;

      return (
        <div className="rounded-xl bg-white/95 border border-forest-200 p-3.5 shadow-elevated text-xs font-sans backdrop-blur-xs">
          <div className="font-bold text-forest-950 border-b border-stone-100 pb-1.5 mb-2 font-mono">
            {label} Ecological Assessment
          </div>
          <div className="space-y-1.5">
            <div className="flex items-center justify-between gap-4 text-forest-800">
              <span className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-forest-600" />
                Expected Target:
              </span>
              <span className="font-mono font-bold">{expectedVal} / 100</span>
            </div>
            <div className="flex items-center justify-between gap-4 text-amber-900">
              <span className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-amber-600" />
                Actual Observed:
              </span>
              <span className="font-mono font-bold">{actualVal} / 100</span>
            </div>
            <div className="pt-1.5 border-t border-stone-100 flex items-center justify-between gap-4 font-mono font-bold">
              <span>Variance:</span>
              <span className={diff < 0 ? "text-rose-600" : "text-emerald-700"}>
                {diff > 0 ? `+${diff}` : `${diff}`} points
              </span>
            </div>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <section 
      id={isWorkspace ? undefined : "recovery"} 
      className={cn(
        "relative overflow-hidden",
        isWorkspace ? "py-4 sm:py-6 bg-transparent" : "py-20 sm:py-28 bg-[#F6F8F3] border-b border-forest-100"
      )}
    >
      <div className={cn(isWorkspace ? "w-full" : "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8")}>
        
        <div className={cn("flex flex-col lg:flex-row lg:items-end justify-between gap-4", isWorkspace ? "mb-6" : "mb-10")}>
          <SectionHeading
            badge="CAPABILITY 04 // RECOVERY TRAJECTORY MODEL"
            badgeTone="amber"
            title="Expected Recovery vs Reality."
            subtitle="Comparing actual satellite multi-spectral indicators against the scientifically expected biological recovery model to detect divergence early."
            align="left"
            className="mb-0"
          />

          {/* Deviation & Status Summary Box */}
          <div className="flex flex-wrap items-center gap-3 p-3.5 rounded-2xl bg-amberState-50 border border-amberState-200 shadow-2xs">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-xl bg-amberState-100 text-amberState-800">
                <AlertTriangle className="h-5 w-5" />
              </div>
              <div>
                <div className="text-[11px] font-mono uppercase text-amberState-800 font-semibold">
                  RECOVERY DEVIATION
                </div>
                <div className="text-xl font-bold font-mono text-amberState-900">
                  -18% <span className="text-xs font-normal text-amberState-700">(Month 9 Divergence)</span>
                </div>
              </div>
            </div>

            <div className="h-8 w-px bg-amberState-200 hidden sm:block" />

            <div className="flex flex-col">
              <span className="text-[10px] font-mono text-stone-500 uppercase">PROJECT STATUS</span>
              <StatusBadge status="needs_attention" size="md" className="mt-0.5" />
            </div>
          </div>
        </div>

        {/* The Trajectory Chart Container */}
        <div className="rounded-2xl bg-white border border-forest-200/90 p-6 sm:p-8 shadow-soft">
          
          {/* Chart Header Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 mb-6 border-b border-stone-100">
            <div>
              <h3 className="text-base sm:text-lg font-bold text-forest-950">
                Lake Restoration Project #42 — Ecological Recovery Trajectory Curve
              </h3>
              <p className="text-xs text-stone-500 font-mono mt-0.5">
                Composite Metric (0–100) combining NDVI canopy gain, NDWI surface water extent &amp; water persistence
              </p>
            </div>

            <div className="flex items-center gap-4 text-xs font-medium">
              <div className="flex items-center gap-1.5">
                <div className="w-4 h-1 bg-forest-700 rounded-full" />
                <span className="text-stone-700">Expected Model (Ecology Benchmark)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-4 h-1 bg-amber-600 rounded-full" />
                <span className="text-stone-700">Actual Sentinel-2 Observed</span>
              </div>
            </div>
          </div>

          {/* Recharts Line Graph */}
          <div className="h-72 sm:h-96 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data} margin={{ top: 10, right: 20, left: -10, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E7ECE4" vertical={false} />
                <XAxis 
                  dataKey="month" 
                  tick={{ fill: "#526B5C", fontSize: 12, fontFamily: "monospace" }}
                  axisLine={{ stroke: "#CFDBCF" }}
                  tickLine={false}
                />
                <YAxis 
                  domain={[0, 100]} 
                  tick={{ fill: "#526B5C", fontSize: 12, fontFamily: "monospace" }}
                  axisLine={{ stroke: "#CFDBCF" }}
                  tickLine={false}
                  tickFormatter={(val) => `${val}`}
                />
                <Tooltip content={<CustomTooltip />} />
                
                {/* Confidence Area for Expected Model */}
                <Line
                  type="monotone"
                  dataKey="expected"
                  name="Expected Recovery"
                  stroke="#1B4332"
                  strokeWidth={3}
                  strokeDasharray="5 5"
                  dot={{ r: 5, fill: "#1B4332", strokeWidth: 2, stroke: "#FFFFFF" }}
                  activeDot={{ r: 7, fill: "#1B4332" }}
                />

                {/* Actual Line in Alert Amber */}
                <Line
                  type="monotone"
                  dataKey="actual"
                  name="Actual Observed"
                  stroke="#D97706"
                  strokeWidth={3.5}
                  dot={{ r: 6, fill: "#D97706", strokeWidth: 2, stroke: "#FFFFFF" }}
                  activeDot={{ r: 8, fill: "#B45309" }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Bottom Analytical Findings Footer */}
          <div className="mt-6 pt-5 border-t border-stone-100 grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            <div className="p-3 rounded-xl bg-forest-50/70 border border-forest-100">
              <span className="font-bold text-forest-900 font-mono">Q1-Q2 Alignment:</span>
              <p className="text-stone-600 mt-1 leading-relaxed">
                Initial desilting and civil excavations tracked near benchmark (18 vs 20 at Month 1).
              </p>
            </div>

            <div className="p-3 rounded-xl bg-amberState-50 border border-amberState-200">
              <span className="font-bold text-amberState-900 font-mono">Q3 Divergence Point:</span>
              <p className="text-stone-600 mt-1 leading-relaxed">
                At Month 6 to 9, trajectory plateaued at 55 instead of scaling to 78, creating an 18% deficit.
              </p>
            </div>

            <div className="p-3 rounded-xl bg-stone-50 border border-stone-200">
              <span className="font-bold text-stone-900 font-mono">Diagnostic Conclusion:</span>
              <p className="text-stone-600 mt-1 leading-relaxed">
                Intervention is not failing irreversibly, but requires prompt feeder inlet clearing before monsoon.
              </p>
            </div>
          </div>

          {/* Navigation CTA */}
          {!isWorkspace && (
            <div className="mt-6 pt-4 border-t border-stone-100 flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs text-stone-500 font-mono">
                Trajectory models calibrated against regional baseline agro-climatic zones.
              </span>
              <Link
                href="/projects/prj-42/recovery"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-forest-800 hover:bg-forest-700 text-white text-xs font-semibold shadow-2xs transition-all hover:shadow-xs"
              >
                <span>View Recovery Intelligence</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
