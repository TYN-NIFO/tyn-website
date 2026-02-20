"use client";

import { useState } from "react";
import { Blog, Whitepaper, Ynsight } from "@/lib/sanity/types";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ResourceCard } from "./ResourceCard";

interface ResourcesListProps {
    blogs: Blog[];
    whitepapers: Whitepaper[];
    ynsights: Ynsight[];
}

export const ResourcesList = ({ blogs, whitepapers, ynsights }: ResourcesListProps) => {
    return (
        <section className="section-padding container-main min-h-screen">
            <div className="mb-12 text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Resources</h1>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    Explore our latest thinking, in-depth research, and success stories.
                </p>
            </div>

            <Tabs defaultValue="blogs" className="w-full">
                <div className="flex justify-center mb-12">
                    <TabsList className="grid w-full max-w-md grid-cols-3">
                        <TabsTrigger value="blogs">Blogs</TabsTrigger>
                        <TabsTrigger value="use-cases">Use Cases</TabsTrigger>
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
                        <div className="text-center py-20 text-gray-500">
                            No blogs found. Check back soon.
                        </div>
                    )}
                </TabsContent>

                <TabsContent value="use-cases" className="animate-fade-in">
                    {ynsights.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {ynsights.map((ynsight) => (
                                <div key={ynsight._id} className="h-full">
                                    <ResourceCard type="use-case" data={ynsight} />
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20 text-gray-500">
                            No use cases found. Check back soon.
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
                        <div className="text-center py-20 text-gray-500">
                            No whitepapers found. Check back soon.
                        </div>
                    )}
                </TabsContent>
            </Tabs>
        </section>
    );
};
