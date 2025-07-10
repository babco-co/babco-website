import { defineField, defineType } from 'sanity'

export const aiPageHeroType = defineType({
  name: 'aiPageHero',
  title: 'AI Page Hero Section',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Main Title',
      type: 'string',
      validation: (rule) => rule.required(),
      description: 'The main title (e.g., "Ai•conic")',
      initialValue: 'Ai•conic'
    }),
    defineField({
      name: 'showTrademark',
      title: 'Show Trademark Symbol',
      type: 'boolean',
      initialValue: true,
      description: 'Show the logo trademark'
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle/Description',
      type: 'text',
      validation: (rule) => rule.required().max(300),
      description: 'The description text below the title',
      initialValue: 'We don\'t just design AI products—we shape AI strategy, optimize workflows, and craft intelligent brand experiences that perform.'
    }),
    defineField({
      name: 'sectionTitle',
      title: 'Services Section Title',
      type: 'string',
      validation: (rule) => rule.required(),
      description: 'The title for the services section',
      initialValue: 'AI Services'
    }),
    defineField({
      name: 'isActive',
      title: 'Active',
      type: 'boolean',
      initialValue: true,
      description: 'Toggle to show/hide this hero section'
    })
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle',
      isActive: 'isActive'
    },
    prepare({ title, subtitle, isActive }) {
      return {
        title: `${title} ${isActive ? '✅' : '❌'}`,
        subtitle: subtitle
      }
    }
  }
})