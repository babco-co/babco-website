"use client";

import { BlogPost } from "@/app/blog/types";
import BlogPostCard from "@/app/blog/_components/blog-post-card";
import { useEffect, useState } from "react";
import { fetchBlogPosts } from "@/lib/services/blog";

const BlogPosts = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadPosts() {
      try {
        const fetchedPosts = await fetchBlogPosts();
        setPosts(fetchedPosts);
        setError(null);
      } catch (err) {
        setError("Failed to load blog posts. Please try again later.");
        console.error("Error loading posts:", err);
      } finally {
        setLoading(false);
      }
    }

    loadPosts();
  }, []);

  if (loading) {
    return (
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3].map((n) => (
          <div
            key={n}
            className="h-[400px] bg-white/50 dark:bg-[#0C0C0C] animate-pulse rounded-lg"
          />
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] text-center p-4">
        <p className="text-text-primary-light dark:text-text-primary-dark mb-4">
          {error}
        </p>
        <button
          onClick={() => window.location.reload()}
          className="px-4 py-2 bg-brand-light dark:bg-brand-dark text-white rounded-lg hover:opacity-90 transition-opacity"
        >
          Retry
        </button>
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <p className="text-text-primary-light dark:text-text-primary-dark">
          No posts found.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <BlogPostCard key={post.link} post={post} />
      ))}
    </div>
  );
};

export default BlogPosts;
