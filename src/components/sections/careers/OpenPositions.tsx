import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { OpenPosition } from '@/lib/sanity/types';

const careersTeamImg = '/assets/careers-team.png';

interface OpenPositionsProps {
  positions: OpenPosition[];
}

export const OpenPositions = ({ positions }: OpenPositionsProps) => {
  return (
    <section className="bg-background pattern-grid section-padding">
      <div className="container-main">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Open Positions
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            This section is designed to dynamically list current openings.
          </p>
        </div>

        {positions.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {positions.map((position) => (
              <div
                key={position._id}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-md transition-shadow duration-300 flex flex-col"
              >
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {position.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {position.location} &nbsp;|&nbsp; {position.experience} &nbsp;|&nbsp; {position.employmentType}
                </p>
                {/* Description is PortableText, but for card we might want a snippet. 
                    Assuming description is array, we might not render it here directly or need a helper.
                    For now, I'll link to detail page. */}
                <div className="text-foreground/70 mb-6 flex-1 line-clamp-3">
                  {/* Simplified rendering of blocks if needed, or just static text if description is complex */}
                  Check details for more info.
                </div>
                <Link
                  href={`/careers/${position.slug.current}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-accent-foreground hover:text-accent transition-colors group mt-auto"
                >
                  View Details / Apply
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-muted/30 rounded-xl border border-border">
            <p className="text-lg text-muted-foreground">No open positions at the moment. Please check back later.</p>
          </div>
        )}
      </div>
    </section>
  );
};
