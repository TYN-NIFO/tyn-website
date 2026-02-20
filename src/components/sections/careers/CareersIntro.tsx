import { Target, Globe, Users, Shield, TrendingUp } from 'lucide-react';

const careersCollabImg = '/assets/careers-collab.png';

const valueProps = [
  { icon: Target, label: 'Outcome-oriented culture', description: 'We care about delivering value, not just activity.' },
  { icon: Globe, label: 'Enterprise exposure', description: 'Work on AI transformation programs across industries.' },
  { icon: Users, label: 'Collaborative ecosystem mindset', description: 'Engage with startups, platforms, and enterprise teams.' },
  { icon: Shield, label: 'Ownership with support', description: 'Small teams, meaningful responsibility, strong mentorship.' },
  { icon: TrendingUp, label: 'Continuous learning', description: 'Exposure to strategy, AI engineering, governance, and deployment within real-world contexts.' },
];

export const CareersIntro = () => {
  return (
    <section className="bg-background min-h-screen flex items-center pt-32 md:pt-40 pb-20 md:pb-28">
      <div className="container-main">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-4">
            Careers
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Build Meaningful Enterprise Solutions
          </p>

          <div className="text-lg md:text-xl leading-relaxed text-foreground/80">
            <p>
              At TYN, we work on real enterprise challenges that matter.
              Our teams bring together elements of consulting, product thinking, deep engineering, and stakeholder orchestration — creating a space where diverse skills come together to create measurable enterprise impact.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {valueProps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-md hover:border-accent/30 transition-all duration-300 group"
              >
                <div className="icon-tyn w-10 h-10 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-foreground text-base mb-1">{item.label}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
