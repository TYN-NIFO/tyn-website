import { Target, BarChart3, GitBranch, Cog, ArrowRight, ShoppingBag, Hammer } from 'lucide-react';

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
        <div className="relative border border-accent/20 rounded-3xl bg-accent/5 p-8 md:p-12 pt-16">
          {/* AI CoE Header Pill */}
          <div className="absolute top-6 left-8 flex items-center gap-4">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent text-sm font-bold shadow-sm">
              AI CoE
            </span>
            <span className="text-sm font-medium text-muted-foreground">
              End-to-end orchestration
            </span>
          </div>
          <br /><br />

          {/* Connection Line - Desktop */}
          {/* <div className="hidden lg:block absolute top-[55%] left-12 right-12 h-0.5 bg-gradient-to-r from-transparent via-accent/30 to-transparent -translate-y-1/2" /> */}

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {steps.map((step, index) => {
              const StepIcon = step.icon;
              return (
                <div key={step.title} className="relative group">
                  {/* Card */}
                  <div className="card-elevated clip-card-differentiator p-6 h-full hover:-translate-y-2 transition-all duration-300 text-center">
                    {/* Icon badge */}
                    <div className="icon-tyn w-14 h-14 rounded-xl flex items-center justify-center mb-6 mx-auto">
                      <StepIcon className="w-7 h-7" />
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
                    <div className="hidden lg:block absolute top-1/2 -right-5 -translate-y-1/2 z-10">
                      <ArrowRight className="w-5 h-5 text-accent/50" />
                    </div>
                  )}
                  {/* Final arrow before BUY/BUILD stack */}
                  {index === steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-7 -translate-y-1/2 z-10">
                      <ArrowRight className="w-5 h-5 text-accent/50" />
                    </div>
                  )}
                </div>
              );
            })}

            {/* Added Stacked Action Cards (BUY / BUILD) */}
            <div className="flex flex-col gap-4 justify-center relative z-10">
              {/* BUY Card */}
              <div className="bg-white border border-accent/20 border-l-4 border-l-accent rounded-xl p-4 hover:-translate-y-1 transition-transform duration-300">
                <div className="flex items-center gap-2 mb-2">
                  <ShoppingBag className="w-5 h-5 text-accent" />
                  <h4 className="font-display font-bold text-foreground text-sm">BUY</h4>
                </div>
                <p className="text-xs text-tyn-blue font-medium">Scout → Evaluate → Deploy</p>
              </div>

              {/* BUILD Card */}
              <div className="bg-white border border-accent/20 border-l-4 border-l-accent rounded-xl p-4 hover:-translate-y-1 transition-transform duration-300">
                <div className="flex items-center gap-2 mb-2">
                  <Hammer className="w-5 h-5 text-accent" />
                  <h4 className="font-display font-bold text-foreground text-sm">BUILD</h4>
                </div>
                <p className="text-xs text-tyn-blue font-medium">Design → Build → Hypercare</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-sm text-muted-foreground">
              Engage end-to-end through AI CoE, or modularly via BUILD or BUY.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
