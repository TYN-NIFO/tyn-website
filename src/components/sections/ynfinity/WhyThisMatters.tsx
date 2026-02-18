import { Eye, Lightbulb, Zap, Network } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface ValueItem {
  icon: LucideIcon;
  title: string;
}

const values: ValueItem[] = [
  { icon: Eye, title: 'Access to trusted peer perspectives' },
  { icon: Lightbulb, title: 'Early visibility into emerging solutions' },
  { icon: Zap, title: 'Faster alignment between innovation and adoption' },
  { icon: Network, title: 'Stronger connections across the ecosystem' },
];

export const WhyThisMatters = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-main">
        <div className="max-w-3xl mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-6 tracking-widest">
            WHY THIS MATTERS
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Why this matters
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {values.map((item, idx) => (
            <div
              key={idx}
              className="relative overflow-hidden rounded-2xl border border-border bg-card p-8 group hover:border-accent/30 transition-all duration-300"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent/60 to-accent/20" />
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                <item.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-lg font-display font-bold text-foreground">{item.title}</h3>
            </div>
          ))}
        </div>

        <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
          Ynfinity helps leaders stay ahead of the curve — together.
        </p>
      </div>
    </section>
  );
};
