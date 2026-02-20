import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, Clock, Download } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Blog, Whitepaper, Ynsight } from "@/lib/sanity/types";

/** Whitepaper from Sanity or local (has title, description, fileUrl; optional slug for detail page link). */
type WhitepaperLike = Whitepaper | { _id: string; title: string; description: string; fileUrl: string; slug?: string; image?: string };

interface ResourceCardProps {
    type: "blog" | "whitepaper" | "use-case";
    data: Blog | WhitepaperLike | Ynsight;
}

export const ResourceCard = ({ type, data }: ResourceCardProps) => {
    if (type === "blog") {
        const blog = data as Blog;
        return (
            <Link href={`/resources/blog/${blog.slug.current}`} className="group block h-full">
                <div className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                    <div className="relative h-48 w-full overflow-hidden">
                        {blog.authorImageUrl || blog.featuredImageUrl ? (
                            <Image
                                src={(blog.authorImageUrl || blog.featuredImageUrl)!}
                                alt={blog.title}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        ) : (
                            <div className="w-full h-full bg-muted flex items-center justify-center text-muted-foreground">
                                No Image
                            </div>
                        )}
                        <div className="absolute top-4 left-4">
                            <Badge variant="secondary" className="bg-card/90 backdrop-blur-sm text-xs font-semibold text-foreground">
                                Blog
                            </Badge>
                        </div>
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                        <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                            <div className="flex items-center gap-1">
                                <Calendar className="w-3 h-3" />
                                <span>{new Date(blog.publishedAt).toLocaleDateString()}</span>
                            </div>
                            {blog.readTime && (
                                <div className="flex items-center gap-1">
                                    <Clock className="w-3 h-3" />
                                    <span>{blog.readTime} min read</span>
                                </div>
                            )}
                        </div>
                        <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-tyn-blue transition-colors line-clamp-2">
                            {blog.title}
                        </h3>
                        <p className="text-muted-foreground text-sm line-clamp-3 mb-4 flex-1">
                            {blog.excerpt}
                        </p>
                        <div className="flex items-center text-tyn-blue text-sm font-semibold mt-auto">
                            Read Article <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </div>
                    </div>
                </div>
            </Link>
        );
    }

    if (type === "whitepaper") {
        const whitepaper = data as WhitepaperLike;
        const slug = "slug" in whitepaper ? whitepaper.slug : undefined;
        const cardContent = (
            <div className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                <div className="relative h-48 w-full overflow-hidden">
                    {"image" in whitepaper && whitepaper.image ? (
                        <Image
                            src={whitepaper.image as string}
                            alt={whitepaper.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                    ) : (
                        <div className="w-full h-full bg-muted flex flex-col items-center justify-center text-muted-foreground/30">
                            <Download className="w-12 h-12 mb-2" />
                            <span className="text-sm font-medium">Whitepaper</span>
                        </div>
                    )}
                    <div className="absolute top-4 left-4">
                        <Badge variant="secondary" className="bg-card/90 backdrop-blur-sm text-xs font-semibold text-foreground">
                            Whitepaper
                        </Badge>
                    </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-tyn-blue transition-colors line-clamp-2">
                        {whitepaper.title}
                    </h3>
                    <p className="text-muted-foreground text-sm line-clamp-3 mb-4 flex-1">
                        {whitepaper.description}
                    </p>
                    <div className="flex items-center text-tyn-blue text-sm font-semibold mt-auto">
                        Download PDF <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </div>
                </div>
            </div>
        );

        if (slug) {
            return (
                <Link href={`/resources/whitepaper/${slug}`} className="group block h-full">
                    {cardContent}
                </Link>
            );
        }

        return (
            <a
                href={`${whitepaper.fileUrl}?dl=`}
                className="group block h-full"
            >
                {cardContent}
            </a>
        );
    }

    if (type === "use-case") {
        const ynsight = data as Ynsight;
        const thumbUrl = ynsight.thumbnailUrl ?? ynsight.imageUrl;
        return (
            <Link href={`/resources/use-case/${ynsight.slug.current}`} className="group block h-full">
                <div className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                    <div className="relative h-48 w-full overflow-hidden">
                        {thumbUrl ? (
                            <Image
                                src={thumbUrl}
                                alt={ynsight.title}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        ) : (
                            <div className="w-full h-full bg-primary flex items-center justify-center text-primary-foreground/20">
                                <span className="text-4xl font-bold">In</span>
                            </div>
                        )}
                        <div className="absolute top-4 left-4">
                            <Badge variant="secondary" className="bg-card/90 backdrop-blur-sm text-xs font-semibold text-foreground">
                                Use Case
                            </Badge>
                        </div>
                        {ynsight.industry && (
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/90 to-transparent p-4 pt-12">
                                <p className="text-primary-foreground text-xs font-medium uppercase tracking-wider">{ynsight.industry}</p>
                            </div>
                        )}
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                        <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-tyn-blue transition-colors line-clamp-2">
                            {ynsight.title}
                        </h3>
                        <p className="text-muted-foreground text-sm line-clamp-3 mb-4 flex-1">
                            {ynsight.problemStatement}
                        </p>
                        <div className="flex items-center text-tyn-blue text-sm font-semibold mt-auto">
                            View Case Study <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </div>
                    </div>
                </div>
            </Link>
        );
    }

    return null;
};
