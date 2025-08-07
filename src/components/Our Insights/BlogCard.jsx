import React from 'react';
import { Link } from 'react-router-dom';
import { FiClock, FiTrendingUp } from 'react-icons/fi';
import { Card, CardContent } from './ui/card';
import { AuthorInfo } from './AuthorInfo';
import { BlogTag } from './BlogTag';

export function BlogCard({ post, size = 'md' }) {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="h-full group">
      <Link to={`/ynsights/blog/${post.slug.current}`} className="block h-full">
        <Card className="group h-full cursor-pointer bg-white border border-gray-200 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-[#2287C0]/20">
          <div className="relative overflow-hidden">
            <div className="aspect-video overflow-hidden group-hover:scale-105 transition-transform duration-300">
              <img
                src={post.featuredImageUrl || '/coming-soon.jpg'}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Read time badge with gradient */}
            <div className="absolute top-3 right-3">
              <div className="px-3 py-1 rounded-full text-xs text-white flex items-center gap-1 bg-gradient-to-r from-black/70 to-black/50 backdrop-blur-sm">
                <FiClock size={12} />
                {post.readTime} min read
              </div>
            </div>

            {/* Trending indicator for featured posts */}
            {post._id === 'sample-blog-1' && (
              <div className="absolute top-3 left-3">
                <div className="px-2 py-1 rounded-full text-xs text-white flex items-center gap-1 bg-gradient-to-r from-red-500 to-orange-500">
                  <FiTrendingUp size={12} />
                  Trending
                </div>
              </div>
            )}

            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          
          <CardContent className="p-6 flex flex-col h-52">
            <div className="flex-1">
              <h3 
                className="line-clamp-2 mb-3 cursor-pointer transition-colors duration-200 text-lg font-semibold leading-tight text-[#2287C0] group-hover:text-[#1a6ba8]"
              >
                {post.title}
              </h3>
              
              <p 
                className="text-sm line-clamp-3 mb-4 leading-relaxed text-[#626262]"
              >
                {post.excerpt}
              </p>
            </div>
            
            <div className="space-y-3">
              <AuthorInfo 
                author={{
                  name: post.author,
                  title: post.authorTitle,
                  avatar: post.authorImageUrl
                }} 
                showTitle={false} 
                size="sm" 
              />
              
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-[#626262]">
                  {formatDate(post.publishedAt)}
                </span>
              </div>
              
              <div className="flex flex-wrap gap-1">
                {post.tags && post.tags.slice(0, 3).map((tag, index) => (
                  <BlogTag key={tag} tag={tag} size="sm" />
                ))}
                {post.tags && post.tags.length > 3 && (
                  <span className="text-xs px-2 py-1 text-[#626262]">
                    +{post.tags.length - 3} more
                  </span>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </Link>
    </div>
  );
} 