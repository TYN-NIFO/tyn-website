import { Hammer, ShoppingCart, Brain } from 'lucide-react';

const engagements = [
    {
        icon: Hammer,
        title: 'BUILD',
        subtitle: 'Design, Build, Deploy',
        bestFor: 'When you want defined scope, clear timelines, and accountable execution.',
        items: [
            'Agent build — Design, Build & Deploy',
            'Integration & Security',
            'Test & Hyper care (2 weeks)',
            'Change enablement',
        ],
        outcome: 'Production-ready implementation with measurable KPIs and knowledge transfer to your team.',
    },
    {
        icon: ShoppingCart,
        title: 'BUY',
        subtitle: 'Scout, Evaluate, Deploy',
        bestFor: 'When you want the right solution from the ecosystem without vendor noise.',
        items: [
            'Scout & shortlist (startup) solution providers',
            'Create ROI modeling and board-ready business cases',
            'PoC/Pilot orchestration',
            'Pricing negotiation & closure',
        ],
        outcome: 'Right-fit solution deployed with governance, avoiding lock-in and tool sprawl.',
    },
    {
        icon: Brain,
        title: 'AI CoE',
        subtitle: 'Build the muscle + governance',
        bestFor: 'When you want a repeatable AI engine across functions.',
        items: [
            'Use-case pipeline governance',
            'ROI tracking and prioritization',
            'Standards and architecture guardrails',
            'Build/Buy orchestration framework',
        ],
        outcome: 'Sustained AI adoption at scale — not isolated pilots.',
    },
];

export const EngagementModel = () => {
    return (
        <section id="engagement-models" className="section-padding bg-background pattern-grid">
            <div className="container-main">
                <div className="text-center max-w-4xl mx-auto mb-16">

                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
                        Engagement Model
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Engage us in the way that best fits your maturity and urgency.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {engagements.map((eng) => (
                        <div
                            key={eng.title}
                            className="bg-card shadow-lg border-none rounded-none p-8 clip-angled hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group flex flex-col"
                        >
                            <div className="icon-tyn w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300">
                                <eng.icon className="w-7 h-7 transition-colors" />
                            </div>
                            <h3 className="text-xl font-display font-bold text-foreground mb-1">
                                {eng.title}
                            </h3>
                            <p className="text-sm text-tyn-blue font-bold mb-4">({eng.subtitle})</p>

                            <div className="border-t border-border pt-4 mb-4">
                                <p className="text-xs font-bold text-tyn-blue uppercase tracking-wider mb-1">Best for</p>
                                <p className="text-sm text-muted-foreground">{eng.bestFor}</p>
                            </div>

                            <div className="mb-4 flex-1">
                                <p className="text-xs font-bold text-tyn-blue uppercase tracking-wider mb-2">What you get</p>
                                <ul className="space-y-1.5">
                                    {eng.items.map((item) => (
                                        <li key={item} className="text-sm text-muted-foreground flex items-start gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-tyn-blue mt-1.5 flex-shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="border-t border-border pt-4">
                                <p className="text-xs font-bold text-tyn-blue uppercase tracking-wider mb-1">Outcome</p>
                                <p className="text-sm text-muted-foreground">{eng.outcome}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
