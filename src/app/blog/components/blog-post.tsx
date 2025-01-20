"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BlogPost } from "@/app/blog/types";
import { fetchBlogPosts } from "../api";
import { createSlug } from "@/lib/utils/helper";

interface BlogPostsProps {
  username: string;
}

const BlogPosts = ({ username }: BlogPostsProps) => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadPosts() {
      try {
        const fetchedPosts = await fetchBlogPosts(username);
        setPosts(fetchedPosts);
      } catch (error: unknown) {
        console.error("Error loading posts:", error);
        setError("Failed to load blog posts");
      } finally {
        setLoading(false);
      }
    }
    loadPosts();
  }, [username]);

  if (loading) {
    return (
      <div className="min-h-[200px] flex justify-center items-center">
        <div className="h-8 w-8 rounded-full border-b-2 border-gray-900 animate-spin"></div>
      </div>
    );
  }

  if (error) {
    return <div className="text-red-500 text-center p-4">{error}</div>;
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <article
          key={post.link}
          className="rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow bg-white"
        >
          {post.thumbnail && (
            <Image
              src={post.thumbnail}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
          )}
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2 line-clamp-2">
              {post.title}
            </h3>
            <p className="text-gray-600 mb-4 text-sm">
              {post.pubDate} • {post.creator}
            </p>
            <div
              className="text-gray-700 mb-4 line-clamp-3"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
            <Link
              href={`/blog/${createSlug(post.title)}`}
              className="inline-flex items-center text-blue hover:text-brand-light"
            >
              Read More
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
};

export default BlogPosts;
