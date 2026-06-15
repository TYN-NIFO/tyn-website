import { HeaderWrapper } from "@/components/layout/HeaderWrapper";
import { FooterWrapper } from "@/components/layout/FooterWrapper";
import { PortableText } from "@/components/ui/PortableText";
import { client } from "@/lib/sanity/client";
import { GET_POLICY_BY_SLUG } from "@/lib/sanity/queries";
import { Policy } from "@/lib/sanity/types";
import type { PortableTextBlock } from "@portabletext/types";
import { ArrowLeft, Calendar } from "lucide-react";
import Link from "next/link";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps) {
    const { slug } = await params;
    const policy = await client.fetch<Policy | null>(GET_POLICY_BY_SLUG, { slug });

    if (!policy) return { title: "Policy Not Found" };

    return {
        title: `${policy.title} | The Yellow Network`,
    };
}

export const revalidate = 60;

export default async function PolicyPage({ params }: PageProps) {
    const { slug } = await params;
    const policy = await client.fetch<Policy | null>(GET_POLICY_BY_SLUG, { slug });

    if (!policy) {
        return (
            <div className="min-h-screen flex flex-col">
                <HeaderWrapper />
                <main className="flex-grow flex items-center justify-center">
                    <div className="text-center">
                        <h1 className="text-2xl font-bold text-foreground mb-4">Policy Not Found</h1>
                        <Link href="/" className="text-tyn-blue hover:underline">
                            Back to Home
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
                <article className="container-main max-w-4xl mx-auto">
                    <div className="mb-6">
                        <Link href="/" className="inline-flex items-center text-tyn-blue hover:text-tyn-blue/90 transition-colors font-medium">
                            <ArrowLeft className="mr-2 w-4 h-4" /> Back to Home
                        </Link>
                    </div>

                    <div className="mb-8 border-b border-border pb-8">
                        <h1 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6 leading-tight">
                            {policy.title}
                        </h1>

                        {policy.lastUpdated && (
                            <div className="flex items-center gap-2 text-muted-foreground">
                                <Calendar className="w-4 h-4" />
                                <span>Last updated {new Date(policy.lastUpdated).toLocaleDateString()}</span>
                            </div>
                        )}
                    </div>

                    <div className="prose prose-lg max-w-none text-foreground prose-headings:text-foreground prose-p:text-muted-foreground">
                        <PortableText value={policy.content as PortableTextBlock[]} />
                    </div>
                </article>
            </main>
            <FooterWrapper />
        </div>
    );
}
