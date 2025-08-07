export default {
  name: 'blog',
  title: 'Blog',
  type: 'document',
  fields: [
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: Rule => Rule.required(),
    },
    {
      name: 'title',
      title: 'Blog Title',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'author',
      title: 'Author Name',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'authorTitle',
      title: 'Author Title/Description',
      type: 'text',
    },
    {
      name: 'authorImage',
      title: 'Author Image',
      type: 'image',
      options: { hotspot: true },
      validation: Rule =>
        Rule.custom((file) => {
          const acceptedTypes = ['image/jpeg', 'image/png', 'image/jpg'];
          if (!file?.asset?._ref && !file?.asset?._type) return true;
          if (file.asset.mimeType && !acceptedTypes.includes(file.asset.mimeType)) {
            return 'Only JPG, JPEG, or PNG images are allowed';
          }
          return true;
        }),
    },
    {
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      validation: Rule => Rule.required(),
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      description: 'Short description of the blog post',
    },
    {
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
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    },
    {
      name: 'featuredImage',
      title: 'Featured Image',
      type: 'image',
      options: { hotspot: true },
      description: 'Main image for the blog post',
      validation: Rule =>
        Rule.custom((file) => {
          const acceptedTypes = ['image/jpeg', 'image/png', 'image/jpg'];
          if (!file?.asset?._ref && !file?.asset?._type) return true;
          if (file.asset.mimeType && !acceptedTypes.includes(file.asset.mimeType)) {
            return 'Only JPG, JPEG, or PNG images are allowed';
          }
          return true;
        }),
    },
    {
      name: 'readTime',
      title: 'Read Time (minutes)',
      type: 'number',
      description: 'Estimated reading time in minutes',
    },
    {
      name: 'isPublished',
      title: 'Is Published',
      type: 'boolean',
      initialValue: false,
    },
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
}; 