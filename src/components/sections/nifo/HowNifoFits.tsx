import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const nifoLogo = '/assets/nifo-logo.png';
const yzoneLogo = '/assets/yzone-logo.png';
const ynfinityLogo = '/assets/ynfinity-logo.png';
import { NifoInlineLogo } from './NifoInlineLogo';

const tynServices = [
  { label: 'BUILD', description: 'Production-grade AI systems' },
  { label: 'BUY', description: 'Ecosystem-led solution selection' },
  { label: 'AI COE', description: 'Enterprise AI operating model' },
];

export const HowNifoFits = () => {
  return (
    <section className="section-padding hero-gradient relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-accent/5 to-transparent" />

      <div className="container-main relative z-10">
        <div className="max-w-3xl mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent text-sm font-semibold mb-6 tracking-widest">
            ECOSYSTEM CONTINUITY
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary-foreground mb-4">
            How <NifoInlineLogo className="h-8 md:h-10 lg:h-12 mx-1" invert /> connects to TYN
          </h2>
          <p className="text-lg text-primary-foreground/60 leading-relaxed">
            <NifoInlineLogo className="h-5 mr-1" invert /> is the execution backbone within TYN's broader transformation ecosystem.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-6">
          {/* Left: Accelerators Group */}
          <div className="flex-shrink-0 w-full lg:w-auto border-2 border-primary-foreground/15 rounded-2xl p-8 bg-primary-foreground/5 backdrop-blur-sm">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-primary-foreground/50 mb-6 text-center">
              Accelerators
            </h4>
            <div className="flex flex-col items-center gap-4">
              <div className="relative rounded-2xl border-2 border-accent bg-accent/10 p-6 text-center min-w-[160px] shadow-glow animate-pulse-glow">
                <Image src={nifoLogo} alt="NiFo" width={140} height={56} className="h-14 w-auto object-contain mx-auto" />
                <p className="text-xs mt-2 text-primary-foreground/60">Execution Accelerator</p>
              </div>
              <div className="flex gap-4">
                <div className="rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 p-5 text-center min-w-[140px] hover:border-primary-foreground/30 transition-all duration-300">
                  <Image src={ynfinityLogo} alt="Ynfinity" width={120} height={48} className="h-12 w-auto object-contain mx-auto" />
                  <p className="text-xs mt-2 text-primary-foreground/40">Continuous Learning</p>
                </div>
                <div className="rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 p-5 text-center min-w-[140px] hover:border-primary-foreground/30 transition-all duration-300">
                  <Image src={yzoneLogo} alt="yZone" width={120} height={48} className="h-12 w-auto object-contain mx-auto" />
                  <p className="text-xs mt-2 text-primary-foreground/40">AI Talent Accelerator</p>
                </div>
              </div>
            </div>
          </div>

          {/* Arrow */}
          <div className="hidden lg:flex items-center flex-shrink-0">
            <div className="w-20 h-px bg-gradient-to-r from-accent to-transparent" />
            <ArrowRight className="w-7 h-7 text-accent -ml-1" />
          </div>
          <div className="lg:hidden">
            <ArrowRight className="w-7 h-7 text-accent rotate-90" />
          </div>

          {/* Right: TYN Services */}
          <div className="grid md:grid-cols-3 gap-4 flex-1 w-full">
            {tynServices.map((s) => (
              <div
                key={s.label}
                className="bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-2xl p-8 hover:border-accent/30 transition-all duration-300 text-center"
              >
                <h4 className="text-xl font-display font-bold text-accent mb-2">{s.label}</h4>
                <p className="text-sm text-primary-foreground/60">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
