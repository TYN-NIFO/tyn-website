import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'policy',
    title: 'Policy',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Policy Title',
            type: 'string',
            validation: Rule => Rule.required(),
        }),
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
            name: 'lastUpdated',
            title: 'Last Updated',
            type: 'date',
        }),
        defineField({
            name: 'content',
            title: 'Policy Content',
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
                    marks: {
                        annotations: [
                            {
                                name: 'link',
                                title: 'Link',
                                type: 'object',
                                fields: [
                                    {
                                        name: 'href',
                                        title: 'URL',
                                        type: 'url',
                                    },
                                ],
                            },
                        ],
                    },
                },
            ],
            validation: Rule => Rule.required(),
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
            lastUpdated: 'lastUpdated',
        },
        prepare(selection) {
            const { lastUpdated } = selection
            return {
                ...selection,
                subtitle: lastUpdated ? `Updated ${new Date(lastUpdated).toLocaleDateString()}` : 'No update date',
            }
        },
    },
})
