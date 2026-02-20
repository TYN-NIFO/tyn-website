import { Linkedin } from 'lucide-react';

const founders = [
  {
    initials: 'AB',
    name: 'Founder Name',
    title: 'Co-Founder & CEO',
    credential: '20+ years in enterprise AI transformation and ecosystem building',
  },
  {
    initials: 'CD',
    name: 'Founder Name',
    title: 'Co-Founder & CTO',
    credential: '20+ years in technology delivery and product engineering at scale',
  },
];

export const Founders = () => {
  return (
    <section className="section-padding bg-background pattern-grid">
      <div className="container-main">
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Our Founders
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            TYN was founded by experienced enterprise leaders who have spent decades building, scaling, and transforming technology-driven businesses across global markets.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
          {founders.map((founder, idx) => (
            <div key={idx} className="card-elevated rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-accent/40" />
              <div className="w-20 h-20 rounded-full bg-accent/10 border-2 border-accent/30 flex items-center justify-center mb-6">
                <span className="text-2xl font-display font-bold text-accent">{founder.initials}</span>
              </div>
              <h3 className="text-xl font-display font-bold text-foreground mb-1">{founder.name}</h3>
              <p className="text-accent font-medium mb-3">{founder.title}</p>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">{founder.credential}</p>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
