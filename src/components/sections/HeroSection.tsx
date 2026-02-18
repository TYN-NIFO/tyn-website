import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const heroBg = '/assets/hero-bg.jpg';
const logo = '/assets/logo.png';
export const HeroSection = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{
    backgroundImage: `url(${heroBg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }}>
    {/* Overlay */}
    <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/70 to-primary/90" />

    {/* Geometric accents */}
    <div className="absolute top-20 right-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
    <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

    {/* Content */}
    <div className="relative z-10 container-main text-center pt-20">
      <div className="max-w-4xl mx-auto">
        {/* Logo in Hero */}
        <div className="mb-10 animate-fade-up">

        </div>

        {/* Main Headline */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground mb-6 animate-fade-up delay-100">
          Turn AI ambition into production-grade outcomes{' '}
          <span className="text-gradient"></span>
        </h1>

        {/* Supporting Line */}
        <p className="text-lg md:text-xl lg:text-2xl text-primary-foreground/80 mb-10 max-w-3xl mx-auto animate-fade-up delay-200">
          We help leaders cut through the vendor/LLM noise, choose what actually matters, and implement systems that intelligently create real business lift.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up delay-300">
          <a href="/contact?source_page=Home&cta=Discuss-priorities">
            <Button className="btn-hero group">
              Discuss priorities
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </a>
          <a href="/contact?source_page=Home&cta=Not-just-use-cases">
            <Button className="btn-outline-hero">
              not just use cases
            </Button>
          </a>
        </div>
      </div>
    </div>

    {/* Scroll indicator */}
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
      <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center p-2">
        <div className="w-1.5 h-3 rounded-full bg-accent" />
      </div>
    </div>
  </section>;
};