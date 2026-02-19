import { ArrowRight } from 'lucide-react';

const signals = [
  { from: 'Noiseless information', to: 'Clear decisions' },
  { from: 'Frictionless orchestration', to: 'Visible execution' },
  { from: 'Complex environments', to: 'Structured delivery' },
  { from: 'Multiple stakeholders', to: 'Aligned outcomes' },
  { from: 'Pilots', to: 'Production-ready systems' },
  { from: 'AI', to: 'Embedded in real workflows' },
];

export const AcrossEngagements = () => {
  return (
    <section className="section-padding hero-gradient relative overflow-hidden">
      {/* Geometric accents */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent/5 to-transparent" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-[100px]" />

      <div className="relative z-10 container-main">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent text-sm font-semibold tracking-widest mb-6">
            OUR VALUES
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary-foreground">
            Across Engagements
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {signals.map((signal, index) => (
            <div
              key={index}
              className="bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-2xl p-6 flex items-center gap-4 transition-all duration-300 hover:bg-primary-foreground/10 hover:border-primary-foreground/20"
            >
              <div className="flex-1">
                <p className="text-primary-foreground font-bold text-base mb-1">{signal.from}</p>
                <div className="flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-accent flex-shrink-0" />
                  <p className="text-primary-foreground font-semibold text-sm">{signal.to}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
