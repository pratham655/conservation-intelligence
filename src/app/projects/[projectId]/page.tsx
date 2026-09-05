"use client";

import React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { getProjectById } from "@/lib/mock-data/projects";
import { MetricCard } from "@/ui/MetricCard";
import { FeatureVisualHero } from "@/components/ui/FeatureVisualHero";
import { 
  Layers, 
  Eye, 
  TrendingUp, 
  AlertCircle, 
  Sparkles, 
  Award, 
  Landmark, 
  Wrench, 
  Repeat, 
  ArrowRight,
  Compass,
  Satellite,
  Droplets,
  Trees,
  Scan,
  BrainCircuit,
  ShieldAlert
} from "lucide-react";

export default function ProjectDashboardPage() {
  const params = useParams();
  const projectId = (params?.projectId as string) || "prj-42";
  const project = getProjectById(projectId);

  const featureLinks = [
    {
      title: "Environmental Baseline",
      code: "ENVIRONMENT",
      desc: "Historical satellite calibration and Day Zero spectral metrics.",
      href: `/projects/${projectId}/baseline`,
      icon: Layers,
      stat: `NDVI ${project.baseline.metrics.ndvi.toFixed(2)}`,
    },
    {
      title: "Satellite Monitoring",
      code: "ENVIRONMENT",
      desc: "Continuous 5-day cadence time-series observations.",
      href: `/projects/${projectId}/monitoring`,
      icon: Eye,
      stat: `${project.monitoringTimeline.length} Epochs`,
    },
    {
      title: "Recovery Trajectory",
      code: "ENVIRONMENT",
      desc: "Expected vs actual observed ecological recovery curve.",
      href: `/projects/${projectId}/recovery`,
      icon: TrendingUp,
      stat: "-18% Deviation",
    },
    {
      title: "Image Analysis",
      code: "ENVIRONMENT",
      desc: "Dual-epoch before/after comparison and composite index masks.",
      href: `/projects/${projectId}/image-analysis`,
      icon: Scan,
      stat: "10m L2A",
    },
    {
      title: "Anomaly Detection",
      code: "INTELLIGENCE",
      desc: "Pixel-level variance and ecological stress indicators.",
      href: `/projects/${projectId}/anomalies`,
      icon: AlertCircle,
      stat: "4 Indicators",
    },
    {
      title: "Failure Prediction",
      code: "INTELLIGENCE",
      desc: "Predictive ML failure model with explainable risk forecast.",
      href: `/projects/${projectId}/prediction`,
      icon: Sparkles,
      stat: `${project.failurePrediction.failureRiskPercent}% Risk`,
    },
    {
      title: "Explainability / Drivers",
      code: "INTELLIGENCE",
      desc: "Decomposition of biophysical and climatic contributing factors.",
      href: `/projects/${projectId}/explainability`,
      icon: BrainCircuit,
      stat: "XAI Drivers",
    },
    {
      title: "Impact Score (0–100)",
      code: "IMPACT & GOVERNANCE",
      desc: "Composite ecological integrity score and dimensional breakdown.",
      href: `/projects/${projectId}/impact`,
      icon: Award,
      stat: `${project.impactScore} / 100`,
    },
    {
      title: "Funds & Governance",
      code: "IMPACT & GOVERNANCE",
      desc: "Funds disbursed vs satellite-verified ground recovery.",
      href: `/projects/${projectId}/governance`,
      icon: Landmark,
      stat: `${project.governance.utilizationPercent}% Utilized`,
    },
    {
      title: "Integrity Review",
      code: "IMPACT & GOVERNANCE",
      desc: "Physical evidence reconciliation and ground verification triggers.",
      href: `/projects/${projectId}/integrity`,
      icon: ShieldAlert,
      stat: "Audit Grounded",
    },
    {
      title: "Corrective Actions",
      code: "ACTION",
      desc: "Prescriptive engineering directives and hotspot identification.",
      href: `/projects/${projectId}/actions`,
      icon: Wrench,
      stat: "Active Directives",
    },
    {
      title: "Closed-Loop Verification",
      code: "ACTION",
      desc: "Post-action trajectory recovery verification with audit hash.",
      href: `/projects/${projectId}/verification`,
      icon: Repeat,
      stat: "Verified Loop",
    },
  ];

  return (
    <div className="space-y-4">
      <FeatureVisualHero featureKey="overview" compact={true} />
      
      {/* Top 4 Key Metrics Bar */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard
          label="Conservation Impact Score"
          value={project.impactScore}
          badge="Latest Overpass"
          subtext="Composite ecological recovery index across water & canopy."
          changeType="positive"
          change="Good Standing"
          icon={Award}
        />

        <MetricCard
          label="Failure Risk Assessment"
          value={project.failurePrediction.failureRiskPercent}
          unit="%"
          badge={`${project.failurePrediction.riskLevel} Risk`}
          subtext="Early-warning machine learning risk estimation."
          changeType={project.failurePrediction.failureRiskPercent > 30 ? "warning" : "positive"}
          change={`Confidence: ${project.failurePrediction.confidenceScorePercent}%`}
          icon={Sparkles}
        />

        <MetricCard
          label="Water Extent"
          value={project.baseline.metrics.waterExtentHa}
          unit="ha"
          badge="Sentinel-2 NDWI"
          subtext="Surface liquid water delineation within reservoir perimeter."
          changeType="neutral"
          change="Baseline Calibrated"
          icon={Droplets}
        />

        <MetricCard
          label="Vegetation Cover"
          value={project.baseline.metrics.vegetationCoveragePercent}
          unit="%"
          badge="Riparian Buffer"
          subtext="Fractional canopy greenness within 50m eco-corridor."
          changeType="neutral"
          change="Verified"
          icon={Trees}
        />
      </div>

      {/* Center 2-Column: Latest Observation Telemetry + Geospatial Mini Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        
        {/* Latest Observation Card */}
        <div className="lg:col-span-7 rounded-2xl bg-white border border-forest-200/90 p-6 shadow-2xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-stone-100 text-xs font-mono text-stone-500">
              <span className="font-bold text-forest-900 flex items-center gap-1.5">
                <Satellite className="h-4 w-4 text-forest-700" />
                LATEST SATELLITE PASS TELEMETRY
              </span>
              <span className="text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                Overpass: {project.baseline.baselineCaptureDate}
              </span>
            </div>

            <h3 className="text-xl font-bold text-forest-950">
              {project.title} &mdash; Observation Summary
            </h3>
            <p className="text-sm text-stone-700 mt-2 leading-relaxed">
              {project.baseline.preInterventionNotes}
            </p>

            <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs font-mono">
              <div className="p-3 rounded-xl bg-forest-50/60 border border-forest-100">
                <span className="text-stone-500 text-[10px] block">Sensor:</span>
                <span className="font-bold text-forest-950">{project.baseline.sensor.split("(")[0]}</span>
              </div>
              <div className="p-3 rounded-xl bg-forest-50/60 border border-forest-100">
                <span className="text-stone-500 text-[10px] block">Cloud Probability:</span>
                <span className="font-bold text-emerald-700">{project.baseline.cloudCoverPercent}%</span>
              </div>
              <div className="p-3 rounded-xl bg-forest-50/60 border border-forest-100">
                <span className="text-stone-500 text-[10px] block">Integrity Status:</span>
                <span className="font-bold text-amber-800">{project.governance.integrityStatus}</span>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
            <span>Coordinates: {project.coordinates.lat}&deg; N, {project.coordinates.lng}&deg; E</span>
            <Link
              href={`/projects/${projectId}/monitoring`}
              className="font-semibold text-forest-800 hover:text-forest-950 flex items-center gap-1"
            >
              <span>View Multi-temporal Scrubber</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>

        {/* Small Map & Spatial Context Card */}
        <div className="lg:col-span-5 rounded-2xl bg-white border border-forest-200/90 p-6 shadow-2xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-stone-100 text-xs font-mono text-stone-500">
              <span className="font-bold text-forest-900 flex items-center gap-1.5">
                <Compass className="h-4 w-4 text-forest-700" />
                GEOSPATIAL LOCATION
              </span>
              <span>WGS 84</span>
            </div>

            {/* Simulated Satellite Frame */}
            <div 
              className="relative h-44 rounded-xl overflow-hidden bg-cover bg-center border border-forest-300 p-3 text-white flex flex-col justify-between shadow-inner"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80')`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 via-transparent to-forest-950/60" />
              <div className="relative z-10 flex justify-between text-[10px] font-mono">
                <span className="bg-black/60 px-2 py-0.5 rounded">{project.district}</span>
                <span className="bg-emerald-950/80 text-emerald-300 px-2 py-0.5 rounded border border-emerald-400/30">10m GSD</span>
              </div>

              <div className="relative z-10 text-xs">
                <div className="font-bold text-white">{project.title}</div>
                <div className="text-[10px] text-stone-300 font-mono">Lat {project.coordinates.lat}&deg;, Lng {project.coordinates.lng}&deg;</div>
              </div>
            </div>

            <div className="mt-4 text-xs text-stone-600 leading-relaxed">
              <strong>Ecosystem Type:</strong> {project.interventionType}. Target catchment area under continuous Sentinel-2 overpass.
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-stone-100">
            <Link
              href="/map"
              className="w-full inline-flex items-center justify-center gap-2 py-2 px-3 rounded-xl border border-forest-300 text-forest-900 text-xs font-semibold hover:bg-forest-50 transition-colors"
            >
              <Compass className="h-3.5 w-3.5 text-forest-700" />
              <span>Open on National Impact Map</span>
            </Link>
          </div>
        </div>

      </div>

      {/* Feature Navigation Cards Grid (Direct routes to each capability) */}
      <div>
        <div className="mb-4">
          <h3 className="text-lg font-bold text-forest-950">
            Project Capability Modules
          </h3>
          <p className="text-xs text-stone-500 font-mono">
            Click any module below to open its dedicated analysis interface
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {featureLinks.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.title}
                href={item.href}
                className="p-5 rounded-2xl bg-white border border-forest-200/90 shadow-2xs hover:shadow-soft hover:border-forest-300 transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-stone-500 font-mono mb-2">
                    <span className="text-[10px] font-bold text-forest-700">{item.code}</span>
                    <span className="text-forest-900 font-semibold">{item.stat}</span>
                  </div>

                  <div className="flex items-center gap-2.5 mt-1">
                    <div className="p-2 rounded-lg bg-forest-50 text-forest-800 border border-forest-100 group-hover:bg-forest-100 transition-colors">
                      <Icon className="h-4 w-4" />
                    </div>
                    <h4 className="text-sm font-bold text-forest-950 group-hover:text-forest-800 transition-colors">
                      {item.title}
                    </h4>
                  </div>

                  <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs font-medium text-forest-800 group-hover:text-forest-950">
                  <span>Open Module</span>
                  <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>

    </div>
  );
}
