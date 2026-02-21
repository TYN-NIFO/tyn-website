import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { EventHero } from '@/components/sections/ynfinity-events/EventHero';
import { EventIntro } from '@/components/sections/ynfinity-events/EventIntro';
import { EventCarousel } from '@/components/sections/ynfinity-events/EventCarousel';
import { EventHighlights } from '@/components/sections/ynfinity-events/EventHighlights';
import { EventSpeakers } from '@/components/sections/ynfinity-events/EventSpeakers';
import { EventMarquees } from '@/components/sections/ynfinity-events/EventMarquees';

export const metadata = {
    title: 'Ynfinity Events | Bold AI Insights',
    description: 'A curated gathering of enterprise leaders, innovators, and ecosystem stakeholders shaping the next wave of transformation.'
};

export default function YnfinityEventsPage() {
    return (
        <div className="min-h-screen bg-background flex flex-col overflow-x-hidden max-w-full">
            <Header />
            <main className="flex-1 w-full overflow-x-hidden">
                <EventHero />
                <EventIntro />
                <EventCarousel />
                <EventHighlights />
                <EventSpeakers />
                <EventMarquees />
            </main>
            <Footer />
        </div>
    );
}
