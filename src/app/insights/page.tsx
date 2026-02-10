import { Metadata } from "next";
import Header from "@/components/header/header";
import { Spacer } from "@/components/spacer";
import { fetchBlogPosts } from "@/lib/services/blog";
import BlogPostGrid from "@/app/insights/_components/blog-post-grid";

export const metadata: Metadata = {
  title: "Insights | Babco",
  description:
    "Insights on AI strategy, design, and technology from the Babco team.",
  openGraph: {
    title: "Insights | Babco",
    description:
      "Insights on AI strategy, design, and technology from the Babco team.",
    type: "website",
  },
};

export default async function BlogPage() {
  const posts = await fetchBlogPosts();

  return (
    <div className="w-full min-h-screen font-helvetica">
      <Spacer className="w-full mt-5 px-5">
        <Header />
      </Spacer>

      <Spacer className="w-full px-5 py-8 mt-[108px]">
        <BlogPostGrid posts={posts} />
      </Spacer>
    </div>
  );
}
