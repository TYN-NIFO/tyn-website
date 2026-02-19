const beliefs = [
  'Clear prioritization tied to business value',
  'The right build vs buy decisions',
  'Execution-ready teams',
  'Governance that enables speed',
  'A scalable execution engine beyond pilots',
];

export const OurBelief = () => {
  return (
    <section className="section-padding hero-gradient relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-accent/5 to-transparent" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />

      <div className="container-main relative z-10">
        <div className="max-w-3xl mb-16">

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary-foreground mb-4">
            Our Belief
          </h2>
        </div>

        <div className="max-w-4xl mb-16">
          <p className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-primary-foreground leading-tight">
            AI does not fail because of models.{' '}
            <span className="text-gradient">It fails because enterprises lack a system to deploy it.</span>
          </p>
        </div>

        <div className="max-w-3xl">
          <p className="text-lg text-primary-foreground/70 mb-8">We believe enterprises need:</p>
          <div className="space-y-4">
            {beliefs.map((belief, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div className="w-1 h-8 rounded-full bg-accent flex-shrink-0 mt-0.5" />
                <p className="text-lg text-primary-foreground/90 leading-relaxed">{belief}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
