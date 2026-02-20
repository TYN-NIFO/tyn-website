import { HeaderWrapper } from "@/components/layout/HeaderWrapper";
import { FooterWrapper } from "@/components/layout/FooterWrapper";
import { client } from "@/lib/sanity/client";
import { GET_YNSIGHT_BY_SLUG } from "@/lib/sanity/queries";
import { Ynsight } from "@/lib/sanity/types";
import { PortableText } from "@/components/ui/PortableText";
import type { PortableTextBlock } from "@portabletext/types";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps) {
    const { slug } = await params;
    const ynsight = await client.fetch<Ynsight>(GET_YNSIGHT_BY_SLUG, { slug });
    if (!ynsight) return { title: "Use Case Not Found" };

    return {
        title: `${ynsight.title} | The Yellow Network`,
        description: ynsight.problemStatement,
    };
}

// Revalidate every 60 seconds
export const revalidate = 60;

export default async function UseCasePage({ params }: PageProps) {
    const { slug } = await params;
    const ynsight = await client.fetch<Ynsight>(GET_YNSIGHT_BY_SLUG, { slug });

    if (!ynsight) {
        return (
            <div className="min-h-screen flex flex-col">
                <HeaderWrapper />
                <main className="flex-grow flex items-center justify-center">
                    <div className="text-center">
                        <h1 className="text-2xl font-bold text-foreground mb-4">Use Case Not Found</h1>
                        <Link href="/resources?tab=use-cases" className="text-tyn-blue hover:underline">
                            Back to Ynsights
                        </Link>
                    </div>
                </main>
                <FooterWrapper />
            </div>
        );
    }

    const sections = [
        { id: "problem", label: "Problem Statement" },
        { id: "solution", label: "Solution" },
        { id: "impact", label: "Impact" },
        { id: "competitor", label: "Competitor Positioning" },
        { id: "provider", label: "Solution Provider" },
        { id: "enterprise", label: "Enterprise" },
        ...(ynsight.testimonials?.length ? [{ id: "testimonials", label: "Testimonials" }] : []),
    ];

    return (
        <div className="min-h-screen bg-background flex flex-col">
            <HeaderWrapper />
            <main className="flex-grow pt-24 pb-16">
                {/* Top Banner */}
                <div className="bg-muted py-8 mb-8">
                    <div className="container-main">
                        <div className="text-sm text-muted-foreground mb-2">
                            What We Think → {ynsight.industry} → Ynsight
                        </div>
                        <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                            {ynsight.title}
                        </h1>
                        <div className="flex items-center gap-3">
                            {ynsight.industry && (
                                <span className="text-xs bg-tyn-blue text-primary-foreground font-medium px-3 py-1 rounded-full">
                                    {ynsight.industry}
                                </span>
                            )}
                            <span className="text-xs text-muted-foreground">
                                {new Date(ynsight._createdAt).toLocaleDateString()}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Hero Image */}
                {ynsight.imageUrl && (
                    <div className="container-main mb-12">
                        <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden shadow-lg">
                            <Image src={ynsight.imageUrl} alt={ynsight.title} fill className="object-cover" />
                        </div>
                    </div>
                )}

                <div className="container-main flex flex-col lg:flex-row gap-12">
                    {/* Sidebar Navigation */}
                    <aside className="hidden lg:block w-64 flex-shrink-0">
                        <div className="sticky top-24 border-r border-border pr-4">
                            <nav className="space-y-1">
                                {sections.map(section => (
                                    <a
                                        key={section.id}
                                        href={`#${section.id}`}
                                        className="block px-3 py-2 text-sm font-medium text-muted-foreground rounded-md hover:text-tyn-blue hover:bg-muted transition-colors"
                                    >
                                        {section.label}
                                    </a>
                                ))}
                            </nav>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <div className="flex-1 space-y-16">
                        <section id="problem" className="scroll-mt-24">
                            <h2 className="text-2xl font-bold text-tyn-blue mb-4">Problem Statement</h2>
                            <p className="text-muted-foreground leading-relaxed text-lg">
                                {ynsight.problemStatement}
                            </p>
                        </section>

                        <section id="solution" className="scroll-mt-24">
                            <h2 className="text-2xl font-bold text-tyn-blue mb-4">Solution</h2>
                            <p className="text-muted-foreground leading-relaxed text-lg">
                                {ynsight.solution}
                            </p>
                        </section>

                        <section id="impact" className="scroll-mt-24">
                            <h2 className="text-2xl font-bold text-tyn-blue mb-4">Impact</h2>
                            <div className="prose prose-lg max-w-none text-muted-foreground">
                                {typeof ynsight.impact === "string"
                                    ? <p className="leading-relaxed">{ynsight.impact}</p>
                                    : <PortableText value={ynsight.impact as PortableTextBlock[]} />}
                            </div>
                        </section>

                        <section id="competitor" className="scroll-mt-24">
                            <h2 className="text-2xl font-bold text-tyn-blue mb-4">Competitor Positioning</h2>
                            <p className="text-muted-foreground leading-relaxed text-lg">
                                {ynsight.competitorPositioning}
                            </p>
                        </section>

                        <section id="provider" className="scroll-mt-24">
                            <h2 className="text-2xl font-bold text-tyn-blue mb-4">Solution Provider</h2>
                            <div className="md:flex md:items-center md:gap-6 bg-muted p-6 rounded-xl border border-border">
                                {(ynsight.solutionProviderImage ?? (ynsight as { solutionProviderImageUrl?: string }).solutionProviderImageUrl) && (
                                    <div className="relative w-24 h-24 mb-4 md:mb-0 flex-shrink-0 bg-card rounded-lg p-2 shadow-sm">
                                        <Image
                                            src={(ynsight.solutionProviderImage ?? (ynsight as { solutionProviderImageUrl?: string }).solutionProviderImageUrl)!}
                                            alt={ynsight.solutionProviderName || "Provider"}
                                            width={96}
                                            height={96}
                                            className="object-contain w-full h-full"
                                        />
                                    </div>
                                )}
                                <div>
                                    <h3 className="text-xl font-bold text-foreground">
                                        {ynsight.solutionProviderName}
                                    </h3>
                                </div>
                            </div>
                        </section>

                        <section id="enterprise" className="scroll-mt-24">
                            <h2 className="text-2xl font-bold text-tyn-blue mb-4">Enterprise</h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                {(ynsight.enterpriseName || ynsight.enterpriseOneName) && (
                                    <div className="flex items-center gap-4 p-4 bg-muted rounded-lg border border-border">
                                        {(ynsight.enterpriseOneImage ?? (ynsight as { enterpriseOneImageUrl?: string }).enterpriseOneImageUrl) && (
                                            <div className="relative w-16 h-16 bg-card rounded p-1 shadow-sm flex-shrink-0">
                                                <Image
                                                    src={(ynsight.enterpriseOneImage ?? (ynsight as { enterpriseOneImageUrl?: string }).enterpriseOneImageUrl)!}
                                                    alt={ynsight.enterpriseOneName ?? ynsight.enterpriseName ?? "Enterprise"}
                                                    width={64}
                                                    height={64}
                                                    className="object-contain w-full h-full"
                                                />
                                            </div>
                                        )}
                                        <span className="font-semibold text-foreground">{ynsight.enterpriseOneName ?? ynsight.enterpriseName}</span>
                                    </div>
                                )}
                                {ynsight.enterpriseTwoName && (
                                    <div className="flex items-center gap-4 p-4 bg-muted rounded-lg border border-border">
                                        {(ynsight.enterpriseTwoImage ?? (ynsight as { enterpriseTwoImageUrl?: string }).enterpriseTwoImageUrl) && (
                                            <div className="relative w-16 h-16 bg-card rounded p-1 shadow-sm flex-shrink-0">
                                                <Image
                                                    src={(ynsight.enterpriseTwoImage ?? (ynsight as { enterpriseTwoImageUrl?: string }).enterpriseTwoImageUrl)!}
                                                    alt={ynsight.enterpriseTwoName ?? "Enterprise"}
                                                    width={64}
                                                    height={64}
                                                    className="object-contain w-full h-full"
                                                />
                                            </div>
                                        )}
                                        <span className="font-semibold text-foreground">{ynsight.enterpriseTwoName}</span>
                                    </div>
                                )}
                            </div>
                        </section>

                        {ynsight.testimonials && ynsight.testimonials.length > 0 && (
                            <section id="testimonials" className="scroll-mt-24">
                                <h2 className="text-2xl font-bold text-tyn-blue mb-4">Testimonials</h2>
                                <ul className="space-y-4">
                                    {ynsight.testimonials.map((quote, i) => (
                                        <li key={i} className="bg-muted p-6 rounded-xl border border-border italic text-muted-foreground">
                                            "{quote}"
                                        </li>
                                    ))}
                                </ul>
                            </section>
                        )}

                        <div className="pt-8">
                            <Link href="/resources?tab=use-cases" className="inline-flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
                                <ArrowLeft className="mr-2 w-4 h-4" /> Back to Ynsights
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
            <FooterWrapper />
        </div>
    );
}
