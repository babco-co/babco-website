import Link from "next/link";
import { BlogPost } from "@/app/insights/types";

interface BlogPostContentProps {
  post: BlogPost;
}

const BlogPostContent = ({ post }: BlogPostContentProps) => {
  const formattedDate = new Date(post.pubDateISO).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <article className="max-w-3xl mx-auto px-4 py-8 mt-[108px]">
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-4 text-text-primary-light dark:text-text-primary-dark">
          {post.title}
        </h1>
        <div className="flex items-center text-light-gray dark:text-medium-gray">
          <span className="mr-2">{post.creator}</span>
          <span className="mx-2">&middot;</span>
          <span>{formattedDate}</span>
        </div>
      </header>

      <div
        className="prose prose-lg max-w-none dark:prose-invert
          prose-headings:text-text-primary-light dark:prose-headings:text-text-primary-dark
          prose-p:text-text-primary-light dark:prose-p:text-text-primary-dark
          prose-a:text-brand-light dark:prose-a:text-brand-dark hover:prose-a:opacity-80
          prose-strong:text-text-primary-light dark:prose-strong:text-text-primary-dark
          prose-code:text-text-primary-light dark:prose-code:text-text-primary-dark
          prose-pre:bg-gray-100 dark:prose-pre:bg-gray-800
          prose-blockquote:border-l-brand-light dark:prose-blockquote:border-l-brand-dark
          prose-img:rounded-lg"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      <div className="mt-12 pt-8 border-t border-border-primary-light dark:border-border-primary-dark">
        <Link
          href="/insights"
          className="text-brand-light dark:text-brand-dark hover:opacity-80 transition-opacity"
        >
          &larr; Back to Insights
        </Link>
      </div>
    </article>
  );
};

export default BlogPostContent;
