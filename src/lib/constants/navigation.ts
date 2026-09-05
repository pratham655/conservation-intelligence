import { 
  LayoutDashboard, 
  Layers, 
  Satellite, 
  TrendingUp, 
  Image as ImageIcon, 
  AlertTriangle, 
  Brain, 
  GitBranch, 
  Gauge, 
  Landmark, 
  ShieldCheck, 
  Wrench, 
  CheckCircle2,
  LucideIcon
} from "lucide-react";

export interface ProjectNavItem {
  id: string;
  label: string;
  getHref: (projectId: string) => string;
  icon: LucideIcon;
  exact?: boolean;
}

export interface ProjectNavGroup {
  group: "PROJECT" | "ENVIRONMENT" | "INTELLIGENCE" | "IMPACT & GOVERNANCE" | "ACTION";
  items: ProjectNavItem[];
}

export const PROJECT_NAVIGATION_GROUPS: ProjectNavGroup[] = [
  {
    group: "PROJECT",
    items: [
      {
        id: "overview",
        label: "Overview",
        getHref: (id: string) => `/projects/${id}`,
        icon: LayoutDashboard,
        exact: true,
      },
    ],
  },
  {
    group: "ENVIRONMENT",
    items: [
      {
        id: "baseline",
        label: "Environmental Baseline",
        getHref: (id: string) => `/projects/${id}/baseline`,
        icon: Layers,
      },
      {
        id: "monitoring",
        label: "Satellite Monitoring",
        getHref: (id: string) => `/projects/${id}/monitoring`,
        icon: Satellite,
      },
      {
        id: "recovery",
        label: "Expected vs Actual Recovery",
        getHref: (id: string) => `/projects/${id}/recovery`,
        icon: TrendingUp,
      },
      {
        id: "image-analysis",
        label: "Image Analysis",
        getHref: (id: string) => `/projects/${id}/image-analysis`,
        icon: ImageIcon,
      },
    ],
  },
  {
    group: "INTELLIGENCE",
    items: [
      {
        id: "anomalies",
        label: "Anomaly Detection",
        getHref: (id: string) => `/projects/${id}/anomalies`,
        icon: AlertTriangle,
      },
      {
        id: "prediction",
        label: "Failure Prediction",
        getHref: (id: string) => `/projects/${id}/prediction`,
        icon: Brain,
      },
      {
        id: "explainability",
        label: "Explainability",
        getHref: (id: string) => `/projects/${id}/explainability`,
        icon: GitBranch,
      },
    ],
  },
  {
    group: "IMPACT & GOVERNANCE",
    items: [
      {
        id: "impact",
        label: "Conservation Impact Score",
        getHref: (id: string) => `/projects/${id}/impact`,
        icon: Gauge,
      },
      {
        id: "governance",
        label: "Funds & Governance",
        getHref: (id: string) => `/projects/${id}/governance`,
        icon: Landmark,
      },
      {
        id: "integrity",
        label: "Integrity Review",
        getHref: (id: string) => `/projects/${id}/integrity`,
        icon: ShieldCheck,
      },
    ],
  },
  {
    group: "ACTION",
    items: [
      {
        id: "actions",
        label: "Corrective Actions",
        getHref: (id: string) => `/projects/${id}/actions`,
        icon: Wrench,
      },
      {
        id: "verification",
        label: "Closed-loop Verification",
        getHref: (id: string) => `/projects/${id}/verification`,
        icon: CheckCircle2,
      },
    ],
  },
];
