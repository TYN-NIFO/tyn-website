import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'openPosition',
    title: 'Open Position',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Job Title',
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
            name: 'department',
            title: 'Department',
            type: 'string',
            options: {
                list: [
                    { title: 'Engineering', value: 'Engineering' },
                    { title: 'Design', value: 'Design' },
                    { title: 'Product', value: 'Product' },
                    { title: 'Marketing', value: 'Marketing' },
                    { title: 'Sales', value: 'Sales' },
                    { title: 'Operations', value: 'Operations' },
                    { title: 'Consulting', value: 'Consulting' },
                ],
            },
        }),
        defineField({
            name: 'location',
            title: 'Location',
            type: 'string',
            initialValue: 'Remote',
        }),
        defineField({
            name: 'employmentType',
            title: 'Employment Type',
            type: 'string',
            options: {
                list: [
                    { title: 'Full-time', value: 'Full-time' },
                    { title: 'Part-time', value: 'Part-time' },
                    { title: 'Contract', value: 'Contract' },
                    { title: 'Internship', value: 'Internship' },
                ]
            }
        }),
        defineField({
            name: 'experience',
            title: 'Experience Level',
            type: 'string',
            options: {
                list: [
                    { title: 'Entry Level', value: 'Entry Level' },
                    { title: 'Mid Level', value: 'Mid Level' },
                    { title: 'Senior', value: 'Senior' },
                    { title: 'Lead', value: 'Lead' },
                    { title: 'Executive', value: 'Executive' },
                ]
            }
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'array',
            of: [{ type: 'block' }],
        }),
        defineField({
            name: 'responsibilities',
            title: 'Responsibilities',
            type: 'array',
            of: [{ type: 'block' }],
        }),
        defineField({
            name: 'requirements',
            title: 'Requirements',
            type: 'array',
            of: [{ type: 'block' }],
        }),
        defineField({
            name: 'postedAt',
            title: 'Posted At',
            type: 'datetime',
            initialValue: (new Date()).toISOString(),
        }),
        defineField({
            name: 'isActive',
            title: 'Is Active',
            type: 'boolean',
            initialValue: true,
        })
    ],
    preview: {
        select: {
            title: 'title',
            subtitle: 'department',
        },
    },
})
