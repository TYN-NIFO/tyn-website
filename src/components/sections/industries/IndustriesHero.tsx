'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface Dot { top: string; left: string; animationDelay: string; animation: string; }

export const IndustriesHero = () => {
  const [dots] = useState<Dot[]>(() =>
    [...Array(40)].map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 3}s`,
      animation: `fadeIn 2s ease-in-out ${Math.random() * 2}s infinite alternate`,
    })),
  );

  const scrollToGrid = () => {
    document.getElementById('industry-grid')?.scrollIntoView({ behavior: 'smooth' });
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


          <h1 className="text-fluid-h1 font-display font-bold text-primary-foreground mb-8 leading-[1.1] animate-fade-up delay-100">
            Enabling Enterprise Innovation Adoption{' '}
            <span className="text-gradient">Across Industries</span>
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/70 mb-4 max-w-3xl animate-fade-up delay-200 leading-relaxed">
            Technology adoption varies by industry. Regulatory frameworks, legacy systems,
            operational scale, and stakeholder alignment define how tech solutions must be
            designed and deployed.
          </p>

          <p className="text-base md:text-lg text-primary-foreground mb-10 max-w-3xl animate-fade-up delay-300 leading-relaxed">
            We understand that and enable adoption of tech that fits the{' '}
            <span className="text-accent font-semibold">operating reality</span> of each sector.
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToGrid}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-primary-foreground/40 hover:text-accent transition-colors cursor-pointer"
      >
        <ChevronDown className="w-6 h-6 animate-bounce" />
      </button>
    </section>
  );
};
