import { defineField, defineType } from "sanity";

export const aiPage = defineType({
  name: "aiPage",
  title: "AI Services Page",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Page Title",
      type: "string",
      validation: (rule) => rule.required(),
      description: "Internal page title for reference",
      initialValue: "AI Services Page",
    }),
    defineField({
      name: "slug",
      title: "Page Slug",
      type: "slug",
      options: { source: "title" },
      validation: (rule) => rule.required(),
      description: "URL slug for this page",
      initialValue: { current: "services" },
    }),
    defineField({
      name: "hero",
      title: "Hero Section",
      type: "object",
      fields: [
        {
          name: "title",
          title: "Main Title",
          type: "string",
          validation: (rule: any) => rule.required(),
          description: 'The main title (e.g., "Ai•conic")',
          initialValue: "Ai•conic",
        },
        {
          name: "showTrademark",
          title: "Show Trademark Symbol",
          type: "boolean",
          initialValue: true,
          description: "Show the logo trademark",
        },
        {
          name: "subtitle",
          title: "Subtitle/Description",
          type: "text",
          validation: (rule: any) => rule.required().max(300),
          description: "The description text below the title",
          initialValue:
            "We don't just design AI products—we shape AI strategy, optimize workflows, and craft intelligent brand experiences that perform.",
        },
        {
          name: "sectionTitle",
          title: "Services Section Title",
          type: "string",
          validation: (rule: any) => rule.required(),
          description: "The title for the services section",
          initialValue: "AI Services",
        },
      ],
    }),
    defineField({
      name: "seoMetadata",
      title: "SEO Metadata",
      type: "object",
      fields: [
        {
          name: "metaTitle",
          title: "Page Title",
          type: "string",
          validation: (rule: any) => rule.max(60),
          description: "SEO title for the AI services page",
          initialValue: "AI Services | Ai•conic",
        },
        {
          name: "metaDescription",
          title: "Meta Description",
          type: "text",
          validation: (rule: any) => rule.max(160),
          description: "SEO description for the AI services page",
          initialValue:
            "We shape AI strategy, optimize workflows, and craft intelligent brand experiences that perform.",
        },
        {
          name: "ogImage",
          title: "Social Media Image",
          type: "image",
          description: "Image for social media sharing",
          options: { hotspot: true },
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return { title: "AI Services Page" };
    },
  },
});
