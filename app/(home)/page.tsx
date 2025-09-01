import BlogPreview from "@/components/blog_preview/blog_preview";
import ChickenContainer from "@/components/chicken_container/chicken_container";
import DiscordInvite from "@/components/discord_invite/discord_invite";
import GithubCard from "@/components/github_card/github_card";
import { getStats } from "@/components/github_card/github_client";
import Hero from "@/components/hero/hero";
import SiteFooter from "@/components/site_footer/site_footer";
import SiteImage from "@/components/site_image/site_image";
import { friends } from "@/data/friends";
import GameDemoInGame from "@/public/img/game_demo/in_game.webp";
import { getBlogs } from "@/utils/get_blogs";
import { cn } from "fumadocs-ui/components/api";
import millify from "millify";
import Image from "next/image";
import Link from "next/link";
import { JSX } from "react";
import { site } from "../global";

export default async function HomePage(): Promise<JSX.Element> {
  const stats = await getStats(site.githubPackages);

  return (
    <main className="flex flex-1 flex-col justify-start text-center px-0 overflow-x-clip">
      <Hero
        content={
          <>
            <h1 className="title font-bold text-4xl xl:text-5xl text-pretty lg:text-start text-[var(--logo-text)]">
              {site.title}
              <br />
              <div>
                <a href={site.url} className="badge" target="_blank">
                  <SiteImage
                    className="inline-block mr-2 rounded-none"
                    src="/img/badges/chickensoft_badge.svg"
                    alt="Chickensoft badge"
                  />
                </a>
                <a href={site.github.url} className="badge" target="_blank">
                  <SiteImage
                    className="inline-block mr-2 rounded-none"
                    src="/img/badges/github_badge.svg"
                    alt="GitHub badge"
                  />
                </a>
                <a
                  href={site.discord.inviteUrl}
                  className="badge"
                  target="_blank"
                >
                  <SiteImage
                    className="inline-block mr-2 rounded-none"
                    src="/img/badges/discord_badge.svg"
                    alt="Discord badge"
                  />
                </a>
              </div>
            </h1>
            <DiscordInvite className="sm:mx-auto md:mx-auto lg:mx-0" />
            <p className="subtitle mt-4 font-light text-2xl lg:text-2xl xl:text-3xl max-w-lg text-center lg:text-start lg:whitespace-nowrap z-[1]">
              Open source tools for Godot and C#.
            </p>
          </>
        }
        graphic={
          <>
            <div className="relative w-full text-center">
              <SiteImage
                src="/img/hero.webp"
                alt={site.title}
                className="w-auto ml-[100px] lg:-ml-[40px] lg:max-h-[50vw]"
              />
            </div>
          </>
        }
      ></Hero>

      <ChickenContainer fade="both">
        <section className="py-4 px-4 border-t-1 border-b-1 border-[var(--color-fd-border)] flex flex-row justify-around items-center flex-wrap gap-6 md:gap-10 lg:gap-16 xl:gap-16 bg-[var(--color-fd-muted)]">
          {/* These absolutely positioned containers fade the contents out into the background */}
          {friends.map((friend) => (
            <Link
              href={friend.url}
              target="_blank"
              key={friend.url}
              className="superpop shrink -hue-rotate-20 dark:-hue-rotate-10"
            >
              <SiteImage
                src={friend.logo}
                alt={friend.name}
                className="
                  w-auto
                  max-h-[65px]
                  max-w-[130px]
                  flex flex-col justify-center items-center
                  invert sepia brightness-64
                  dark:brightness-40
                "
              />
            </Link>
          ))}
        </section>
      </ChickenContainer>

      <ChickenContainer preserve={true}>
        <section className="mt-16 mx-4">
          <h1 className="text-2xl md:text-3xl lg:text-4xl">
            <Emphasized>Making games should be fun</Emphasized>
          </h1>
          <div className="grid w-[100%] grid-cols-12 mt-16 gap-4 lg:gap-14 lg:px-8">
            <div className="col-span-12 lg:col-span-5">
              <div className="max-w-lg mx-auto">
                <Image
                  src={GameDemoInGame}
                  alt="Chickensoft Game Demo"
                  className="rounded-lg border border-[var(--color-fd-muted)] shadow-lg lg:min-w-[100%] xlg:min-w-lg"
                />

                <GithubCard
                  owner="chickensoft-games"
                  repo="GameDemo"
                  logo="/img/chickensoft/game_demo.png"
                  className="mt-8"
                />

                <Quote className="mt-10 lg:mt-18">
                  I think the most impressive thing is how consistent everything
                  is.
                </Quote>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-7">
              <FeatureText>
                <p>
                  The <Emphasized>Chickensoft Game Demo</Emphasized> is a 3D,
                  open source game built with Godot and C#.
                </p>
                <br />
                <p>
                  Read about our approach to{" "}
                  <Emphasized>Enjoyable Game Architecture</Emphasized>.
                </p>
              </FeatureText>
              <BlogPreview
                slug="game-architecture"
                className="max-w-lg mx-auto lg:mx-0 lg:max-w-full"
              />
            </div>
          </div>
        </section>
      </ChickenContainer>

      <ChickenContainer preserve={true} className="relative">
        <ChickenContainer fade={"both"}>
          <section className="mt-16 py-4 border-t border-b border-[var(--color-fd-border)] bg-[var(--color-fd-muted)]">
            <h1 className="text-2xl md:text-3xl lg:text-4xl">
              Next-level <Emphasized>game logic</Emphasized>
            </h1>
            <p className="text-lg mt-2">Write it. See it. Run it.</p>
          </section>
        </ChickenContainer>
        <SiteImage
          src="/img/splash/logic_blocks_splash.webp"
          alt="Logic Blocks Splash"
          className="absolute mx-auto max-w-[400px] lg:max-w-[700px] ml-[-260px] md:ml-[-120px] lg:ml-[-300px] mt-[-200px] lg:mt-[-300px] z-20 pointer-events-none"
        />
        <div className="grid w-full grid-cols-12 gap-4 mt-8">
          <div className="col-span-12 lg:col-span-7 pt-2 lg:-pt-24 flex flex-col justify-center items-center mx-4">
            <GithubCard
              owner="chickensoft-games"
              repo="LogicBlocks"
              logo="/img/chickensoft/logic_blocks.png"
              className="max-w-md"
            />
            <FeatureText className="mt-8 mx-auto text-left max-w-md">
              <p>
                LogicBlocks <Emphasized>generates diagrams</Emphasized> of your
                code <Emphasized>as you write it.</Emphasized>
              </p>
              <br />
              <p>
                Reduce synchronization bugs with{" "}
                <Emphasized>simple, declarative bindings.</Emphasized>{" "}
              </p>
              <br />
              <p>
                Ready to get started?{" "}
                <Link
                  href="/docs/logic_blocks"
                  className="font-bold hover:underline text-[var(--color-fd-secondary-foreground)]"
                >
                  Read the docs &rarr;
                </Link>
              </p>
            </FeatureText>
          </div>
          <div className="col-span-12 lg:col-span-5">
            <div className="mx-4 lg:mx-auto">
              <div className="rounded-lg bg-neutral-700 border border-[var(--color-fd-border)] max-w-sm mx-auto shadow-2xl rotate-x-16 rotate-y-16 lg:mx-8 lg:mt-8">
                <SiteImage
                  src="/img/splash/logic_blocks_diagram.webp"
                  alt="Diagram"
                />
              </div>
            </div>
          </div>
          <div className="col-span-12 px-4">
            <div className="max-w-lg mx-auto">
              <Quote className="mt-8">
                ...I was honestly surprised at the sudden lack of logic bugs in
                my code.
              </Quote>
            </div>
          </div>
        </div>
      </ChickenContainer>

      <ChickenContainer preserve={true}>
        <section className="mx-4">
          <h1 className="text-2xl mb-24 md:mb-32 mt-24 md:text-3xl lg:text-4xl">
            Fun for the <Emphasized>whole team</Emphasized>
          </h1>
          <div className="grid w-[100%] grid-cols-12 mt-16 gap-4 lg:gap-14 lg:px-8">
            <div className="col-span-12 lg:col-span-5">
              <div className="max-w-lg mx-auto">
                <div className="w-full h-full relative">
                  <SiteImage
                    src="/img/splash/godot_env_in_use.webp"
                    alt="GodotEnv"
                    className="min-w-[140%] absolute -ml-[20%] -mt-[20%] -rotate-x-16 rotate-y-24 "
                  />
                  {/* Same image for the minimum space, but don't render */}
                  <SiteImage
                    src="/img/splash/godot_env_in_use.webp"
                    alt="GodotEnv"
                    className="border-[var(--color-fd-muted)] invisible"
                  />
                </div>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-7">
              <div className="lg:ml-8 lg:-mt-16">
                <FeatureText className="mt-8 lg:my-0 w-auto max-w-md text-left lg:max-w-none">
                  <p>
                    With <Emphasized>GodotEnv</Emphasized>, you can install
                    Godot and manage addons on{" "}
                    <Emphasized>macOS, Windows, and Linux.</Emphasized>
                  </p>
                  <br />
                  <p>
                    GodotEnv{" "}
                    <Emphasized>standardizes installation locations</Emphasized>{" "}
                    and <Emphasized>automatically manages symlinks</Emphasized>,
                    allowing you to share debugging profiles with your entire
                    team.
                  </p>
                </FeatureText>

                <div className="grid grid-cols-3 place-items-center gap-8 mt-8">
                  <div className="col-span-3 xl:col-span-1 w-full flex justify-center">
                    <div className="absolute">
                      <SiteImage
                        src="/img/splash/sparkles.webp"
                        alt="sparkles"
                        className="relative w-[30%] left-[20px] dark:left-0"
                      />
                    </div>
                    <SiteImage
                      src="/img/splash/godot_env.webp"
                      alt="GodotEnv Icon"
                      className="w-auto mx-auto xl:mx-0 max-h-[180px] max-w-[180px]"
                    />
                  </div>
                  <div className="w-full col-span-3 xl:col-span-2 xl:w-auto flex justify-center">
                    <GithubCard
                      owner="chickensoft-games"
                      repo="GodotEnv"
                      logo="/img/chickensoft/godot_env.png"
                      className="mx-0"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ChickenContainer>

      <ChickenContainer preserve={true}>
        <section className="mx-4 mt-24">
          <h1 id="projects" className="text-2xl md:text-3xl lg:text-4xl mb-8">
            ...and <Emphasized className="">so much more</Emphasized>
          </h1>
          <section className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 xl:gap-6">
            {site.githubPackages.map((pkg) => (
              <div
                className="flex flex-row items-stretch justify-center"
                key={pkg.owner + "/" + pkg.repo}
              >
                <div className="max-w-lg basis-0 grow h-full">
                  <GithubCard {...pkg} className="my-0 min-w-[100%] h-full" />
                </div>
              </div>
            ))}
          </section>
        </section>
      </ChickenContainer>

      <ChickenContainer>
        <h1 className="text-2xl md:text-3xl lg:text-4xl mb-8 mt-24">
          <Emphasized>What we&apos;ve been up to</Emphasized>
        </h1>
        <RecentBlogs numBlogs={3} />
      </ChickenContainer>

      <ChickenContainer fade="both">
        <section className="mt-16 py-4 border-t border-b border-[var(--color-fd-border)] bg-[var(--color-fd-muted)]">
          <h1 className="text-2xl md:text-3xl lg:text-4xl">
            Building a better <Emphasized>future</Emphasized>
          </h1>
        </section>

        <div className="grid w-[100%] grid-cols-12 mt-2">
          <div className="order-2 lg:order-1 col-span-12 lg:col-span-6 mx-4 md:ml-16">
            <FeatureText className="max-w-full">
              <p>
                Chickensoft is a <Emphasized>volunteer organization</Emphasized>
                .
              </p>
              <br />
              <p>
                We believe that open source game engines like{" "}
                <EmphasizedLink href="https://godotengine.org">
                  Godot
                </EmphasizedLink>{" "}
                are the future of game development. That&apos;s why we&apos;ve
                built over twenty open source projects to help facilitate Godot
                + C# development.
              </p>
              <br />
              <p>
                If you&apos;d like to show your support for Chickensoft, please
                feel free to{" "}
                <EmphasizedLink href={site.github.url}>
                  star our packages on GitHub
                </EmphasizedLink>
                ,{" "}
                <EmphasizedLink href={site.discord.inviteUrl}>
                  help others in the Discord community
                </EmphasizedLink>
                ,{" "}
                <EmphasizedLink href={"/team"}>
                  follow us on socials
                </EmphasizedLink>
                , or{" "}
                <EmphasizedLink href={"/philosophy"}>
                  contribute to our projects
                </EmphasizedLink>
                !
              </p>
              <br />
              <p>
                We&apos;re extremely grateful for all the help we&apos;ve
                received from the wider Godot community, and we can&apos;t wait
                to meet you, too!
              </p>
            </FeatureText>
          </div>
          <div className="order-1 lg:order-2 xl:order-2 col-span-12 lg:col-span-6 -mt-15">
            <section className="mx-auto w-full max-w-screen-xl">
              <div className="relative mx-auto w-full max-w-[520px] md:max-w-[70%] lg:max-w-[520px] xl:max-w-[640px]">
                <SiteImage
                  src="/img/splash/star.webp"
                  alt="Chickensoft star"
                  className="w-full object-contain pr-4"
                  quality={100}
                />

                <div className="absolute inset-0 grid place-items-center">
                  <div className="text-center lg:text-left z-10 px-4">
                    <p className="sr-only">
                      Total GitHub stars and number of projects
                    </p>

                    <div
                      className="
                    font-black leading-none tracking-tight
                    text-transparent bg-clip-text bg-gradient-to-br
                    from-yellow-200 via-amber-400 to-yellow-700
                    drop-shadow-2xl
                    [text-shadow:_0_1px_0_rgba(255,255,255,.35),_0_8px_30px_rgba(0,0,0,.55)]
                    saturate-150 contrast-125
                    select-text
                  "
                    >
                      <dl className="inline-grid grid-cols-1 gap-6 text-center">
                        <div>
                          <dd className="text-[clamp(4rem,8vw,6rem)] leading-none">
                            {millify(stats?.stars ?? 0, {
                              precision: 1,
                              lowercase: true,
                            })}
                          </dd>
                          <dt className="uppercase opacity-90 tracking-wider text-[clamp(0.9rem,1.6vw,1.1rem)]">
                            Stars
                          </dt>
                        </div>

                        <div>
                          <dd className="text-[clamp(4rem,8vw,6rem)] leading-none">
                            {stats?.repoCount ?? site.githubPackages.length}
                          </dd>
                          <dt className="uppercase opacity-90 tracking-wider text-[clamp(0.9rem,1.6vw,1.1rem)]">
                            Projects
                          </dt>
                        </div>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </ChickenContainer>

      <SiteFooter className="mt-32" />
    </main>
  );
}

