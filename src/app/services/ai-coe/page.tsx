'use client';

import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { AiCoeHero } from '@/components/sections/ai-coe/AiCoeHero';
import { WhyCoeFails } from '@/components/sections/ai-coe/WhyCoeFails';
import { WhatThisEnables } from '@/components/sections/ai-coe/WhatThisEnables';
import { HowWeEngage } from '@/components/sections/ai-coe/HowWeEngage';
import { WhatMakesDifferent } from '@/components/sections/ai-coe/WhatMakesDifferent';
import { AiCoeOutcomes } from '@/components/sections/ai-coe/AiCoeOutcomes';
import { WhereThisFits } from '@/components/sections/ai-coe/WhereThisFits';

export default function AiCoePage() {
    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main>
                <AiCoeHero />
                <WhyCoeFails />
                <WhatThisEnables />
                <HowWeEngage />
                <WhatMakesDifferent />
                <AiCoeOutcomes />
                <WhereThisFits />
            </main>
            <Footer />
        </div>
    );
}
