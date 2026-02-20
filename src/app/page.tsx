'use client';

import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { ClientLogosCarousel } from '@/components/sections/ClientLogosCarousel';
//import { ValueProposition } from '@/components/sections/ValueProposition';
import { PainPoints } from '@/components/sections/PainPoints';
import { OurSolution } from '@/components/sections/OurSolution';
import WhatPowersDelivery from '@/components/sections/WhatPowersDelivery';
//import { NIFOSnapshot } from '@/components/sections/NIFOSnapshot';
import { Outcomes } from '@/components/sections/Outcomes';
import { EngagementModel } from '@/components/sections/EngagementModel';
import { SuccessStories } from '@/components/sections/SuccessStories';
import { CTASection } from '@/components/sections/CTASection';

export default function IndexPage() {
    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main>
                <HeroSection />
                <ClientLogosCarousel />
                {/* <ValueProposition /> */}
                <PainPoints />
                <OurSolution />
                <Outcomes />
                <WhatPowersDelivery />
                <EngagementModel />
                {/* <NIFOSnapshot /> */}
                <SuccessStories />
                <CTASection />
            </main>
            <Footer />
        </div>
    );
}
