import { BlogPost } from "../types";

interface BlogContentLoaderProps {
  post: BlogPost;
}

export default function BlogContentLoader({ post }: BlogContentLoaderProps) {
  // For Medium posts, we already have good content from RSS
  // For Substack posts, the RSS content is sufficient for now
  return (
    <div className="space-y-8">
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
    </div>
  );
}
