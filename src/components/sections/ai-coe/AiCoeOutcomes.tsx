import { Zap, TrendingDown, Eye, Handshake, Layers } from 'lucide-react';

const outcomes = [
  { icon: Zap, title: 'Faster decision-making on AI investments' },
  { icon: TrendingDown, title: 'Reduced pilot-to-production friction' },
  { icon: Eye, title: 'Clear visibility for leadership' },
  { icon: Handshake, title: 'Stronger trust between business and technology teams' },
  { icon: Layers, title: 'A sustainable foundation for scaling AI across functions' },
];

export const AiCoeOutcomes = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-main">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-6 tracking-widest">
            OUTCOMES
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground">
            Outcomes you can expect
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-6">
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
