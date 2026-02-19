import { Building2, Rocket, Landmark, GraduationCap, Users } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface AudienceItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

const audiences: AudienceItem[] = [
  { icon: Building2, title: 'Enterprise Decision-Makers', description: 'Fortune 500 CXOs and enterprise decision-makers' },
  { icon: Rocket, title: 'Technology Pioneers', description: 'Innovative startups and technology pioneers' },
  { icon: Landmark, title: 'Policy & Government', description: 'Policy makers and government bodies' },
  { icon: GraduationCap, title: 'Academia & Research', description: 'Academic and research institutions' },
  { icon: Users, title: 'Ecosystem Leaders', description: 'Internal ecosystem leaders driving transformation' },
];

export const WhoComesToYnfinity = () => {
  return (
    <section className="section-padding hero-gradient relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-accent/5 to-transparent" />

      <div className="container-main relative z-10">
        <div className="max-w-3xl mb-16">

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary-foreground mb-4">
            Who comes to Ynfinity
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {audiences.map((item, idx) => (
            <div
              key={idx}
              className="bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-2xl p-8 hover:border-accent/30 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center mb-6 group-hover:bg-accent/30 transition-colors">
                <item.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-lg font-display font-bold text-primary-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-primary-foreground/60 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        <p className="text-lg text-primary-foreground/70 max-w-3xl leading-relaxed">
          This mix creates a rare environment where strategy, technology, regulation, and innovation intersect.
        </p>
      </div>
    </section>
  );
};
