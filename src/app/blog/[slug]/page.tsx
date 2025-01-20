"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { BlogPost } from "../types";
import { fetchBlogPosts } from "../api";
import { createSlug } from "@/lib/utils/helper";

export default function BlogPostPage() {
  const params = useParams();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadPost() {
      const posts = await fetchBlogPosts("oliviabatraski");
      const currentPost = posts.find(
        (p) => createSlug(p.title) === params.slug
      );
      setPost(currentPost || null);
      setLoading(false);
    }
    loadPost();
  }, [params.slug]);

  if (loading) return <div>Loading...</div>;
  if (!post) return <div>Post not found</div>;

  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      {post.thumbnail && (
        <Image
          src={post.thumbnail}
          alt={post.title}
          className="w-full h-64 object-cover rounded-lg mb-8"
        />
      )}
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <div className="text-gray-600 mb-8">
        {post.pubDate} • {post.creator}
      </div>
      <div
        className="prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  );
}
