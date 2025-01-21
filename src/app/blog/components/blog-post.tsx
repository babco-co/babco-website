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

  const getFirstImage = (
    content: string
  ): { src: string; width: number; height: number } | null => {
    const match = content.match(/<img[^>]+src="([^">]+)"/);
    if (match) {
      return {
        src: match[1],
        width: 1024, // Default width for Medium images
        height: 576, // Maintaining 16:9 aspect ratio
      };
    }
    return null;
  };

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
        <div className="h-12 w-12 rounded-full border-b-2 border-brand-light dark:border-brand-dark animate-spin"></div>
      </div>
    );
  }

  if (error) {
    return <div className="text-error text-center p-4">{error}</div>;
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => {
        const imageData = getFirstImage(post.content);

        return (
          <Link
          className="group block"
            key={post.link}
            href={`/blog/${createSlug(post.title)}`}
          >
            <article className="h-full rounded-xl border border-border-primary-light dark:border-border-primary-dark overflow-hidden hover:shadow-xl transition-all duration-300 bg-white/50 dark:bg-[#0C0C0C]">
              <div className="relative aspect-[16/9] overflow-hidden">
                {imageData ? (
                  <Image
                    src={imageData.src}
                    alt=""
                    width={imageData.width}
                    height={imageData.height}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    priority={false}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-50" />
                )}
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <p className="text-sm text-dark-gray mb-2">
                    {post.pubDate} • {post.creator}
                  </p>
                  <h3 className="text-xl font-semibold leading-snug text-text-primary-light dark:text-text-primary-dark group-hover:text-brand-light dark:group-hover:text-brand-dark transition-colors">
                    {post.title}
                  </h3>
                </div>
                <div
                  className="text-dark-gray line-clamp-2 text-sm leading-relaxed"
                  dangerouslySetInnerHTML={{
                    __html: post.content.replace(/<[^>]*>/g, "").trim(),
                  }}
                />
              </div>
            </article>
          </Link>
        );
      })}
    </div>
  );
};

export default BlogPosts;
