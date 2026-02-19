import { Users, Rocket, Shield, Settings } from 'lucide-react';

const differentiators = [
  { icon: Users, title: 'Fractional by design', description: 'Scale capability without permanent headcount' },
  { icon: Rocket, title: 'Outcome-first', description: 'Focused on movement, not frameworks' },
  { icon: Shield, title: 'Governance built-in', description: 'Not retrofitted after incidents' },
  { icon: Settings, title: 'Build + Buy aware', description: 'Supports both internal development and ecosystem solutions' },
];

export const WhatMakesDifferent = () => {
  return (
    <section className="section-padding hero-gradient relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-accent/5 to-transparent" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />

      <div className="container-main relative z-10">
        <div className="max-w-3xl mb-16">

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary-foreground">
            What makes this different
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {differentiators.map((d, idx) => (
            <div
              key={idx}
              className="bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-2xl p-8 hover:border-accent/30 hover:-translate-y-0.5 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center mb-6 group-hover:bg-accent/30 transition-colors">
                <d.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-lg font-display font-bold text-primary-foreground mb-2">
                {d.title}
              </h3>
              <p className="text-sm text-primary-foreground/60 leading-relaxed">
                {d.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
