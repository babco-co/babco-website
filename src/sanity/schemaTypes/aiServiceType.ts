import { defineField, defineType } from 'sanity'

export const aiServiceType = defineType({
  name: 'aiService',
  title: 'AI Service',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Service Title',
      type: 'string',
      validation: (rule) => rule.required(),
      description: 'e.g., "AI Workshops & Education Sessions"'
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title' },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'serviceNumber',
      title: 'Service Number',
      type: 'string',
      validation: (rule) => rule.required(),
      description: 'Display number (e.g., "01", "02", "03")'
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (rule) => rule.required(),
      description: 'Brief description shown on the services page'
    }),
    defineField({
      name: 'fullDescription',
      title: 'Full Description',
      type: 'array',
      of: [
        { type: 'block' },
        {
          type: 'image',
          options: { hotspot: true }
        }
      ],
      description: 'Detailed content for the individual service page'
    }),
    defineField({
      name: 'features',
      title: 'Key Features',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'List of key features or benefits'
    }),
    defineField({
      name: 'icon',
      title: 'Service Icon',
      type: 'image',
      options: { hotspot: true },
      description: 'Optional icon for the service'
    }),
    defineField({
      name: 'isActive',
      title: 'Active Service',
      type: 'boolean',
      initialValue: true,
      description: 'Toggle to show/hide this service'
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      validation: (rule) => rule.required().min(1),
      description: 'Order in which services appear (lower numbers first)'
    }),
    defineField({
      name: 'metadata',
      title: 'SEO Metadata',
      type: 'object',
      fields: [
        {
          name: 'metaTitle',
          title: 'Meta Title',
          type: 'string',
          validation: (rule) => rule.max(60)
        },
        {
          name: 'metaDescription',
          title: 'Meta Description',
          type: 'text',
          validation: (rule) => rule.max(160)
        }
      ],
      options: { collapsible: true }
    })
  ],
  preview: {
    select: {
      title: 'title',
      serviceNumber: 'serviceNumber',
      media: 'icon'
    },
    prepare({ title, serviceNumber, media }) {
      return {
        title: `${serviceNumber} - ${title}`,
        media
      }
    }
  },
  orderings: [
    {
      title: 'Service Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }]
    }
  ]
})