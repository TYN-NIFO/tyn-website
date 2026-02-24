'use client';

import { ArrowRight, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Dot { top: string; left: string; animationDelay: string; animation: string; }

// Simple seeded PRNG (mulberry32) — deterministic across server & client
function seededRandom(seed: number) {
  return () => {
    seed |= 0; seed = seed + 0x6D2B79F5 | 0;
    let t = Math.imul(seed ^ seed >>> 15, 1 | seed);
    t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}

const dots: Dot[] = (() => {
  const rand = seededRandom(42);
  return [...Array(40)].map(() => ({
    top: `${rand() * 100}%`,
    left: `${rand() * 100}%`,
    animationDelay: `${rand() * 3}s`,
    animation: `fadeIn 2s ease-in-out ${rand() * 2}s infinite alternate`,
  }));
})();

export const ServicesHero = () => {

  const scrollToServices = () => {
    document.getElementById('services-tabs')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden hero-gradient min-h-screen flex items-center">
      {/* Animated particle dots */}
      <div className="absolute inset-0 overflow-hidden">
        {dots.map((style, i) => (
          <div key={i} className="absolute w-1 h-1 rounded-full bg-accent/30" style={style} />
        ))}
      </div>

      {/* Geometric accents */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent/5 to-transparent" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[120px]" />
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-accent/3 rounded-full blur-[80px]" />

      <div className="relative z-10 container-main py-24 md:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-primary-foreground mb-8 leading-[1.1] animate-fade-up text-left">
            AI services designed to move from{' '}
            <span className="text-gradient">intent → execution → measurable outcomes</span>
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/70 mb-4 max-w-3xl animate-fade-up delay-200 leading-relaxed text-left">
            Most enterprises fail at AI execution not because they lack vision or budget, but
            because they face organizational resistance, unclear priorities, and tool sprawl.
          </p>

          <p className="text-base md:text-lg text-primary-foreground/50 mb-10 max-w-3xl animate-fade-up delay-300 leading-relaxed text-left">
            Our services remove these blockers — turning strategic intent into production
            systems, governed workflows, and board-level ROI.
          </p>

          <div className="animate-fade-up delay-400">
            <Button className="btn-hero group" onClick={scrollToServices}>
              Explore our Services
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToServices}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-primary-foreground/40 hover:text-accent transition-colors cursor-pointer"
      >
        <ChevronDown className="w-6 h-6 animate-bounce" />
      </button>
    </section>
  );
};
