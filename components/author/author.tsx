import { TeamMemberWithUrl } from "@/lib/schemas";
import { teamLoader } from "@/lib/source";
import { cn } from "fumadocs-ui/components/api";
import Link from "next/link";
import { JSX } from "react";
import SiteImage from "../site_image/site_image";
import Socials from "../socials/socials";

export type AuthorProps = {
  authorId?: string;
  className?: string;
};

export default function Author(props: AuthorProps): JSX.Element {
  const page = teamLoader.getPage([props.authorId!]);
  if (!page) {
    throw new Error(`Author with id ${props.authorId} not found`);
  }
  const teamMember: TeamMemberWithUrl = { ...page.data, url: page.url };

  return (
    <div
      className={cn(
        "not-prose font-[catamaran] flex flex-row items-center justify-between flex-wrap gap-2 p-4 border-1 bg-[var(--color-fd-muted)] border-[var(--color-fd-border)] py-2 px-4 rounded-lg",
        props.className
      )}
    >
      <Link href={teamMember.url} className="flex flex-row items-center shrink">
        <SiteImage
          src={teamMember.image}
          alt={teamMember.title}
          className="mr-4 border-[--color-fd-border] border-2 rounded-full overflow-hidden w-12 h-12 shrink-0"
        />
        <div className="flex flex-col shrink">
          <h2 className="text-md font-semibold">{teamMember.title}</h2>
          <p className="text-sm">{teamMember.description}</p>
        </div>
      </Link>
      <Socials teamMember={teamMember} className="ml-2 shrink" />
    </div>
  );
}
