import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'ynsight',
    title: 'Ynsight',
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
            title: 'Use Case Title',
            type: 'string',
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: 'problemStatement',
            title: 'Problem Statement',
            type: 'text',
        }),
        defineField({
            name: 'solutionProviderName',
            title: 'Solution Provider Name',
            type: 'string',
        }),
        defineField({
            name: 'solutionProviderImage',
            title: 'Solution Provider Image',
            type: 'image',
            options: { hotspot: true },
        }),
        defineField({
            name: 'solution',
            title: 'Solution',
            type: 'text',
        }),
        defineField({
            name: 'impact',
            title: 'Impact',
            type: 'array',
            of: [
                {
                    type: 'block',
                    styles: [],
                    lists: [{ title: 'Bullet', value: 'bullet' }],
                },
            ],
            description: 'Use bullet points to list key impact areas',
        }),
        defineField({
            name: 'expertsTake',
            title: "Expert's Take",
            type: 'text',
        }),
        defineField({
            name: 'competitorPositioning',
            title: 'Competitor Positioning',
            type: 'text',
        }),
        defineField({
            name: 'enterpriseOneName',
            title: 'Enterprise 1 Name',
            type: 'string',
        }),
        defineField({
            name: 'enterpriseOneImage',
            title: 'Enterprise 1 Image',
            type: 'image',
            options: { hotspot: true },
        }),
        defineField({
            name: 'enterpriseTwoName',
            title: 'Enterprise 2 Name',
            type: 'string',
        }),
        defineField({
            name: 'enterpriseTwoImage',
            title: 'Enterprise 2 Image',
            type: 'image',
            options: { hotspot: true },
        }),
        defineField({
            name: 'industry',
            title: 'Industry Name',
            type: 'string',
            description: 'E.g., Automotive, BFSI, Manufacturing, etc.',
        }),
        defineField({
            name: 'thumbnail',
            title: 'Thumbnail Image',
            type: 'image',
            options: { hotspot: true },
            description: 'Thumbnail image for card display',
        }),
        defineField({
            name: 'testimonials',
            title: 'Testimonials',
            type: 'array',
            of: [{ type: 'string' }],
        }),
    ],
})
