import { HeaderWrapper } from "@/components/layout/HeaderWrapper";
import { FooterWrapper } from "@/components/layout/FooterWrapper";
import { ResourcesList } from "@/components/sections/resources/ResourcesList";
import { client } from "../../lib/sanity/client";
import { GET_BLOGS, GET_WHITEPAPERS, GET_YNSIGHTS } from "../../lib/sanity/queries";
import { Blog, Whitepaper, Ynsight } from "../../lib/sanity/types";

// Revalidate every 60 seconds (ISR)
export const revalidate = 60;

export default async function ResourcesPage() {
    const blogs = await client.fetch<Blog[]>(GET_BLOGS);
    const whitepapers = await client.fetch<Whitepaper[]>(GET_WHITEPAPERS);
    const ynsights = await client.fetch<Ynsight[]>(GET_YNSIGHTS);

    return (
        <div className="min-h-screen bg-background flex flex-col">
            <HeaderWrapper />
            <main className="flex-grow pt-20">
                <ResourcesList
                    blogs={blogs}
                    whitepapers={whitepapers}
                    ynsights={ynsights}
                />
            </main>
            <FooterWrapper />
        </div>
    );
}
