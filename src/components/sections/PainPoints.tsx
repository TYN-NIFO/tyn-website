import { Volume2, Lock } from 'lucide-react';

export const PainPoints = () => {
  return (
    <section className="section-padding hero-gradient relative overflow-hidden">
      {/* Geometric accents */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-accent/5 to-transparent" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />

      <div className="container-main relative z-10">
        {/* Section Header */}
        <div className="max-w-4xl mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent text-sm font-semibold mb-6">
            The Challenge
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary-foreground mb-6">
            AI pilots seldom scale, impact remains fragmented, and outcomes lack governance.
          </h2>
        </div>

        {/* Pain Point Cards */}
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="relative bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-2xl p-8 hover:bg-primary-foreground/10 transition-all duration-300 group">
            <div className="flex items-start gap-6">
              <div className="w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center flex-shrink-0">
                <Volume2 className="w-7 h-7 text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-display font-semibold text-primary-foreground mb-4">
                  Too much noise, too little signal.
                </h3>
                <p className="text-primary-foreground/70">
                  A flood of vendors and tools makes it hard to choose the right contextual path.
                </p>
              </div>
            </div>
          </div>

          <div className="relative bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-2xl p-8 hover:bg-primary-foreground/10 transition-all duration-300 group">
            <div className="flex items-start gap-6">
              <div className="w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center flex-shrink-0">
                <Lock className="w-7 h-7 text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-display font-semibold text-primary-foreground mb-4">
                  Blockers to real adoption
                </h3>
                <p className="text-primary-foreground/70">
                  Messy data, workflow friction, unclear decision rights, and human-only processes block real adoption.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
