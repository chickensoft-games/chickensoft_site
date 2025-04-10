import SiteImage from "@/components/site_image/site_image";
import Socials from "@/components/socials/socials";
import { teamLoader } from "@/lib/source";
import defaultMdxComponents from "fumadocs-ui/mdx";
import { notFound } from "next/navigation";

export default async function Page(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const teamMember = teamLoader.getPage([params.slug]);

  if (!teamMember) notFound();
  const Mdx = teamMember.data.body;

  return (
    <>
      <div className="container md:px-8 mt-16">
        <div className="grid grid-cols-4 gap-4 place-items-center">
          <div className="col-span-4 md:pr-8 lg:pr-8 md:col-span-1 lg:col-span-1">
            <SiteImage
              src={teamMember.data.image}
              alt={teamMember.data.title}
              className="border-[--color-fd-border] border-4 rounded-full overflow-hidden"
            />
          </div>
          <div className="col-span-3 place-self-start">
            <h1 className="mb-2 text-3xl font-bold">{teamMember.data.title}</h1>
            <p className="mb-4 text-fd-muted-foreground">
              {teamMember.data.description}
            </p>
            <Socials teamMember={teamMember.data} className="mb-4" />
            <div className="prose min-w-0">
              <Mdx components={defaultMdxComponents} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export function generateStaticParams(): { slug: string }[] {
  return teamLoader.getPages().map((teamMember) => ({
    slug: teamMember.slugs[0],
  }));
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const teamMember = teamLoader.getPage([params.slug]);

  if (!teamMember) notFound();

  return {
    title: teamMember.data.title,
    description: teamMember.data.description,
  };
}
