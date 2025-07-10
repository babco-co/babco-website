import { defineQuery } from "next-sanity";

export const AI_SERVICES_QUERY = defineQuery(`*[
  _type == "aiService" 
  && isActive == true
] | order(order asc) {
  _id,
  title,
  slug,
  serviceNumber,
  description,
  features,
  icon,
  order
}`);

export const AI_PAGE_HERO_QUERY = defineQuery(`*[
  _type == "aiPageHero"
][0] {
  _id,
  title,
  showTrademark,
  subtitle,
  sectionTitle
}`);

export const AI_PAGE_QUERY = defineQuery(`*[
  _type == "aiPage"
  && slug.current == "services"
][0] {
  _id,
  title,
  slug,
  seoMetadata
}`);
