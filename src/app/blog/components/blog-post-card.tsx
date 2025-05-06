import Image from "next/image";
import Link from "next/link";
import { BlogPost } from "@/app/blog/types";
import { createSlug } from "@/lib/utils/helper";

interface BlogPostCardProps {
  post: BlogPost;
}

const BlogPostCard = ({ post }: BlogPostCardProps) => {
  const getFirstImage = (
    content: string
  ): { src: string; width: number; height: number } | null => {
    const match = content.match(/<img[^>]+src="([^">]+)"/);
    if (match) {
      return {
        src: match[1],
        width: 1024,
        height: 576,
      };
    }
    return null;
  };

  const imageData = getFirstImage(post.content);

  return (
    <Link
      className="group block"
      key={post.link}
      href={`/blog/${createSlug(post.title)}`}
    >
      <article className="h-full overflow-hidden transition-all duration-300 bg-white/50 dark:bg-[#0C0C0C] relative">
        {/* Source Badge */}
        <div className="absolute top-4 right-4 z-10">
          <span className={`
            px-2 py-1 rounded-full text-xs font-medium
            ${post.source === 'medium' 
              ? 'bg-black text-white' 
              : 'bg-[#FF6719] text-white'
            }
          `}>
            {post.source === 'medium' ? 'Medium' : 'Substack'}
          </span>
        </div>

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
};

export default BlogPostCard;