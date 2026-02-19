import { Building2, GraduationCap, FlaskConical } from 'lucide-react';

const audiences = [
  {
    icon: Building2,
    title: 'Enterprises',
    description: 'Looking to accelerate innovation without scaling internal teams.',
  },
  {
    icon: GraduationCap,
    title: 'Institutions & Partners',
    description: 'Building industry-ready AI talent with real-world applicability.',
  },
  {
    icon: FlaskConical,
    title: 'Innovation Programs',
    description: 'Requiring rapid prototyping and solution exploration at enterprise scale.',
  },
];

export const WhoYZoneIsFor = () => {
  return (
    <section className="section-padding bg-background pattern-grid">
      <div className="container-main">
        <div className="max-w-3xl mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-6 tracking-widest">
            WHO YZONE IS FOR
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground">
            Built for strategic leaders
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {audiences.map((a, idx) => (
            <div
              key={idx}
              className="card-elevated rounded-2xl p-8 hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="icon-tyn w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-300">
                <a.icon className="w-7 h-7 transition-colors" />
              </div>
              <h3 className="text-xl font-display font-bold text-foreground mb-3">{a.title}</h3>
              <p className="text-base text-muted-foreground leading-relaxed">{a.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
