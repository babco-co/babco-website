import Header from "@/components/header/header";
import { Spacer } from "@/components/spacer";
import BlogPosts from "./components/blog-posts";

export default function BlogPage() {
  return (
    <div className="w-full min-h-screen font-helvetica">
      <Spacer className="w-full mt-5 px-5">
        <Header />
      </Spacer>

      <Spacer className="w-full px-5 py-8 mt-[108px]">
        <BlogPosts />
      </Spacer>
    </div>
  );
}