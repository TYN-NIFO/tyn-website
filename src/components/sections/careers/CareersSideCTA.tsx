import { ArrowRight, Briefcase, Send } from 'lucide-react';

export const CareersSideCTA = () => {
  return (
    <>
      {/* Desktop: Sticky side CTA — vertical, right edge */}
      <div className="hidden lg:block fixed right-0 top-1/2 -translate-y-1/2 z-40">
        <div className="flex flex-col items-stretch bg-card border border-border border-r-0 shadow-lg rounded-l-xl overflow-hidden">
          {/* Explore open roles */}
          <a
            href="#open-positions"
            className="group flex flex-col items-center gap-2 px-4 py-5 hover:bg-accent/10 transition-colors border-b border-border"
          >
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
              <Briefcase className="w-5 h-5 text-primary" />
            </div>
            <span className="text-xs font-semibold text-foreground writing-vertical whitespace-nowrap [writing-mode:vertical-lr] rotate-180">
              Explore Roles
            </span>
            <ArrowRight className="w-3.5 h-3.5 text-muted-foreground -rotate-90 group-hover:text-accent-foreground transition-colors" />
          </a>

          {/* Submit profile */}
          <a
            href="#submit-profile"
            className="group flex flex-col items-center gap-2 px-4 py-5 hover:bg-accent/10 transition-colors"
          >
            <div className="w-10 h-10 rounded-lg bg-accent/15 flex items-center justify-center group-hover:bg-accent/25 transition-colors">
              <Send className="w-5 h-5 text-accent-foreground" />
            </div>
            <span className="text-xs font-semibold text-foreground [writing-mode:vertical-lr] rotate-180 whitespace-nowrap">
              Submit Profile
            </span>
            <ArrowRight className="w-3.5 h-3.5 text-muted-foreground -rotate-90 group-hover:text-accent-foreground transition-colors" />
          </a>
        </div>
      </div>

      {/* Mobile: Bottom sticky CTA */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-card border-t border-border px-4 py-3 flex items-center justify-around gap-3">
        <a
          href="#open-positions"
          className="flex items-center gap-2 text-sm font-semibold text-foreground hover:text-accent-foreground transition-colors"
        >
          <Briefcase className="w-4 h-4" />
          Explore open roles
        </a>
        <div className="w-px h-6 bg-border" />
        <a
          href="#submit-profile"
          className="flex items-center gap-2 text-sm font-semibold text-accent-foreground hover:underline transition-colors"
        >
          <Send className="w-4 h-4" />
          Submit profile
        </a>
      </div>
    </>
  );
};
