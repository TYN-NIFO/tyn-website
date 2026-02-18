'use client';

import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { IndustriesHero } from '@/components/sections/industries/IndustriesHero';
import { IndustryGrid } from '@/components/sections/industries/IndustryGrid';
import { AcrossEngagements } from '@/components/sections/industries/AcrossEngagements';
import { IndustriesCTA } from '@/components/sections/industries/IndustriesCTA';

export default function IndustriesPage() {
    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main>
                <IndustriesHero />
                <IndustryGrid />
                <AcrossEngagements />
                <IndustriesCTA />
            </main>
            <Footer />
        </div>
    );
}
