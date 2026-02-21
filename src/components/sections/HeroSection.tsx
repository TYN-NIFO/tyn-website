import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const heroBg = '/assets/hero-bg.jpg';
const logo = '/assets/logo.png';
export const HeroSection = () => {
  return (
    <section
      className="relative min-h-[100dvh] min-h-screen flex items-center justify-center overflow-hidden safe-area-inset"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/70 to-primary/90" />

      {/* Geometric accents - smaller on mobile */}
      <div className="absolute top-12 right-4 w-32 h-32 md:top-20 md:right-10 md:w-64 md:h-64 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-12 left-4 w-48 h-48 md:bottom-20 md:left-10 md:w-96 md:h-96 bg-accent/5 rounded-full blur-3xl" />

      {/* Content - tighter padding on mobile; min-w-0 + max-w-full so text wraps and never overflows */}
      <div className="relative z-10 w-full min-w-0 container-main text-center pt-16 pb-20 px-4 sm:pt-20 sm:px-6">
        <div className="max-w-4xl max-w-full mx-auto min-w-0">
          {/* Logo in Hero */}
          <div className="mb-6 sm:mb-10 animate-fade-up" />

          {/* Main Headline - allow wrap on mobile to prevent truncation */}
          <h1 className="text-fluid-h1 font-display font-bold text-primary-foreground mb-4 sm:mb-6 animate-fade-up delay-100 leading-tight break-words">
            Turn AI ambition into{' '}
            <span className="sm:whitespace-nowrap">production grade outcomes</span>
          </h1>

          {/* Supporting Line */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-primary-foreground/80 mb-8 sm:mb-10 max-w-3xl mx-auto animate-fade-up delay-200 break-words">
            We help leaders cut through the AI noise, choose what actually matters, and implement systems that intelligently create real business lift.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up delay-300">
            <a href="/contact?source_page=Home&cta=Discuss-priorities">
              <Button className="btn-hero group text-base sm:text-lg px-6 py-3 sm:px-10 sm:py-4">
                Discuss priorities
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 rounded-full bg-accent" />
        </div>
      </div>
    </section>
  );
};