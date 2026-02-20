"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useMemo } from "react";
import { Blog, Whitepaper, Ynsight } from "@/lib/sanity/types";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ResourceCard } from "./ResourceCard";

/** Whitepaper from Sanity or local data (old website content). */
export type WhitepaperOrLocal = Whitepaper | { _id: string; title: string; description: string; fileUrl: string };

const TAB_VALUES = ["blogs", "whitepapers"] as const;
type TabValue = (typeof TAB_VALUES)[number];

function isValidTab(tab: string | null): tab is TabValue {
    return tab !== null && TAB_VALUES.includes(tab as TabValue);
}

interface ResourcesListProps {
    blogs: Blog[];
    whitepapers: WhitepaperOrLocal[];
    ynsights: Ynsight[];
}

export const ResourcesList = ({ blogs, whitepapers, ynsights }: ResourcesListProps) => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const tabFromUrl = searchParams.get("tab");
    const activeTab = useMemo(() => (isValidTab(tabFromUrl) ? tabFromUrl : "blogs"), [tabFromUrl]);

    const onTabChange = (value: string) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set("tab", value);
        router.replace(`/resources?${params.toString()}`, { scroll: false });
    };

    return (
        <section className="section-padding container-main min-h-screen">
            <div className="mb-12 text-center">
                <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-foreground">Ynsights</h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    Explore our latest thinking, in-depth research, and use cases.
                </p>
            </div>

            <Tabs value={activeTab} onValueChange={onTabChange} defaultValue="blogs" className="w-full">
                <div className="flex justify-center mb-12">
                    <TabsList className="grid w-full max-w-sm grid-cols-2">
                        <TabsTrigger value="blogs">Blogs</TabsTrigger>
                        <TabsTrigger value="whitepapers">Whitepapers</TabsTrigger>
                    </TabsList>
                </div>

                <TabsContent value="blogs" className="animate-fade-in">
                    {blogs.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {blogs.map((blog) => (
                                <div key={blog._id} className="h-full">
                                    <ResourceCard type="blog" data={blog} />
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20 text-muted-foreground">
                            No blogs found. Check back soon.
                        </div>
                    )}
                </TabsContent>

                <TabsContent value="whitepapers" className="animate-fade-in">
                    {whitepapers.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {whitepapers.map((whitepaper) => (
                                <div key={whitepaper._id} className="h-full">
                                    <ResourceCard type="whitepaper" data={whitepaper} />
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20 text-muted-foreground">
                            No whitepapers found. Check back soon.
                        </div>
                    )}
                </TabsContent>
            </Tabs>
        </section>
    );
};
