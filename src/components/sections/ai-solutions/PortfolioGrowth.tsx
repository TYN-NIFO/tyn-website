import { TrendingUp } from 'lucide-react';

export const PortfolioGrowth = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container-main">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="inline-flex items-center justify-center gap-3">
            <TrendingUp className="w-6 h-6 text-accent flex-shrink-0" />
            <p className="text-lg font-display font-semibold text-foreground">
              We are Expanding our portfolio… More solutions are coming soon…
            </p>
          </div>
          <p className="text-sm text-muted-foreground mt-2">
            Our solution portfolio continues to evolve based on enterprise needs and ecosystem collaboration.
          </p>
        </div>
      </div>
    </section>
  );
};
