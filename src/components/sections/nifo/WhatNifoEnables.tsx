const items = [
  { num: '01', title: 'Structured problem definition', desc: 'Not vague ambition' },
  { num: '02', title: 'Architecture-first vendor and tool selection', desc: '' },
  { num: '03', title: 'Production-grade AI system design', desc: '' },
  { num: '04', title: 'Supervised AI agents that execute workflows', desc: 'Not demos' },
  { num: '05', title: 'Measurable ROI within one quarter', desc: '' },
];

import { NifoInlineLogo } from './NifoInlineLogo';

export const WhatNifoEnables = () => {
  return (
    <section className="section-padding hero-gradient relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-accent/5 to-transparent" />

      <div className="container-main relative z-10">
        <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent text-sm font-semibold mb-6 tracking-widest">
          WHAT NIFO ENABLES
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary-foreground mb-12">
          What <NifoInlineLogo className="h-8 md:h-10 lg:h-12 mx-1" invert /> enables
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {items.map((item) => (
            <div
              key={item.num}
              className="bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-2xl p-8 hover:border-accent/30 transition-all duration-300"
            >
              <span className="text-accent font-display font-bold text-sm mb-4 block tracking-widest">
                {item.num}
              </span>
              <h3 className="text-lg font-display font-semibold text-primary-foreground mb-2">
                {item.title}
              </h3>
              {item.desc && (
                <p className="text-sm text-primary-foreground/50">{item.desc}</p>
              )}
            </div>
          ))}
        </div>

        <div className="rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5 backdrop-blur-sm p-10 max-w-3xl">
          <p className="text-lg text-primary-foreground/80 leading-relaxed">
            It removes friction between strategy, technology, and operations.
          </p>
          <p className="text-lg text-primary-foreground/60 mt-3">
            No hype. No disconnected experiments. No "pilot purgatory."
          </p>
        </div>
      </div>
    </section>
  );
};
