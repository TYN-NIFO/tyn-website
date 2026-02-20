import { useState } from 'react';
import { X, FileText, Users, Scale, GraduationCap, Cpu, CheckCircle2 } from 'lucide-react';

interface Solution {
  id: string;
  name: string;
  categories: string[];
  shortLine: string;
  icon: React.ElementType;
  description: string;
  capabilities: string[];
  impact: string;
}

const solutions: Solution[] = [
  {
    id: 'invoice',
    name: 'AI Invoice Processing & Analyzer',
    categories: ['Finance'],
    shortLine: 'End-to-end automation of invoice intake, validation, and ERP posting.',
    icon: FileText,
    description: 'A production-grade finance automation solution designed to eliminate manual invoice workflows while strengthening compliance.',
    capabilities: [
      'Shared mailbox ingestion and attachment detection',
      'OCR extraction of structured invoice data',
      'Vendor and PO validation',
      'Multi-factor duplicate detection',
      'Human-in-the-loop exception routing',
      'Automatic ERP/CRM posting',
      'Full audit trails',
    ],
    impact: 'Faster processing cycles, reduced manual effort, stronger compliance controls.',
  },
  {
    id: 'hr-assistant',
    name: 'HR Policy Conversational Assistant',
    categories: ['HR'],
    shortLine: 'Multilingual voice and chat assistant for policy queries and guided claims intake.',
    icon: Users,
    description: 'An enterprise HR assistant delivering structured policy guidance and claims processing with secure escalation.',
    capabilities: [
      'Voice + chat GenAI interface',
      'Source-backed responses',
      'Guided intake workflows',
      'HRMS/CRM ticket creation',
      'Smart escalation summaries',
      'Secure sensitive data handling',
      'Usage and engagement analytics',
    ],
    impact: '24/7 support, faster employee service, reduced HR workload.',
  },
  {
    id: 'contract-review',
    name: 'AI Contract Review & Clause Risk Analyzer',
    categories: ['Legal'],
    shortLine: 'Automated contract intelligence for faster legal review and risk visibility.',
    icon: Scale,
    description: 'A legal document intelligence system identifying risk, deviations, and non-standard clauses.',
    capabilities: [
      'PDF/DOCX ingestion',
      'Clause extraction and classification',
      'Template comparison',
      'Risk flagging',
      'Text highlighting and summaries',
      'Exportable review reports',
    ],
    impact: 'Shorter review cycles and improved contract governance.',
  },
  {
    id: 'campus-placement',
    name: 'Campus Placement Platform',
    categories: ['Education'],
    shortLine: 'End-to-end digital placement lifecycle for institutions and recruiters.',
    icon: GraduationCap,
    description: 'A structured platform managing student, recruiter, and placement workflows with analytics visibility.',
    capabilities: [
      'Student profiles and resume builder',
      'Recruiter portal and job posting',
      'Application workflows',
      'Interview scheduling',
      'Placement dashboards',
      'Role-based access control',
    ],
    impact: 'Streamlined operations and improved stakeholder visibility.',
  },
  {
    id: 'response-rally',
    name: 'ResponseRally — AI Model Benchmarking Suite',
    categories: ['AI Infrastructure'],
    shortLine: 'Side-by-side AI model benchmarking from a single unified interface.',
    icon: Cpu,
    description: 'A controlled evaluation environment for comparing model responses, latency, and performance metrics.',
    capabilities: [
      'Multi-provider prompt execution',
      'Side-by-side response comparison',
      'Latency and token tracking',
      'Streaming + failover handling',
      'Secure credential storage',
      'Evaluation tagging',
    ],
    impact: 'Faster provider evaluation and confident AI stack decisions.',
  },
];

const categories = ['All', 'Finance', 'HR', 'Legal', 'Education', 'AI Infrastructure'];

export const SolutionPortfolio = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filtered = activeCategory === 'All'
    ? solutions
    : solutions.filter((s) => s.categories.includes(activeCategory));

  const handleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="solutions-grid" className="section-padding bg-background pattern-grid">
      <div className="container-main">
        {/* Filter Bar */}
        <div className="flex flex-wrap gap-2 mb-14 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => { setActiveCategory(cat); setExpandedId(null); }}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${activeCategory === cat
                ? 'bg-primary text-primary-foreground border-primary'
                : 'bg-card text-muted-foreground border-border hover:border-accent/40 hover:text-foreground'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="relative w-full transition-all duration-500 ease-in-out">
          {expandedId === null ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
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
                            <span key={cat} className="px-2.5 py-0.5 rounded-full bg-tyn-blue/10 text-tyn-blue text-xs font-medium">
                              {cat}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {solution.shortLine}
                    </p>
                    <div className="flex items-center gap-1.5 text-xs text-tyn-blue font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Production-ready
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
                          <span key={cat} className="px-2.5 py-0.5 rounded-full bg-tyn-blue/10 text-tyn-blue text-xs font-medium">
                            {cat}
                          </span>
                        ))}
                        <span className="px-2.5 py-0.5 rounded-full bg-tyn-blue/20 text-tyn-blue text-xs font-medium flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3" />
                          Production-ready
                        </span>
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
                          <li key={cap} className="flex items-start gap-2 text-sm text-foreground/80">
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
