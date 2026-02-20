import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, Clock, Download } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Blog, Whitepaper, Ynsight } from "@/lib/sanity/types";

interface ResourceCardProps {
    type: "blog" | "whitepaper" | "use-case";
    data: Blog | Whitepaper | Ynsight;
}

export const ResourceCard = ({ type, data }: ResourceCardProps) => {
    if (type === "blog") {
        const blog = data as Blog;
        return (
            <Link href={`/resources/blog/${blog.slug.current}`} className="group block h-full">
                <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                    <div className="relative h-48 w-full overflow-hidden">
                        {blog.featuredImageUrl ? (
                            <Image
                                src={blog.featuredImageUrl}
                                alt={blog.title}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        ) : (
                            <div className="w-full h-full bg-gray-100 flex items-center justify-center text-gray-400">
                                No Image
                            </div>
                        )}
                        <div className="absolute top-4 left-4">
                            <Badge variant="secondary" className="bg-white/90 backdrop-blur-sm text-xs font-semibold text-gray-800">
                                Blog
                            </Badge>
                        </div>
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                        <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
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
                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                            {blog.title}
                        </h3>
                        <p className="text-gray-600 text-sm line-clamp-3 mb-4 flex-1">
                            {blog.excerpt}
                        </p>
                        <div className="flex items-center text-blue-600 text-sm font-semibold mt-auto">
                            Read Article <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </div>
                    </div>
                </div>
            </Link>
        );
    }

    if (type === "whitepaper") {
        const whitepaper = data as Whitepaper;
        return (
            <div className="group h-full">
                <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all duration-300 h-full flex flex-col relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                        <Download className="w-24 h-24" />
                    </div>
                    <div className="mb-4">
                        <Badge variant="secondary" className="bg-blue-50 text-blue-700 hover:bg-blue-100 border-blue-200">
                            Whitepaper
                        </Badge>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                        {whitepaper.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-6 flex-1">
                        {whitepaper.description}
                    </p>
                    <a
                        href={`${whitepaper.fileUrl}?dl=`}
                        className="inline-flex items-center justify-center w-full px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-blue-600 transition-colors font-medium text-sm mt-auto"
                    >
                        <Download className="mr-2 w-4 h-4" /> Download PDF
                    </a>
                </div>
            </div>
        );
    }

    if (type === "use-case") {
        const ynsight = data as Ynsight;
        return (
            <Link href={`/resources/use-case/${ynsight.slug.current}`} className="group block h-full">
                <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                    <div className="relative h-48 w-full overflow-hidden">
                        {ynsight.imageUrl ? (
                            <Image
                                src={ynsight.imageUrl}
                                alt={ynsight.title}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        ) : (
                            <div className="w-full h-full bg-slate-800 flex items-center justify-center text-white/20">
                                <span className="text-4xl font-bold">In</span>
                            </div>
                        )}
                        <div className="absolute top-4 left-4">
                            <Badge variant="secondary" className="bg-white/90 backdrop-blur-sm text-xs font-semibold text-gray-800">
                                Use Case
                            </Badge>
                        </div>
                        {ynsight.industry && (
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 pt-12">
                                <p className="text-white text-xs font-medium uppercase tracking-wider">{ynsight.industry}</p>
                            </div>
                        )}
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                            {ynsight.title}
                        </h3>
                        <p className="text-gray-600 text-sm line-clamp-3 mb-4 flex-1">
                            {ynsight.problemStatement}
                        </p>
                        <div className="flex items-center text-blue-600 text-sm font-semibold mt-auto">
                            View Case Study <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </div>
                    </div>
                </div>
            </Link>
        );
    }

    return null;
};
