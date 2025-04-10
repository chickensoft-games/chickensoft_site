import { site } from "@/app/global";
import { cn } from "fumadocs-ui/components/api";
import { JSX, Suspense, use } from "react";
import "server-only";
import style from "./discord_invite.module.css";

// Render this component dynamically upon request.
export const dynamic = "force-dynamic";

// Our fetch function for Discord invite data:
async function fetchDiscordInviteData(
  inviteCode: string,
  fallbackData: any
): Promise<any> {
  const apiUrl = `https://discordapp.com/api/v6/invite/${inviteCode}?with_counts=true`;

  try {
    const res = await fetch(apiUrl, {
      // Cache for 10 minutes to keep things fresh-ish
      next: { revalidate: 60 * 10 },
    });

    if (!res.ok) throw new Error("Failed to fetch Discord invite");
    return await res.json();
  } catch {
    // If something fails, return the fallback
    console.warn(`Failed to fetch Discord invite data for ${inviteCode}:`);
    return fallbackData;
  }
}

export type DiscordInviteProps = {
  className?: string;
};

export default function DiscordInvite(props: DiscordInviteProps): JSX.Element {
  const discord = site.discord;

  // Fake discord response in case we get an error.
  const fallbackData = {
    approximate_member_count: discord.fallbackNumMembers,
    approximate_presence_count: discord.fallbackNumMembersOnline,
    guild: {
      id: discord.serverId,
      name: discord.title,
    },
  };

  // Fetch actual data or get fallback
  // (don't await so we can render fallback while loading)
  // We don't want our site to be delayed if discord is slow/down.
  const dataPromise = fetchDiscordInviteData(discord.inviteCode, fallbackData);

  return (
    <Suspense
      fallback={
        <DiscordInviteView
          {...props}
          url={discord.inviteUrl}
          image={discord.image}
          title={discord.title}
          numMembers={discord.fallbackNumMembers}
          numMembersOnline={discord.fallbackNumMembersOnline}
        />
      }
    >
      <DiscordInviteViewReal
        {...props}
        dataPromise={dataPromise}
        inviteUrl={discord.inviteUrl}
      />
    </Suspense>
  );
}

type DiscordInviteViewProps = {
  url: string;
  image: string;
  title: string;
  numMembersOnline: number;
  numMembers: number;
} & DiscordInviteProps;

type DiscordInviteViewRealProps = {
  dataPromise: Promise<any>;
  inviteUrl: string;
} & DiscordInviteProps;

function DiscordInviteViewReal(props: DiscordInviteViewRealProps): JSX.Element {
  const data = use(props.dataPromise);

  // Derive the fields we need:
  const numMembers = data.approximate_member_count;

  const numMembersOnline = data.approximate_presence_count;

  const serverName =
    data.guild && data.guild.name ? data.guild.name : data.title;

  // If there's a real Discord icon:
  let serverImgUrl = data.image;
  if (data.guild?.id && data.guild?.icon) {
    serverImgUrl = `https://cdn.discordapp.com/icons/${data.guild.id}/${data.guild.icon}.png`;
  }

  return (
    <DiscordInviteView
      className={props.className}
      url={props.inviteUrl}
      image={serverImgUrl}
      title={serverName}
      numMembers={numMembers}
      numMembersOnline={numMembersOnline}
    />
  );
}

function DiscordInviteView({
  className,
  url,
  image,
  title,
  numMembersOnline,
  numMembers,
}: DiscordInviteViewProps): JSX.Element {
  const onlineText =
    new Intl.NumberFormat("en-US").format(numMembersOnline) + " Online";
  const membersText =
    new Intl.NumberFormat("en-US").format(numMembers) + " Members";

  return (
    <div
      id={style.discordInviteBox}
      className={cn(
        "font-sans not-prose pop border-gray-200 dark:border-0 border shadow-sm hover:shadow-lg transition-shadow m-4",
        className
      )}
    >
      <a href={url} target="_blank" rel="noreferrer">
        <div id={style.discordInvite}>
          <h5 id={style.introText} className={style.noselect}>
            you&apos;ve been invited to join a server
          </h5>
          <div id={style.discordData}>
            <div
              id={style.serverImg}
              className={style.discordLink}
              style={{
                backgroundImage: `url(${image})`,
              }}
            ></div>
            <div id={style.discordInfo}>
              <div id={style.serverNameBox}>
                <span className={style.noselect} id={style.serverName}>
                  {title}
                </span>
              </div>
              <div id={style.status}>
                <div id={style.statusIndicators} className={style.noselect}>
                  <i id={style.onlineInd}></i>
                  <span id={style.numOnline}>{onlineText}</span>
                  <i id={style.offlineInd}></i>
                  <span id={style.numTotal}>{membersText}</span>
                </div>
              </div>
            </div>
            <button
              type="button"
              id={style.callToAction}
              className={style.discordLink}
            >
              <div id={style.buttonText} className={style.noselect}>
                Join
              </div>
            </button>
          </div>
        </div>
      </a>
    </div>
  );
}
