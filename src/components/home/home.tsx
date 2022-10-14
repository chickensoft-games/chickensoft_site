import Link from '@docusaurus/Link';
import { useColorMode } from '@docusaurus/theme-common';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import config from '@generated/docusaurus.config';
import BlogPreview from '@site/src/components/blog_preview/blog_preview';
import DiscordServer from '@site/src/components/discord_server/discord_server';
import GithubCard, {
  GithubCardProps,
} from '@site/src/components/github_card/github_card';
import { lookup } from '@site/src/utils/lookup';
import { Content } from '@theme/BlogPostPage';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import React from 'react';

import styles from './home.module.css';

const logo = lookup(config, 'logo');
const discord = lookup(config, 'discord');
const discordInviteCode = lookup(config, 'discordInviteCode');
const github = lookup(config, 'github');

type RecentPosts = { content: Content }[];
interface HomeProps {
  recentPosts: RecentPosts;
}

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <span>
          <img src={logo} height="128" />
          <h1 className="hero__title inline">{siteConfig.title}</h1>
        </span>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <p>
          <a href={siteConfig.baseUrl} className={styles.badge}>
            <img src="img/badges/chickensoft_badge.svg" height="20" />
          </a>
          <a href={github} className={styles.badge}>
            <img src="img/badges/github_badge.svg" height="20" />
          </a>
          <a href={discord} className={styles.badge}>
            <img src="img/badges/discord_badge.svg" height="20" />
          </a>
        </p>
        <HomepageCTA />
        {/* <HomepageHeroImage /> */}
      </div>
    </header>
  );
}

export default function Home(props: HomeProps): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout description={`${siteConfig.tagline}.`}>
      <HomepageHeader />
      <main className="padding-horiz--md">
        <HomepageFeatures recentPosts={props.recentPosts} />
      </main>
    </Layout>
  );
}

function HomepageCTA() {
  return (
    <div className={styles.width}>
      <Link
        className="button button--primary button--lg margin-top--lg"
        to="/docs/setup"
      >
        Get Started
      </Link>
    </div>
  );
}

function HomepageHeroImage() {
  const { colorMode } = useColorMode();
  return (
    <img
      className={clsx(styles.heroImage)}
      src={colorMode == 'dark' ? 'img/hero_dark.svg' : 'img/hero.svg'}
      alt="Hero"
      width="720"
    />
  );
}

const repos: Array<GithubCardProps> = [
  {
    profile: 'chickensoft-games',
    repo: 'Chicken',
    logo: 'img/chickensoft/chicken_cli.svg',
  },
  {
    profile: 'chickensoft-games',
    repo: 'chickensoft_site',
    logo: 'img/chickensoft/chickensoft_site.svg',
  },
  {
    profile: 'chickensoft-games',
    repo: 'go_dot_test',
    logo: logo,
  },
  {
    profile: 'chickensoft-games',
    repo: 'go_dot_net',
    logo: logo,
  },
  {
    profile: 'chickensoft-games',
    repo: 'go_dot_dep',
    logo: logo,
  },
  {
    profile: 'chickensoft-games',
    repo: 'go_dot_log',
    logo: logo,
  },
  {
    profile: 'chickensoft-games',
    repo: 'go_dot_midi',
    logo: logo,
  },
];

function HomepageFeatures(props: HomeProps): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <h1>Open Source Projects</h1>
        </div>
        <div className="row">
          {repos.map((repo) => (
            <div className={clsx('col col--4 padding-vert--sm')}>
              <GithubCard {...repo} />
            </div>
          ))}
        </div>
        <div className="row padding-top--lg">
          <div>
            <h1>Our Community</h1>
            <p>
              Whether you're looking for help or just want to connect with other
              C# Godot developers, you can find us in our Discord server!
            </p>
          </div>
        </div>
        <div className="row">
          <div className={clsx('col col--4 padding-vert--sm')}>
            <DiscordServer
              serverName={config.title}
              logo={logo}
              discordInviteCode={discordInviteCode}
              discord={discord}
            />
          </div>
          {props.recentPosts.map(({ content: BlogPostContent }) => (
            <div className={clsx('col col--4 padding-vert--sm')}>
              <BlogPreview BlogPostContent={BlogPostContent} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
