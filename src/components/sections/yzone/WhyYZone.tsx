import { AlertTriangle, Presentation } from 'lucide-react';

const gaps = [
  {
    icon: AlertTriangle,
    title: 'The Talent Gap',
    description: 'Talent that understands AI but not enterprise reality',
  },
  {
    icon: Presentation,
    title: 'The Execution Gap',
    description: 'Innovation programs that stop at demos and decks',
  },
];

export const WhyYZone = () => {
  return (
    <section id="why-yzone" className="section-padding bg-background pattern-grid">
      <div className="container-main">
        <div className="max-w-3xl mb-16">

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Enterprises struggle with two gaps
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {gaps.map((gap, idx) => (
            <div
              key={idx}
              className="relative overflow-hidden rounded-2xl border-2 border-yellow-dark/20 bg-yellow-dark/5 p-10 group hover:border-yellow-dark/40 transition-all duration-300"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-dark/60 to-yellow-dark/20" />
              <div className="w-14 h-14 rounded-xl bg-yellow-dark/10 flex items-center justify-center mb-6">
                <gap.icon className="w-7 h-7 text-yellow-dark" />
              </div>
              <h3 className="text-xl font-display font-bold text-foreground mb-3">{gap.title}</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">{gap.description}</p>
            </div>
          ))}
        </div>

        <div className="relative overflow-hidden rounded-2xl hero-gradient p-10 md:p-14">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-accent/10 to-transparent" />
          <div className="relative z-10 max-w-3xl">
            <p className="text-xl md:text-2xl font-display font-bold text-primary-foreground leading-relaxed">
              yZone bridges both. We don't train in isolation —{' '}
              <span className="text-accent">we train through execution.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
