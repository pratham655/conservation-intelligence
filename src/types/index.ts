// ============================================================
// Conservation Intelligence — Core Data Types
// ============================================================

/**
 * Overall project health / recovery status.
 */
export type ProjectStatus =
  | 'improving'
  | 'stable'
  | 'needs_attention'
  | 'stagnating'
  | 'underperforming'
  | 'insufficient_data';

/**
 * Type of conservation intervention being implemented.
 */
export type InterventionType =
  | 'Lake Rejuvenation'
  | 'Afforestation & Forest Restoration'
  | 'Watershed Management'
  | 'Grassland Restoration'
  | 'Mangrove Conservation'
  | 'Wetland Ecosystem Revitalization';

/**
 * Ecosystem / landscape where the intervention is taking place.
 *
 * Kept separate from InterventionType:
 * "Lake" describes WHERE,
 * "Lake Rejuvenation" describes WHAT is being done.
 */
export type EcosystemType =
  | 'Lake'
  | 'Wetland'
  | 'Forest'
  | 'Grassland'
  | 'Mangrove'
  | 'Watershed'
  | 'Mixed Landscape';

/**
 * Land-cover composition derived from spatial / satellite analysis.
 */
export interface LandCoverComposition {
  waterPercent: number;
  vegetationPercent: number;
  agriculturePercent: number;
  builtUpPercent: number;
  bareSoilPercent: number;
}

/**
 * Satellite-derived environmental indicators.
 */
export interface SpectralIndices {
  ndvi: number;
  ndwi: number;
  evi?: number;
  bsi?: number;
  waterExtentHa: number;
  vegetationCoveragePercent: number;
  surfaceTempCelsius?: number;
}

/**
 * Environmental baseline established before / around intervention start.
 */
export interface BaselineData {
  projectId: string;
  projectName: string;

  observationPeriod: string;

  sensor: string;
  resolution: string;

  metrics: SpectralIndices;

  landCover?: LandCoverComposition;

  preInterventionNotes: string;

  cloudCoverPercent: number;

  baselineCaptureDate: string;

  /**
   * Confidence in the baseline observation.
   */
  confidencePercent?: number;
}

/**
 * Quality of a satellite observation.
 */
export type ObservationQuality =
  | 'Good'
  | 'Moderate'
  | 'Poor';

/**
 * A single observation in the multi-temporal monitoring timeline.
 */
export interface MonitoringMilestone {
  milestone:
    | 'Day 0'
    | 'Month 1'
    | 'Month 3'
    | 'Month 6'
    | 'Month 9'
    | 'Month 12';

  date: string;

  waterExtentHa: number;
  vegetationCoveragePercent: number;

  ndvi: number;
  ndwi: number;

  statusLabel: string;

  changeDescription: string;

  satelliteThumbnailDesc: string;

  /**
   * 0 = normal
   * 1 = highly anomalous
   */
  anomalyScore: number;

  cloudCoverPercent?: number;

  observationQuality?: ObservationQuality;

  /**
   * Sentinel scene identifier or equivalent source identifier.
   */
  sceneId?: string;
}

/**
 * Expected vs actual recovery trajectory.
 */
export interface TrajectoryDataPoint {
  month: string;
  monthNum: number;

  expected: number;
  actual: number;

  upperConfidence: number;
  lowerConfidence: number;

  rainfallAnomalyMm: number;

  /**
   * Difference between actual and expected recovery.
   */
  deviation?: number;
}

/**
 * Environmental health indicator.
 */
export interface HealthIndicator {
  name: string;

  category:
    | 'Water'
    | 'Vegetation'
    | 'Trajectory'
    | 'Climate'
    | 'Soil';

  status:
    | 'improving'
    | 'stable'
    | 'stagnating'
    | 'degrading';

  value: string;

  trend:
    | 'up'
    | 'stable'
    | 'down';

  description: string;
}

/**
 * Factors that may contribute to environmental underperformance.
 *
 * These indicate evidence-based possibilities rather than
 * scientifically proven causality.
 */
export interface ContributingFactor {
  factor: string;

  impactWeight: number;

  direction:
    | 'negative'
    | 'neutral'
    | 'positive';

  evidence: string;

  category:
    | 'hydrology'
    | 'vegetation'
    | 'climate'
    | 'anthropogenic';

  confidencePercent?: number;

  requiresFieldVerification?: boolean;
}

/**
 * Failure / underperformance prediction.
 */
export interface FailurePrediction {
  projectId: string;

  failureRiskPercent: number;

  riskLevel:
    | 'Low'
    | 'Moderate'
    | 'High'
    | 'Critical';

  predictionStatement: string;

  projectedTimelineWeeks: number;

  confidenceScorePercent: number;

  factors: ContributingFactor[];
}

/**
 * A detected environmental anomaly.
 */
export interface Anomaly {
  id: string;

  detectedDate: string;

  indicator:
    | 'NDVI'
    | 'NDWI'
    | 'Water Extent'
    | 'Vegetation'
    | 'Land Cover'
    | 'Surface Temperature';

  severity:
    | 'Green'
    | 'Yellow'
    | 'Red';

  deviationPercent: number;

  confidencePercent: number;

  description: string;

  requiresVerification: boolean;

  /**
   * Reference to the observation that triggered the anomaly.
   */
  sourceMilestone?: string;
}

/**
 * Explainability record connecting a contributing factor
 * to observed evidence.
 */
