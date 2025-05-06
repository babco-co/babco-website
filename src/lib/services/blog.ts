import { BlogPost } from "@/app/blog/types";

interface RSS2JSONItem {
  title: string;
  link: string;
  pubDate: string;
  author: string;
  description: string;
  thumbnail: string;
  content?: string;
}

interface RSS2JSONResponse {
  status: string;
  items: RSS2JSONItem[];
}

async function fetchFromRSS2JSON(url: string, source: 'medium' | 'substack'): Promise<BlogPost[]> {
  try {
    const response = await fetch(
      `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(url)}`,
      {
        next: {
          revalidate: 60,
          tags: ["blog-posts"],
        },
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      console.error(`Failed to fetch from ${source}:`, await response.text());
      return []; // Return empty array instead of throwing
    }

    const data = (await response.json()) as RSS2JSONResponse;

    if (data.status !== "ok") {
      console.error(`Invalid response status from ${source}:`, data.status);
      return []; // Return empty array for invalid status
    }

    return data.items.map((item) => {
      // For Substack, if no thumbnail, use a placeholder
      let processedThumbnail = item.thumbnail;
      if (source === 'substack' && !processedThumbnail) {
        processedThumbnail = `/api/placeholder/800/400?text=${encodeURIComponent(item.title)}`;
      }

      return {
        title: item.title,
        link: item.link,
        pubDate: new Date(item.pubDate).toLocaleDateString(),
        creator: item.author || 'Olivia Batraski', // Fallback author
        content: item.content || item.description || '',
        thumbnail: processedThumbnail,
        source,
        uniqueId: item.link.split('/').pop() || item.title
      };
    });
  } catch (error) {
    console.error(`Error fetching ${source} feed:`, error);
    return []; // Return empty array on error
  }
}

function compareTitles(title1: string, title2: string): number {
  const normalize = (str: string) => 
    str.toLowerCase()
       .replace(/[^a-z0-9\s]/g, '')
       .trim();

  const t1 = normalize(title1);
  const t2 = normalize(title2);

  const words1 = new Set(t1.split(/\s+/));
  const words2 = new Set(t2.split(/\s+/));

  const intersection = new Set([...words1].filter(x => words2.has(x)));
  const union = new Set([...words1, ...words2]);

  return intersection.size / union.size;
}

export async function fetchBlogPosts(mediumUsername: string): Promise<BlogPost[]> {
  try {
    // Fetch both feeds in parallel
    const [mediumPosts, substackPosts] = await Promise.all([
      fetchFromRSS2JSON(
        `https://medium.com/feed/${mediumUsername}`,
        'medium'
      ),
      fetchFromRSS2JSON(
        'https://oliviabatraski.substack.com/feed',
        'substack'
      )
    ]);

    // Combine posts
    const allPosts = [...mediumPosts, ...substackPosts];

    // If no posts were fetched, throw an error
    if (allPosts.length === 0) {
      throw new Error("No posts were fetched from either source");
    }

    // Remove duplicates
    const uniquePosts = allPosts.reduce((acc, current) => {
      const isDuplicate = acc.some(post => {
        const similarity = compareTitles(post.title, current.title);
        return similarity > 0.8;
      });

      if (!isDuplicate) {
        acc.push(current);
      } else {
        // If duplicate, prefer the Medium post
        const existingIndex = acc.findIndex(post => 
          compareTitles(post.title, current.title) > 0.8
        );
        if (existingIndex !== -1 && current.source === 'medium') {
          acc[existingIndex] = current;
        }
      }
      return acc;
    }, [] as BlogPost[]);

    // Sort by date
    return uniquePosts.sort((a, b) => {
      return new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime();
    });
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    throw error; // Propagate the error to be handled by the UI
  }
}