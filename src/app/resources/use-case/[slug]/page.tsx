import { HeaderWrapper } from "@/components/layout/HeaderWrapper";
import { FooterWrapper } from "@/components/layout/FooterWrapper";
import { client } from "@/lib/sanity/client";
import { GET_YNSIGHT_BY_SLUG } from "@/lib/sanity/queries";
import { Ynsight } from "@/lib/sanity/types";
import { PortableText } from "@/components/ui/PortableText";
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
                        <h1 className="text-2xl font-bold mb-4">Use Case Not Found</h1>
                        <Link href="/resources?tab=use-cases" className="text-blue-600 hover:underline">
                            Back to Resources
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
                <div className="bg-blue-50 py-8 mb-8">
                    <div className="container-main">
                        <div className="text-sm text-gray-500 mb-2">
                            What We Think → {ynsight.industry} → Ynsight
                        </div>
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            {ynsight.title}
                        </h1>
                        <div className="flex items-center gap-3">
                            {ynsight.industry && (
                                <span className="text-xs bg-blue-600 text-white font-medium px-3 py-1 rounded-full">
                                    {ynsight.industry}
                                </span>
                            )}
                            <span className="text-xs text-gray-500">
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
                        <div className="sticky top-24 border-r border-gray-200 pr-4">
                            <nav className="space-y-1">
                                {sections.map(section => (
                                    <a
                                        key={section.id}
                                        href={`#${section.id}`}
                                        className="block px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-blue-600 hover:bg-blue-50 transition-colors"
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
                            <h2 className="text-2xl font-bold text-blue-600 mb-4">Problem Statement</h2>
                            <p className="text-gray-700 leading-relaxed text-lg">
                                {ynsight.problemStatement}
                            </p>
                        </section>

                        <section id="solution" className="scroll-mt-24">
                            <h2 className="text-2xl font-bold text-blue-600 mb-4">Solution</h2>
                            <p className="text-gray-700 leading-relaxed text-lg">
                                {ynsight.solution}
                            </p>
                        </section>

                        <section id="impact" className="scroll-mt-24">
                            <h2 className="text-2xl font-bold text-blue-600 mb-4">Impact</h2>
                            <div className="prose prose-lg max-w-none text-gray-700">
                                <PortableText value={ynsight.impact} />
                            </div>
                        </section>

                        <section id="competitor" className="scroll-mt-24">
                            <h2 className="text-2xl font-bold text-blue-600 mb-4">Competitor Positioning</h2>
                            <p className="text-gray-700 leading-relaxed text-lg">
                                {ynsight.competitorPositioning}
                            </p>
                        </section>

                        <section id="provider" className="scroll-mt-24">
                            <h2 className="text-2xl font-bold text-blue-600 mb-4">Solution Provider</h2>
                            <div className="md:flex md:items-center md:gap-6 bg-gray-50 p-6 rounded-xl border border-gray-100">
                                {ynsight.solutionProviderImage && (
                                    <div className="relative w-24 h-24 mb-4 md:mb-0 flex-shrink-0 bg-white rounded-lg p-2 shadow-sm">
                                        <Image
                                            src={ynsight.solutionProviderImage}
                                            alt={ynsight.solutionProviderName || "Provider"}
                                            width={96}
                                            height={96}
                                            className="object-contain w-full h-full"
                                        />
                                    </div>
                                )}
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900">
                                        {ynsight.solutionProviderName}
                                    </h3>
                                </div>
                            </div>
                        </section>

                        <section id="enterprise" className="scroll-mt-24">
                            <h2 className="text-2xl font-bold text-blue-600 mb-4">Enterprise</h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                {ynsight.enterpriseOneName && (
                                    <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg border border-gray-100">
                                        {ynsight.enterpriseOneImage && (
                                            <div className="relative w-16 h-16 bg-white rounded p-1 shadow-sm flex-shrink-0">
                                                <Image
                                                    src={ynsight.enterpriseOneImage}
                                                    alt={ynsight.enterpriseOneName}
                                                    width={64}
                                                    height={64}
                                                    className="object-contain w-full h-full"
                                                />
                                            </div>
                                        )}
                                        <span className="font-semibold text-gray-800">{ynsight.enterpriseOneName}</span>
                                    </div>
                                )}
                                {ynsight.enterpriseTwoName && (
                                    <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg border border-gray-100">
                                        {ynsight.enterpriseTwoImage && (
                                            <div className="relative w-16 h-16 bg-white rounded p-1 shadow-sm flex-shrink-0">
                                                <Image
                                                    src={ynsight.enterpriseTwoImage}
                                                    alt={ynsight.enterpriseTwoName}
                                                    width={64}
                                                    height={64}
                                                    className="object-contain w-full h-full"
                                                />
                                            </div>
                                        )}
                                        <span className="font-semibold text-gray-800">{ynsight.enterpriseTwoName}</span>
                                    </div>
                                )}
                            </div>
                        </section>

                        {ynsight.testimonials && ynsight.testimonials.length > 0 && (
                            <section id="testimonials" className="scroll-mt-24">
                                <h2 className="text-2xl font-bold text-blue-600 mb-4">Testimonials</h2>
                                <ul className="space-y-4">
                                    {ynsight.testimonials.map((quote, i) => (
                                        <li key={i} className="bg-blue-50 p-6 rounded-xl border border-blue-100 italic text-gray-700">
                                            "{quote}"
                                        </li>
                                    ))}
                                </ul>
                            </section>
                        )}

                        <div className="pt-8">
                            <Link href="/resources?tab=use-cases" className="inline-flex items-center px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors">
                                <ArrowLeft className="mr-2 w-4 h-4" /> Back to Resources
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
            <FooterWrapper />
        </div>
    );
}
