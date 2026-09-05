"use client";

import React from "react";
import Link from "next/link";
import { SectionHeading } from "@/ui/SectionHeading";
import { FEATURED_PROJECT } from "@/lib/mock-data/projects";
import { 
  BrainCircuit, 
  Info,
  Clock,
  ArrowRight
} from "lucide-react";
import { cn } from "@/lib/utils";

interface PredictionSectionProps {
  isWorkspace?: boolean;
}

export const PredictionSection: React.FC<PredictionSectionProps> = ({ isWorkspace = false }) => {
  const { failurePrediction } = FEATURED_PROJECT;
  const { factors } = failurePrediction;

  return (
    <section 
      id={isWorkspace ? undefined : "predict"} 
      className={cn(
        "relative overflow-hidden",
        isWorkspace ? "py-4 sm:py-6 bg-transparent" : "py-20 sm:py-28 bg-[#F6F8F3] border-b border-forest-100"
      )}
    >
      <div className={cn(isWorkspace ? "w-full" : "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8")}>
        
        <SectionHeading
          badge="CAPABILITY 05 & 06 // AI INTERVENTION FAILURE PREDICTOR"
          badgeTone="amber"
          title="Don't Wait for Failure."
          subtitle="Early-warning machine learning models forecast failure risk months ahead, providing explainable attributions for targeted corrections."
          align="left"
          className={isWorkspace ? "mb-6" : "mb-10"}
        />

        {/* Predictive Intelligence Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mt-10">
          
          {/* Left Column: Failure Risk Card */}
          <div className="lg:col-span-5 rounded-2xl bg-white border border-forest-200 p-6 sm:p-8 flex flex-col justify-between shadow-soft">
            <div>
              <div className="flex items-center justify-between pb-3 mb-6 border-b border-stone-100 text-xs font-mono text-stone-500">
                <span className="flex items-center gap-1.5 font-bold text-forest-900">
                  <BrainCircuit className="h-4 w-4 text-forest-700" />
                  PREDICTIVE RISK ENGINE
                </span>
                <span className="text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200 text-[10px]">
                  Simulation Demo
                </span>
              </div>

              <div className="flex items-baseline justify-between">
                <div>
                  <div className="text-xs font-mono uppercase text-stone-500">FAILURE RISK PROBABILITY</div>
                  <div className="text-5xl sm:text-6xl font-extrabold font-mono text-amberState-700 tracking-tight mt-1">
                    {failurePrediction.failureRiskPercent}%
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-xs font-mono uppercase text-stone-500">RISK CLASSIFICATION</div>
                  <span className="inline-flex mt-1.5 px-3 py-1 rounded-full text-xs font-bold font-mono bg-amberState-100 text-amberState-900 border border-amberState-300">
                    {failurePrediction.riskLevel.toUpperCase()} RISK
                  </span>
                </div>
              </div>

              {/* Progress bar */}
              <div className="mt-4 h-2.5 w-full bg-stone-100 rounded-full overflow-hidden border border-stone-200">
                <div 
                  className="h-full bg-gradient-to-r from-emerald-500 via-amber-500 to-rose-500 rounded-full transition-all duration-700"
                  style={{ width: `${failurePrediction.failureRiskPercent}%` }}
                />
              </div>

              <div className="mt-6 p-4 rounded-xl bg-forest-50/70 border border-forest-200/80">
                <div className="text-xs font-mono font-bold text-forest-900 uppercase">
                  PREDICTIVE ASSESSMENT:
                </div>
                <p className="mt-1.5 text-sm text-stone-700 leading-relaxed font-sans">
                  &ldquo;{failurePrediction.predictionStatement}&rdquo;
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500 font-mono">
              <span className="flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5" />
                Intervention Window: ~{failurePrediction.projectedTimelineWeeks} weeks
              </span>
              <span>Model Confidence: {failurePrediction.confidenceScorePercent}%</span>
            </div>
          </div>

          {/* Right Column: Explainable AI (XAI) Attribution Breakdown */}
          <div className="lg:col-span-7 rounded-2xl bg-white border border-forest-200 p-6 sm:p-8 flex flex-col justify-between shadow-soft">
            <div>
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-stone-100">
                <div>
                  <h3 className="text-lg font-bold text-forest-950 flex items-center gap-2">
                    <span>Explainable AI: Why was this risk computed?</span>
                  </h3>
                  <p className="text-xs text-stone-500 font-mono mt-0.5">
                    SHAP feature importance weighting attributing ecological risk factors
                  </p>
                </div>
                <span className="text-[11px] font-mono text-forest-800 bg-forest-100/60 px-2.5 py-1 rounded">
                  XAI ENGINE
                </span>
              </div>

              <div className="space-y-4 mt-4">
                {factors.map((item) => (
                  <div
                    key={item.factor}
                    className="p-3.5 rounded-xl bg-stone-50/80 border border-stone-200/80 hover:border-forest-200 transition-colors"
                  >
                    <div className="flex items-center justify-between text-xs font-medium">
                      <span className="font-semibold text-stone-900">{item.factor}</span>
                      <span className="font-mono font-bold text-forest-900">
                        {item.impactWeight}% weight
                      </span>
                    </div>

                    <div className="mt-2 h-1.5 w-full bg-stone-200 rounded-full overflow-hidden">
                      <div
                        className={cn(
                          "h-full rounded-full",
                          item.direction === "negative"
                            ? "bg-amberState-600"
                            : item.direction === "positive"
                            ? "bg-emerald-600"
                            : "bg-stone-400"
                        )}
                        style={{ width: `${item.impactWeight * 2.5}%` }}
                      />
                    </div>

                    <p className="mt-2 text-xs text-stone-600 leading-relaxed">
                      {item.evidence}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {!isWorkspace && (
              <div className="mt-6 pt-4 border-t border-stone-100 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs text-stone-500 font-mono">
                  <Info className="h-4 w-4 text-forest-700 flex-shrink-0" />
                  <span>Explainable SHAP feature attribution weights grounded in multi-temporal hydrological models.</span>
                </div>
                <Link
                  href="/projects/prj-42/prediction"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-forest-800 hover:bg-forest-700 text-white text-xs font-semibold shadow-2xs transition-all hover:shadow-xs"
                >
                  <span>Open Predictive Risk Model & XAI</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
