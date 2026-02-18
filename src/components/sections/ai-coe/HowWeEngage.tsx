import { LayoutDashboard, Search, CheckSquare, GitBranch, BookOpen } from 'lucide-react';

const steps = [
  {
    icon: LayoutDashboard,
    number: '01',
    title: 'AI portfolio structuring & roadmap definition',
  },
  {
    icon: Search,
    number: '02',
    title: 'Opportunity discovery and use-case refinement',
  },
  {
    icon: CheckSquare,
    number: '03',
    title: 'Feasibility and production-readiness reviews',
  },
  {
    icon: GitBranch,
    number: '04',
    title: 'Dependency and stakeholder alignment',
  },
  {
    icon: BookOpen,
    number: '05',
    title: 'Playbooks for service introduction and stabilization',
  },
];

export const HowWeEngage = () => {
  return (
    <section className="section-padding bg-background pattern-grid">
      <div className="container-main">
        <div className="max-w-3xl mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-6 tracking-widest">
            HOW WE ENGAGE
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Fractional, flexible, and execution-led
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We provide a curated mix of leadership, engineering, and governance capability—aligned to enterprise demand—without forcing a fixed org design.
          </p>
          <p className="text-base text-muted-foreground mt-4">
            Typical enablement covers:
          </p>
        </div>

        <div className="relative">
          {/* Vertical connecting line */}
          <div className="absolute left-8 md:left-10 top-0 bottom-0 w-px bg-gradient-to-b from-accent/40 via-accent/20 to-accent/40 hidden md:block" />

          <div className="space-y-6">
            {steps.map((step, idx) => {
              const StepIcon = step.icon;
              return (
                <div key={idx} className="relative flex gap-6 md:gap-10 group">
                  {/* Node */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-primary border-2 border-accent/30 flex items-center justify-center group-hover:border-accent group-hover:shadow-[0_0_24px_-4px_hsl(48_100%_50%/0.4)] transition-all duration-300">
                      <StepIcon className="w-7 h-7 md:w-8 md:h-8 text-accent" />
                    </div>
                  </div>

                  {/* Content card */}
                  <div className="card-elevated rounded-2xl p-6 md:p-8 flex-1 hover:-translate-y-0.5 transition-transform duration-300">
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-display font-bold text-accent tracking-widest">
                        {step.number}
                      </span>
                      <h3 className="text-lg md:text-xl font-display font-bold text-foreground">
                        {step.title}
                      </h3>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
