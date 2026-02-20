import { AlertTriangle, Layers, Volume2, Lock } from 'lucide-react';

const challenges = [
  {
    icon: AlertTriangle,
    title: 'AI is everywhere, but enterprise value isn\'t there yet.',
    description: 'Boards are pushing for AI, but credible roadmaps with outcomes are still hard.',
  },
  {
    icon: Layers,
    title: 'AI pilots seldom scale, impact remains fragmented, and outcomes lack governance.',
    description: 'Organizations struggle to move from experimentation to enterprise-wide transformation.',
  },
  {
    icon: Volume2,
    title: 'Too much noise, too little signal.',
    description: 'A flood of vendors and tools makes it hard to choose the right contextual path.',
  },
  {
    icon: Lock,
    title: 'Blockers to real adoption',
    description: 'Messy data, workflow friction, unclear decision rights, and human-only processes block real adoption.',
  },
];

export const PainPoints = () => {
  return (
    <section className="section-padding hero-gradient relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-accent/5 to-transparent" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />

      <div className="container-main relative z-10">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary-foreground mb-4">
            The Challenge
          </h2>
          <p className="text-lg text-primary-foreground/70">
            The obstacles enterprises face when operationalizing AI.
          </p>
        </div>
        <br /><br />
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {challenges.map((challenge) => (
            <div
              key={challenge.title}
              className="relative bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-2xl p-6 md:p-8 hover:bg-primary-foreground/10 transition-all duration-300 group"
            >
              <div className="flex flex-col sm:flex-row items-start gap-4 md:gap-6">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <challenge.icon className="w-6 h-6 md:w-7 md:h-7 text-accent" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-display font-semibold text-primary-foreground mb-2 md:mb-4">
                    {challenge.title}
                  </h3>
                  <p className="text-sm md:text-base text-primary-foreground/70">
                    {challenge.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
