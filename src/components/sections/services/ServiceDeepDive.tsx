import { Target, CheckCircle, ArrowRight, LucideIcon } from 'lucide-react';

interface ServiceData {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  tagline: string;
  icon: LucideIcon;
  triggers: string[];
  whatWeDo: string[];
  howItShowsUp: string[];
  outcome: string;
}

interface ServiceTabsProps {
  services: ServiceData[];
  activeId: string;
  onTabChange: (id: string) => void;
}

export const ServiceTabPills = ({
  services,
  activeId,
  onTabChange,
}: {
  services: ServiceData[];
  activeId: string;
  onTabChange: (id: string) => void;
}) => (
  <div className="sticky top-20 z-30 bg-background/95 backdrop-blur-md border-b border-border/50">
    <div className="container-main py-4 flex flex-wrap gap-3 justify-center md:justify-start">
      {services.map((service) => {
        const isActive = activeId === service.id;
        return (
          <button
            key={service.id}
            onClick={() => onTabChange(service.id)}
            className={`px-8 py-3 rounded-lg text-base font-display font-semibold tracking-wide border-2 transition-all duration-300 ${isActive
                ? 'bg-accent text-accent-foreground border-accent shadow-glow'
                : 'bg-transparent text-foreground border-border hover:border-accent/50 hover:text-accent'
              }`}
          >
            {service.title}
          </button>
        );
      })}
    </div>
  </div>
);

export const ServiceContent = ({ services, activeId }: Omit<ServiceTabsProps, 'onTabChange'>) => {
  const active = services.find((s) => s.id === activeId) ?? services[0];
  const Icon = active.icon;

  return (
    <section id="services-tabs" className="section-padding bg-background pattern-grid">
      <div className="container-main">
        {/* Active service content */}
        <div className="animate-fade-in" key={active.id}>
          {/* Title + Description row */}
          <div className="grid lg:grid-cols-5 gap-12 mb-16">
            <div className="lg:col-span-3">
              <p className="text-sm font-semibold text-accent tracking-widest mb-3">
                {active.number}
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
                {active.title}{' '}
                <span className="text-muted-foreground font-normal text-2xl md:text-3xl">
                  : {active.subtitle}
                </span>
              </h2>
              <p className="text-lg text-muted-foreground italic">{active.tagline}</p>
            </div>
            <div className="lg:col-span-2 flex items-center justify-center">
              <div className="relative">
                <div className="w-32 h-32 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                  <Icon className="w-16 h-16 text-accent" />
                </div>
                <div className="absolute -inset-4 rounded-3xl border border-accent/10 -z-10" />
                <div className="absolute -inset-8 rounded-[2rem] border border-accent/5 -z-20" />
              </div>
            </div>
          </div>

          {/* CXO Triggers + How it shows up — two-column cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <ContentCard
              icon={Target}
              title="Typical CXO triggers"
              items={active.triggers}
              listStyle="dot"
            />
            <ContentCard
              icon={ArrowRight}
              title="How it shows up"
              items={active.howItShowsUp}
              listStyle="arrow"
            />
          </div>

          {/* What we do — Process Timeline */}
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-10">
              What we do :
            </h3>
            <ProcessTimeline steps={active.whatWeDo} />
          </div>

          {/* Outcome */}
          <div className="relative overflow-hidden rounded-2xl hero-gradient p-8 md:p-12">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-accent/10 to-transparent" />
            <div className="relative z-10">
              <h3 className="text-xl font-display font-bold text-accent mb-3">Outcomes</h3>
              <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed max-w-4xl">
                {active.outcome}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ---- Content Card ---- */

interface ContentCardProps {
  icon: LucideIcon;
  title: string;
  items: string[];
  listStyle: 'dot' | 'check' | 'arrow';
}

const ContentCard = ({ icon: CardIcon, title, items, listStyle }: ContentCardProps) => (
  <div className="card-elevated rounded-2xl p-8">
    <div className="flex items-center gap-3 mb-6">
      <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
        <CardIcon className="w-5 h-5 text-accent" />
      </div>
      <h4 className="text-lg font-display font-bold text-foreground">{title}</h4>
    </div>
    <ul className="space-y-4">
      {items.map((item, idx) => (
        <li key={idx} className="flex items-start gap-3 text-base text-muted-foreground">
          {listStyle === 'dot' && (
            <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
          )}
          {listStyle === 'check' && (
            <CheckCircle className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
          )}
          {listStyle === 'arrow' && (
            <ArrowRight className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
          )}
          {item}
        </li>
      ))}
    </ul>
  </div>
);

/* ---- Process Timeline ---- */

const ProcessTimeline = ({ steps }: { steps: string[] }) => (
  <div className="relative">
    {/* Connecting line */}
    <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-accent/40 via-accent/20 to-accent/40 z-0" />

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
      {steps.map((step, idx) => (
        <div key={idx} className="flex flex-col items-center text-center group">
          {/* Node */}
          <div className="w-16 h-16 rounded-xl bg-primary border-2 border-accent/30 flex items-center justify-center mb-4 group-hover:border-accent group-hover:shadow-glow transition-all duration-300">
            <span className="text-lg font-display font-bold text-accent">
              {String(idx + 1).padStart(2, '0')}
            </span>
          </div>
          {/* Step card */}
          <div className="card-elevated rounded-xl p-5 w-full hover:-translate-y-1 transition-transform duration-300">
            <p className="text-sm text-muted-foreground leading-relaxed">{step}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);
