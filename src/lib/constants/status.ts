export type SemanticStatusTone = "green" | "yellow" | "red" | "neutral";

export interface StatusConfig {
  key: string;
  label: string;
  tone: SemanticStatusTone;
  badgeBg: string;
  badgeText: string;
  badgeBorder: string;
  dotColor: string;
  borderColor: string;
  description: string;
}

export const SEMANTIC_STATUS_REGISTRY: Record<string, StatusConfig> = {
  // Green states (Positive, on track, verified, low risk)
  improving: {
    key: "improving",
    label: "Improving / On Track",
    tone: "green",
    badgeBg: "bg-emerald-50",
    badgeText: "text-emerald-800",
    badgeBorder: "border-emerald-200",
    dotColor: "bg-emerald-500",
    borderColor: "border-emerald-500",
    description: "Vegetative and hydrological indices are showing statistically significant positive trajectory.",
  },
  successful: {
    key: "successful",
    label: "Target Met / Recovered",
    tone: "green",
    badgeBg: "bg-emerald-50",
    badgeText: "text-emerald-800",
    badgeBorder: "border-emerald-200",
    dotColor: "bg-emerald-500",
    borderColor: "border-emerald-500",
    description: "Restoration metrics have successfully crossed target thresholds.",
  },
  verified_resolved: {
    key: "verified_resolved",
    label: "Verified Resolved",
    tone: "green",
    badgeBg: "bg-emerald-50",
    badgeText: "text-emerald-800",
    badgeBorder: "border-emerald-200",
    dotColor: "bg-emerald-500",
    borderColor: "border-emerald-500",
    description: "Post-remediation satellite pass confirms recovery of target biophysical signal.",
  },
  low_risk: {
    key: "low_risk",
    label: "Low Failure Risk",
    tone: "green",
    badgeBg: "bg-emerald-50",
    badgeText: "text-emerald-800",
    badgeBorder: "border-emerald-200",
    dotColor: "bg-emerald-500",
    borderColor: "border-emerald-500",
    description: "Predictive model estimates failure probability < 20% over next 90 days.",
  },
  verified_aligned: {
    key: "verified_aligned",
    label: "Milestone Verified",
    tone: "green",
    badgeBg: "bg-emerald-50",
    badgeText: "text-emerald-800",
    badgeBorder: "border-emerald-200",
    dotColor: "bg-emerald-500",
    borderColor: "border-emerald-500",
    description: "Satellite backscatter confirms physical presence of funded structures.",
  },

  // Yellow states (Caution, watchlist, moderate risk, stagnating)
  stable: {
    key: "stable",
    label: "Stable / Watchlist",
    tone: "yellow",
    badgeBg: "bg-amber-50",
    badgeText: "text-amber-800",
    badgeBorder: "border-amber-200",
    dotColor: "bg-amber-500",
    borderColor: "border-amber-400",
    description: "Indices are within historical variance; no immediate acceleration or decline.",
  },
  needs_attention: {
    key: "needs_attention",
    label: "Needs Attention",
    tone: "yellow",
    badgeBg: "bg-amber-50",
    badgeText: "text-amber-900",
    badgeBorder: "border-amber-300",
    dotColor: "bg-amber-600",
    borderColor: "border-amber-500",
    description: "Observed trajectory lags behind expected restoration curve by 15-25%.",
  },
  moderate_risk: {
    key: "moderate_risk",
    label: "Moderate Risk (Warning)",
    tone: "yellow",
    badgeBg: "bg-amber-50",
    badgeText: "text-amber-800",
    badgeBorder: "border-amber-200",
    dotColor: "bg-amber-500",
    borderColor: "border-amber-400",
    description: "Predictive model flags elevated stress indicators; pre-emptive action suggested.",
  },
  stagnating: {
    key: "stagnating",
    label: "Stagnating Growth",
    tone: "yellow",
    badgeBg: "bg-orange-50",
    badgeText: "text-orange-900",
    badgeBorder: "border-orange-200",
    dotColor: "bg-orange-500",
    borderColor: "border-orange-400",
    description: "Recovery plateaued; natural recruitment insufficient without supplementary intervention.",
  },
  partial_recovery: {
    key: "partial_recovery",
    label: "Partial Recovery",
    tone: "yellow",
    badgeBg: "bg-amber-50",
    badgeText: "text-amber-800",
    badgeBorder: "border-amber-200",
    dotColor: "bg-amber-500",
    borderColor: "border-amber-400",
    description: "Localized improvement observed, but perimeter zones still show moisture deficits.",
  },

  // Red states (Critical anomaly, underperforming, high risk, financial mismatch)
  critical: {
    key: "critical",
    label: "Critical Anomaly",
    tone: "red",
    badgeBg: "bg-rose-50",
    badgeText: "text-rose-900",
    badgeBorder: "border-rose-300",
    dotColor: "bg-rose-600",
    borderColor: "border-rose-500",
    description: "Severe negative biophysical deviation requiring immediate field investigation.",
  },
  underperforming: {
    key: "underperforming",
    label: "Underperforming",
    tone: "red",
    badgeBg: "bg-rose-50",
    badgeText: "text-rose-800",
    badgeBorder: "border-rose-200",
    dotColor: "bg-rose-500",
    borderColor: "border-rose-500",
    description: "Significant negative deviation from target ecological curve (>35% deficit).",
  },
  high_risk: {
    key: "high_risk",
    label: "High Risk (>50%)",
    tone: "red",
    badgeBg: "bg-rose-50",
    badgeText: "text-rose-900",
    badgeBorder: "border-rose-300",
    dotColor: "bg-rose-600",
    borderColor: "border-rose-600",
    description: "Predictive model forecasts acute degradation without prompt corrective remediation.",
  },
  inconsistency_flagged: {
    key: "inconsistency_flagged",
    label: "Audit Flag / Inconsistency",
    tone: "red",
    badgeBg: "bg-rose-50",
    badgeText: "text-rose-800",
    badgeBorder: "border-rose-300",
    dotColor: "bg-rose-600",
    borderColor: "border-rose-600",
    description: "Fund disbursement milestone reported complete but satellite telemetry detects no physical works.",
  },
  degraded: {
    key: "degraded",
    label: "Degraded State",
    tone: "red",
    badgeBg: "bg-rose-50",
    badgeText: "text-rose-900",
    badgeBorder: "border-rose-300",
    dotColor: "bg-rose-600",
    borderColor: "border-rose-500",
    description: "Ecosystem indicators have declined below historical baseline levels.",
  },

  // Neutral / Pending states
  insufficient_data: {
    key: "insufficient_data",
    label: "Baseline Pending",
    tone: "neutral",
    badgeBg: "bg-slate-100",
    badgeText: "text-slate-700",
    badgeBorder: "border-slate-200",
    dotColor: "bg-slate-400",
    borderColor: "border-slate-300",
    description: "Cloud cover obscuration or telemetry acquisition pending for this observation window.",
  },
  in_progress: {
    key: "in_progress",
    label: "Remediation In Progress",
    tone: "neutral",
    badgeBg: "bg-blue-50",
    badgeText: "text-blue-800",
    badgeBorder: "border-blue-200",
    dotColor: "bg-blue-500",
    borderColor: "border-blue-400",
    description: "Corrective civil work or planting actively underway in the field.",
  },
};

