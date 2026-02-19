import { NifoInlineLogo } from './NifoInlineLogo';

const bullets = [
  'Avoid tool sprawl',
  'Avoid vendor lock-in',
  'Avoid scaling experiments that were never designed for scale',
];

export const WhyItMatters = () => {
  return (
    <section className="section-padding hero-gradient relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-accent/5 to-transparent" />

      <div className="container-main relative z-10">

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary-foreground mb-6">
          Why it matters
        </h2>

        <p className="text-lg text-primary-foreground/70 mb-10 max-w-2xl leading-relaxed">
          <NifoInlineLogo className="h-5 mr-1" invert /> institutionalizes AI as an operating capability — not a consulting dependency.
        </p>

        <p className="text-base text-primary-foreground/60 mb-8">It allows enterprises to:</p>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {bullets.map((b) => (
            <div
              key={b}
              className="bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-2xl p-8 hover:border-accent/30 transition-all duration-300"
            >
              <p className="text-primary-foreground/80 font-medium">{b}</p>
            </div>
          ))}
        </div>

        <p className="text-lg text-primary-foreground/80 leading-relaxed max-w-2xl">
          Instead, AI becomes{' '}
          <span className="text-accent font-semibold">governed, integrated, and accountable.</span>
        </p>
      </div>
    </section>
  );
};
