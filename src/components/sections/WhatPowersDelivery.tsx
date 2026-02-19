import { Brain, Users, Rocket, ChevronRight } from "lucide-react";

const WhatPowersDelivery = () => {
    const pillars = [
        {
            number: "01",
            title: "Deep Talent",
            subtitle: "(strategy + execution)",
            icon: Brain,
            items: [
                {
                    highlight: "Domain experts (Industry veterans):",
                    text: "translate business context into the right use cases, constraints, and adoption path"
                },
                {
                    highlight: "Innovation consultants (PhDs & MBAs):",
                    text: "intent → use cases → ROI narrative → stakeholder alignment"
                },
                {
                    highlight: "AI specialists (Masters):",
                    text: "model strategy, architecture, evaluation, and responsible deployment"
                },
                {
                    highlight: "Delivery engineers:",
                    text: "data engineering + app engineering + DevOps for production-grade rollout"
                }
            ]
        },
        {
            number: "02",
            title: "Strong Ecosystem",
            subtitle: "(best-fit solutions, faster)",
            icon: Users,
            items: [
                {
                    highlight: "Google Cloud (Gemini/Vertex) partnership:",
                    text: "enterprise-grade AI foundation (certified associates)"
                },
                {
                    highlight: "Kissflow partnership:",
                    text: "workflow automation to operationalize AI end-to-end"
                },
                {
                    highlight: "1000+ startup access:",
                    text: "rapid 'buy' scouting for niche and global innovations (across Israel, US, Swiss, UK & India)"
                },
                {
                    highlight: "yZone:",
                    text: "TYN Innovation Labs across 3 academia institutions to solve industry problems at scale"
                }
            ],
            partners: ["Google Cloud", "Gemini", "Kissflow", "yZone"]
        },
        {
            number: "03",
            title: "NIFO – TYN's Proprietary Toolkit",
            subtitle: "(embedded accelerators)",
            icon: Rocket,
            items: [
                {
                    highlight: "TYN innovation portfolio map",
                    text: "(what type of innovation to pursue)"
                },
                {
                    highlight: "TYN prioritization map",
                    text: "(ROI vs Total Cost-to-Realize/readiness)"
                },
                {
                    highlight: "Built-in assets:",
                    text: "solution showcase, reusable components/patterns, startup scouting workflow"
                },
                {
                    highlight: "ROI models + business case",
                    text: "templates and value tracking dashboards"
                },
                {
                    highlight: "Program management:",
                    text: "governance cadence, stage-gates, pilot-to-scale playbooks"
                }
            ]
        }
    ];

    return (
        <section className="py-20 px-4 md:px-8 lg:px-16 bg-primary relative overflow-hidden">
            {/* Subtle Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 left-0 w-64 h-64 bg-secondary/20 rotate-45 -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary/20 rotate-45 translate-x-1/2 translate-y-1/2" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-1.5 bg-secondary/10 border border-secondary/30 text-secondary text-xs font-semibold uppercase tracking-wider rounded-sm mb-4">
                        Our Capabilities
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground">
                        What powers our{" "}
                        <span className="text-secondary">delivery</span>
                    </h2>
                </div>

                {/* Three Pillars Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {pillars.map((pillar, index) => (
                        <div
                            key={index}
                            className="group relative"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            {/* Card with subtle angular corners */}
                            <div className="relative bg-navy-light/80 border border-secondary/20 p-6 transition-all duration-300 hover:border-secondary/40 hover:bg-navy-light clip-card">
                                {/* Number Badge */}
                                <div className="absolute -top-3 -right-1 z-20">
                                    <div className="w-10 h-10 bg-secondary flex items-center justify-center clip-hexagon">
                                        <span className="text-secondary-foreground font-bold text-sm">{pillar.number}</span>
                                    </div>
                                </div>

                                {/* Icon & Title */}
                                <div className="flex items-start gap-3 mb-6">
                                    <div className="w-12 h-12 bg-secondary/10 border border-secondary/20 flex items-center justify-center clip-hexagon-sm flex-shrink-0">
                                        <pillar.icon className="w-6 h-6 text-secondary" />
                                    </div>
                                    <div className="flex-1 pt-1">
                                        <h3 className="text-lg font-semibold text-primary-foreground leading-tight">{pillar.title}</h3>
                                        <p className="text-xs text-secondary/80">{pillar.subtitle}</p>
                                    </div>
                                </div>

                                {/* Divider */}
                                <div className="w-full h-px bg-secondary/20 mb-5" />

                                {/* Items List */}
                                <ul className="space-y-3">
                                    {pillar.items.map((item, itemIndex) => (
                                        <li key={itemIndex} className="flex items-start gap-2">
                                            <ChevronRight className="w-3.5 h-3.5 text-secondary/70 flex-shrink-0 mt-1" />
                                            <p className="text-sm leading-relaxed">
                                                <span className="font-medium text-primary-foreground">{item.highlight}</span>{" "}
                                                <span className="text-primary-foreground/60">{item.text}</span>
                                            </p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhatPowersDelivery;
