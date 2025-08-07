import React, { useEffect, useState } from 'react';
import { sanity } from '../../sanityClient';
import { blogs as localBlogs } from './localBlogs';
import { BlogCard } from './BlogCard';

const Blog = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // For now, use local data. Later this will fetch from Sanity
        setBlogs(localBlogs);
        setLoading(false);
        
        // Uncomment below when Sanity is set up
        /*
        sanity.fetch(`*[_type == "blog" && isPublished == true] | order(publishedAt desc){
            _id,
            title,
            slug,
            author,
            authorTitle,
            "authorImageUrl": authorImage.asset->url,
            publishedAt,
            excerpt,
            "featuredImageUrl": featuredImage.asset->url,
            readTime,
            tags
        }`)
            .then((data) => {
                setBlogs(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Error fetching blogs:", err);
                setLoading(false);
            });
        */
    }, []);

    if (loading) {
        return (
            <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-12 px-4 sm:px-0">
                {[1, 2, 3].map((i) => (
                    <div key={i} className="animate-pulse">
                        <div className="bg-gray-200 h-48 rounded-t-lg"></div>
                        <div className="p-4">
                            <div className="h-4 bg-gray-200 rounded mb-2"></div>
                            <div className="h-3 bg-gray-200 rounded mb-2"></div>
                            <div className="h-3 bg-gray-200 rounded w-2/3"></div>
                        </div>
                    </div>
                ))}
            </div>
        );
    }

    return (
        <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-12 px-4 sm:px-0">
            {blogs.length === 0 ? (
                <div className="col-span-full text-center py-12">
                    <p className="text-[#626262] text-lg">No blog posts available yet.</p>
                    <p className="text-[#626262] text-sm mt-2">Check back soon for new articles!</p>
                </div>
            ) : (
                blogs.map((blog, index) => (
                    <div 
                        key={blog._id} 
                        className="opacity-0 animate-fadeIn"
                        style={{ animationDelay: `${index * 0.1}s` }}
                    >
                        <BlogCard post={blog} />
                    </div>
                ))
            )}
        </div>
    );
};

export default Blog; 