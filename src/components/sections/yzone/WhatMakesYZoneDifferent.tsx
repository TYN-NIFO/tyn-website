const differentiators = [
  { not: 'Classroom-first', but: 'Execution-first' },
  { not: 'Simulated problems', but: 'Real enterprise problems' },
  { not: 'Loose coordination', but: 'Sprint governance and delivery discipline' },
  { not: 'Isolated training', but: "Direct linkage to TYN's enterprise ecosystem" },
];

export const WhatMakesYZoneDifferent = () => {
  return (
    <section className="section-padding hero-gradient relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-accent/5 to-transparent" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />

      <div className="container-main relative z-10">
        <div className="max-w-3xl mb-16">

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary-foreground mb-4">
            Not another training program
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {differentiators.map((d, idx) => (
            <div
              key={idx}
              className="relative bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-2xl p-8 hover:border-accent/30 transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                <div className="flex-1">
                  <p className="text-base text-primary-foreground/40 line-through mb-2">
                    Not {d.not}
                  </p>
                  <p className="text-xl font-display font-bold text-accent">
                    → {d.but}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-3xl">
          <p className="text-lg text-primary-foreground/70 leading-relaxed">
            yZone acts as an{' '}
            <span className="text-primary-foreground font-semibold">extended innovation bench</span>{' '}
            — allowing enterprises to experiment, validate, and build faster.
          </p>
        </div>
      </div>
    </section>
  );
};
