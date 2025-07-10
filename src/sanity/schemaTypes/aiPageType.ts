import { defineField, defineType } from 'sanity'

export const aiPageType = defineType({
  name: 'aiPage',
  title: 'AI Services Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      validation: (rule) => rule.required(),
      description: 'Internal page title for reference',
      initialValue: 'AI Services Page'
    }),
    defineField({
      name: 'slug',
      title: 'Page Slug',
      type: 'slug',
      options: { source: 'title' },
      validation: (rule) => rule.required(),
      description: 'URL slug for this page',
      initialValue: { current: 'services' }
    }),
    defineField({
      name: 'seoMetadata',
      title: 'SEO Metadata',
      type: 'object',
      fields: [
        {
          name: 'metaTitle',
          title: 'Page Title',
          type: 'string',
          validation: (rule) => rule.max(60),
          description: 'SEO title for the AI services page',
          initialValue: 'AI Services | Ai•conic'
        },
        {
          name: 'metaDescription',
          title: 'Meta Description',
          type: 'text',
          validation: (rule) => rule.max(160),
          description: 'SEO description for the AI services page',
          initialValue: 'We shape AI strategy, optimize workflows, and craft intelligent brand experiences that perform.'
        },
        {
          name: 'ogImage',
          title: 'Social Media Image',
          type: 'image',
          description: 'Image for social media sharing',
          options: { hotspot: true }
        }
      ]
    }),
    defineField({
      name: 'isActive',
      title: 'Page Active',
      type: 'boolean',
      initialValue: true,
      description: 'Toggle to enable/disable this page'
    })
  ],
  preview: {
    select: {
      title: 'title',
      slug: 'slug.current',
      isActive: 'isActive'
    },
    prepare({ title, slug, isActive }) {
      return {
        title: `${title} ${isActive ? '✅' : '❌'}`,
        subtitle: `/${slug}`
      }
    }
  }
})