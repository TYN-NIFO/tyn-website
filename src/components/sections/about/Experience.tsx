const experienceAreas = [
  'Enterprise AI strategy and transformation at scale',
  'Large-scale technology and product delivery across regulated industries',
  'Building and operating innovation ecosystems and COEs',
  'Managing multi-vendor, multi-partner programs end-to-end',
  'Deep industry context across financial services, healthcare, manufacturing, and retail',
];

export const Experience = () => {
  return (
    <section className="section-padding hero-gradient relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-accent/5 to-transparent" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />

      <div className="container-main relative z-10">
        <div className="max-w-3xl mb-16">

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary-foreground mb-6">
            Experience That Shapes TYN
          </h2>
          <p className="text-lg text-primary-foreground/70 leading-relaxed">
            TYN's leadership brings decades of hands-on experience across enterprise transformation, technology delivery, and ecosystem building. This isn't theory — it's pattern recognition earned through execution.
          </p>
        </div>

        <div className="space-y-4 max-w-3xl">
          {experienceAreas.map((area, idx) => (
            <div
              key={idx}
              className="relative bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-xl p-6 hover:border-accent/30 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-1 h-8 rounded-full bg-accent flex-shrink-0 mt-0.5" />
                <p className="text-lg text-primary-foreground/90 leading-relaxed">{area}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
