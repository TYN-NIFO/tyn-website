'use client';

import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { NifoHero } from '@/components/sections/nifo/NifoHero';
import { NifoProblem } from '@/components/sections/nifo/NifoProblem';
import { WhatNifoEnables } from '@/components/sections/nifo/WhatNifoEnables';
import { HowNifoWorks } from '@/components/sections/nifo/HowNifoWorks';
import { WhyItMatters } from '@/components/sections/nifo/WhyItMatters';
import { TheResult } from '@/components/sections/nifo/TheResult';
import { HowNifoFits } from '@/components/sections/nifo/HowNifoFits';
import { NifoCTA } from '@/components/sections/nifo/NifoCTA';

export default function NifoPage() {
    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main>
                <NifoHero />
                <NifoProblem />
                <WhatNifoEnables />
                <HowNifoWorks />
                {/* <WhyItMatters />
                <TheResult />
                <HowNifoFits /> */}
                <NifoCTA />
            </main>
            <Footer />
        </div>
    );
}
