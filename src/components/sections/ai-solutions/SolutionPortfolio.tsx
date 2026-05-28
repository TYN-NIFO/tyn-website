import { useState } from "react";
import {
  X,
  CheckCircle2,
  Receipt,
  Scale,
  Users,
  TrendingUp,
  ShieldAlert,
  Network,
  ClipboardList,
  Handshake,
  Headphones as HeadphonesIcon,
  BarChart3,
  Zap,
} from "lucide-react";

interface Solution {
  id: string;
  name: string;
  categories: string[];
  shortLine: string;
  icon: React.ElementType;
  description: string;
  capabilities: string[];
  impact: string;
  outcome: string;
  status?: "production" | "pre-production";
}

const solutions: Solution[] = [
  {
    id: "invoice-processing",
    name: "AI Invoice Processing & Analyzer",
    categories: ["Finance"],
    shortLine:
      "End-to-end automation of invoice intake, validation, and ERP-ready output with audit traceability.",
    icon: Receipt,
    description:
      "An intelligent invoice processing system that extracts, validates, and flags anomalies across high-volume, multi-format invoice traffic.",
    capabilities: [
      "Email and PDF invoice ingestion",
      "OCR-based field extraction",
      "Duplicate invoice detection",
      "Confidence scoring and flagging",
      "ERP-ready structured output",
      "Audit trail generation",
    ],
    impact:
      "40–60% reduction in manual processing effort with improved audit readiness.",
    outcome: "Cost Avoidance",
    status: "production",
  },
  {
    id: "contract-review",
    name: "AI Contract Review & Clause Risk Analyzer",
    categories: ["Legal"],
    shortLine:
      "Automated contract intelligence for faster legal review and risk visibility.",
    icon: Scale,
    description:
      "A legal document intelligence system identifying risk, deviations, and non-standard clauses.",
    capabilities: [
      "PDF/DOCX ingestion",
      "Clause extraction and classification",
      "Template comparison",
      "Risk flagging",
      "Text highlighting and summaries",
      "Exportable review reports",
    ],
    impact:
      "30–50% reduction in first-level legal review effort with improved contract governance.",
    outcome: "Risk Reduction",
    status: "production",
  },
  {
    id: "hr-operations",
    name: "HR Policy Conversational Assistant",
    categories: ["HR"],
    shortLine:
      "Personalized employee self-service for policy queries, guided workflows, and HR ticket management.",
    icon: Users,
    description:
      "An AI-powered HR operations assistant that retrieves contextual policies, guides employees through workflows, and reduces repetitive HR support effort.",
    capabilities: [
      "Personalized policy retrieval via RAG",
      "Profile-based contextual responses",
      "Guided claims and request workflows",
      "HR ticket creation and tracking",
      "Manager summary generation",
      "Onboarding completion tracking",
    ],
    impact:
      "40–60% reduction in repetitive HR support interactions with faster employee resolution.",
    outcome: "Effort Deflection",
    status: "production",
  },
  {
    id: "sales-deal-coach",
    name: "Enterprise Sales & Deal Coach Agent",
    categories: ["Sales"],
    shortLine:
      "Convert market signals and internal knowledge into account strategy and next-best sales actions.",
    icon: TrendingUp,
    description:
      "A sales intelligence assistant that combines external account signals with internal knowledge to generate opportunity recommendations and meeting preparation.",
    capabilities: [
      "Account intelligence generation",
      "Internal knowledge and case study retrieval",
      "Opportunity recommendation with confidence scoring",
      "Meeting preparation and suggested questions",
      "Objection handling guidance",
      "Proposal outline generation",
    ],
    impact:
      "50–60% reduction in account research effort with improved opportunity qualification quality.",
    outcome: "Revenue Acceleration",
    status: "pre-production",
  },
  {
    id: "invoice-risk-intelligence",
    name: "Invoice Risk & GST Compliance Intelligence Agent",
    categories: ["Finance"],
    shortLine:
      "Detect invoice anomalies and GST compliance risks before financial leakage occurs.",
    icon: ShieldAlert,
    description:
      "An invoice risk detection system that identifies operational anomalies, duplicate submissions, and GST compliance issues before ERP posting.",
    capabilities: [
      "Invoice batch ingestion and extraction",
      "Duplicate and anomaly detection",
      "GST number and tax field validation",
      "Anomaly scoring with risk explanations",
      "Vendor behavior pattern analysis",
      "Pre-posting risk flagging dashboard",
    ],
    impact:
      "40–60% reduction in manual invoice review effort with fewer downstream compliance incidents.",
    outcome: "Fraud Prevention",
    status: "production",
  },
  {
    id: "supplier-risk-intelligence",
    name: "Supplier Risk & Performance Intelligence Agent",
    categories: ["Operations"],
    shortLine:
      "Convert fragmented supplier signals into proactive operational and procurement risk visibility.",
    icon: Network,
    description:
      "An AI-assisted supplier monitoring system that detects performance drift, SLA deviations, and dependency concentration risks across supplier networks.",
    capabilities: [
      "Supplier data and SLA report ingestion",
      "Delivery performance trend analysis",
      "Issue frequency and escalation tracking",
      "Supplier dependency risk detection",
      "SLA breach and penalty-trigger identification",
      "Leadership risk summary generation",
    ],
    impact:
      "Earlier operational risk identification and significant reduction in reactive escalation management.",
    outcome: "Supply Continuity",
    status: "pre-production",
  },
  {
    id: "vendor-evaluation",
    name: "Vendor Evaluation & Decision Intelligence Agent",
    categories: ["Procurement"],
    shortLine:
      "Structure multi-vendor comparisons and accelerate procurement decision-making.",
    icon: ClipboardList,
    description:
      "An AI-assisted vendor evaluation system that ingests proposals, extracts capabilities, and generates structured comparisons with weighted scoring and recommendation rationale.",
    capabilities: [
      "Multi-format proposal ingestion (PDF, PPT, Excel)",
      "Capability and pricing extraction",
      "Side-by-side vendor comparison",
      "Weighted scoring and ranking",
      "Strengths and risk summarization",
      "Leadership recommendation report generation",
    ],
    impact:
      "Faster vendor evaluation cycles with consistent, bias-reduced decision documentation.",
    outcome: "Decision Velocity",
    status: "pre-production",
  },
  {
    id: "strategic-sourcing",
    name: "Strategic Sourcing & Negotiation Intelligence Agent",
    categories: ["Procurement"],
    shortLine:
      "Convert procurement history and supplier signals into sourcing and negotiation intelligence.",
    icon: Handshake,
    description:
      "A procurement intelligence assistant that analyzes historical transactions, quotations, and negotiation records to surface pricing insights, benchmarks, and negotiation preparation.",
    capabilities: [
      "Procurement transaction and quotation ingestion",
      "Supplier pricing trend analysis",
      "Historical negotiation summarization",
      "Price anomaly and benchmark detection",
      "Sourcing dependency risk identification",
      "Negotiation preparation sheet generation",
    ],
    impact:
      "Improved negotiation preparedness and earlier identification of pricing risks and sourcing vulnerabilities.",
    outcome: "Margin Protection",
    status: "pre-production",
  },
  {
    id: "customer-service-intelligence",
    name: "Customer Service Intelligence & Escalation Analytics Agent",
    categories: ["Operations"],
    shortLine:
      "Convert fragmented customer interactions into proactive escalation and operational service intelligence.",
    icon: HeadphonesIcon,
    description:
      "An AI-assisted customer interaction analysis system that identifies escalation risks, recurring issue patterns, and operational bottlenecks across multi-channel support data.",
    capabilities: [
      "Multi-channel interaction ingestion (calls, email, WhatsApp, tickets)",
      "Interaction summarization and sentiment tagging",
      "Escalation risk detection and scoring",
      "Recurring issue clustering",
      "Resolution inefficiency identification",
      "Leadership intervention summary generation",
    ],
    impact:
      "Earlier escalation risk identification and measurable reduction in recurring operational service failures.",
    outcome: "Churn Prevention",
    status: "pre-production",
  },
  {
    id: "eval-arena",
    name: "Eval Arena: AI Model Benchmarking Suite",
    categories: ["AI Infrastructure"],
    shortLine:
      "Side-by-side AI model benchmarking from a single unified interface.",
    icon: BarChart3,
    description:
      "A controlled evaluation environment for comparing model responses, latency, and performance metrics.",
    capabilities: [
      "Multi-provider prompt execution",
      "Side-by-side response comparison",
      "Latency and token tracking",
      "Streaming + failover handling",
      "Secure credential storage",
      "Evaluation tagging",
    ],
    impact: "Faster provider evaluation and confident AI stack decisions.",
    outcome: "Model Agility",
    status: "production",
  },
];

