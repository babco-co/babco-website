import { BlogPost } from "@/app/blog/types";

interface RSS2JSONItem {
  title: string;
  link: string;
  pubDate: string;
  author: string;
  description: string;
  thumbnail: string;
}

interface RSS2JSONResponse {
  status: string;
  items: RSS2JSONItem[];
}

export async function fetchBlogPosts(username: string): Promise<BlogPost[]> {
  try {
    const response = await fetch(
      `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/${username}`,
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

    console.log('response', response)

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = (await response.json()) as RSS2JSONResponse;

    if (data.status !== "ok") {
      throw new Error("Failed to fetch blog posts");
    }

    return data.items.map((item) => ({
      title: item.title,
      link: item.link,
      pubDate: new Date(item.pubDate).toLocaleDateString(),
      creator: item.author,
      content: item.description,
      thumbnail: item.thumbnail,
    }));
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    throw error;
  }
}
