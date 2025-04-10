import { BlogPostWithUrl } from "@/lib/schemas";
import { blogLoader } from "@/lib/source";

export function getBlogs(): BlogPostWithUrl[] {
  return blogLoader
    .getPages()
    .map(
      (blog) =>
        ({ ...blog.data, url: blog.url, slugs: blog.slugs } as BlogPostWithUrl)
    )
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
