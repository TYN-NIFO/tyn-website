import { useState } from 'react';
import { Shield, Truck, Landmark, Factory, Pickaxe, X } from 'lucide-react';

interface Industry {
  id: string;
  title: string;
  shortLine: string;
  icon: React.ElementType;
  context: string;
  exampleWork: string;
  impacts: string[];
  capabilities: string[];
}

const industries: Industry[] = [
  {
    id: 'insurance',
    title: 'Insurance',
    shortLine: 'AI-driven underwriting and document intelligence for high-volume risk environments.',
    icon: Shield,
    context: 'Large insurers process high volumes of documents and risk data. Manual workflows create delays and compliance friction.',
    exampleWork: 'AI-led underwriting automation across risk assessment, document validation, and policy issuance.',
    impacts: ['Faster underwriting cycles', 'High document accuracy across formats', 'Improved customer turnaround'],
    capabilities: ['Document AI', 'Risk analytics', 'Workflow automation'],
  },
  {
    id: 'supply-chain',
    title: 'Supply Chain & Logistics',
    shortLine: 'Optimization, visibility, and intelligence for large-scale logistics networks.',
    icon: Truck,
    context: 'High-volume logistics operations run thousands of trips daily. Minor inefficiencies scale into major cost exposure.',
    exampleWork: 'AI-driven route and load optimisation integrated with fleet, orders, and telematics systems.',
    impacts: ['Improved route efficiency', 'Better load utilisation', 'Strong cost-saving potential'],
    capabilities: ['AI optimization', 'Real-time analytics', 'Decision intelligence'],
  },
  {
    id: 'financial-services',
    title: 'Financial Services',
    shortLine: 'Enterprise AI embedded within regulated financial workflows.',
    icon: Landmark,
    context: 'Financial institutions balance governance with speed and customer engagement.',
    exampleWork: 'AI integrated into marketing and approval workflows for automated content generation and governance controls.',
    impacts: ['Faster campaign turnaround', 'Reduced manual dependency', 'Scalable multi-channel engagement'],
    capabilities: ['Generative AI', 'Workflow automation', 'Governance'],
  },
  {
    id: 'manufacturing',
    title: 'Manufacturing & Industrial',
    shortLine: 'Real-time monitoring and operational intelligence for industrial ecosystems.',
    icon: Factory,
    context: 'Industrial environments require compliance, safety visibility, and operational stability.',
    exampleWork: 'AI-enabled environmental and operational monitoring through ecosystem collaboration.',
    impacts: ['Improved compliance and response time', 'Real-time operational visibility', 'Faster technology adoption'],
    capabilities: ['IoT + AI', 'Real-time monitoring', 'Ecosystem programs'],
  },
  {
    id: 'energy-mining',
    title: 'Energy & Mining',
    shortLine: 'AI-enabled environmental intelligence and stakeholder alignment.',
    icon: Pickaxe,
    context: 'Large industrial sites require coordination across regulators, partners, and operations teams.',
    exampleWork: 'Environmental monitoring and control solutions deployed through multi-stakeholder ecosystems.',
    impacts: ['Stakeholder alignment around measurable targets', 'Fast rollout of innovative solutions', 'Clear path to ROI'],
    capabilities: ['AI + IoT', 'Environmental analytics', 'Multi-stakeholder programs'],
  },
];

export const IndustryGrid = () => {
  const [activeIndustry, setActiveIndustry] = useState<number | null>(null);

  const activeData = activeIndustry !== null ? industries[activeIndustry] : null;

  return (
    <section id="industry-grid" className="section-padding bg-background pattern-grid">
      <div className="container-main">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold tracking-widest mb-6">
            SECTORS WE OPERATE IN
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Complex industries. Structured delivery.
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We design AI for production — not experimentation — in environments where regulatory depth and operational scale define every decision.
          </p>
        </div>

        <div className="relative w-full transition-all duration-500 ease-in-out">
          {activeIndustry === null ? (
            /* ── Grid View ── */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
              {industries.map((industry, index) => {
                const Icon = industry.icon;
                return (
                  <div
                    key={industry.id}
                    className="card-elevated rounded-2xl cursor-pointer group p-6 md:p-8 transition-all duration-300 hover:ring-2 hover:ring-accent/40"
                    onClick={() => setActiveIndustry(index)}
                  >
                    <div className="flex items-start gap-4">
                      <div className="icon-tyn flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center transition-colors duration-300">
                        <Icon className="w-6 h-6 md:w-7 md:h-7 transition-colors duration-300" />
                      </div>
                      <div>
                        <h3 className="text-xl font-display font-bold text-foreground mb-1">
                          {industry.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {industry.shortLine}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            /* ── Expanded View ── */
            activeData && (() => {
              const Icon = activeData.icon;
              return (
                <div className="w-full rounded-2xl bg-card border border-border shadow-xl p-6 md:p-10 lg:p-14 animate-fade-in transition-all duration-500 ease-in-out">
                  {/* Header with close button */}
                  <div className="relative flex items-start gap-5 mb-8">
                    <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-accent flex items-center justify-center">
                      <Icon className="w-7 h-7 text-accent-foreground" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-2">
                        {activeData.title}
                      </h3>
                      <p className="text-base text-muted-foreground leading-relaxed max-w-2xl">
                        {activeData.shortLine}
                      </p>
                    </div>
                    <button
                      className="absolute top-0 right-0 w-10 h-10 rounded-full bg-muted/60 flex items-center justify-center hover:bg-muted transition-colors duration-200"
                      onClick={() => setActiveIndustry(null)}
                    >
                      <X className="w-5 h-5 text-muted-foreground" />
                    </button>
                  </div>

                  {/* Detail content */}
                  <div className="border-t border-border pt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                        Context
                      </h4>
                      <p className="text-sm text-foreground/80 leading-relaxed">
                        {activeData.context}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                        Example Work
                      </h4>
                      <p className="text-sm text-foreground/80 leading-relaxed">
                        {activeData.exampleWork}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                        Impact
                      </h4>
                      <ul className="space-y-2">
                        {activeData.impacts.map((impact) => (
                          <li key={impact} className="flex items-center gap-2 text-sm text-foreground/80">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                            {impact}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Capabilities */}
                  <div className="mt-8 pt-6 border-t border-border/40 flex flex-wrap gap-2">
                    {activeData.capabilities.map((cap) => (
                      <span
                        key={cap}
                        className="px-4 py-1.5 rounded-full bg-accent/10 text-accent text-xs font-medium"
                      >
                        {cap}
                      </span>
                    ))}
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
