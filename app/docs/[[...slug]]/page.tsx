import components from "@/components/markdown_components";
import { docsLoader } from "@/lib/source";
import defaultMdxComponents, { createRelativeLink } from "fumadocs-ui/mdx";
import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
} from "fumadocs-ui/page";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export default async function Page(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = docsLoader.getPage(params.slug);
  if (!page) notFound();

  const MDXContent = page.data.body;

  return (
    <DocsPage toc={page.data.toc} full={page.data.full}>
      <div className="mx-4 mt-4">
        <DocsTitle className="mb-4">{page.data.title}</DocsTitle>
        <DocsDescription className="mb-4">
          {page.data.description}
        </DocsDescription>
        <DocsBody>
          <MDXContent
            components={{
              ...defaultMdxComponents,
              // Our custom components
              ...components,
              // this allows you to link to other pages with relative file paths
              a: createRelativeLink(docsLoader, page),
            }}
          />
        </DocsBody>
      </div>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return docsLoader.generateParams();
}

export async function generateMetadata(props: {
  params: Promise<{ slug?: string[] }>;
}): Promise<Metadata> {
  const params = await props.params;
  const page = docsLoader.getPage(params.slug);
  if (!page) notFound();

  const metadata: Metadata = {
    title: page.data.title,
    description: page.data.description,
  };

  if (page.data.image) {
    // Sometimes docs pages can have their own thumbnail image.
    metadata.openGraph = {
      images: page.data.image,
    };
  }

  return metadata;
}
