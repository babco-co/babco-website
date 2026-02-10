import Image from "next/image";
import Link from "next/link";
import { BlogPost } from "@/app/insights/types";

interface BlogPostCardProps {
  post: BlogPost;
}

const BlogPostCard = ({ post }: BlogPostCardProps) => {
  const formattedDate = new Date(post.pubDateISO).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Link
      className="group block"
      href={`/insights/${post.slug}`}
    >
      <article className="h-full overflow-hidden transition-all duration-300 bg-white/50 dark:bg-[#0C0C0C] relative">
        <div className="relative aspect-video overflow-hidden">
          {post.thumbnail ? (
            <Image
              src={post.thumbnail}
              alt={post.title}
              width={1024}
              height={576}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              priority={false}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <div className="w-full h-full bg-linear-to-br from-gray-200 to-gray-50 dark:from-gray-800 dark:to-gray-900" />
          )}
        </div>
        <div className="p-6">
          <div className="mb-4">
            <p className="text-sm text-dark-gray mb-2">
              {formattedDate} &middot; {post.creator}
            </p>
            <h3 className="text-xl font-semibold leading-snug text-text-primary-light dark:text-text-primary-dark group-hover:text-brand-light dark:group-hover:text-brand-dark transition-colors">
              {post.title}
            </h3>
          </div>
          <p className="text-dark-gray line-clamp-2 text-sm leading-relaxed">
            {post.description}
          </p>
        </div>
      </article>
    </Link>
  );
};

export default BlogPostCard;
