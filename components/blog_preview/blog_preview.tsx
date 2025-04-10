import { blogLoader } from "@/lib/source";
import { promises as fs } from "fs";
import { cn } from "fumadocs-ui/components/api";
import defaultMdxComponents from "fumadocs-ui/mdx";
import Link from "next/link";
import { JSX } from "react";
import Markdown from "react-markdown";
import "server-only";
import SiteImage from "../site_image/site_image";

export type BlogPreviewProps = {
  slug: string;
  className?: string;
};

export default async function BlogPreview(
  props: BlogPreviewProps
): Promise<JSX.Element> {
  const blogPost = blogLoader.getPage([props.slug]);

  if (!blogPost) {
    throw new Error(`Blog with slug '${props.slug}' not found`);
  }

  const filePath = blogPost.data._file.absolutePath;
  let contents = await fs.readFile(filePath, { encoding: "utf-8" });
  contents = contents.split("---")[2];
  // get everything before the {/* truncate */} comment
  const preview = contents.split("{/* truncate */}")[0];

  return (
    <section
      className={cn(
        `
        pop
        font-sans
        bg-[var(--color-fd-muted)]
        text-[var(--color-fd-muted-foreground)]
        text-left
        relative
        mx-auto 
        my-6
        overflow-hidden 
        rounded-md
        border 
        border-[var(--color-fd-border)]
        shadow-md
        hover:shadow-lg
        transition-shadow m-4
        not-prose
        flex
        flex-col
      `,
        props.className
      )}
    >
      <Link href={`/blog/${props.slug}`} className="grow flex flex-col">
        {/* Header / Title */}
        <header
          className="
          p-4 
          border-b 
          border-[var(--color-fd-border)]
          bg-[var(--color-fd-card)]
        "
        >
          <h2
            className="
            text-xl 
            font-semibold 
            leading-tight 
            line-clamp-2
            text-[var(--color-fd-card-foreground)]
          "
          >
            {blogPost.data.title}
          </h2>
          {blogPost.data.description && (
            <p
              className="
              mt-1 
              text-sm 
              text-[var(--color-fd-card-foreground)]
              line-clamp-2
            "
            >
              {blogPost.data.description}
            </p>
          )}
        </header>

        <div>
          <SiteImage
            src={blogPost.data.image}
            alt={blogPost.data.title}
            className="w-full h-auto"
          />
        </div>

        {/* Preview Content */}
        <div className="flex-1 text-sm prose font-serif text-[var(--color-fd-muted-foreground)] relative">
          <div className="absolute w-full h-[100%] bg-gradient-to-t from-[var(--color-fd-muted)] to-transparent pointer-events-none" />
          <section className="p-4">
            <Markdown components={defaultMdxComponents}>{preview}</Markdown>
          </section>
        </div>

        {/* Footer / "Read More" link (optional) */}
        <footer
          className="
          p-4 
          text-center
          border-t
          border-[var(--color-fd-border)]
          flex flex-col items-center justify-end
        "
        >
          <p
            className="
            inline-block 
            hover:underline
            shrink
            text-sm 
            font-medium
            text-[var(--logo-text-shimmer)]
          "
          >
            Read More &rarr;
          </p>
        </footer>
      </Link>
    </section>
  );
}
