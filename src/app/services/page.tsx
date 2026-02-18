'use client';

import { useState } from 'react';
import { Hammer, ShoppingBag, Building2 } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ServicesHero } from '@/components/sections/services/ServicesHero';
import { ServiceContent, ServiceTabPills } from '@/components/sections/services/ServiceDeepDive';
import { EngagementModels } from '@/components/sections/services/EngagementModels';
import { WhyThisWorks } from '@/components/sections/services/WhyThisWorks';
import { ServicesCTA } from '@/components/sections/services/ServicesCTA';

const services = [
    {
        id: 'buy',
        number: '01',
        title: 'BUY',
        subtitle: 'Ecosystem-Led Solution Selection',
        tagline: 'When speed-to-value matters more than custom build',
        icon: ShoppingBag,
        triggers: [
            'Market already has mature solutions',
            "Internal teams don't want to build from scratch",
            'Limited bandwidth to develop internally',
            'You need confidence before committing capital',
        ],
        whatWeDo: [
            'Shortlist best-fit solution providers and platforms (not just generic vendors)',
            'Design board-grade ROI and business cases',
            'Run PoCs or pilots only where necessary',
            'Support commercial negotiation and rollout planning',
        ],
        howItShowsUp: [
            'Faster adoption with lower risk',
            'Right-fit solutions instead of shelfware',
            'Clear rationale for buy vs build',
        ],
        outcome:
            'Messy costs, workflow friction, unclear decision rights, and human-only processes block real adoption. Faster time-to-impact without tech debt or vendor regret.',
    },
    {
        id: 'build',
        number: '02',
        title: 'BUILD',
        subtitle: 'Production-Grade AI Systems',
        tagline: 'When you need speed, control, and differentiation',
        icon: Hammer,
        triggers: [
            'A high-impact use case that needs to ship fast',
            "Existing tools which can't fully solve the problem",
            'You need control over data, models, and IP',
        ],
        whatWeDo: [
            'Translate business problems into deployable AI architectures',
            'Design and build agents, copilots, and decision systems',
            'Integrate with enterprise data, apps, and security',
            'Establish guardrails, human-in-the-loop, and monitoring',
        ],
        howItShowsUp: [
            'Intelligent copilots embedded in workflows',
            'Decision engines for risk, pricing, planning, or ops',
            'Automation that actually sticks',
        ],
        outcome:
            'Production-ready AI in weeks — not endless pilots — with clear ROI ownership.',
    },
    {
        id: 'coe',
        number: '03',
        title: 'AI COE',
        subtitle: 'Build the Enterprise Muscle',
        tagline: 'When AI needs to scale beyond one team or function',
        icon: Building2,
        triggers: [
            'Multiple pilots but no repeatable engine',
            'Fragmented ownership across IT, business, and data teams',
            'Limited governance, standards, or prioritization',
        ],
        whatWeDo: [
            'Set up a practical AI operating model (not a theoretical CoE)',
            'Define intake, prioritization, and funding mechanisms',
            'Establish architecture standards, guardrails, and metrics',
            'Orchestrate build + buy across teams and partners',
        ],
        howItShowsUp: [
            'Predictable pipeline of use cases',
            'Clear ROI tracking and stage-gates',
            'Faster scaling with lower chaos',
        ],
        outcome: 'A repeatable AI transformation engine — not one-off wins.',
    },
];

export default function ServicesPage() {
    const [activeId, setActiveId] = useState(services[0].id);

    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main>
                <ServicesHero />
                {/* Sticky pills span across services + engagement models */}
                <ServiceTabPills services={services} activeId={activeId} onTabChange={setActiveId} />
                <ServiceContent services={services} activeId={activeId} />
                <EngagementModels />
                <WhyThisWorks />
                <ServicesCTA />
            </main>
            <Footer />
        </div>
    );
}
