import { BlogPost } from "@/app/blog/types";
import BlogPostCard from "@/app/blog/components/blog-post-card";

interface BlogPostsProps {
  posts: BlogPost[];
}

const BlogPosts = ({ posts }: BlogPostsProps) => {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <BlogPostCard key={post.link} post={post} />
      ))}
    </div>
  );
};

export default BlogPosts;
