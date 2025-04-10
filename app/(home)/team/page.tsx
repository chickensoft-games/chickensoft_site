import ChickenContainer from "@/components/chicken_container/chicken_container";
import SiteFooter from "@/components/site_footer/site_footer";
import SiteImage from "@/components/site_image/site_image";
import { TeamCategory, TeamMember, TeamMemberWithUrl } from "@/lib/schemas";
import { teamLoader } from "@/lib/source";
import Link from "next/link";
import { JSX } from "react";

export default function Home(): JSX.Element {
  const teamMembers = teamLoader.getPages().map((teamMember) => ({
    ...teamMember.data,
    url: teamMember.url,
  })) as TeamMemberWithUrl[];

  return (
    <>
      <ChickenContainer className="mt-8 px-8 h-full grow mb-16">
        <>
          <p className="text-fd-muted-foreground">Meet the </p>
          <h1 className="text-4xl font-bold mb-4">Chickensoft Team</h1>

          <TeamSection
            title="Leadership"
            category="admin"
            members={teamMembers}
          />
          <TeamSection
            title="Community Moderators"
            category="mod"
            members={teamMembers}
          />
          <TeamSection
            title="Core Contributors"
            category="software"
            members={teamMembers}
          />
        </>
      </ChickenContainer>
      <SiteFooter />
    </>
  );
}

function TeamSection({
  title,
  category,
  members,
}: {
  title: string;
  category: TeamCategory;
  members: TeamMemberWithUrl[];
}): JSX.Element {
  return (
    <>
      <h2 className="text-3xl font-medium mb-4 mt-8 ml-4">{title}</h2>
      <div className="grid gap-x-4 gap-y-6 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 place-items-center">
        {members
          .filter((teamMember) => teamMember.category === category)
          .map((teamMember) => (
            <TeamMemberCard
              key={teamMember.author_id as string}
              url={teamMember.url}
              teamMember={teamMember}
            />
          ))}
      </div>
    </>
  );
}

function TeamMemberCard({
  url,
  teamMember,
}: {
  url: string;
  teamMember: TeamMember;
}): JSX.Element {
  const title = teamMember.title as string;
  return (
    <Link
      href={url}
      className="pop bg-fd-card max-w-md col-span-1 w-[100%] rounded-lg shadow-md overflow-hidden p-6 block"
    >
      <div className="flex flex-row">
        <SiteImage
          src={teamMember.image}
          alt={title}
          className="mr-6 border-[--color-fd-border] border-2 rounded-full overflow-hidden w-20 h-20 shrink-0"
        />
        <div className="flex flex-col">
          <h2 className="text-xl font-semibold mb-2">{title}</h2>
          <p className="mb-4">{teamMember.description as string}</p>
        </div>
      </div>
    </Link>
  );
}
