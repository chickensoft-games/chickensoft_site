import { site } from "@/app/global";
import Author from "@/components/author/author";
import FancyImage from "@/components/fancy_image/fancy_image";
import mdxComponents from "@/components/markdown_components";
import { BlogPostWithUrl } from "@/lib/schemas";
import { blogLoader } from "@/lib/source";
import { getBlogs } from "@/utils/get_blogs";
import { DocsLayout } from "fumadocs-ui/layouts/docs";
import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
} from "fumadocs-ui/page";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

/** SEO */
export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const params = await props.params;
  const page = blogLoader.getPage([params.slug]);

  if (!page) notFound();

  return {
    metadataBase: new URL(site.url),
    title: page.data.title,
    description: page.data.description,
    keywords: site.keywords.concat(page.data.keywords).join(", "),
    openGraph: {
      images: [page.data.image],
    },
  };
}

export default async function Page(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const blogPost = blogLoader.getPage([params.slug]);

  if (!blogPost) notFound();

  const Mdx = blogPost.data.body;
  const blogPosts = getBlogs().slice(0, 6);
  return (
    <>
      <DocsLayout
        tree={{ name: "", children: [] }}
        nav={{ enabled: false }}
        sidebar={{ enabled: false }}
      >
        <aside className="blog-sidebar sticky top-16 py-4 self-start hidden lg:block xl:block">
          <nav>
            <h2 className="text-xl font-semibold">Recent Blogs</h2>
            {blogPosts.map((blogPost) => (
              <BlogLink key={blogPost.url} blogPost={blogPost} />
            ))}
            <NavLink url="/blog" title="...view all blogs" />
          </nav>
        </aside>
        <DocsPage
          toc={blogPost.data.toc}
          tableOfContentPopover={{ enabled: false }}
          full={false}
          container={{
            className: "max-w-sm md:max-w-xl lg:max-w-3xl pr-4 mx-auto",
          }}
        >
          <DocsTitle>{blogPost.data.title}</DocsTitle>
          <DocsDescription className="block mb-0">
            {blogPost.data.description}
          </DocsDescription>
          <Author authorId={blogPost.data.author_id} />
          <p className="text-[var(--color-fd-muted-foreground)] text-sm font-serif">
            {/* humanizer for date */}
            {blogPost.data.date.toLocaleString("default", {
              month: "long",
              day: "2-digit",
              year: "numeric",
            })}{" "}
          </p>
          {blogPost.data.last_updated &&
            <p className="text-[var(--color-fd-muted-foreground)] text-sm font-serif italic">
              {"Last updated: "}
              {/* humanizer for date */}
              {blogPost.data.last_updated.toLocaleString("default", {
                month: "long",
                day: "2-digit",
                year: "numeric",
              })}{" "}
            </p>
          }
          <FancyImage
            src={blogPost.data.image}
            alt={blogPost.data.title}
            className="mb-4"
          ></FancyImage>
          <DocsBody className="font-serif max-w-full">
            <Mdx components={mdxComponents} />
          </DocsBody>
        </DocsPage>
      </DocsLayout>
    </>
  );
}

export function generateStaticParams(): { slug: string }[] {
  return blogLoader.getPages().map((page) => ({
    slug: page.slugs[0],
  }));
}

function BlogLink({ blogPost }: { blogPost: BlogPostWithUrl }) {
  return (
    <NavLink key={blogPost.url} url={blogPost.url} title={blogPost.title} />
  );
}

function NavLink({ url, title }: { url: string; title: string }) {
  return (
    <Link
      key={url}
      href={url}
      className="block py-2 underline decoration-[var(--color-fd-accent)] hover:opacity-80"
    >
      {title}
    </Link>
  );
}
