'use client';

import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { YnfinityHero } from '@/components/sections/ynfinity/YnfinityHero';
import { WhyYnfinityExists } from '@/components/sections/ynfinity/WhyYnfinityExists';
import { WhoComesToYnfinity } from '@/components/sections/ynfinity/WhoComesToYnfinity';
import { WhatHappensAtYnfinity } from '@/components/sections/ynfinity/WhatHappensAtYnfinity';
import { YnfinityEventHighlight } from '@/components/sections/ynfinity/YnfinityEventHighlight';
import { WhyThisMatters } from '@/components/sections/ynfinity/WhyThisMatters';
import { HowYnfinityFits } from '@/components/sections/ynfinity/HowYnfinityFits';
import { YnfinityCTA } from '@/components/sections/ynfinity/YnfinityCTA';

export default function YnfinityPage() {
    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main>
                <YnfinityHero />
                <WhyYnfinityExists />
                <WhoComesToYnfinity />
                <WhatHappensAtYnfinity />
                <YnfinityEventHighlight />
                <WhyThisMatters />
                <HowYnfinityFits />
                <YnfinityCTA />
            </main>
            <Footer />
        </div>
    );
}
