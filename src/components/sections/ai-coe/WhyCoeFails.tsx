import { AlertTriangle, Clock, FlaskConical, Unplug, ShieldAlert } from 'lucide-react';

const challenges = [
  { icon: AlertTriangle, text: 'Multiple AI ideas, but no clear prioritization' },
  { icon: Clock, text: 'Slow evaluation cycles and unclear ROI' },
  { icon: FlaskConical, text: 'Pilots that don\'t progress to production' },
  { icon: Unplug, text: 'Dependency friction between business, IT, data, and security' },
  { icon: ShieldAlert, text: 'No standard governance for risk, compliance, and rollout' },
];

export const WhyCoeFails = () => {
  return (
    <section id="why-coe-fails" className="section-padding bg-background pattern-grid">
      <div className="container-main">
        <div className="max-w-3xl mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-6 tracking-widest">
            THE CHALLENGE
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Why an AI CoE fails (and how we fix it)
          </h2>
          <p className="text-lg text-muted-foreground">
            Common leadership challenges:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {challenges.map((c, idx) => {
            const Icon = c.icon;
            return (
              <div
                key={idx}
                className="card-elevated rounded-2xl p-8 hover:-translate-y-0.5 transition-transform duration-300 group"
              >
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                  <Icon className="w-7 h-7 text-accent" />
                </div>
                <p className="text-base font-display font-semibold text-foreground leading-snug">
                  {c.text}
                </p>
              </div>
            );
          })}
        </div>

        <div className="rounded-2xl border-2 border-accent/30 bg-accent/5 p-10">
          <p className="text-lg text-foreground leading-relaxed">
            <span className="font-display font-bold text-accent">Our approach:</span>{' '}
            We enable a fractional, outcome-focused AI CoE that brings clarity, cadence, and execution discipline—without adding organizational overhead.
          </p>
        </div>
      </div>
    </section>
  );
};
