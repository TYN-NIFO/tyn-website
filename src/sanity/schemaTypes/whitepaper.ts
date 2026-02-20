import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'whitepaper',
    title: 'Whitepaper',
    type: 'document',
    fields: [
        defineField({ name: 'title', title: 'Title', type: 'string' }),
        defineField({ name: 'description', title: 'Description', type: 'text' }),
        defineField({
            name: 'file',
            title: 'Download File',
            type: 'file',
        }),
    ],
})
