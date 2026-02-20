'use client';

import { useEffect, useState } from 'react';

interface Dot { top: string; left: string; animation: string; }
interface Line { top: string; left: string; width: string; transform: string; }

export const WhyYnfinityExists = () => {
  const [dots, setDots] = useState<Dot[]>([]);
  const [lines, setLines] = useState<Line[]>([]);

  useEffect(() => {
    setDots(
      [...Array(20)].map(() => ({
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        animation: `fadeIn 2s ease-in-out ${Math.random() * 2}s infinite alternate`,
      }))
    );
    setLines(
      [...Array(6)].map(() => ({
        top: `${20 + Math.random() * 60}%`,
        left: `${Math.random() * 20}%`,
        width: `${150 + Math.random() * 200}px`,
        transform: `rotate(${-30 + Math.random() * 60}deg)`,
      }))
    );
  }, []);

  return (
    <section id="why-ynfinity" className="section-padding bg-background pattern-grid">
      <div className="container-main">


        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left: Statement block */}
          <div>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Innovation often slows down because the right stakeholders rarely meet in the same room.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Ynfinity exists to create the convergence point for
            </p>

            <div className="flex flex-wrap gap-3 mt-8">
              {['Policymakers', 'Academia', 'Enterprise Leaders', 'Startup Founders', 'Ecosystem Enablers'].map((role) => (
                <div
                  key={role}
                  className="card-elevated px-4 py-2.5 rounded-xl border border-border flex items-center gap-2 text-sm font-semibold text-foreground bg-card"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  {role}
                </div>
              ))}
            </div>
          </div>

          {/* Right: Abstract convergence visual */}
          <div className="rounded-2xl border border-border/50 bg-accent/5 overflow-hidden relative h-72 md:h-80">
            <div className="absolute inset-0">
              {dots.map((style, i) => (
                <div key={i} className="absolute w-1.5 h-1.5 rounded-full bg-accent/40" style={style} />
              ))}
              {lines.map((style, i) => (
                <div
                  key={`line-${i}`}
                  className="absolute h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent"
                  style={style}
                />
              ))}
              {/* Central convergence point */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center">
                <div className="w-6 h-6 rounded-full bg-accent/30" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
