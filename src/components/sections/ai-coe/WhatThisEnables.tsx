import { LayoutDashboard, Filter, Users, ShieldCheck, RefreshCw } from 'lucide-react';

const capabilities = [
  { icon: LayoutDashboard, text: 'A visible AI initiative portfolio' },
  { icon: Filter, text: 'Clear intake, prioritization, and stage-gates' },
  { icon: Users, text: 'Defined ownership across business and technology' },
  { icon: ShieldCheck, text: 'Governance for production readiness, risk, and compliance' },
  { icon: RefreshCw, text: 'A repeatable cadence for review, escalation, and decision-making' },
];

export const WhatThisEnables = () => {
  return (
    <section className="section-padding hero-gradient relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-accent/5 to-transparent" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />

      <div className="container-main relative z-10">
        <div className="max-w-3xl mb-16">

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary-foreground mb-4">
            A practical AI CoE operating model
          </h2>
          <p className="text-lg text-primary-foreground/60">
            A practical AI CoE operating model, including:
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {capabilities.map((cap, idx) => {
            const Icon = cap.icon;
            return (
              <div
                key={idx}
                className="relative bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-2xl p-8 hover:bg-primary-foreground/10 hover:border-accent/30 transition-all duration-300 group"
              >
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/30 transition-colors">
                    <Icon className="w-7 h-7 text-accent" />
                  </div>
                  <p className="text-base font-display font-bold text-primary-foreground">
                    {cap.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="max-w-3xl">
          <p className="text-lg text-primary-foreground/70 leading-relaxed font-semibold">
            This is not a slideware CoE—it is designed to support real programs already in motion.
          </p>
        </div>
      </div>
    </section>
  );
};
