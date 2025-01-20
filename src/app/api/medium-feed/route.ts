import { NextResponse } from "next/server";
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

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const username = searchParams.get("username");

    if (!username) {
      return NextResponse.json(
        { error: "Username is required" },
        { status: 400 }
      );
    }

    const response = await fetch(
      `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${username}`,
      {
        // Next.js 14 Route Handler cache options
        next: {
          revalidate: 300, // Cache for 5 minutes (300 seconds)
        },
      }
    );

    const data = (await response.json()) as RSS2JSONResponse;

    if (data.status !== "ok") {
      throw new Error("Failed to fetch blog posts");
    }

    const posts: BlogPost[] = data.items.map((item) => ({
      title: item.title,
      link: item.link,
      pubDate: new Date(item.pubDate).toLocaleDateString(),
      creator: item.author,
      content: item.description,
      thumbnail: item.thumbnail,
    }));

    return NextResponse.json(posts);
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : "Internal server error";
    console.error("Error in blog-posts API route:", errorMessage);
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