export interface ExplainabilityFactor {
  factor: string;

  evidence: string;

  contributionPercent: number;

  confidencePercent: number;

  category:
    | 'hydrology'
    | 'vegetation'
    | 'climate'
    | 'anthropogenic';

  explanation: string;

  requiresFieldVerification: boolean;
}

/**
 * Transparent Conservation Impact Score.
 */
export interface ImpactScoreBreakdown {
  overallScore: number;

  status: string;

  /**
   * Environmental recovery dimensions.
   */
  ecologicalRecovery?: number;
  waterResponse?: number;
  vegetationResponse?: number;

  trajectoryAlignment: number;
  environmentalGain: number;
  recoveryConsistency: number;
  persistence: number;

  /**
   * Implementation / governance dimensions.
   */
  implementationProgress?: number;
  governanceSignal?: number;
}

/**
 * Financial and implementation governance information.
 */
export interface FinancialGovernance {
  probableCostCr: number;

  fundsAllocatedCr: number;

  fundsUtilizedCr: number;

  utilizationPercent: number;

  department: string;

  scheme: string;

  environmentalProgressPercent: number;

  integrityStatus:
    | 'Normal Progress'
    | 'Review Recommended'
    | 'Inconsistency Flagged'
    | 'Field Audit Advised';

  integrityRemarks: string;
}

/**
 * Corrective-action workflow.
 */
export interface CorrectiveActionStep {
  stepNumber: number;

  stage:
    | 'Detection'
    | 'Diagnosis'
    | 'Recommendation'
    | 'Implementation'
    | 'Post-Action Verification';

  title: string;

  description: string;

  status:
    | 'completed'
    | 'active'
    | 'scheduled';

  timestamp?: string;

  metricChange?: string;

  priority?: 'Low' | 'Medium' | 'High' | 'Critical';

  expectedOutcome?: string;
}

/**
 * Closed-loop verification record.
 *
 * Detection → Action → Follow-up observation → Result
 */
export interface VerificationRecord {
  id: string;

  actionId: string;

  actionDate: string;

  verificationDate: string;

  beforeMetric: number;

  afterMetric: number;

  metricName: string;

  outcome:
    | 'Verified Improvement'
    | 'No Significant Change'
    | 'Needs Further Action';

  evidence: string;

  confidencePercent?: number;
}

/**
 * Satellite / image-analysis information.
 */
export interface ImageAnalysisResult {
  id: string;

  observationDate: string;

  imageDescription: string;

  source: string;

  cloudCoverPercent: number;

  detectedChanges: string[];

  waterChangePercent?: number;

  vegetationChangePercent?: number;

  landCoverChanges?: LandCoverComposition;

  analysisConfidencePercent: number;
}

/**
 * Copilot citation.
 */
export interface CopilotCitation {
  id: string;

  title: string;

  source:
    | 'Satellite Telemetry'
    | 'MoEFCC Guideline'
    | 'Ground Sensor'
    | 'State Budget Record';

  timestamp: string;

  snippet: string;
}

/**
 * Copilot conversation message.
 */
export interface CopilotMessage {
  id: string;

  role:
    | 'user'
    | 'assistant';

  content: string;

  timestamp: string;

  citations?: CopilotCitation[];

  suggestedFollowups?: string[];
}

/**
 * Evidence-based project report.
 */
export interface ProjectReportSummary {
  reportId: string;

  projectId: string;

  generatedDate: string;

  title: string;

  summaryParagraph: string;

  keyFindings: string[];

  recommendedDirectives: string[];

  departmentContact: string;

  verificationHash: string;
}

/**
 * ============================================================
 * Main Conservation Project
 * ============================================================
 *
 * This is the central object connecting all intelligence modules.
 */
export interface ConservationProject {
  // ----------------------------------------------------------
  // Identity
  // ----------------------------------------------------------

  id: string;

  code: string;

  title: string;

  // ----------------------------------------------------------
  // Location & Environment
  // ----------------------------------------------------------

  interventionType: InterventionType;

  ecosystemType?: EcosystemType;

  state: string;

  district: string;

  coordinates: {
    lat: number;
    lng: number;
  };

  areaHa?: number;

  catchmentAreaHa?: number;

  // ----------------------------------------------------------
  // Overall Status
  // ----------------------------------------------------------

  status: ProjectStatus;

  impactScore: number;

  // ----------------------------------------------------------
  // Environmental Intelligence
  // ----------------------------------------------------------

  baseline: BaselineData;

  monitoringTimeline: MonitoringMilestone[];

  trajectory: TrajectoryDataPoint[];

  healthIndicators: HealthIndicator[];

  anomalies?: Anomaly[];

  imageAnalysis?: ImageAnalysisResult[];

  // ----------------------------------------------------------
  // Prediction & Explainability
  // ----------------------------------------------------------

  failurePrediction: FailurePrediction;

  explainability?: ExplainabilityFactor[];

  // ----------------------------------------------------------
  // Impact
  // ----------------------------------------------------------

  impactBreakdown?: ImpactScoreBreakdown;

  // ----------------------------------------------------------
  // Governance
  // ----------------------------------------------------------

  governance: FinancialGovernance;

  // ----------------------------------------------------------
  // Corrective Action
  // ----------------------------------------------------------

  correctiveActions?: CorrectiveActionStep[];

  // ----------------------------------------------------------
  // Closed-loop Verification
  // ----------------------------------------------------------

  verificationRecords?: VerificationRecord[];
}