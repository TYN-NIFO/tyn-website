import { AlertTriangle, Layers, Users, Zap } from 'lucide-react';

const challenges = [
  { icon: AlertTriangle, text: 'Too many vendors, not enough signal' },
  { icon: Layers, text: 'Pilots without ownership or scale paths' },
  { icon: Users, text: 'Business, IT, data, and security moving at different speeds' },
  { icon: Zap, text: 'Strong ideas, weak execution muscle' },
];

export const MarketGap = () => {
  return (
    <section className="section-padding bg-background pattern-grid">
      <div className="container-main">
        <div className="max-w-3xl mb-16">

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            The Gap We Saw in the Market
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            From large transformation programs to cutting-edge innovation initiatives, most enterprises faced the same challenges:
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {challenges.map((item, idx) => (
            <div key={idx} className="pain-card flex items-start gap-5">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                <item.icon className="w-6 h-6 text-accent" />
              </div>
              <p className="text-lg font-medium text-foreground leading-relaxed pt-2">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        <div className="relative overflow-hidden rounded-2xl hero-gradient p-10 md:p-14">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-accent/10 to-transparent" />
          <div className="relative z-10 max-w-3xl space-y-4">
            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed">
              Traditional consultancies focused on strategy. Vendors pushed tools. System integrators optimized delivery — but no one owned <span className="px-1 py-0.5 bg-accent/30 rounded-sm whitespace-nowrap">the end-to-end orchestration.</span>
            </p>
            <p className="text-xl md:text-2xl font-display font-bold text-primary-foreground">
              TYN was built to solve exactly that.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
