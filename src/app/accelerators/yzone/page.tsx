'use client';

import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { YZoneHero } from '@/components/sections/yzone/YZoneHero';
import { WhyYZone } from '@/components/sections/yzone/WhyYZone';
import { WhatYZoneDelivers } from '@/components/sections/yzone/WhatYZoneDelivers';
import { HowYZoneWorks } from '@/components/sections/yzone/HowYZoneWorks';
import { WhatMakesYZoneDifferent } from '@/components/sections/yzone/WhatMakesYZoneDifferent';
import { WhoYZoneIsFor } from '@/components/sections/yzone/WhoYZoneIsFor';
import { YZoneOutcomes } from '@/components/sections/yzone/YZoneOutcomes';
import { YZoneToTYN } from '@/components/sections/yzone/YZoneToTYN';
import { YZoneCTA } from '@/components/sections/yzone/YZoneCTA';

export default function YZonePage() {
    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main>
                <YZoneHero />
                <WhyYZone />
                <WhatYZoneDelivers />
                <HowYZoneWorks />
                <WhatMakesYZoneDifferent />
                <WhoYZoneIsFor />
                <YZoneOutcomes />
                <YZoneToTYN />
                <YZoneCTA />
            </main>
            <Footer />
        </div>
    );
}
