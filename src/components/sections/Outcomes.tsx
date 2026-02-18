import { Clock, Building2, Brain, Cog, Sparkles } from 'lucide-react';

const outcomes = [
  {
    icon: Clock,
    title: 'Faster time-to-ROI',
    description: 'Accelerate value realization from AI investments.',
  },
  {
    icon: Building2,
    title: 'Enterprise-grade adoption, not isolated pilots',
    description: 'Scale AI across the organization with governance.',
  },
  {
    icon: Brain,
    title: 'Better decision intelligence & reduced leakage',
    description: 'Improve decision-making with AI-powered insights.',
  },
  {
    icon: Cog,
    title: 'Productivity & workflow automation',
    description: 'Automate repetitive tasks and streamline processes.',
  },
  {
    icon: Sparkles,
    title: 'Experience innovation for customers & employees',
    description: 'Transform experiences with intelligent automation.',
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
              className="metric-card group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent transition-colors">
                  <outcome.icon className="w-6 h-6 text-accent group-hover:text-accent-foreground transition-colors" />
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
