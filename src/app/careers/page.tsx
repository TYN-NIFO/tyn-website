'use client';

import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { CareersIntro } from '@/components/sections/careers/CareersIntro';
import { OpenPositions } from '@/components/sections/careers/OpenPositions';
import { NoRoleFit } from '@/components/sections/careers/NoRoleFit';
import { CareersSideCTA } from '@/components/sections/careers/CareersSideCTA';

export default function CareersPage() {
    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main>
                <CareersIntro />
                <div id="open-positions">
                    <OpenPositions />
                </div>
                <div id="submit-profile">
                    <NoRoleFit />
                </div>
            </main>
            <Footer />
            <CareersSideCTA />
        </div>
    );
}
