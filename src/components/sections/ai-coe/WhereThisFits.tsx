import { ArrowRight, Zap, Target, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const fitItems = [
  {
    icon: Zap,
    label: 'Quick-win programs',
    description: 'High-impact, low-friction initiatives that demonstrate AI value within weeks',
  },
  {
    icon: Target,
    label: 'Strategic AI bets',
    description: 'Complex, high-stakes programs requiring structured governance and cross-functional alignment',
  },
  {
    icon: TrendingUp,
    label: 'Long-term capability building',
    description: 'Sustainable investment in AI skills, processes, and institutional readiness',
  },
];

export const WhereThisFits = () => {
  return (
    <section className="section-padding hero-gradient relative overflow-hidden">
      {/* Geometric overlays */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-accent/5 to-transparent" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute top-0 right-1/4 w-32 h-32 bg-accent/10 rounded-full blur-2xl" />

      <div className="container-main relative z-10">
        {/* Where This Fits */}
        <div className="max-w-3xl mb-12">

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary-foreground mb-6">
            Where this fits
          </h2>
          <p className="text-lg text-primary-foreground/60 leading-relaxed">
            It is typically run alongside live AI initiatives and becomes the backbone for:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {fitItems.map((item, idx) => (
            <div
              key={idx}
              className="bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-2xl p-8 hover:border-accent/30 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mb-5">
                <item.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-display font-bold text-primary-foreground mb-3">
                {item.label}
              </h3>
              <p className="text-primary-foreground/50 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="border-t border-primary-foreground/10 pt-20">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary-foreground mb-6">
              Explore AI CoE enablement
            </h2>
            <p className="text-lg text-primary-foreground/60 mb-10">
              Build a sustainable operating model for AI — not just another pilot.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact?source_page=AI-CoE&cta=Explore-AI-CoE">
                <Button className="btn-hero group">
                  Explore AI CoE enablement
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <a href="/contact?source_page=AI-CoE&cta=Share-priorities">
                <Button className="btn-outline-hero">Share priorities</Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
