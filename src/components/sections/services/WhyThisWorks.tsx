import { Settings, Shield, Rocket, TrendingUp } from 'lucide-react';

const differentiators = [
  {
    icon: Settings,
    title: 'Tech-first, business owned',
    description:
      'AI solutions are engineered to be owned by business units — not IT projects disputed in innovation.',
  },
  {
    icon: Shield,
    title: 'Ecosystem-led, not tool biased',
    description:
      'We match tools and vendors to real needs and scale requirements, not just use the highest vendor commission.',
  },
  {
    icon: Rocket,
    title: 'Governance built in, not bolted on',
    description:
      'Risk, compliance, and ethical AI frameworks are embedded from day one — not afterthoughts that delay deployments.',
  },
  {
    icon: TrendingUp,
    title: 'Designed for scale, not demos',
    description:
      'We focus on production-grade, enterprise-ready architectures and workflows — not prototypes that never make it live.',
  },
];

export const WhyThisWorks = () => {
  return (
    <section className="section-padding hero-gradient relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-accent/5 to-transparent" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />

      <div className="container-main relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent text-sm font-semibold mb-6">
            BUILT ON PRINCIPLES
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary-foreground mb-6">
            Why this works
          </h2>
          <p className="text-lg text-primary-foreground/60">
            Built on principles that separate execution from experimentation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {differentiators.map((diff, idx) => (
            <div
              key={idx}
              className="relative bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-2xl p-8 hover:bg-primary-foreground/10 hover:border-accent/30 transition-all duration-300 group text-center"
            >
              <div className="w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center mb-6 mx-auto group-hover:bg-accent/30 transition-colors">
                <diff.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-base font-display font-bold text-primary-foreground mb-3">
                {diff.title}
              </h3>
              <p className="text-sm text-primary-foreground/60 leading-relaxed">
                {diff.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
