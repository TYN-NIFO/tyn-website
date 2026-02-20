import { HeaderWrapper } from "@/components/layout/HeaderWrapper";
import { FooterWrapper } from "@/components/layout/FooterWrapper";
import { ResourcesList } from "@/components/sections/resources/ResourcesList";
import { client } from "../../lib/sanity/client";
import { GET_BLOGS, GET_WHITEPAPERS, GET_YNSIGHTS } from "../../lib/sanity/queries";
import { Blog, Whitepaper, Ynsight } from "../../lib/sanity/types";
import { localWhitepapers } from "@/data/localWhitepapers";
import { localBlogs } from "@/data/localBlogs";

// Revalidate every 60 seconds (ISR)
export const revalidate = 60;

export default async function ResourcesPage() {
    const [sanityBlogs, sanityWhitepapers, ynsights] = await Promise.all([
        client.fetch<Blog[]>(GET_BLOGS),
        client.fetch<Whitepaper[]>(GET_WHITEPAPERS),
        client.fetch<Ynsight[]>(GET_YNSIGHTS),
    ]);

    // Use Sanity blogs when available, otherwise fall back to local website content (old site)
    const blogs = sanityBlogs?.length ? sanityBlogs : localBlogs;

    // Merge Sanity whitepapers with local website content so the two old whitepapers always show
    const sanityIds = new Set((sanityWhitepapers ?? []).map((w) => w.title.toLowerCase()));
    const mergedWhitepapers: (Whitepaper | (typeof localWhitepapers)[0])[] = [
        ...(sanityWhitepapers ?? []),
        ...localWhitepapers.filter((w) => !sanityIds.has(w.title.toLowerCase())),
    ];

    return (
        <div className="min-h-screen bg-background flex flex-col">
            <HeaderWrapper />
            <main className="flex-grow pt-20">
                <ResourcesList
                    blogs={blogs}
                    whitepapers={mergedWhitepapers}
                    ynsights={ynsights ?? []}
                />
            </main>
            <FooterWrapper />
        </div>
    );
}