function Quote(props: {
  children: string | JSX.Element | JSX.Element[];
  className?: string;
}): JSX.Element {
  return (
    <div className="px-8">
      <blockquote
        className={cn(
          `
        mx-auto
        text-2xl/10
        relative
        inline-block
        before:content-['“']
        before:absolute
        before:text-7xl
        before:-left-[2rem]
        text-pretty
        `,
          props.className
        )}
      >
        <span
          className={`
        inline-block
        after:content-['”']
        after:absolute
        after:text-7xl
        after:-right-[2rem]
        `}
        >
          {props.children}
        </span>
      </blockquote>
    </div>
  );
}

function Emphasized(props: {
  children: string | JSX.Element | JSX.Element[];
  className?: string;
}): JSX.Element {
  return (
    <strong
      className={cn(
        "bg-clip-text bg-gradient-to-r from-[var(--logo-text)] to-[var(--logo-text-shimmer)] text-transparent",
        props.className
      )}
    >
      {props.children}
    </strong>
  );
}

function EmphasizedLink(props: {
  href: string;
  children: string | JSX.Element | JSX.Element[];
  className?: string;
}): JSX.Element {
  const isExternal = /^https?:\/\//.test(props.href);

  return (
    <Link
      href={props.href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer noopener" : undefined}
      className={cn(
        "inline-flex items-baseline font-semibold transition-colors",
        "bg-clip-text text-transparent bg-gradient-to-r",
        "from-yellow-500 via-amber-500 to-yellow-600",
        "dark:from-amber-300 dark:via-yellow-300 dark:to-amber-400",
        "underline underline-offset-4",
        "decoration-amber-600 dark:decoration-amber-300",
        "hover:brightness-110 focus-visible:outline-none",
        "focus-visible:ring-2 focus-visible:ring-amber-500 dark:focus-visible:ring-amber-300",
        "rounded-[2px]",
        isExternal ? "after:ml-1 after:content-['↗']" : "",
        props.className
      )}
    >
      {props.children}
    </Link>
  );
}

function FeatureText(props: {
  children: string | JSX.Element | JSX.Element[];
  className?: string;
}): JSX.Element {
  return (
    <div
      className={cn(
        "text-lg lg:text-xl/8 text-left my-8 mx-auto max-w-md",
        props.className
      )}
    >
      {props.children}
    </div>
  );
}

function RecentBlogs(props: { numBlogs: number }): JSX.Element {
  const blogs = getBlogs().slice(0, props.numBlogs);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 xl:gap-6 mx-4">
      {blogs.map((blog) => (
        <BlogPreview
          key={blog.slugs[0]}
          slug={blog.slugs[0]}
          className="max-w-lg mx-auto"
        />
      ))}
    </div>
  );
}
