import "server-only";

import { XMLParser } from "fast-xml-parser";
import { BlogPost } from "@/app/insights/types";
import {
  createSlug,
  decodeHtmlEntities,
  sanitizeSubstackHtml,
  extractFirstImage,
  stripHtmlTags,
} from "@/lib/utils/helper";

const SUBSTACK_FEED_URL = "https://oliviabatraski.substack.com/feed";

interface SubstackRssItem {
  title: string;
  link: string;
  pubDate: string;
  "dc:creator"?: string;
  creator?: string;
  description?: string;
  "content:encoded"?: string;
  enclosure?: {
    "@_url"?: string;
    "@_type"?: string;
  };
}

interface SubstackRssFeed {
  rss: {
    channel: {
      item: SubstackRssItem | SubstackRssItem[];
    };
  };
}

function extractSubstackSlug(link: string): string {
  // Substack URLs: https://oliviabatraski.substack.com/p/the-post-slug
  const segments = link.split("/").filter(Boolean);
  return segments[segments.length - 1] || "";
}

function parseRssItem(item: SubstackRssItem): BlogPost {
  const rawTitle = decodeHtmlEntities(item.title || "Untitled");
  const rawContent = item["content:encoded"] || item.description || "";
  // Sanitize FIRST (while data-attrs quotes are still entity-encoded), then decode
  const sanitizedContent = decodeHtmlEntities(sanitizeSubstackHtml(rawContent));
  const plainDescription = stripHtmlTags(
    decodeHtmlEntities(item.description || rawContent)
  ).slice(0, 300);

  const thumbnail =
    item.enclosure?.["@_url"] || extractFirstImage(rawContent);

  // Use Substack's own URL slug — guaranteed unique, clean
  const slug = extractSubstackSlug(item.link || "") || createSlug(rawTitle);

  return {
    title: rawTitle,
    slug,
    link: item.link || "",
    pubDateISO: new Date(item.pubDate).toISOString(),
    creator: item["dc:creator"] || item.creator || "Olivia Batraski",
    description: plainDescription,
    content: sanitizedContent,
    thumbnail: thumbnail || null,
  };
}

export async function fetchBlogPosts(): Promise<BlogPost[]> {
  const response = await fetch(SUBSTACK_FEED_URL, {
    next: {
      revalidate: 3600,
      tags: ["blog-posts"],
    },
  });

  if (!response.ok) {
    throw new Error(
      `Failed to fetch Substack RSS feed: ${response.status} ${response.statusText}`
    );
  }

  const xml = await response.text();

  const parser = new XMLParser({
    ignoreAttributes: false,
    attributeNamePrefix: "@_",
    isArray: (name) => name === "item",
  });

  const parsed = parser.parse(xml) as SubstackRssFeed;
  const items = parsed.rss.channel.item;
  const itemArray = Array.isArray(items) ? items : [items];

  const posts = itemArray.map(parseRssItem);

  posts.sort(
    (a, b) =>
      new Date(b.pubDateISO).getTime() - new Date(a.pubDateISO).getTime()
  );

  return posts;
}

export async function fetchBlogPostBySlug(
  slug: string
): Promise<BlogPost | null> {
  const posts = await fetchBlogPosts();
  return posts.find((p) => p.slug === slug) ?? null;
}
