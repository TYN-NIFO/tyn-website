import { HeaderWrapper } from "@/components/layout/HeaderWrapper";
import { FooterWrapper } from "@/components/layout/FooterWrapper";
import { localWhitepapers } from "@/data/localWhitepapers";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Download, Share2 } from "lucide-react";
import { WhitepaperActions } from "@/app/resources/whitepaper/[slug]/WhitepaperActions";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps) {
    const { slug } = await params;
    const whitepaper = localWhitepapers.find((w) => w.slug === slug);
    if (!whitepaper) return { title: "Whitepaper Not Found" };
    return {
        title: `${whitepaper.title} | The Yellow Network`,
        description: whitepaper.description,
    };
}

export default async function WhitepaperPage({ params }: PageProps) {
    const { slug } = await params;
    const whitepaper = localWhitepapers.find((w) => w.slug === slug);

    if (!whitepaper) {
        return (
            <div className="min-h-screen flex flex-col bg-background">
                <HeaderWrapper />
                <main className="flex-grow flex items-center justify-center">
                    <div className="text-center">
                        <h1 className="text-2xl font-bold text-foreground mb-4">Whitepaper Not Found</h1>
                        <p className="text-muted-foreground mb-6">The whitepaper you're looking for doesn't exist or has been removed.</p>
                        <Link href="/resources?tab=whitepapers" className="text-tyn-blue hover:underline">
                            Back to Resources
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
            <main className="flex-grow pt-20">
                {/* Back link */}
                <div className="container-main pt-4">
                    <Link
                        href="/resources?tab=whitepapers"
                        className="inline-flex items-center text-tyn-blue hover:text-tyn-blue/90 transition-colors font-medium"
                    >
                        <ArrowLeft className="mr-2 w-4 h-4" /> Back to Resources
                    </Link>
                </div>

                {/* Hero image with title overlay - same as old site */}
                <div className="relative w-full h-[400px] mt-4">
                    {whitepaper.image && (
                        <Image
                            src={whitepaper.image}
                            alt={whitepaper.title}
                            fill
                            className="object-cover"
                            priority
                            sizes="100vw"
                        />
                    )}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                        <h1 className="text-white text-2xl sm:text-3xl font-bold text-center px-4">
                            {whitepaper.title}
                        </h1>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row container-main gap-8 py-10">
                    {/* Authors sidebar - optional, like old site */}
                    {whitepaper.authors && whitepaper.authors.length > 0 && (
                        <aside className="hidden lg:block w-64 flex-shrink-0">
                            <div className="sticky top-24 border-r border-border pr-6">
                                <h3 className="text-sm font-semibold text-foreground mb-4">Authors</h3>
                                <div className="flex flex-col gap-4">
                                    {whitepaper.authors.map((author) => (
                                        <div key={author.name} className="flex items-center gap-3">
                                            <div className="relative w-12 h-12 rounded-full bg-muted overflow-hidden flex-shrink-0">
                                                <Image
                                                    src={author.image}
                                                    alt={author.name}
                                                    width={48}
                                                    height={48}
                                                    className="object-cover rounded-full"
                                                />
                                            </div>
                                            <div>
                                                <p className="text-sm font-medium text-foreground">{author.name}</p>
                                                <p className="text-xs text-muted-foreground">{author.role}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </aside>
                    )}

                    {/* Main content */}
                    <article className="flex-1 min-w-0 max-w-4xl">
                        <div className="flex items-center justify-end gap-4 mb-8">
                            <WhitepaperActions
                                title={whitepaper.title}
                                fileUrl={whitepaper.fileUrl}
                            />
                        </div>

                        {whitepaper.content && whitepaper.content.length > 0 ? (
                            <div className="flex flex-col gap-8">
                                {whitepaper.content.map((section) => (
                                    <section key={section.id} id={section.id} className="scroll-mt-24">
                                        {section.title && (
                                            <h2 className="text-xl sm:text-2xl font-semibold text-foreground mb-4">
                                                {section.title}
                                            </h2>
                                        )}
                                        {section.paragraphs && (
                                            <div className="flex flex-col gap-4 text-muted-foreground text-base sm:text-lg font-light">
                                                {section.paragraphs.map((p, i) => (
                                                    <p key={i}>{p}</p>
                                                ))}
                                            </div>
                                        )}
                                        {section.list && (
                                            <ul className="list-disc list-inside space-y-2 text-muted-foreground text-base sm:text-lg font-light mt-4">
                                                {section.list.map((item, i) => (
                                                    <li key={i}>{item}</li>
                                                ))}
                                            </ul>
                                        )}
                                        {section.partnerLandscape && section.partnerLandscape.length > 0 && (
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                                                {section.partnerLandscape.map((item, index) => (
                                                    <div
                                                        key={item.title}
                                                        className="border border-border rounded-lg p-4 bg-card"
                                                    >
                                                        <div className="font-semibold text-foreground text-sm sm:text-base">
                                                            {index + 1}. {item.title}
                                                        </div>
                                                        <div className="text-muted-foreground text-xs sm:text-sm font-light mt-1">
                                                            {item.description}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </section>
                                ))}
                            </div>
                        ) : (
                            <div className="text-muted-foreground text-lg mb-8">
                                {whitepaper.description}
                            </div>
                        )}

                        <div className="flex justify-center mt-12">
                            <a
                                href={`${whitepaper.fileUrl}?dl=`}
                                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors font-medium shadow-md"
                            >
                                <Download className="w-4 h-4" />
                                Download the full whitepaper
                            </a>
                        </div>
                    </article>
                </div>
            </main>
            <FooterWrapper />
        </div>
    );
}
