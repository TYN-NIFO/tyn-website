import { TrendingUp } from 'lucide-react';

export const PortfolioGrowth = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container-main">
        <div className="flex items-center justify-center gap-4 text-center">
          <TrendingUp className="w-5 h-5 text-accent" />
          <div>
            <p className="text-lg font-display font-semibold text-foreground">
              Expanding portfolio… More solutions coming soon…
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              Our solution portfolio continues to evolve based on enterprise needs and ecosystem collaboration.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
