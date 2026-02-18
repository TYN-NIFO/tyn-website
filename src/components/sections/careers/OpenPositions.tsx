import { ArrowRight } from 'lucide-react';

const careersTeamImg = '/assets/careers-team.png';

const positions = [
  {
    title: 'AI Solutions Architect',
    location: 'Remote',
    experience: 'Senior',
    type: 'Full-Time',
    description: 'Lead the design and delivery of production-grade AI systems for enterprise clients across financial services, healthcare, and manufacturing.',
  },
  {
    title: 'Enterprise AI Engineer',
    location: 'Hybrid — US / India',
    experience: 'Mid-Senior',
    type: 'Full-Time',
    description: 'Build and deploy AI/ML pipelines, agentic systems, and intelligent workflows within complex enterprise environments.',
  },
  {
    title: 'AI Transformation Consultant',
    location: 'Remote',
    experience: 'Mid-Senior',
    type: 'Full-Time',
    description: 'Drive AI strategy, stakeholder alignment, and program orchestration for large-scale enterprise transformation initiatives.',
  },
];

export const OpenPositions = () => {
  return (
    <section className="bg-background pattern-grid section-padding">
      <div className="container-main">
        <div className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-accent/10 text-accent-foreground border border-accent/20 mb-4">
              Open Positions
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Open Positions
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl">
              This section is designed to dynamically list current openings.
            </p>
          </div>
          <img
            src={careersTeamImg}
            alt="Team collaboration illustration"
            className="hidden md:block w-40 lg:w-48 opacity-90"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {positions.map((position, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-6 hover:shadow-md transition-shadow duration-300 flex flex-col"
            >
              <h3 className="text-xl font-bold text-foreground mb-3">
                {position.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                {position.location} &nbsp;|&nbsp; {position.experience} &nbsp;|&nbsp; {position.type}
              </p>
              <p className="text-foreground/70 mb-6 flex-1">
                {position.description}
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-sm font-semibold text-accent-foreground hover:text-accent transition-colors group"
              >
                View Details / Apply
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
