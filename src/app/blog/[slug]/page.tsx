"use client";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { BlogPost } from "../types";
import { fetchBlogPosts } from "../api";
import { createSlug } from "@/lib/utils/helper";
import { Spacer } from "@/components/spacer";
import Header from "@/components/header/header";

export default function BlogPostPage() {
  const params = useParams();
  const router = useRouter();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadPost() {
      const posts = await fetchBlogPosts("babco");
      const currentPost = posts.find(
        (p) => createSlug(p.title) === params.slug
      );
      setPost(currentPost || null);
      setLoading(false);
    }
    loadPost();
  }, [params.slug]);

  if (loading) {
    return (
      <div className="w-full min-h-screen font-helvetica bg-background-light dark:bg-background-dark">
        <Spacer className="w-full mt-5 px-5">
          <Header />
        </Spacer>
        <div className="flex justify-center items-center min-h-[60vh] mt-[108px]">
          <div className="h-8 w-8 rounded-full border-b-2 border-brand-light dark:border-brand-dark animate-spin" />
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="w-full min-h-screen font-helvetica bg-background-light dark:bg-background-dark">
        <Spacer className="w-full mt-5 px-5">
          <Header />
        </Spacer>
        <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 mt-[108px]">
          <h1 className="text-2xl font-bold text-text-primary-light dark:text-text-primary-dark mb-4">
            Post not found
          </h1>
          <button
            onClick={() => router.back()}
            className="text-brand-light dark:text-brand-dark hover:opacity-80 transition-opacity"
          >
            ← Back to blog
          </button>
        </div>
      </div>
    );
  }

  const cleanedContent = post.content;

  return (
    <div className="w-full min-h-screen font-helvetica bg-background-light dark:bg-background-dark">
      <Spacer className="w-full mt-5 px-5">
        <Header />
      </Spacer>

      <article className="max-w-3xl mx-auto px-4 py-8 mt-[108px]">
        {/* Article Header */}
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-4 text-text-primary-light dark:text-text-primary-dark">
            {post.title}
          </h1>
          <div className="flex items-center text-light-gray dark:text-medium-gray">
            <span className="mr-2">{post.creator}</span>
            <span className="mx-2">•</span>
            <span>{post.pubDate}</span>
          </div>
        </header>

        {/* Article Content */}
        <div
          className="prose prose-lg max-w-none dark:prose-invert
            prose-headings:text-text-primary-light dark:prose-headings:text-text-primary-dark
            prose-p:text-text-primary-light dark:prose-p:text-text-primary-dark
            prose-a:text-brand-light dark:prose-a:text-brand-dark hover:prose-a:opacity-80
            prose-strong:text-text-primary-light dark:prose-strong:text-text-primary-dark
            prose-code:text-text-primary-light dark:prose-code:text-text-primary-dark
            prose-pre:bg-gray-100 dark:prose-pre:bg-gray-800
            prose-blockquote:border-l-brand-light dark:prose-blockquote:border-l-brand-dark"
          dangerouslySetInnerHTML={{ __html: cleanedContent }}
        />

        {/* Back Button */}
        <div className="mt-12 pt-8 border-t border-border-primary-light dark:border-border-primary-dark">
          <button
            onClick={() => router.back()}
            className="text-brand-light dark:text-brand-dark hover:opacity-80 transition-opacity"
          >
            ← Back to blog
          </button>
        </div>
      </article>
    </div>
  );
}
