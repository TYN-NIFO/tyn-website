const capabilities = [
  'Peer-level conversations among senior leaders',
  'Cross-industry knowledge exchange',
  'Exposure to emerging technologies and real use cases',
  'Relationship building across the innovation ecosystem',
  'Dialogue that moves ideas toward real adoption',
];

export const WhatHappensAtYnfinity = () => {
  return (
    <section className="section-padding bg-background pattern-grid">
      <div className="container-main">
        <div className="max-w-3xl mb-16">

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            What happens at Ynfinity
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {capabilities.map((item, idx) => (
            <div
              key={idx}
              className="border-l-4 border-accent bg-accent/5 rounded-r-xl p-6 h-full flex items-center"
            >
              <p className="text-base font-display font-bold text-foreground">{item}</p>
            </div>
          ))}
        </div>

        <div className="relative overflow-hidden rounded-2xl hero-gradient p-10 md:p-14">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-accent/10 to-transparent" />
          <div className="relative z-10 max-w-3xl">
            <p className="text-xl md:text-2xl font-display font-bold text-primary-foreground leading-relaxed">
              The focus is not volume. It is{' '}
              <span className="text-accent">depth, relevance, and trust.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
