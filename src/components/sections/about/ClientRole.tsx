const clientNeeds = [
  'AI programs beyond pilots',
  'Faster evaluation cycles',
  'Predictable execution',
  'A partner that owns outcomes',
];

export const ClientRole = () => {
  return (
    <section className="section-padding hero-gradient relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-accent/5 to-transparent" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />

      <div className="container-main relative z-10">
        <div className="max-w-3xl mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent text-sm font-semibold mb-6 tracking-widest">
            OUR ROLE
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary-foreground mb-6">
            Our Role With Clients
          </h2>
          <p className="text-lg text-primary-foreground/70 leading-relaxed">
            Clients work with TYN when they want:
          </p>
        </div>

        <div className="space-y-4 max-w-full mb-16">
          {clientNeeds.map((need, idx) => (
            <div
              key={idx}
              className="relative bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-xl p-6 hover:border-accent/30 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-1 h-8 rounded-full bg-accent flex-shrink-0 mt-0.5" />
                <p className="text-lg text-primary-foreground/90 leading-relaxed">{need}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-3xl">
          <p className="text-xl md:text-2xl font-display font-bold text-primary-foreground leading-relaxed">
            We don't replace internal teams —{' '}
            <span className="text-accent">we enable them.</span>
          </p>
        </div>
      </div>
    </section>
  );
};
