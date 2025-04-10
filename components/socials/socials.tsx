import { TeamMember } from "@/lib/schemas";
import { cn } from "fumadocs-ui/components/api";
import { JSX } from "react";
import { FaDiscord, FaGithub, FaLinkedin, FaMastodon } from "react-icons/fa";
import { SiBluesky } from "react-icons/si";

export type SocialsProps = {
  teamMember: TeamMember;
  className?: string;
};

export default function Socials(props: SocialsProps): JSX.Element {
  const { teamMember, className } = props;

  const size = 24;

  const socials = [
    {
      url:
        teamMember.github_user &&
        `https://github.com/${teamMember.github_user}`,
      icon: <FaGithub size={size} />,
      label: "GitHub",
    },
    {
      url: teamMember.linked_in_url,
      icon: <FaLinkedin size={size} />,
      label: "LinkedIn",
    },
    {
      url: teamMember.mastodon_url,
      icon: <FaMastodon size={size} />,
      label: "Mastodon",
    },
    {
      url: teamMember.bsky_url,
      icon: <SiBluesky size={size} />,
      label: "Bluesky",
    },
    {
      url:
        teamMember.discord_user &&
        `https://discord.com/users/${teamMember.discord_user}`,
      icon: <FaDiscord size={size} />,
      label: "Discord",
    },
  ].filter((social) => social.url);

  return (
    <div className={cn("flex space-x-4", className)}>
      {socials.map((social, index) => (
        <a
          key={index}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--color-fd-accent-foreground)] hover:text-[var(--color-fd-primary)] superpop"
          aria-label={social.label}
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
}
