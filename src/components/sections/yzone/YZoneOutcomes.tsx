import { Zap, Users, ShieldCheck, Search } from 'lucide-react';

const outcomes = [
  {
    icon: Zap,
    title: 'Faster idea-to-prototype cycles',
  },
  {
    icon: Users,
    title: 'Execution-ready AI talent',
  },
  {
    icon: ShieldCheck,
    title: 'Reduced innovation risk',
  },
  {
    icon: Search,
    title: 'Practical validation before enterprise scale-up',
  },
];

export const YZoneOutcomes = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-main">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-6 tracking-widest">
            OUTCOMES WE AIM
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground">
            Measurable impact, not just metrics
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {outcomes.map((o, idx) => (
            <div key={idx} className="metric-card text-center group">
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 mx-auto group-hover:bg-accent/20 transition-colors">
                <o.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-base font-display font-bold text-foreground leading-snug">
                {o.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
