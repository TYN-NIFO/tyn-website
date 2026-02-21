import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const YnfinityEventHighlight = () => {
  return (
    <section id="ynfinity-2024" className="section-padding hero-gradient relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-accent/5 to-transparent" />

      <div className="container-main relative z-10">
        <div className="max-w-3xl mb-12">

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary-foreground mb-4">
            Ynfinity 2024
          </h2>
        </div>

        <div className="max-w-2xl bg-primary-foreground/5 backdrop-blur-sm border-2 border-accent/30 rounded-2xl p-10 md:p-14 hover:-translate-y-1 transition-transform duration-300">
          <span className="inline-block px-3 py-1 rounded-full bg-accent/20 text-accent text-xs font-semibold mb-6 tracking-widest">
            2024
          </span>
          <p className="text-lg text-primary-foreground/80 leading-relaxed mb-8">
            A curated gathering of enterprise leaders, innovators, and ecosystem stakeholders shaping the next wave of transformation.
          </p>
          <Button asChild className="btn-hero group">
            <Link href="/ynfinity-events">
              Explore the event
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
