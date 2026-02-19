import { ArrowRight, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const nifoLogo = '/assets/nifo-logo.png';
import { NifoInlineLogo } from './NifoInlineLogo';

// Orchestration grid node positions (deterministic, architectural)
const gridNodes = (() => {
  const nodes: { top: number; left: number; delay: number }[] = [];
  const spacing = 80;
  const cols = 14;
  const rows = 8;
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if ((r + c) % 3 === 0 || (r * c) % 5 === 1) {
        nodes.push({
          top: (r * spacing) / (rows * spacing) * 100,
          left: (c * spacing) / (cols * spacing) * 100,
          delay: (r * 0.15 + c * 0.1) % 3,
        });
      }
    }
  }
  return nodes;
})();

export const NifoHero = () => {
  const scrollToContent = () => {
    document.getElementById('nifo-problem')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden hero-gradient min-h-screen flex items-center">
      {/* Orchestration Grid Background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(hsl(220 60% 80% / 0.06) 1px, transparent 1px),
            linear-gradient(90deg, hsl(220 60% 80% / 0.06) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Grid intersection nodes */}
      <div className="absolute inset-0 overflow-hidden">
        {gridNodes.map((node, i) => (
          <div
            key={i}
            className="absolute w-[3px] h-[3px] rounded-full bg-primary-foreground/20"
            style={{
              top: `${node.top}%`,
              left: `${node.left}%`,
              animation: `fadeIn 2s ease-in-out ${node.delay}s infinite alternate`,
            }}
          />
        ))}
      </div>

      {/* Geometric accents (muted) */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent/3 to-transparent" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent/3 rounded-full blur-[120px]" />
      <div className="absolute top-1/3 right-1/3 w-48 h-48 bg-accent/2 rounded-full blur-[80px]" />

      <div className="relative z-10 container-main py-24 md:py-32">
        <div className="max-w-3xl">


          <div className="mb-6 animate-fade-up delay-100">
            <img src={nifoLogo} alt="NiFo" className="h-16 md:h-20 lg:h-24 brightness-0 invert" />
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-bold text-primary-foreground mb-8 leading-[1.1] animate-fade-up delay-100">
            The Accelerator Behind{' '}
            <span className="text-gradient">Execution</span>
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/80 mb-4 animate-fade-up delay-200 leading-relaxed">
            Most enterprises don't fail because of a lack of AI tools. They fail because execution
            fragments across pilots, vendors, teams, and "innovation" initiatives that never ship.
          </p>

          <p className="text-base md:text-lg text-primary-foreground/50 mb-10 animate-fade-up delay-300 leading-relaxed max-w-2xl">
            <NifoInlineLogo className="h-5 md:h-6 mr-1" invert /> 2.0 is TYN's execution accelerator. It is not a product we sell. It is the
            framework and engineering backbone we use to move enterprises from intent to
            production — without noise.
          </p>

          <div className="animate-fade-up delay-400">
            <Button className="btn-hero group" onClick={scrollToContent}>
              Explore <NifoInlineLogo className="h-4 mx-1" />
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
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
