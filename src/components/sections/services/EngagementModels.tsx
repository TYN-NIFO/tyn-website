import { Zap, TrendingUp, Layers } from 'lucide-react';

const engagementOptions = [
  {
    icon: Zap,
    title: 'Quick Win',
    description: 'Validate ROI with one high-impact use case',
    detail: 'Define a reference use case, build a PoC, and prove value before scaling.',
    bestFor: 'Testing the waters quickly or securing executive buy-in.',
  },
  {
    icon: TrendingUp,
    title: 'Program',
    description: 'Deliver outcomes across a function or value stream',
    detail: 'End-to-end program delivery over 3-6 months with multi-stakeholder governance and measurement.',
    bestFor: 'Transforming a specific department (sales, ops, finance) with embedded AI capabilities.',
  },
  {
    icon: Layers,
    title: 'Capability',
    description: 'Institutionalize AI through a CoE',
    detail: 'Build an AI operating model, intake process, and a CoE that scales across the entire enterprise.',
    bestFor: 'Building internal AI capability, staffing AI leadership, and establishing reusable infrastructure across the organization.',
  },
];

export const EngagementModels = () => {
  return (
    <section className="section-padding bg-background pattern-grid">
      <div className="container-main">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-6">
            ENGAGEMENT MODELS
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Engagement models
          </h2>
          <p className="text-lg text-muted-foreground">
            Flexible approaches designed to meet you where you are — from quick wins to institutional
            transformation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {engagementOptions.map((option, idx) => (
            <div
              key={idx}
              className="card-elevated rounded-2xl p-8 hover:-translate-y-1 transition-all duration-300 group flex flex-col"
            >
              <div className="icon-tyn w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-300">
                <option.icon className="w-7 h-7 transition-colors" />
              </div>
              <h3 className="text-xl font-display font-bold text-foreground mb-2">
                {option.title}
              </h3>
              <p className="text-base text-muted-foreground mb-4">{option.description}</p>
              <p className="text-sm text-muted-foreground/80 mb-6 flex-1">{option.detail}</p>
              <div className="border-t border-border pt-4">
                <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-1">Best for</p>
                <p className="text-sm text-muted-foreground">{option.bestFor}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
