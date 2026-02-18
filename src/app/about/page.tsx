'use client';

import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { AboutIntro } from '@/components/sections/about/AboutIntro';
import { MarketGap } from '@/components/sections/about/MarketGap';
import { OurBelief } from '@/components/sections/about/OurBelief';
import { HowWeEnable } from '@/components/sections/about/HowWeEnable';
import { Experience } from '@/components/sections/about/Experience';
import { WhatMakesDifferent } from '@/components/sections/about/WhatMakesDifferent';
import { Founders } from '@/components/sections/about/Founders';

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main>
                <AboutIntro />
                <MarketGap />
                <OurBelief />
                <HowWeEnable />
                <Experience />
                <WhatMakesDifferent />
                <Founders />
            </main>
            <Footer />
        </div>
    );
}
