# Blog Section Setup

## Overview
A new blog section has been added to the Ynsights page with the following features:

### Features
- **Blog Tab**: Added as a third tab alongside "Whitepapers" and "Use Cases"
- **Blog Listing**: Grid layout showing blog posts with author info, read time, and tags
- **Blog Detail Page**: Full blog post view with author information, content, and related articles
- **Sanity CMS Integration**: Blog schema created for content management
- **Responsive Design**: Works on desktop and mobile devices

### Components Created

1. **Blog.jsx** - Blog listing component
2. **BlogDetail.jsx** - Individual blog post view
3. **localBlogs.js** - Sample blog data for testing
4. **blog.js** - Sanity schema for blog content

### Sanity Schema Fields

The blog schema includes:
- `title` - Blog post title
- `author` - Author name
- `authorTitle` - Author description/title
- `authorImage` - Author profile picture
- `publishedAt` - Publication date
- `excerpt` - Short description
- `content` - Full blog content (PortableText)
- `tags` - Array of tags
- `featuredImage` - Main blog image
- `readTime` - Estimated reading time
- `isPublished` - Publication status
- `slug` - URL slug

### Sample Blog Post

A sample blog post has been created with the content:
**"Digital Sheepdogs: How AI Agents Are Herding 3PLs into 2025"**
by Senthilvelan Natarajan

### Routes Added

- `/ynsights` - Main insights page with blog tab
- `/ynsights/blog/:slug` - Individual blog post page

### Testing

The blog functionality is currently using local data for testing. To test:

1. Navigate to `/ynsights`
2. Click on the "Blog" tab
3. Click on the sample blog post to view the full article

### Next Steps

1. **Add Images**: Add proper images for the blog post (author image and featured image)
2. **Sanity Setup**: Configure Sanity CMS with the blog schema
3. **Content Migration**: Move the sample blog content to Sanity
4. **Additional Blog Posts**: Add more blog posts through Sanity CMS

### Dependencies Added

- `@portabletext/react` - For rendering Sanity PortableText content

### Files Modified

- `src/components/Our Insights/WhatWeThink.jsx` - Added blog tab
- `src/App.js` - Added blog detail route
- `theyellownetwork-cms/schemaTypes/index.js` - Added blog schema
- `theyellownetwork-cms/schemaTypes/blog.js` - Created blog schema

### Styling

The blog components use the existing design system:
- Custom colors: `customBlue`, `customBlack`, `customGreyishBlack`
- Responsive grid layouts
- Consistent card designs
- Hover effects and transitions

### Content Structure

The sample blog post includes:
- Author information with image
- Publication date and read time
- Tags for categorization
- Structured content with headings and paragraphs
- Related articles section (currently empty)

This setup provides a complete blog functionality that can be easily extended with more content and features. 