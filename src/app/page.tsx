import React from "react";
import { Navbar } from "@/components/navigation/Navbar";
import { HeroSection } from "@/components/hero/HeroSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { BaselineSection } from "@/components/baseline/BaselineSection";
import { MonitoringSection } from "@/components/monitoring/MonitoringSection";
import { RecoverySection } from "@/components/recovery/RecoverySection";
import { AnomalySection } from "@/components/anomaly/AnomalySection";
import { PredictionSection } from "@/components/prediction/PredictionSection";
import { ImpactScoreSection } from "@/components/impact-score/ImpactScoreSection";
import { MapSection } from "@/components/map/MapSection";
import { GovernanceSection } from "@/components/governance/GovernanceSection";
import { CopilotSection } from "@/components/copilot/CopilotSection";
import { CorrectiveActionSection } from "@/components/corrective-action/CorrectiveActionSection";
import { VerificationSection } from "@/components/verification/VerificationSection";
import { ComparisonAndReportsSection } from "@/components/comparison/ComparisonAndReportsSection";
import { FinalCtaAndFooter } from "@/components/footer/FinalCtaAndFooter";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-[#FBFBF8] text-[#14281D] selection:bg-[#B7E4C7] selection:text-[#0B1D14]">
      {/* Top Navigation */}
      <Navbar />

      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. The Problem Section */}
      <ProblemSection />

      {/* 3. Capability 01: Baseline Generator */}
      <BaselineSection />

      {/* 4. Capability 02: Continuous Multi-temporal Monitoring */}
      <MonitoringSection />

      {/* 5. Capability 04: Expected Recovery vs Reality Trajectory */}
      <RecoverySection />

      {/* 6. Capability 03 & 06: Anomaly Detection & Contributing Factor Analysis */}
      <AnomalySection />

      {/* 7. Capability 05: Intervention Failure Predictor & XAI */}
      <PredictionSection />

      {/* 8. Capability 09: Conservation Impact Score & Financial Governance */}
      <ImpactScoreSection />

      {/* 9. Capability 10: Interactive Geospatial Impact Map */}
      <MapSection />

      {/* 10. Governance & Integrity Review Indicators */}
      <GovernanceSection />

      {/* 11. Capability 12: RAG-Grounded AI Conservation Copilot */}
      <CopilotSection />

      {/* 12. Capability 07: Corrective-Action Recommendation Engine */}
      <CorrectiveActionSection />

      {/* 13. Capability 08: Closed-Loop Impact Verification */}
      <VerificationSection />

      {/* 14. Capability 11 & 13: Multi-Project Intervention Comparator & Report Generator */}
      <ComparisonAndReportsSection />

      {/* Final Optimistic CTA & Comprehensive Footer */}
      <FinalCtaAndFooter />
    </main>
  );
}
