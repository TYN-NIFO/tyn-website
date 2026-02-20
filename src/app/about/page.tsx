'use client';

import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { OurIdeology } from '@/components/sections/about/OurIdeology';
import { OurPartners } from '@/components/sections/about/OurPartners';
import { OurTeam } from '@/components/sections/about/OurTeam';

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main className="pt-20">
                <OurIdeology />
                <OurPartners />
                <OurTeam />
            </main>
            <Footer />
        </div>
    );
}
