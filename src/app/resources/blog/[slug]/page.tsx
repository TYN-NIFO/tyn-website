import { HeaderWrapper } from "@/components/layout/HeaderWrapper";
import { FooterWrapper } from "@/components/layout/FooterWrapper";
import { client } from "@/lib/sanity/client";
import { GET_BLOG_BY_SLUG, GET_RELATED_BLOGS } from "@/lib/sanity/queries";
import { Blog } from "@/lib/sanity/types";
import { PortableText } from "@/components/ui/PortableText";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { ResourceCard } from "@/components/sections/resources/ResourceCard";
import { getLocalBlogBySlug, localBlogs } from "@/data/localBlogs";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps) {
    const { slug } = await params;
    let blog = await client.fetch<Blog | null>(GET_BLOG_BY_SLUG, { slug });
    if (!blog) blog = getLocalBlogBySlug(slug) ?? null;
    if (!blog) return { title: "Blog Not Found" };

    return {
        title: `${blog.title} | The Yellow Network`,
        description: blog.excerpt,
    };
}

// Revalidate every 60 seconds
export const revalidate = 60;

export default async function BlogPage({ params }: PageProps) {
    const { slug } = await params;
    let blog = await client.fetch<Blog | null>(GET_BLOG_BY_SLUG, { slug });
    if (!blog) {
        blog = getLocalBlogBySlug(slug) ?? null;
    }

    if (!blog) {
        return (
            <div className="min-h-screen flex flex-col">
                <HeaderWrapper />
                <main className="flex-grow flex items-center justify-center">
                    <div className="text-center">
                        <h1 className="text-2xl font-bold text-foreground mb-4">Blog Post Not Found</h1>
                        <Link href="/resources" className="text-tyn-blue hover:underline">
                            Back to Ynsights
                        </Link>
                    </div>
                </main>
                <FooterWrapper />
            </div>
        );
    }

    const relatedBlogs = blog._id.startsWith("sample-blog-") || blog._id.startsWith("gears-gpt-")
        ? localBlogs.filter((b) => b._id !== blog!._id).slice(0, 3)
        : await client.fetch<Blog[]>(GET_RELATED_BLOGS, {
            currentId: blog._id,
            currentTags: blog.tags || [],
        });

    return (
        <div className="min-h-screen bg-background flex flex-col">
            <HeaderWrapper />
            <main className="flex-grow pt-24 pb-16">
                <article className="container-main max-w-4xl mx-auto">
                    {/* Breadcrumb / Back */}
                    <div className="mb-6">
                        <Link href="/resources?tab=blogs" className="inline-flex items-center text-tyn-blue hover:text-tyn-blue/90 transition-colors font-medium">
                            <ArrowLeft className="mr-2 w-4 h-4" /> Back to Ynsights
                        </Link>
                    </div>

                    {/* Header */}
                    <div className="mb-8">
                        <div className="flex flex-wrap gap-2 mb-4">
                            {blog.tags?.map(tag => (
                                <span key={tag} className="px-3 py-1 bg-muted text-tyn-blue rounded-full text-xs font-semibold uppercase tracking-wide">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <h1 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6 leading-tight">
                            {blog.title}
                        </h1>

                        <div className="flex flex-wrap items-center gap-6 text-muted-foreground border-b border-border pb-8 mb-8">
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>{new Date(blog.publishedAt).toLocaleDateString()}</span>
                            </div>
                            {blog.readTime && (
                                <div className="flex items-center gap-2">
                                    <Clock className="w-4 h-4" />
                                    <span>{blog.readTime} min read</span>
                                </div>
                            )}
                            <div className="flex items-center gap-2 ml-auto">
                                {blog.authorImageUrl && (
                                    <div className="relative w-8 h-8 rounded-full overflow-hidden">
                                        <Image src={blog.authorImageUrl} alt={blog.author} fill className="object-cover" />
                                    </div>
                                )}
                                <span className="font-medium text-foreground">By {blog.author}</span>
                            </div>
                        </div>
                    </div>

                    {/* Featured Image */}
                    {blog.featuredImageUrl && (
                        <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg mb-12">
                            <Image
                                src={blog.featuredImageUrl}
                                alt={blog.title}
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    )}

                    {/* Content */}
                    <div className="prose prose-lg max-w-none text-foreground prose-headings:text-foreground prose-p:text-muted-foreground">
                        <PortableText value={blog.content} />
                    </div>
                </article>

                {/* Related Blogs */}
                {relatedBlogs.length > 0 && (
                    <section className="container-main mt-24 pt-12 border-t border-border">
                        <h2 className="text-3xl font-display font-bold mb-8 text-foreground">Related Articles</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {relatedBlogs.map(post => (
                                <div key={post._id} className="h-full">
                                    <ResourceCard type="blog" data={post} />
                                </div>
                            ))}
                        </div>
                    </section>
                )}
            </main>
            <FooterWrapper />
        </div>
    );
}
