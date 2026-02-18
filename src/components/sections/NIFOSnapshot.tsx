import { Target, GitBranch, Cog, Shield, Rocket, Calendar } from 'lucide-react';

const features = [
  {
    icon: Target,
    title: 'Prioritization & ROI modeling',
  },
  {
    icon: GitBranch,
    title: 'Build-vs-Buy decisioning',
  },
  {
    icon: Cog,
    title: 'Workflow redesign & adoption',
  },
  {
    icon: Shield,
    title: 'Governance & guardrails',
  },
  {
    icon: Rocket,
    title: 'Pilot-to-scale playbooks',
  },
  {
    icon: Calendar,
    title: 'Program & rollout - end-to-end cadence & orchestration',
  },
];

export const NIFOSnapshot = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-main">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-6">
              NIFO Snapshot
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
              Our proprietary operating system for 'AI that actually ships'
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Frameworks + Playbooks + Tooling that remove friction across:
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="flex items-start gap-3 p-4 clip-card-default bg-card border border-border hover:border-accent/50 transition-colors group"
                >
                  <div className="icon-tyn flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center">
                    <feature.icon className="w-5 h-5" />
                  </div>
                  <span className="font-medium text-foreground text-sm">
                    {feature.title}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="bg-card rounded-2xl border border-border p-8 shadow-lg">
              <h3 className="text-xl font-display font-bold text-foreground mb-4">
                Why CXOs care:
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                NIFO bridges <span className="text-accent font-semibold">strategy</span> ↔{' '}
                <span className="text-accent font-semibold">engineering</span> ↔{' '}
                <span className="text-accent font-semibold">operations</span>, so programs don't stall after PoCs.
              </p>

              {/* Visual representation */}
              <div className="mt-8 flex items-center justify-center gap-4">
                <div className="w-24 h-24 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-display font-bold text-sm text-center">Strategy</span>
                </div>
                <div className="w-8 h-0.5 bg-accent" />
                <div className="w-24 h-24 rounded-full bg-accent flex items-center justify-center">
                  <span className="text-accent-foreground font-display font-bold text-sm text-center">Engineering</span>
                </div>
                <div className="w-8 h-0.5 bg-accent" />
                <div className="w-24 h-24 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-display font-bold text-sm text-center">Operations</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
