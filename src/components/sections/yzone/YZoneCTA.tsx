import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const YZoneCTA = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-main">
        <div className="relative overflow-hidden rounded-3xl hero-gradient p-12 md:p-16 lg:p-20">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent/10 to-transparent" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary-foreground mb-6">
              Build execution-ready AI capacity with yZone
            </h2>
            <p className="text-lg text-primary-foreground/70 mb-10">
              Turn talent into teams. Turn ideas into prototypes. Turn intent into execution.
            </p>
            <a href="/contact?source_page=yZone&cta=Explore-yZone">
              <Button className="btn-hero group">
                Explore yZone partnerships
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
