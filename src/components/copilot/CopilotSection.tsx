"use client";

import React, { useState } from "react";
import Link from "next/link";
import { SectionHeading } from "@/ui/SectionHeading";
import { MOCK_COPILOT_QUERIES } from "@/lib/mock-data/projects";
import { 
  Bot, 
  Send, 
  Sparkles,
  ArrowRight,
  Database,
  Quote
} from "lucide-react";
import { cn } from "@/lib/utils";

export const CopilotSection: React.FC = () => {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const activeQuery = MOCK_COPILOT_QUERIES[selectedIdx];

  return (
    <section id="copilot" className="py-20 sm:py-28 bg-[#F6F8F3] relative overflow-hidden border-b border-forest-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
          <SectionHeading
            badge="CAPABILITY 12 // RAG-GROUNDED AI CONSERVATION COPILOT"
            badgeTone="water"
            title="Ask the Data."
            subtitle="An evidence-grounded reasoning assistant synthesizing Sentinel-2 telemetry, MoEFCC guidelines, and state hydrological registers into explainable answers."
            align="left"
            className="mb-0"
          />

          <div className="flex items-center gap-2 text-xs font-mono text-stone-500 bg-white border border-forest-200 px-3 py-1.5 rounded-xl">
            <Database className="h-4 w-4 text-forest-700" />
            <span>RAG Sources: Vector Embeddings + Telemetry DB</span>
          </div>
        </div>

        {/* Clickable Preset Queries Chips */}
        <div className="mb-6 flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
          <span className="text-xs font-mono font-bold text-forest-900 whitespace-nowrap">
            SAMPLE INQUIRIES:
          </span>
          {MOCK_COPILOT_QUERIES.map((q, idx) => (
            <button
              key={q.question}
              type="button"
              onClick={() => setSelectedIdx(idx)}
              className={cn(
                "px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all border",
                selectedIdx === idx
                  ? "bg-forest-800 text-white border-forest-900 shadow-xs"
                  : "bg-white text-stone-700 border-forest-200 hover:bg-forest-50"
              )}
            >
              {q.question}
            </button>
          ))}
        </div>

        {/* Copilot Chat UI Window */}
        <div className="rounded-2xl bg-white border border-forest-200/90 shadow-soft overflow-hidden">
          
          {/* Top Assistant Header */}
          <div className="px-6 py-4 bg-forest-900 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl bg-forest-800 border border-emerald-400/30 flex items-center justify-center text-emerald-300">
                <Bot className="h-5 w-5" />
              </div>
              <div>
                <div className="font-bold text-sm tracking-wide flex items-center gap-2">
                  <span>Conservation Copilot</span>
                  <span className="text-[10px] font-mono bg-emerald-950 text-emerald-300 px-2 py-0.5 rounded border border-emerald-500/30">
                    EVIDENCE GROUNDED
                  </span>
                </div>
                <p className="text-[11px] text-stone-300 font-mono">
                  Synthesizing Sentinel-2 MSI, MoEFCC Rules &amp; PFMS Ledger
                </p>
              </div>
            </div>

            <span className="text-xs font-mono text-emerald-300/80 hidden sm:inline-block">
              Zero Hallucination Constraint: ACTIVE
            </span>
          </div>

          {/* Conversation Area */}
          <div className="p-6 sm:p-8 space-y-6">
            
            {/* User Prompt Message */}
            <div className="flex items-start justify-end gap-3">
              <div className="max-w-xl rounded-2xl rounded-tr-xs bg-forest-800 text-white p-4 text-sm font-medium shadow-2xs">
                {activeQuery.question}
              </div>
              <div className="h-8 w-8 rounded-full bg-forest-100 border border-forest-300 text-forest-800 flex items-center justify-center font-bold text-xs flex-shrink-0">
                GOV
              </div>
            </div>

            {/* Assistant Grounded Answer */}
            <div className="flex items-start gap-3">
              <div className="h-8 w-8 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-800 flex items-center justify-center flex-shrink-0 mt-1">
                <Sparkles className="h-4 w-4" />
              </div>

              <div className="space-y-4 max-w-3xl">
                <div className="rounded-2xl rounded-tl-xs bg-[#F7F9F5] border border-forest-200/90 p-5 text-stone-800 text-sm sm:text-base leading-relaxed">
                  {activeQuery.response}
                </div>

                {/* Grounded Evidence Box */}
                <div className="p-4 rounded-xl bg-white border border-forest-200 shadow-2xs space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono font-bold text-forest-900 border-b border-stone-100 pb-2">
                    <span className="flex items-center gap-1.5">
                      <Quote className="h-3.5 w-3.5 text-forest-700" />
                      RETRIEVED CITATION EVIDENCE ({activeQuery.citations.length} SOURCES):
                    </span>
                    <span className="text-emerald-700">Audit Trail Ready</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5">
                    {activeQuery.citations.map((cit) => (
                      <div
                        key={cit.id}
                        className="p-3 rounded-lg bg-stone-50 border border-stone-200 text-xs flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex items-center justify-between text-[10px] font-mono text-stone-500 mb-1">
                            <span className="font-bold text-forest-800">{cit.source}</span>
                            <span>{cit.timestamp}</span>
                          </div>
                          <span className="font-semibold text-stone-900 line-clamp-1">
                            {cit.title}
                          </span>
                          <p className="mt-1 text-[11px] text-stone-600 leading-normal line-clamp-3">
                            &ldquo;{cit.snippet}&rdquo;
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Follow-up Prompts */}
                {activeQuery.followups && (
                  <div className="flex flex-wrap items-center gap-2 pt-1 text-xs">
                    <span className="text-stone-500 font-mono">Suggested Inquiries:</span>
                    {activeQuery.followups.map((f, i) => (
                      <button
                        key={i}
                        type="button"
                        className="px-3 py-1 rounded-full bg-forest-50 hover:bg-forest-100 text-forest-800 border border-forest-200 transition-colors text-left"
                      >
                        {f}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

          </div>

          {/* Bottom Simulated Input Bar & CTA */}
          <div className="p-4 sm:p-5 bg-stone-50 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="w-full sm:flex-1 relative">
              <input
                type="text"
                readOnly
                value="Ask about ecological indices, fund discrepancies, or MoEFCC mandates..."
                className="w-full px-4 py-3 rounded-xl bg-white border border-stone-300 text-stone-600 text-xs sm:text-sm cursor-not-allowed focus:outline-hidden"
              />
              <button
                type="button"
                className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1.5 rounded-lg bg-forest-800 text-white"
                aria-label="Send Query"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>

            <Link
              href="/copilot"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-forest-800 hover:bg-forest-700 text-white font-semibold text-xs sm:text-sm shadow-xs whitespace-nowrap transition-colors"
            >
              <span>Open Full Conservation Copilot</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
};
