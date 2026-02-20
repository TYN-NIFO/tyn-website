import { HeaderWrapper } from "@/components/layout/HeaderWrapper";
import { FooterWrapper } from "@/components/layout/FooterWrapper";
import { CareersIntro } from '@/components/sections/careers/CareersIntro';
import { OpenPositions } from '@/components/sections/careers/OpenPositions';
import { NoRoleFit } from '@/components/sections/careers/NoRoleFit';
import { CareersSideCTA } from '@/components/sections/careers/CareersSideCTA';
import { client } from '@/lib/sanity/client';
import { GET_OPEN_POSITIONS } from '@/lib/sanity/queries';
import { OpenPosition } from '@/lib/sanity/types';

// Revalidate every 60 seconds
export const revalidate = 60;

export default async function CareersPage() {
    const positions = await client.fetch<OpenPosition[]>(GET_OPEN_POSITIONS);

    return (
        <div className="min-h-screen bg-background">
            <HeaderWrapper />
            <main>
                <CareersIntro />
                <div id="open-positions">
                    <OpenPositions positions={positions} />
                </div>
                <div id="submit-profile">
                    <NoRoleFit />
                </div>
            </main>
            <FooterWrapper />
            <CareersSideCTA />
        </div>
    );
}
