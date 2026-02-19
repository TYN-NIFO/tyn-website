import { ArrowRight, Wrench } from 'lucide-react';

export const CustomBuild = () => {
  return (
    <section className="section-padding bg-background pattern-grid">
      <div className="container-main">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-accent/10 mb-6">
            <Wrench className="w-7 h-7 text-accent" />
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
            Need a Custom AI System?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            These accelerators provide a fast starting point. If your requirement is unique, we design and build tailored AI systems aligned to your enterprise architecture and security framework.
          </p>
          <a
            href="/services?tab=build"
            className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all duration-200"
          >
            Explore our Build capabilities
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};
