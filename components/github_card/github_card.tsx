import { cn } from "fumadocs-ui/components/api";
import { JSX, Suspense, use } from "react";
import { FaStar } from "react-icons/fa";
import { FaCodeFork } from "react-icons/fa6";
import "server-only";
import SiteImage from "../site_image/site_image";
import style from "./github_card.module.css";
import { getRepository, GithubRepository } from "./github_client";
import { LanguageColor } from "./github_languages";

export type GithubCardProps = {
  owner: string;
  repo: string;
  logo?: string;
  className?: string;
};

export default async function GithubCard(
  props: GithubCardProps
): Promise<JSX.Element> {
  const repoPromise = getRepository(props.owner, props.repo);

  const fullName = `${props.owner}/${props.repo}`;
  return (
    <Suspense
      fallback={
        <GithubCardView
          organization={props.owner}
          name={props.repo}
          logo={props.logo}
          description="&nbsp;"
          url={"https://github.com" + fullName}
          stars={0}
          forks={0}
          fullName={fullName}
          className={props.className}
        />
      }
    >
      <GithubCardReal
        repoPromise={repoPromise}
        logo={props.logo}
        className={props.className}
      />
    </Suspense>
  );
}

type GithubCardRealProps = {
  repoPromise: Promise<GithubRepository>;
  logo?: string;
  className?: string;
};

function GithubCardReal(props: GithubCardRealProps): JSX.Element {
  const repo = use(props.repoPromise);

  return (
    <GithubCardView {...repo} logo={props.logo} className={props.className} />
  );
}

type GithubCardViewProps = GithubRepository & {
  logo?: string;
  className?: string;
};

function GithubCardView(props: GithubCardViewProps): JSX.Element {
  return (
    <a
      href={props.url}
      className={cn(
        style.githubCard,
        `
        font-sans
        mx-auto
        pop

        border
        bg-[var(--color-fd-card)]
        text-[var(--color-fd-card-foreground)]
        border-[var(--color-fd-border)]
        rounded-md
        p-4
        shadow-md
        hover:shadow-lg
        transition-shadow
        my-4
        decoration-0
        min-h-[170px]
        not-prose
        min-w-min
        flex
        flex-col
        max-w-lg
        `,
        props.className
      )}
    >
      <header className="flex items-start justify-between mb-3 ">
        <div className="flex items-start space-x-2 shrink-0 mr-2">
          <div className="title leading-tight flex flex-col items-start shrink-0">
            <span
              className="text-xs text-[var(--color-fd-muted-foreground)]"
              style={{ textDecoration: "none !important" }}
            >
              {props.organization}/
            </span>
            <span id={style.name} className="text-lg font-semibold ml-2 mt-1">
              {props.name}
            </span>
          </div>
        </div>

        {props.logo && (
          <div className="logo ml-3 mr-2">
            <SiteImage
              src={props.logo}
              alt={`${props.name} logo`}
              className="h-10 w-auto min-w-10 object-contain"
            />
          </div>
        )}
      </header>

      {props.description && (
        <div className="description text-left text-sm">{props.description}</div>
      )}

      <footer className="footer flex flex-row space-x-4 self-start items-end grow mt-2">
        <span className="meta grow flex items-center justify-end space-x-1">
          <FaStar id={style.starIcon} size="16px" />
          <span className="text-sm font-semibold">{props.stars}</span>
        </span>

        <span className="meta flex items-center space-x-1 mb-[2px]">
          <FaCodeFork size="12px" />
          <span className="text-xs">{props.forks}</span>
        </span>
        <Language
          language={props.language}
          languageColor={props.languageColor}
          className="mb-[2px]"
        />
      </footer>
    </a>
  );
}

type LanguageProps = {
  language?: string;
  languageColor?: LanguageColor;
  className?: string;
};

function Language(props: LanguageProps): JSX.Element {
  if (!props.language) {
    return <></>;
  }

  return (
    <span
      className={cn("language flex items-center space-x-1", props.className)}
    >
      <span
        className="language-badge inline-block w-2 h-2 rounded-full"
        style={{
          backgroundColor: props.languageColor?.color ?? "gray",
        }}
      />
      <span className="language-name text-xs">{props.language}</span>
    </span>
  );
}
