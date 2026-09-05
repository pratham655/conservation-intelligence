"use client";

import React from "react";
import Link from "next/link";
import { 
  Satellite, 
  Compass, 
  CheckCircle2, 
  ArrowUp, 
  Bot,
  ShieldCheck,
  TreePine
} from "lucide-react";

export const FinalCtaAndFooter: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Final Optimistic Restored-Environment CTA Section */}
      <section className="relative py-24 sm:py-32 overflow-hidden bg-[#F4F7F1] border-t border-forest-200/80">
        {/* Natural Sunlit Restored Canopy Aerial Photography */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20 pointer-events-none mix-blend-multiply"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1511497584788-87676104235f?auto=format&fit=crop&w=2000&q=80')`,
          }}
          aria-hidden="true"
        />

        {/* Ambient Gradient Overlay */}
        <div 
          className="absolute inset-0 bg-gradient-to-b from-[#F4F7F1]/95 via-[#EBF2E7]/90 to-[#E4EFE0] pointer-events-none" 
          aria-hidden="true" 
        />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-forest-300 text-forest-900 text-xs font-mono font-semibold shadow-2xs mb-6 backdrop-blur-xs">
            <TreePine className="h-4 w-4 text-emerald-700" />
            <span>MEASURE IMPACT &bull; TAKE ACTION &bull; VERIFY RECOVERY</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-forest-950 tracking-tight leading-tight">
            Transform conservation monitoring into <br className="hidden sm:block" />
            continuous environmental intelligence.
          </h2>

          <p className="mt-5 text-base sm:text-lg text-stone-700 leading-relaxed max-w-2xl mx-auto">
            Bridge high-cadence satellite observation with explainable artificial intelligence to safeguard vital watersheds, forests, and wetlands.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/projects"
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-forest-800 hover:bg-forest-700 text-white font-semibold text-base shadow-soft hover:shadow-elevated transition-all active:scale-98 group"
            >
              <Compass className="h-5 w-5 text-emerald-300 group-hover:rotate-45 transition-transform" />
              <span>Explore Conservation Projects</span>
            </Link>

            <Link
              href="/copilot"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-forest-50 border border-forest-300 text-forest-900 font-semibold text-base shadow-2xs transition-all"
            >
              <Bot className="h-4 w-4 text-forest-700" />
              <span>Ask Conservation Copilot</span>
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-y-2 gap-x-8 text-xs text-stone-700 font-medium">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-emerald-700" />
              Multi-Spectral Earth Observation
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-emerald-700" />
              Explainable Trajectory Models
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-emerald-700" />
              Closed-Loop Ecological Verification
            </span>
          </div>
        </div>
      </section>

      {/* Clean, Light & Natural Environmental Platform Footer */}
      <footer className="bg-[#EDF2E8] text-stone-700 pt-16 pb-12 border-t border-forest-200/90 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-12 border-b border-forest-200">
            
            {/* Brand & Purpose Column */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-forest-800 text-white flex items-center justify-center shadow-md border border-forest-700">
                  <Satellite className="h-5 w-5 text-emerald-300" />
                </div>
                <div>
                  <span className="font-bold text-lg text-forest-950 font-sans tracking-tight">
                    Conservation Impact Intelligence
                  </span>
                  <div className="text-[11px] text-forest-700 font-mono">
                    Environmental Intelligence Platform
                  </div>
                </div>
              </div>

              <p className="text-xs text-stone-600 leading-relaxed max-w-sm">
                Satellite-driven environmental intelligence for monitoring conservation outcomes, identifying recovery gaps and supporting evidence-based action across India&apos;s ecological landscapes.
              </p>

              {/* Responsible Use Note */}
              <div className="p-3.5 rounded-xl bg-white/80 border border-forest-200 text-[11px] text-stone-600 leading-relaxed space-y-1 shadow-2xs">
                <div className="font-semibold text-forest-900 flex items-center gap-1.5">
                  <ShieldCheck className="h-3.5 w-3.5 text-forest-700" />
                  <span>Responsible Use Notice</span>
                </div>
                <p>
                  Satellite-derived indicators support evidence-based review and do not replace field verification or departmental assessment.
                </p>
              </div>
            </div>

            {/* Navigation Column */}
            <div>
              <h4 className="font-bold text-forest-950 uppercase tracking-wider font-mono text-[11px] mb-3.5">
                Navigation
              </h4>
              <ul className="space-y-2.5 text-stone-600">
                <li><Link href="/" className="hover:text-forest-900 transition-colors">Overview</Link></li>
                <li><Link href="/map" className="hover:text-forest-900 transition-colors">Impact Map</Link></li>
                <li><Link href="/projects" className="hover:text-forest-900 transition-colors">Projects</Link></li>
                <li><Link href="/compare" className="hover:text-forest-900 transition-colors">Compare</Link></li>
                <li><Link href="/copilot" className="hover:text-forest-900 transition-colors">Copilot</Link></li>
                <li><Link href="/reports" className="hover:text-forest-900 transition-colors">Reports</Link></li>
              </ul>
            </div>

            {/* Platform Capabilities Column */}
            <div>
              <h4 className="font-bold text-forest-950 uppercase tracking-wider font-mono text-[11px] mb-3.5">
                Platform
              </h4>
              <ul className="space-y-2.5 text-stone-600">
                <li><Link href="/projects/prj-42/baseline" className="hover:text-forest-900 transition-colors">Baseline Analysis</Link></li>
                <li><Link href="/projects/prj-42/monitoring" className="hover:text-forest-900 transition-colors">Satellite Monitoring</Link></li>
                <li><Link href="/projects/prj-42/recovery" className="hover:text-forest-900 transition-colors">Recovery Intelligence</Link></li>
                <li><Link href="/projects/prj-42/impact" className="hover:text-forest-900 transition-colors">Impact Scoring</Link></li>
                <li><Link href="/projects/prj-42/actions" className="hover:text-forest-900 transition-colors">Corrective Actions</Link></li>
                <li><Link href="/projects/prj-42/verification" className="hover:text-forest-900 transition-colors">Verification</Link></li>
              </ul>
            </div>

            {/* Data & Intelligence Column */}
            <div>
              <h4 className="font-bold text-forest-950 uppercase tracking-wider font-mono text-[11px] mb-3.5">
                Data &amp; Intelligence
              </h4>
              <ul className="space-y-2.5 text-stone-600">
                <li><span className="text-forest-900 font-medium">Earth Observation</span></li>
                <li><span className="text-stone-600">Sentinel-2 (10m) MSI</span></li>
                <li><span className="text-stone-600">Landsat-9 SWIR &bull; Thermal</span></li>
                <li><span className="text-stone-600">Environmental Indicators (NDVI / NDWI)</span></li>
                <li><span className="text-stone-600">Explainable AI (SHAP Weights)</span></li>
                <li><span className="text-stone-600">Evidence-Based Reports</span></li>
              </ul>
            </div>

          </div>

          {/* Bottom Line */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-stone-600 font-mono">
            <div>
              &copy; 2026 Conservation Impact Intelligence &bull; Environmental Intelligence Platform
            </div>

            <div className="flex items-center gap-4">
              <span className="text-forest-800 font-medium">WGS 84 Coordinate Datum</span>
              <button
                type="button"
                onClick={scrollToTop}
                className="p-2 rounded-lg bg-white border border-forest-200 hover:bg-forest-50 text-forest-800 transition-colors flex items-center gap-1 text-xs font-sans shadow-2xs"
                aria-label="Scroll to top"
              >
                <span>Back to Top</span>
                <ArrowUp className="h-3.5 w-3.5 text-forest-700" />
              </button>
            </div>
          </div>

        </div>
      </footer>
    </>
  );
};
