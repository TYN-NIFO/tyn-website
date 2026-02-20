import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'blog',
    title: 'Blog',
    type: 'document',
    fields: [
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: 'title',
            title: 'Blog Title',
            type: 'string',
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: 'author',
            title: 'Author Name',
            type: 'string',
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: 'authorTitle',
            title: 'Author Title/Description',
            type: 'text',
        }),
        defineField({
            name: 'authorImage',
            title: 'Author Image',
            type: 'image',
            options: { hotspot: true },
        }),
        defineField({
            name: 'publishedAt',
            title: 'Published At',
            type: 'datetime',
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: 'excerpt',
            title: 'Excerpt',
            type: 'text',
            description: 'Short description of the blog post',
        }),
        defineField({
            name: 'content',
            title: 'Blog Content',
            type: 'array',
            of: [
                {
                    type: 'block',
                    styles: [
                        { title: 'Normal', value: 'normal' },
                        { title: 'H1', value: 'h1' },
                        { title: 'H2', value: 'h2' },
                        { title: 'H3', value: 'h3' },
                        { title: 'H4', value: 'h4' },
                        { title: 'Quote', value: 'blockquote' },
                    ],
                    lists: [
                        { title: 'Bullet', value: 'bullet' },
                        { title: 'Numbered', value: 'number' },
                    ],
                },
                {
                    type: 'image',
                    options: { hotspot: true },
                },
            ],
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: 'tags',
            title: 'Tags',
            type: 'array',
            of: [{ type: 'string' }],
            options: {
                layout: 'tags',
            },
        }),
        defineField({
            name: 'featuredImage',
            title: 'Featured Image',
            type: 'image',
            options: { hotspot: true },
            description: 'Main image for the blog post',
        }),
        defineField({
            name: 'readTime',
            title: 'Read Time (minutes)',
            type: 'number',
            description: 'Estimated reading time in minutes',
        }),
        defineField({
            name: 'isPublished',
            title: 'Is Published',
            type: 'boolean',
            initialValue: false,
        }),
    ],
    preview: {
        select: {
            title: 'title',
            author: 'author',
            publishedAt: 'publishedAt',
            media: 'featuredImage',
        },
        prepare(selection) {
            const { author, publishedAt } = selection;
            return {
                ...selection,
                subtitle: author && publishedAt
                    ? `by ${author} on ${new Date(publishedAt).toLocaleDateString()}`
                    : author || 'No author',
            };
        },
    },
})
