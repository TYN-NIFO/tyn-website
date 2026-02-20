'use client';

import { useEffect, useState } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Dot { top: string; left: string; animationDelay: string; animation: string; }
interface Line { top: string; left: string; width: string; transform: string; }


export const AiSolutionsHero = () => {
  const [dots, setDots] = useState<Dot[]>([]);
  const [lines, setLines] = useState<Line[]>([]);

  useEffect(() => {
    setDots(
      [...Array(30)].map(() => ({
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 3}s`,
        animation: `fadeIn 2s ease-in-out ${Math.random() * 2}s infinite alternate`,
      }))
    );
    setLines(
      [...Array(8)].map(() => ({
        top: `${20 + Math.random() * 60}%`,
        left: `${Math.random() * 30}%`,
        width: `${200 + Math.random() * 300}px`,
        transform: `rotate(${-20 + Math.random() * 40}deg)`,
      }))
    );
  }, []);

  const scrollToContent = () => {
    document.getElementById('solutions-grid')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden hero-gradient min-h-screen flex items-center">
      {/* Animated particle dots */}
      <div className="absolute inset-0 overflow-hidden">
        {dots.map((style, i) => (
          <div key={i} className="absolute w-1 h-1 rounded-full bg-accent/30" style={style} />
        ))}
        {lines.map((style, i) => (
          <div
            key={`line-${i}`}
            className="absolute h-px bg-gradient-to-r from-transparent via-accent/15 to-transparent"
            style={style}
          />
        ))}
      </div>

      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent/5 to-transparent" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[120px]" />
      <div className="absolute top-1/3 right-1/3 w-48 h-48 bg-accent/3 rounded-full blur-[80px]" />

      <div className="relative z-10 container-main py-24 md:py-32">
        <div className="max-w-3xl">


          <h1 className="text-fluid-h1 font-display font-bold text-primary-foreground mb-8 leading-[1.1] animate-fade-up delay-100">
            Solutions{' '}
            <span className="text-gradient">Portfolio</span>
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/80 mb-4 animate-fade-up delay-200 leading-relaxed">
            Production-ready AI accelerators built and deployed internally. Designed to integrate with enterprise data, workflows, and security controls — and fully customisable to your environment.
          </p>

          <p className="text-base md:text-lg text-primary-foreground/50 mb-6 animate-fade-up delay-300 leading-relaxed max-w-2xl">
            Start with a proven accelerator, or build something bespoke aligned to your priorities.
          </p>

          <div className="animate-fade-up delay-400 flex items-center gap-2 text-sm text-primary-foreground/60">
            Looking for a custom build?{' '}
            <a href="/services?tab=build" className="text-accent hover:text-accent/80 font-medium inline-flex items-center gap-1 transition-colors">
              Services → Build
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToContent}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-primary-foreground/40 hover:text-accent transition-colors cursor-pointer"
      >
        <ChevronDown className="w-6 h-6 animate-bounce" />
      </button>
    </section>
  );
};
