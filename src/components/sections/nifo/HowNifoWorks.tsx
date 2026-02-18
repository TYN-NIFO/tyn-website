const stages = [
  {
    num: '01',
    title: 'Mapping',
    body: 'We translate business intent into architecture-aligned use cases. Clear scope. Clear guardrails. Clear success metrics.',
    highlight: 'No experimentation without governance.',
  },
  {
    num: '02',
    title: 'Analysis',
    body: 'We evaluate options — internal build, ecosystem buy, or hybrid — against your architecture, data constraints, and risk posture.',
    highlight: 'Scorecards over sales pitches. Governance before velocity.',
  },
  {
    num: '03',
    title: 'Recommendation',
    body: 'We design and deploy production-grade systems or supervised AI agents that operate within your enterprise environment.',
    highlight: 'Live in 8–12 weeks. Measured impact in one quarter.',
  },
];

import { NifoInlineLogo } from './NifoInlineLogo';

export const HowNifoWorks = () => {
  return (
    <section className="section-padding bg-background pattern-grid">
      <div className="container-main">
        <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-6 tracking-widest">
          HOW NIFO WORKS
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-12">
          How <NifoInlineLogo className="h-8 md:h-10 lg:h-12 mx-1" /> works
        </h2>

        {/* Desktop: horizontal flow */}
        <div className="hidden md:flex items-stretch gap-0 group">
          {stages.map((stage, i) => (
            <div key={stage.num} className="flex items-stretch">
              <div className="card-elevated rounded-2xl p-8 flex-1 min-w-[260px] max-w-[360px] hover:border-accent/50 transition-all duration-300">
                <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold mb-4 tracking-widest">
                  STAGE {stage.num}
                </span>
                <h3 className="text-xl font-display font-bold text-foreground mb-3">
                  {stage.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-2">{stage.body}</p>
                <p className="text-sm font-semibold text-accent-foreground leading-relaxed">{stage.highlight}</p>
              </div>
              {i < stages.length - 1 && (
                <div className="flex items-center px-2">
                  <div className="w-12 h-px bg-accent/20 group-hover:bg-accent/40 transition-colors duration-300" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile: vertical stacked */}
        <div className="md:hidden space-y-4">
          {stages.map((stage, i) => (
            <div key={stage.num}>
              <div className="card-elevated rounded-2xl p-8">
                <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold mb-4 tracking-widest">
                  STAGE {stage.num}
                </span>
                <h3 className="text-xl font-display font-bold text-foreground mb-3">
                  {stage.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-2">{stage.body}</p>
                <p className="text-sm font-semibold text-accent-foreground leading-relaxed">{stage.highlight}</p>
              </div>
              {i < stages.length - 1 && (
                <div className="flex justify-center py-2">
                  <div className="w-px h-8 bg-accent/20" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
