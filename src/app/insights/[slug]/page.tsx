import { Metadata } from "next";
import { notFound } from "next/navigation";
import { fetchBlogPosts, fetchBlogPostBySlug } from "@/lib/services/blog";
import { Spacer } from "@/components/spacer";
import Header from "@/components/header/header";
import BlogPostContent from "@/app/insights/_components/blog-post-content";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = await fetchBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await fetchBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found | Babco",
    };
  }

  return {
    title: `${post.title} | Babco Insights`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.pubDateISO,
      authors: [post.creator],
      images: post.thumbnail
        ? [
            {
              url: post.thumbnail,
              width: 1200,
              height: 630,
              alt: post.title,
            },
          ]
        : [],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: post.thumbnail ? [post.thumbnail] : [],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await fetchBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="w-full min-h-screen font-helvetica bg-background-light dark:bg-background-dark">
      <Spacer className="w-full mt-5 px-5">
        <Header />
      </Spacer>

      <BlogPostContent post={post} />
    </div>
  );
}
