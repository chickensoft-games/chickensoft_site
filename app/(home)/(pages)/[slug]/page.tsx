import { site } from "@/app/global";
import mdxComponents from "@/components/markdown_components";
import { pagesLoader } from "@/lib/source";
import { DocsLayout } from "fumadocs-ui/layouts/docs";
import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
} from "fumadocs-ui/page";
import { Metadata } from "next";
import { notFound } from "next/navigation";

/** SEO */
export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const params = await props.params;
  const page = pagesLoader.getPage([params.slug]);

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
  const page = pagesLoader.getPage([params.slug]);

  if (!page) notFound();

  const Mdx = page.data.body;

  return (
    <main className="mt-12 lg:mt-0">
      <DocsLayout
        tree={{ name: "", children: [] }}
        nav={{ enabled: false }}
        sidebar={{ enabled: false }}
      >
        <DocsPage
          // toc={page.data.toc}
          tableOfContentPopover={{ enabled: false }}
          full={false}
          container={{
            className: "max-w-none w-full",
          }}
        >
          <DocsTitle>{page.data.title}</DocsTitle>
          <DocsDescription className="block ">
            {page.data.description}
          </DocsDescription>
          <DocsBody className="max-w-full">
            <Mdx components={mdxComponents} />
          </DocsBody>
        </DocsPage>
      </DocsLayout>
    </main>
  );
}

export function generateStaticParams(): { slug: string }[] {
  return pagesLoader.getPages().map((page) => ({
    slug: page.slugs[0],
  }));
}
