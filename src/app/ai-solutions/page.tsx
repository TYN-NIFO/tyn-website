'use client';

import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { AiSolutionsHero } from '@/components/sections/ai-solutions/AiSolutionsHero';
import { SolutionPortfolio } from '@/components/sections/ai-solutions/SolutionPortfolio';
import { PortfolioGrowth } from '@/components/sections/ai-solutions/PortfolioGrowth';
import { CustomBuild } from '@/components/sections/ai-solutions/CustomBuild';
import { AiSolutionsCTA } from '@/components/sections/ai-solutions/AiSolutionsCTA';

export default function AiSolutionsPage() {
    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main>
                <AiSolutionsHero />
                <SolutionPortfolio />
                <PortfolioGrowth />
                <CustomBuild />
                <AiSolutionsCTA />
            </main>
            <Footer />
        </div>
    );
}
