import { Briefcase, Code, Network, BookOpen } from 'lucide-react';

const capabilities = [
  { icon: Briefcase, title: 'Business & Transformation Leadership', description: 'Deep business and transformation leadership' },
  { icon: Code, title: 'Technology & Product Engineering', description: 'Hands-on technology and product engineering' },
  { icon: Network, title: 'Curated Ecosystem', description: 'A curated startup and platform ecosystem' },
  { icon: BookOpen, title: 'Proven Delivery Playbooks', description: 'Proven delivery playbooks and operating models' },
];

export const HowWeEnable = () => {
  return (
    <section className="section-padding bg-background pattern-grid">
      <div className="container-main">
        <div className="max-w-3xl mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-6 tracking-widest">
            OUR APPROACH
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            How We Enable Enterprise AI
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">We combine:</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {capabilities.map((cap, idx) => (
            <div key={idx} className="card-elevated rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1">
              <div className="absolute top-0 left-0 w-full h-1 rounded-t-2xl bg-gradient-to-r from-accent to-accent/40" />
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                <cap.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-xl font-display font-bold text-foreground mb-3">{cap.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{cap.description}</p>
            </div>
          ))}
        </div>

        <div>
          <p className="text-xl md:text-2xl font-display font-bold text-foreground whitespace-nowrap">
            This allows us to move seamlessly from{' '}
            <span className="text-gradient">intent → execution → impact.</span>
          </p>
        </div>
      </div>
    </section>
  );
};
