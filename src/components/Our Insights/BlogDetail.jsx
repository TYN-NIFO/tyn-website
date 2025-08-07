import React, { useEffect, useState } from 'react';
import { sanity } from '../../sanityClient';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { FiClock, FiCalendar, FiArrowLeft } from 'react-icons/fi';
import { PortableText } from '@portabletext/react';
import { sampleBlog } from './localBlogs';
import { BlogCard } from './BlogCard';
import { AuthorInfo } from './AuthorInfo';
import { BlogTag } from './BlogTag';
import { Button } from './ui/button';
import Navbar from '../Navbar';

const BlogDetail = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const [blog, setBlog] = useState(null);
    const [relatedBlogs, setRelatedBlogs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // For now, use local data. Later this will fetch from Sanity
        if (slug === sampleBlog.slug.current) {
            setBlog(sampleBlog);
            setRelatedBlogs([]); // No related blogs for now
        } else {
            setBlog(null);
        }
        setLoading(false);
        
        // Uncomment below when Sanity is set up
        /*
        // Fetch the specific blog post
        sanity.fetch(`*[_type == "blog" && slug.current == $slug && isPublished == true][0]{
            _id,
            title,
            slug,
            author,
            authorTitle,
            "authorImageUrl": authorImage.asset->url,
            publishedAt,
            excerpt,
            content,
            "featuredImageUrl": featuredImage.asset->url,
            readTime,
            tags
        }`, { slug })
            .then((data) => {
                setBlog(data);
                setLoading(false);
                
                // Fetch related blogs (excluding current blog)
                if (data && data.tags) {
                    sanity.fetch(`*[_type == "blog" && isPublished == true && _id != $currentId && count(tags[@ in $currentTags]) > 0] | order(publishedAt desc)[0...3]{
                        _id,
                        title,
                        slug,
                        author,
                        "featuredImageUrl": featuredImage.asset->url,
                        publishedAt,
                        excerpt,
                        readTime
                    }`, { 
                        currentId: data._id, 
                        currentTags: data.tags 
                    })
                    .then((relatedData) => {
                        setRelatedBlogs(relatedData);
                    })
                    .catch((err) => {
                        console.error("Error fetching related blogs:", err);
                    });
                }
            })
            .catch((err) => {
                console.error("Error fetching blog:", err);
                setLoading(false);
            });
        */
    }, [slug]);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    const handleBackToYnsights = () => {
        navigate('/ynsights?tab=blogs');
    };

    if (loading) {
        return (
            <div className="flex flex-col">
                <div>
                    <Navbar />
                </div>
                <div className="mt-16 flex flex-col items-center justify-center min-h-screen">
                    <div className="animate-pulse w-full max-w-4xl">
                        <div className="bg-gray-200 h-64 rounded-lg mb-6"></div>
                        <div className="h-8 bg-gray-200 rounded mb-4"></div>
                        <div className="h-4 bg-gray-200 rounded mb-2"></div>
                        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                    </div>
                </div>
            </div>
        );
    }

    if (!blog) {
        return (
            <div className="flex flex-col">
                <div>
                    <Navbar />
                </div>
                <div className="mt-16 flex flex-col items-center justify-center min-h-screen">
                    <div className="text-center">
                        <h1 className="text-2xl font-semibold text-[#333333] mb-4">Blog Post Not Found</h1>
                        <p className="text-[#626262] mb-6">The blog post you're looking for doesn't exist or has been removed.</p>
                        <button 
                            onClick={handleBackToYnsights}
                            className="inline-flex items-center text-[#2287C0] hover:underline"
                        >
                            <FiArrowLeft className="mr-2" />
                            Back to Ynsights
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="flex flex-col">
            <div>
                <Navbar />
            </div>
            <div className="mt-16 flex flex-col items-center justify-center">
                <div className="max-w-4xl w-full px-4 sm:px-0">
                    {/* Animated Breadcrumb */}
                    <div className="mb-6">
                        <Button
                            variant="ghost"
                            onClick={handleBackToYnsights}
                            className="flex items-center gap-2 p-0 h-auto text-[#2287C0] hover:text-[#333333] transition-colors duration-200"
                        >
                            <FiArrowLeft size={16} />
                            Back to Ynsights
                        </Button>
                    </div>

                    {/* Header Section */}
                    <article className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
                        <div className="aspect-video w-full overflow-hidden">
                            <img
                                src={blog.featuredImageUrl || '/coming-soon.jpg'}
                                alt={blog.title}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div className="p-8">
                            {/* Title and Meta */}
                            <div className="mb-8">
                                <h1 className="mb-6 text-4xl font-bold leading-tight text-[#333333]">
                                    {blog.title}
                                </h1>
                                
                                <p className="text-xl mb-6 leading-relaxed text-[#626262]">
                                    {blog.excerpt}
                                </p>

                                {/* Meta Info */}
                                <div className="flex flex-wrap items-center gap-6 mb-6 pb-6 border-b border-gray-100">
                                    <div className="flex items-center gap-2">
                                        <FiClock size={18} className="text-[#2287C0]" />
                                        <span className="text-sm text-[#626262]">
                                            {blog.readTime} min read
                                        </span>
                                    </div>
                                    <span className="text-sm text-[#626262]">
                                        {formatDate(blog.publishedAt)}
                                    </span>
                                </div>

                                {/* Author Info - moved below time and date */}
                                <div className="mb-6">
                                    <AuthorInfo 
                                        author={{
                                            name: blog.author,
                                            title: blog.authorTitle,
                                            avatar: blog.authorImageUrl
                                        }}
                                        showTitle={true}
                                        size="md"
                                    />
                                </div>

                                {/* Tags */}
                                {blog.tags && blog.tags.length > 0 && (
                                    <div className="flex flex-wrap gap-2 mb-8">
                                        {blog.tags.map((tag, index) => (
                                            <BlogTag key={tag} tag={tag} size="md" />
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Content */}
                            <div className="prose prose-lg max-w-none">
                                <PortableText 
                                    value={blog.content}
                                    components={{
                                        block: {
                                            h1: ({children}) => <h1 className="text-3xl font-bold text-[#333333] mb-6">{children}</h1>,
                                            h2: ({children}) => <h2 className="text-2xl font-bold text-[#333333] mb-4 mt-8">{children}</h2>,
                                            h3: ({children}) => <h3 className="text-xl font-bold text-[#333333] mb-3 mt-6">{children}</h3>,
                                            h4: ({children}) => <h4 className="text-lg font-bold text-[#333333] mb-2 mt-4">{children}</h4>,
                                            normal: ({children}) => <p className="text-[#626262] leading-relaxed mb-4">{children}</p>,
                                            blockquote: ({children}) => (
                                                <blockquote className="border-l-4 border-[#2287C0] pl-6 my-6 italic text-lg bg-blue-50 py-4 rounded-r-lg relative">
                                                    <div className="absolute top-2 left-2 text-4xl text-[#2287C0] opacity-20">"</div>
                                                    <p className="text-[#626262]">{children}</p>
                                                </blockquote>
                                            ),
                                        },
                                        list: {
                                            bullet: ({children}) => <ul className="list-disc list-inside text-[#626262] mb-4 space-y-1">{children}</ul>,
                                            number: ({children}) => <ol className="list-decimal list-inside text-[#626262] mb-4 space-y-1">{children}</ol>,
                                        },
                                        listItem: ({children}) => <li className="text-[#626262]">{children}</li>,
                                    }}
                                />
                            </div>
                        </div>
                    </article>

                    {/* Related Articles */}
                    {relatedBlogs.length > 0 && (
                        <section className="mt-12">
                            <h2 className="mb-8 text-2xl font-semibold text-[#333333]">
                                More Articles
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {relatedBlogs.slice(0, 3).map((relatedBlog, index) => (
                                    <BlogCard
                                        key={relatedBlog._id}
                                        post={relatedBlog}
                                        size="sm"
                                    />
                                ))}
                            </div>
                        </section>
                    )}
                </div>
            </div>
        </div>
    );
};

export default BlogDetail; 