export function getStatusConfig(statusString: string): StatusConfig {
  if (!statusString) return SEMANTIC_STATUS_REGISTRY.stable;

  const normalized = statusString.toLowerCase().replace(/[\s-]/g, "_");

  if (SEMANTIC_STATUS_REGISTRY[normalized]) {
    return SEMANTIC_STATUS_REGISTRY[normalized];
  }

  // Fallback mappings
  if (normalized.includes("crit") || normalized.includes("fail") || normalized.includes("underperform") || normalized.includes("flag")) {
    return SEMANTIC_STATUS_REGISTRY.critical;
  }
  if (normalized.includes("warn") || normalized.includes("attent") || normalized.includes("stag") || normalized.includes("risk")) {
    return SEMANTIC_STATUS_REGISTRY.needs_attention;
  }
  if (normalized.includes("improv") || normalized.includes("good") || normalized.includes("success") || normalized.includes("align")) {
    return SEMANTIC_STATUS_REGISTRY.improving;
  }

  return {
    key: normalized,
    label: statusString,
    tone: "neutral",
    badgeBg: "bg-stone-100",
    badgeText: "text-stone-700",
    badgeBorder: "border-stone-200",
    dotColor: "bg-stone-400",
    borderColor: "border-stone-300",
    description: "Status tracked by regional conservation monitoring protocol.",
  };
}
