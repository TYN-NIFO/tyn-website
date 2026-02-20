import { Clock, Building2, Brain, TrendingUp, Rocket } from 'lucide-react';

const outcomes = [
  {
    icon: TrendingUp,
    title: 'Quantifiable ROI',
    description: 'Clear financial impact tied to measurable KPIs. Every initiative is designed with defined return metrics from day one.',
  },
  {
    icon: Rocket,
    title: 'Faster Time to Production',
    description: 'Move from pilot to live deployment within structured timelines. Execution pathways designed for speed without compromising governance.',
  },
  {
    icon: Building2,
    title: 'Enterprise-Grade Adoption',
    description: 'AI embedded into real workflows — not isolated experiments. Governed, scalable systems aligned with enterprise architecture.',
  },
];

export const Outcomes = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-main">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-6">
            Results
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Outcomes We Aim
          </h2>
        </div>

        {/* Outcomes Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {outcomes.map((outcome, index) => (
            <div
              key={outcome.title}
              className="metric-card clip-card-default group"
            >
              <div className="flex items-start gap-4">
                <div className="icon-tyn w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center flex-shrink-0">
                  <outcome.icon className="w-6 h-6 md:w-7 md:h-7" />
                </div>
                <div>
                  <h3 className="text-lg font-display font-semibold text-foreground mb-2">
                    {outcome.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {outcome.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
