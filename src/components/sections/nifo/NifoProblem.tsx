import { NifoInlineLogo } from './NifoInlineLogo';

export const NifoProblem = () => {
  const scatteredNodes = [
    { top: 15, left: 8 }, { top: 45, left: 18 }, { top: 72, left: 5 },
    { top: 30, left: 32 }, { top: 60, left: 25 }, { top: 85, left: 35 },
    { top: 20, left: 42 }, { top: 50, left: 12 }, { top: 38, left: 40 },
  ];

  const alignedNodes = [
    { top: 20, left: 60 }, { top: 20, left: 75 }, { top: 20, left: 90 },
    { top: 50, left: 60 }, { top: 50, left: 75 }, { top: 50, left: 90 },
    { top: 80, left: 60 }, { top: 80, left: 75 }, { top: 80, left: 90 },
  ];

  return (
    <section id="nifo-problem" className="section-padding bg-background pattern-grid">
      <div className="container-main">


        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
              The challenge isn't AI capability — it's execution.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              <NifoInlineLogo className="h-6 w-auto mr-1" /> 2.0 brings structure, governance, and orchestration to AI initiatives so that
              value compounds instead of diffuses.
            </p>
          </div>

          {/* Visual: scattered → aligned */}
          <div className="rounded-2xl border border-border/50 bg-accent/5 overflow-hidden relative h-72 md:h-80">
            <div className="absolute top-[10%] bottom-[10%] left-1/2 w-px bg-border/30" />
            <span className="absolute top-3 left-4 text-[10px] uppercase tracking-widest text-muted-foreground/90">
              Fragmented
            </span>
            <span className="absolute top-3 right-4 text-[10px] uppercase tracking-widest text-accent/90">
              Orchestrated
            </span>

            {scatteredNodes.map((n, i) => (
              <div
                key={`s-${i}`}
                className="absolute w-2 h-2 rounded-full bg-muted-foreground/90"
                style={{ top: `${n.top}%`, left: `${n.left}%` }}
              />
            ))}

            {alignedNodes.map((n, i) => (
              <div
                key={`a-${i}`}
                className="absolute w-2.5 h-2.5 rounded-full bg-yellow-dark"
                style={{
                  top: `${n.top}%`,
                  left: `${n.left}%`,
                  animation: `fadeIn 2s ease-in-out ${i * 0.2}s infinite alternate`,
                }}
              />
            ))}

            {[20, 50, 80].map((top) => (
              <div
                key={`h-${top}`}
                className="absolute h-px bg-accent/40"
                style={{ top: `${top}%`, left: '60%', width: '30%' }}
              />
            ))}
            {[60, 75, 90].map((left) => (
              <div
                key={`v-${left}`}
                className="absolute w-px bg-accent/90"
                style={{ left: `${left}%`, top: '20%', height: '60%' }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
