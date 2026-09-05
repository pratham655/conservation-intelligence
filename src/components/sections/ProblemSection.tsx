"use client";

import React from "react";
import { SectionHeading } from "@/ui/SectionHeading";
import { 
  CalendarX2, 
  Layers, 
  MapPinOff, 
  History, 
  Satellite, 
  Activity, 
  Scale, 
  Sparkles,
  ArrowRight
} from "lucide-react";

export const ProblemSection: React.FC = () => {
  const traditionalFlaws = [
    {
      title: "Periodic & Lagging",
      desc: "Annual or post-facto field visits occur months after degradation or diversion has taken place, missing seasonal nuances.",
      icon: CalendarX2,
    },
    {
      title: "Fragmented Data",
      desc: "Disparate district spreadsheets and unstandardized photographic logs prevent holistic basin-scale ecological auditing.",
      icon: Layers,
    },
    {
      title: "Field-Survey Dependent",
      desc: "Manual inspections in remote catchments are logistically expensive, sample-constrained, and vulnerable to subjective reporting.",
      icon: MapPinOff,
    },
    {
      title: "No Temporal Trajectory",
      desc: "Isolated 'before-and-after' photographs cannot reveal whether early post-restoration greening is durable or fleeting.",
      icon: History,
    },
  ];

  const modernSolutions = [
    {
      title: "5-Day Continuous Sentinel Overpass",
      desc: "High-cadence multi-spectral surveillance across 10m spatial bands detects moisture and canopy shifts in real-time.",
      icon: Satellite,
    },
    {
      title: "Unified Standardized Indices",
      desc: "Standardized NDVI, NDWI, and Bare Soil Index (BSI) models benchmark every wetland, forest, and watershed across India.",
      icon: Activity,
    },
    {
      title: "Objective Historical Baselines",
      desc: "Multi-year retrospective satellite archival sets an unalterable Day Zero truth before any public capital is spent.",
      icon: Scale,
    },
    {
      title: "Explainable Recovery Trajectories",
      desc: "Predictive ML models contrast observed trajectory against expected ecological carry-over, warning before failure occurs.",
      icon: Sparkles,
    },
  ];

  return (
    <section id="overview" className="py-20 sm:py-28 bg-[#FBFBF8] relative overflow-hidden border-b border-forest-100">
      {/* Subtle aerial forest texture overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-[0.06] pointer-events-none mix-blend-multiply"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=1400&q=80')`,
        }}
        aria-hidden="true"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeading
          badge="THE CHALLENGE IN ECOLOGICAL GOVERNANCE"
          badgeTone="amber"
          title="Conservation cannot be measured with a single snapshot."
          subtitle="Traditional environmental monitoring relies on infrequent, disconnected manual surveys that discover failure only when it is already irreversible."
          align="left"
        />

        {/* Visual Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mt-12">
          
          {/* Traditional Monitoring Column */}
          <div className="lg:col-span-6 rounded-2xl bg-[#F6F5F2] border border-stone-200/80 p-6 sm:p-8 flex flex-col justify-between shadow-2xs">
            <div>
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-stone-300/70">
                <span className="text-xs font-mono font-bold tracking-wider text-stone-500 uppercase">
                  CONVENTIONAL PARADIGM
                </span>
                <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-stone-200/80 text-stone-700">
                  Periodic Field Audits
                </span>
              </div>

              <div className="space-y-4">
                {traditionalFlaws.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.title}
                      className="p-4 rounded-xl bg-white/70 border border-stone-200 flex items-start gap-3.5"
                    >
                      <div className="p-2 rounded-lg bg-stone-100 text-stone-600 flex-shrink-0 mt-0.5">
                        <Icon className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-stone-900">{item.title}</h4>
                        <p className="text-xs sm:text-sm text-stone-600 mt-1 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-stone-300/60 text-xs text-stone-500 italic">
              Result: Undetected feeder-canal choking, sapling die-offs, and delayed fund accountability.
            </div>
          </div>

          {/* Continuous Environmental Intelligence Column */}
          <div className="lg:col-span-6 rounded-2xl bg-gradient-to-br from-forest-50/90 via-white to-water-50/50 border border-forest-300/70 p-6 sm:p-8 flex flex-col justify-between shadow-soft">
            <div>
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-forest-200">
                <span className="text-xs font-mono font-bold tracking-wider text-forest-800 uppercase">
                  OUR SYSTEM
                </span>
                <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-forest-100 text-forest-800 border border-forest-300">
                  Continuous Satellite Intelligence
                </span>
              </div>

              <div className="space-y-4">
                {modernSolutions.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.title}
                      className="p-4 rounded-xl bg-white border border-forest-200/80 shadow-2xs flex items-start gap-3.5 hover:border-forest-300 transition-colors"
                    >
                      <div className="p-2 rounded-lg bg-forest-100 text-forest-800 flex-shrink-0 mt-0.5">
                        <Icon className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-forest-950">{item.title}</h4>
                        <p className="text-xs sm:text-sm text-stone-600 mt-1 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Bottom Tagline */}
            <div className="mt-6 pt-4 border-t border-forest-200 flex items-center justify-between">
              <span className="text-xs font-semibold text-forest-900 font-mono">
                From periodic surveys to continuous environmental intelligence.
              </span>
              <ArrowRight className="h-4 w-4 text-forest-700 hidden sm:block" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