const categories = [
  "All",
  "Finance",
  "Legal",
  "HR",
  "Sales",
  "Operations",
  "Procurement",
  "AI Infrastructure",
];

export const SolutionPortfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filtered =
    activeCategory === "All"
      ? solutions
      : solutions.filter((s) => s.categories.includes(activeCategory));

  const handleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section
      id="solutions-grid"
      className="section-padding bg-background pattern-grid"
    >
      <div className="container-main">
        {/* Filter Bar */}
        <div className="flex flex-wrap gap-2 mb-14 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setExpandedId(null);
              }}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-card text-muted-foreground border-border hover:border-accent/40 hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="relative w-full transition-all duration-500 ease-in-out">
          {expandedId === null ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in justify-items-center lg:justify-items-start">
              {filtered.map((solution) => {
                const Icon = solution.icon;
                return (
                  <div
                    key={solution.id}
                    className="card-elevated rounded-2xl cursor-pointer group p-6 md:p-8 transition-all duration-300 hover:ring-2 hover:ring-accent/40"
                    onClick={() => handleExpand(solution.id)}
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="icon-tyn flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center transition-colors duration-300">
                        <Icon className="w-6 h-6 md:w-7 md:h-7 transition-colors duration-300" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-display font-bold text-foreground mb-1 leading-tight">
                          {solution.name}
                        </h3>
                        <div className="flex flex-wrap gap-1.5 mb-2">
                          {solution.categories.map((cat) => (
                            <span
                              key={cat}
                              className="px-2.5 py-0.5 rounded-full bg-tyn-blue/10 text-tyn-blue text-xs font-medium"
                            >
                              {cat}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {solution.shortLine}
                    </p>
                    <div className="flex items-center gap-3 text-xs font-medium h-5">
                      <div className="flex items-center gap-1 text-tyn-blue">
                        <Zap className="w-3.5 h-3.5" />
                        <span>{solution.outcome}</span>
                      </div>
                      <span className="text-border">•</span>
                      <div className="flex items-center gap-1.5 text-tyn-blue">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        {solution.status === "pre-production"
                          ? "Pre-production"
                          : "Production-ready"}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            (() => {
              const solution = solutions.find((s) => s.id === expandedId);
              if (!solution) return null;
              const Icon = solution.icon;
              return (
                <div className="w-full rounded-2xl bg-card border border-border shadow-xl p-6 md:p-10 lg:p-14 animate-fade-in transition-all duration-500 ease-in-out">
                  <div className="relative flex items-start gap-5 mb-8">
                    <div className="icon-tyn flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center transition-colors duration-300">
                      <Icon className="w-7 h-7 transition-colors duration-300" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap gap-1.5 mb-2">
                        {solution.categories.map((cat) => (
                          <span
                            key={cat}
                            className="px-2.5 py-0.5 rounded-full bg-tyn-blue/10 text-tyn-blue text-xs font-medium"
                          >
                            {cat}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center gap-3 text-xs font-medium h-5">
                        <div className="flex items-center gap-1 text-tyn-blue">
                          <Zap className="w-3.5 h-3.5" />
                          <span>{solution.outcome}</span>
                        </div>
                        <span className="text-border">•</span>
                        <div className="flex items-center gap-1 text-tyn-blue">
                          <CheckCircle2 className="w-3 h-3" />
                          {solution.status === "pre-production"
                            ? "Pre-production"
                            : "Production-ready"}
                        </div>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-2">
                        {solution.name}
                      </h3>
                      <p className="text-base text-muted-foreground leading-relaxed max-w-2xl">
                        {solution.description}
                      </p>
                    </div>
                    <button
                      className="absolute top-0 right-0 w-10 h-10 rounded-full bg-muted/60 flex items-center justify-center hover:bg-muted transition-colors duration-200"
                      onClick={() => setExpandedId(null)}
                    >
                      <X className="w-5 h-5 text-muted-foreground" />
                    </button>
                  </div>

                  <div className="border-t border-border pt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-accent mb-4">
                        Key Capabilities
                      </h4>
                      <ul className="space-y-2.5">
                        {solution.capabilities.map((cap) => (
                          <li
                            key={cap}
                            className="flex items-start gap-2 text-sm text-foreground/80"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-tyn-blue flex-shrink-0 mt-1.5" />
                            {cap}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-accent mb-4">
                        Typical Impact
                      </h4>
                      <p className="text-sm text-foreground/80 leading-relaxed">
                        {solution.impact}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })()
          )}
        </div>
      </div>
    </section>
  );
};
