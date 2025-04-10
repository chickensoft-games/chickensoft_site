import BlogPreview from "@/components/blog_preview/blog_preview";
import { getBlogs } from "@/utils/get_blogs";

export default function Home() {
  const blogPosts = getBlogs();

  return (
    <main className="grow container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Blog Posts</h1>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {blogPosts.map((blogPost) => {
          const slug = blogPost.slugs[0];
          return (
            <BlogPreview slug={slug} key={slug} className="m-0"></BlogPreview>
          );
        })}
      </div>
    </main>
  );
}
