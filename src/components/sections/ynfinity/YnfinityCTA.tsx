import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const YnfinityCTA = () => {
  const scrollToEvent = () => {
    document.getElementById('ynfinity-2024')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="section-padding bg-background">
      <div className="container-main">
        <div className="relative overflow-hidden rounded-3xl hero-gradient p-12 md:p-16 lg:p-20">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent/10 to-transparent" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary-foreground mb-6">
              Join the Ynfinity ecosystem
            </h2>
            <p className="text-lg text-primary-foreground/70 mb-10">
              Be part of a curated network shaping enterprise innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact?source_page=Ynfinity&cta=Join-Ynfinity">
                <Button className="btn-hero group">
                  Join Ynfinity
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <Button className="btn-outline-hero" onClick={scrollToEvent}>
                Explore Ynfinity events
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
