import { HeaderWrapper } from "@/components/layout/HeaderWrapper";
import { FooterWrapper } from "@/components/layout/FooterWrapper";
import { client } from "@/lib/sanity/client";
import { GET_OPEN_POSITION_BY_SLUG } from "@/lib/sanity/queries";
import { OpenPosition } from "@/lib/sanity/types";
import { PortableText } from "@/components/ui/PortableText";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps) {
    const { slug } = await params;
    const position = await client.fetch<OpenPosition>(GET_OPEN_POSITION_BY_SLUG, { slug });
    if (!position) return { title: "Job Not Found" };

    return {
        title: `${position.title} | The Yellow Network`,
        description: `We are hiring a ${position.title}. Apply now!`,
    };
}

// Revalidate every 60 seconds
export const revalidate = 60;

export default async function JobPage({ params }: PageProps) {
    const { slug } = await params;
    const position = await client.fetch<OpenPosition>(GET_OPEN_POSITION_BY_SLUG, { slug });

    if (!position) {
        return (
            <div className="min-h-screen flex flex-col">
                <HeaderWrapper />
                <main className="flex-grow flex items-center justify-center">
                    <div className="text-center">
                        <h1 className="text-2xl font-bold mb-4">Job Post Not Found</h1>
                        <Link href="/careers" className="text-blue-600 hover:underline">
                            Back to Careers
                        </Link>
                    </div>
                </main>
                <FooterWrapper />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background flex flex-col">
            <HeaderWrapper />
            <main className="flex-grow pt-24 pb-16">
                <div className="container-main max-w-4xl mx-auto">
                    {/* Back Link */}
                    <div className="mb-8">
                        <Link href="/careers" className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors font-medium">
                            <ArrowLeft className="mr-2 w-4 h-4" /> Back to Careers
                        </Link>
                    </div>

                    {/* Job Header */}
                    <div className="bg-white border border-gray-200 rounded-xl p-8 mb-12 shadow-sm">
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                            <div>
                                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                    {position.title}
                                </h1>
                                <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                                    <span className="bg-gray-100 px-3 py-1 rounded-full font-medium">{position.department}</span>
                                    <span className="bg-gray-100 px-3 py-1 rounded-full font-medium">{position.location}</span>
                                    <span className="bg-gray-100 px-3 py-1 rounded-full font-medium">{position.employmentType}</span>
                                    <span className="bg-gray-100 px-3 py-1 rounded-full font-medium">{position.experience}</span>
                                </div>
                            </div>
                            <div className="flex-shrink-0">
                                <a href={`mailto:careers@theyellownetwork.com?subject=Application for ${position.title}`} className="block">
                                    <Button className="btn-hero w-full md:w-auto">Apply Now</Button>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Job Details */}
                    <div className="space-y-12">
                        {position.description && (
                            <section>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">About the Role</h2>
                                <div className="prose prose-lg max-w-none text-gray-700">
                                    <PortableText value={position.description} />
                                </div>
                            </section>
                        )}

                        {position.responsibilities && (
                            <section>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">Responsibilities</h2>
                                <div className="prose prose-lg max-w-none text-gray-700">
                                    <PortableText value={position.responsibilities} />
                                </div>
                            </section>
                        )}

                        {position.requirements && (
                            <section>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">Requirements</h2>
                                <div className="prose prose-lg max-w-none text-gray-700">
                                    <PortableText value={position.requirements} />
                                </div>
                            </section>
                        )}
                    </div>

                    {/* Bottom CTA */}
                    <div className="mt-16 pt-8 border-t border-gray-200 text-center">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to join us?</h3>
                        <a href={`mailto:careers@theyellownetwork.com?subject=Application for ${position.title}`}>
                            <Button className="btn-hero text-lg px-8 py-6 h-auto">Apply for this position</Button>
                        </a>
                    </div>
                </div>
            </main>
            <FooterWrapper />
        </div>
    );
}
