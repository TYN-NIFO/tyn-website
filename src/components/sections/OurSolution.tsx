import { Target, BarChart3, GitBranch, Cog, TrendingUp, ArrowRight } from 'lucide-react';

const steps = [
  {
    icon: Target,
    title: 'Identify high-impact AI use cases',
    description: 'Discover opportunities that truly move the needle for your business.',
  },
  {
    icon: BarChart3,
    title: 'Prioritize by ROI vs cost-to-realize',
    description: 'Focus resources on initiatives with the best return potential.',
  },
  {
    icon: GitBranch,
    title: 'Choose build-vs-buy routes',
    description: 'Optimal path selection for each use case in your portfolio.',
  },
  {
    icon: Cog,
    title: 'Redesign workflows to embed AI',
    description: 'Transform processes for seamless AI adoption across the enterprise.',
  },
  {
    icon: TrendingUp,
    title: 'Track outcomes end-to-end',
    description: 'Measure and prove value from pilot to production at scale.',
  },
];

export const OurSolution = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-main">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-6">
            Our Approach
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Our Solution
          </h2>
          <p className="text-lg text-muted-foreground">
            At TYN, we convert business priorities into actionable AI transformation programs.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-accent/30 to-transparent -translate-y-1/2" />

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {steps.map((step, index) => {
              const StepIcon = step.icon;
              return (
                <div key={step.title} className="relative group">
                  {/* Card */}
                  <div className="card-elevated rounded-2xl p-6 h-full hover:-translate-y-2 transition-all duration-300 text-center">
                    {/* Icon badge */}
                    <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 mx-auto group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                      <StepIcon className="w-7 h-7 text-accent group-hover:text-accent-foreground transition-colors" />
                    </div>

                    <h3 className="text-lg font-display font-semibold text-foreground mb-2">
                      {step.title}
                    </h3>

                    <p className="text-sm text-muted-foreground">
                      {step.description}
                    </p>
                  </div>

                  {/* Arrow connector - Desktop */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 z-10">
                      <ArrowRight className="w-6 h-6 text-accent/50" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
