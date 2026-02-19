const differentiators = [
  {
    title: 'Ecosystem-first',
    description: 'We don\'t just advise — we orchestrate across partners, platforms, and teams to create a unified operating system for AI.',
  },
  {
    title: 'Execution-led',
    description: 'Strategy without execution is noise. We are built for delivery — every engagement moves from intent to production.',
  },
  {
    title: 'Tech-first, business-owned',
    description: 'We bring deep technology capability but anchor every decision in business outcomes and enterprise reality.',
  },
  {
    title: 'Designed for scale',
    description: 'From pilot to platform, our frameworks, playbooks, and operating models are designed to scale across the enterprise.',
  },
];

const clientNeeds = [
  'AI programs beyond pilots',
  'Faster evaluation cycles',
  'Predictable execution',
  'A partner that owns outcomes',
];

export const WhatMakesDifferent = () => {
  return (
    <section className="section-padding bg-background pattern-grid">
      <div className="container-main">
        <div className="max-w-3xl mb-16">

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            What Makes TYN Different
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {differentiators.map((d, idx) => (
            <div
              key={idx}
              className="relative overflow-hidden rounded-2xl border-2 border-border bg-card p-8 hover:border-accent/30 transition-all duration-300 group"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-accent/40" />
              <h3 className="text-xl font-display font-bold text-foreground mb-3">
                {d.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">{d.description}</p>
            </div>
          ))}
        </div>

        {/* Our Role With Clients — merged */}
        <div className="mt-20">
          <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
            Our Role With Clients
          </h3>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Clients work with TYN when they want:
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {clientNeeds.map((need, idx) => (
              <div
                key={idx}
                className="bg-card border border-border rounded-xl p-6 flex items-start gap-4 hover:border-accent/30 transition-all duration-300 h-full"
              >
                <div className="w-2 h-8 rounded-full bg-accent flex-shrink-0 mt-0.5" />
                <p className="text-lg font-medium text-foreground leading-relaxed">{need}</p>
              </div>
            ))}
          </div>

          <p className="text-xl md:text-2xl font-display font-bold text-foreground leading-relaxed">
            We don't replace internal teams —{' '}
            <span className="text-gradient">we enable them.</span>
          </p>
        </div>
      </div>
    </section>
  );
};
