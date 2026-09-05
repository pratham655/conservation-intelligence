"use client";

import React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { FeatureVisualHero } from "@/components/ui/FeatureVisualHero";
import { getProjectById } from "@/lib/mock-data/projects";
import { 
  CloudRain, 
  Droplets, 
  Trees, 
  CheckCircle2, 
  Info, 
  ArrowRight, 
  TrendingDown
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function ExplainabilityPage() {
  const params = useParams();
  const projectId = (params?.projectId as string) || "prj-42";
  const project = getProjectById(projectId);

  const { failurePrediction } = project;

  // Contributing factor diagnostic categories
  const factorDrivers = [
    {
      title: "Precipitation & Catchment Inflow Deficit",
      category: "METEOROLOGICAL FACTOR",
      impact: "High Negative Impact",
      weight: 34,
      statusColor: "text-amber-800 bg-amber-50 border-amber-200",
      icon: CloudRain,
      summary: "Evidence suggests 22% cumulative precipitation deficit in the upstream micro-watershed over the prior 60 days.",
      evidence: "CHIRPS gridded rainfall anomaly records 342mm vs 438mm seasonal average. Requires field verification of catchment rain gauges.",
    },
    {
      title: "Upstream Feeder Canal Sediment Choking",
      category: "HYDROLOGICAL BOTTLENECK",
      impact: "High Negative Impact",
      weight: 38,
      statusColor: "text-rose-800 bg-rose-50 border-rose-200",
      icon: Droplets,
      summary: "Potential contributing factor: 400m feeder-channel bottleneck impeding surface runoff inflow into northern quadrant C-2.",
      evidence: "Sentinel-2 NDWI change matrix shows 0.32 drop at inlet confluence while main reservoir remains stable. High spatial correlation with Month 9 divergence.",
    },
    {
      title: "Evaporative Loss & Micro-climate Thermal Stress",
      category: "CLIMATIC DEMAND",
      impact: "Moderate Negative Impact",
      weight: 16,
      statusColor: "text-amber-800 bg-amber-50 border-amber-200",
      icon: TrendingDown,
      summary: "Evidence suggests elevated surface water temperatures accelerated late-season evapotranspiration.",
      evidence: "Landsat-9 TIRS thermal channel registers +1.6°C surface temperature anomaly over shallow shoreline fringes.",
    },
    {
      title: "Riparian Buffer Canopy Recruitment",
      category: "BIOLOGICAL RESILIENCE",
      impact: "Positive Mitigating Factor",
      weight: 24,
      statusColor: "text-emerald-800 bg-emerald-50 border-emerald-200",
      icon: Trees,
      summary: "Native bund planting successfully reduced bank erosion and stabilized southern perimeter embankment.",
      evidence: "Sentinel-2 NDVI increased from 0.42 to 0.53 along southern contour bunds, mitigating overall risk score by -12 points.",
    },
  ];

  return (
    <div className="space-y-4">
      <FeatureVisualHero featureKey="explainability" compact={true} />

      {/* Top Diagnostic Summary Card */}
      <div className="p-6 rounded-2xl bg-white border border-forest-200/90 shadow-2xs">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 border-b border-stone-100">
          <div>
            <div className="flex items-center gap-2 mb-1 text-xs font-mono">
              <span className="px-2 py-0.5 rounded bg-amberState-100 text-amberState-900 font-bold border border-amberState-200">
                XAI ATTRIBUTION MODEL // SHAP WEIGHTS
              </span>
              <span className="text-stone-500">
                MODEL CONFIDENCE: {failurePrediction.confidenceScorePercent}%
              </span>
            </div>
            <h3 className="text-2xl font-bold text-forest-950">
              Why Was Risk &amp; Deviation Detected?
            </h3>
          </div>

          <div className="flex items-center gap-3">
            <div className="px-3.5 py-1.5 rounded-xl bg-amberState-50 border border-amberState-200 text-center">
              <span className="text-[10px] uppercase font-mono text-amberState-800 block">Failure Risk</span>
              <span className="text-lg font-bold font-mono text-amberState-900">{failurePrediction.failureRiskPercent}%</span>
            </div>
            <div className="px-3.5 py-1.5 rounded-xl bg-forest-50 border border-forest-100 text-center">
              <span className="text-[10px] uppercase font-mono text-stone-500 block">Identified Factors</span>
              <span className="text-lg font-bold font-mono text-forest-950">4 Drivers</span>
            </div>
          </div>
        </div>

        <p className="text-sm text-stone-700 mt-4 leading-relaxed">
          The platform does not treat machine learning as an uninterpretable black box. Using game-theoretic SHAP (Shapley Additive exPlanations) values, each monthly satellite observation decomposes into verifiable physical and climatic drivers to guide targeted field remediation.
        </p>
      </div>

      {/* Contributing Factors Grid */}
      <div className="space-y-4">
        <div>
          <h4 className="text-lg font-bold text-forest-950">
            Potential Contributing Factors Breakdown
          </h4>
          <p className="text-xs text-stone-500 font-mono">
            Attribution weights represent relative influence on observed Month 9 trajectory deviation (-18%)
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {factorDrivers.map((factor) => {
            const Icon = factor.icon;
            return (
              <div
                key={factor.title}
                className="p-5 rounded-2xl bg-white border border-forest-200/90 shadow-2xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono mb-2">
                    <span className="text-stone-400 font-bold text-[10px] uppercase">{factor.category}</span>
                    <span className={cn("px-2 py-0.5 rounded-full border text-[11px] font-semibold", factor.statusColor)}>
                      {factor.impact}
                    </span>
                  </div>

                  <div className="flex items-center gap-2.5 mt-1">
                    <div className="p-2 rounded-lg bg-forest-50 text-forest-800 border border-forest-100">
                      <Icon className="h-4 w-4" />
                    </div>
                    <h5 className="text-sm font-bold text-forest-950">
                      {factor.title}
                    </h5>
                  </div>

                  {/* Impact Weight Bar */}
                  <div className="mt-3">
                    <div className="flex justify-between text-[11px] font-mono text-stone-500 mb-1">
                      <span>Attribution Weight</span>
                      <span className="font-bold text-forest-900">{factor.weight}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-stone-100 rounded-full overflow-hidden">
                      <div
                        className={cn(
                          "h-full rounded-full",
                          factor.impact.includes("High") ? "bg-rose-500" : factor.impact.includes("Moderate") ? "bg-amber-500" : "bg-emerald-500"
                        )}
                        style={{ width: `${factor.weight * 2}%` }}
                      />
                    </div>
                  </div>

                  <p className="text-xs text-stone-700 mt-3 leading-relaxed font-medium">
                    {factor.summary}
                  </p>

                  <div className="mt-3 p-3 rounded-xl bg-stone-50 border border-stone-200 text-xs text-stone-600 leading-relaxed">
                    <strong className="text-stone-800">Satellite &amp; Data Evidence:</strong> {factor.evidence}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-[11px] font-mono text-stone-500">
                  <span>Field Verification: Recommended</span>
                  <span className="font-bold text-forest-700">Audit Grounded</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Synthesis & Prescriptive Action Link */}
      <div className="p-5 rounded-2xl bg-[#F6F8F3] border border-forest-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h5 className="text-sm font-bold text-forest-950 flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-emerald-700" />
            <span>Ready for Remediation Execution</span>
          </h5>
          <p className="text-xs text-stone-600 mt-1 max-w-xl">
            Contributing factors have been mapped to specific engineering work orders in the Corrective Actions module.
          </p>
        </div>

        <Link
          href={`/projects/${projectId}/actions`}
          className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-forest-800 hover:bg-forest-700 text-white font-semibold text-xs transition-colors shrink-0 shadow-xs"
        >
          <span>Open Corrective Actions</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>

      {/* Responsible Wording Disclaimers Card */}
      <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 text-xs text-stone-600 flex items-start gap-2.5 font-mono">
        <Info className="h-4 w-4 text-forest-700 flex-shrink-0 mt-0.5" />
        <span>
          <strong>Methodology Note:</strong> Attribution values represent statistical feature contributions derived from historical environmental baselines and satellite time-series. These identify potential contributing factors and evidence suggestions, requiring field officer verification before administrative enforcement.
        </span>
      </div>
    </div>
  );
}
