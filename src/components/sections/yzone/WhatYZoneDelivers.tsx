import { Users, Zap, FlaskConical, Gauge } from 'lucide-react';

const capabilities = [
  {
    icon: Users,
    title: 'AI-Ready Talent Pool',
    description: 'A trained pool of AI-ready talent aligned to enterprise standards and delivery expectations.',
  },
  {
    icon: Zap,
    title: 'Sprint-Based Teams',
    description: 'Sprint-based, outcome-driven project teams ready to contribute from day one.',
  },
  {
    icon: FlaskConical,
    title: 'Structured Experimentation',
    description: 'Structured experimentation on real enterprise problems — not classroom exercises.',
  },
  {
    icon: Gauge,
    title: 'Faster Prototyping',
    description: 'Faster prototyping without overloading internal teams or existing delivery capacity.',
  },
];

export const WhatYZoneDelivers = () => {
  return (
    <section className="section-padding hero-gradient relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-accent/5 to-transparent" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />

      <div className="container-main relative z-10">
        <div className="max-w-3xl mb-16">

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary-foreground mb-4">
            Accelerated innovation capacity, on demand
          </h2>
          <p className="text-lg text-primary-foreground/60">
            Through yZone, enterprises get access to:
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((cap, idx) => (
            <div
              key={idx}
              className="relative bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-2xl p-8 hover:bg-primary-foreground/10 hover:border-accent/30 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center mb-6 group-hover:bg-accent/30 transition-colors">
                <cap.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-base font-display font-bold text-primary-foreground mb-3">
                {cap.title}
              </h3>
              <p className="text-sm text-primary-foreground/60 leading-relaxed">
                {cap.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
