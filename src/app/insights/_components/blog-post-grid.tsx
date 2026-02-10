import { BlogPost } from "@/app/insights/types";
import BlogPostCard from "@/app/insights/_components/blog-post-card";

interface BlogPostGridProps {
  posts: BlogPost[];
}

const BlogPostGrid = ({ posts }: BlogPostGridProps) => {
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
        <BlogPostCard key={post.slug} post={post} />
      ))}
    </div>
  );
};

export default BlogPostGrid;
