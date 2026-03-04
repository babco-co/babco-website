export interface SanityImage {
  asset: {
    _ref: string;
    _type: string;
  };
  alt?: string;
}

export interface SanitySlug {
  current: string;
  _type: string;
}

export interface SanityBlock {
  _type: string;
  _key: string;
  children: Array<{
    _type: string;
    _key: string;
    text: string;
    marks?: string[];
  }>;
  markDefs?: Array<{
    _type: string;
    _key: string;
    href?: string;
  }>;
  style?: string;
  listItem?: string;
  level?: number;
}

export interface AIService {
  _id: string;
  title: string;
  slug: SanitySlug;
  serviceNumber: string;
  description: string;
  fullDescription?: SanityBlock[];
  features?: string[];
  icon?: SanityImage;
  isActive: boolean;
  order: number;
  metadata?: {
    metaTitle?: string;
    metaDescription?: string;
  };
}

export type AIServiceListItem = Pick<
  AIService,
  | "_id"
  | "title"
  | "slug"
  | "serviceNumber"
  | "description"
  | "features"
  | "icon"
  | "order"
>;

export interface AIPageHero {
  _id: string;
  title: string;
  showTrademark: boolean;
  subtitle: string;
  sectionTitle: string;
}

export interface AIPage {
  _id: string;
  title: string;
  slug: SanitySlug;
  seoMetadata: {
    metaTitle?: string;
    metaDescription?: string;
    ogImage?: SanityImage;
  };
}
