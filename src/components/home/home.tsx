import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import { useColorMode } from '@docusaurus/theme-common';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import config from '@generated/docusaurus.config';
import BlogPreview from '@site/src/components/blog_preview/blog_preview';
import ChickensoftDiscordServer from '@site/src/components/chickensoft_discord_server/chickensoft_discord_server';
import GithubCard, {
  GithubCardProps,
} from '@site/src/components/github_card/github_card';
import { lookup } from '@site/src/utils/lookup';
import { Content } from '@theme/BlogPostPage';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import React, { useEffect } from 'react';

import styles from './home.module.css';

const logo = lookup(config, 'logo');
const discord = lookup(config, 'discord');
const github = lookup(config, 'github');
const homepagePreview = lookup(config, 'homepagePreview');
const homepagePreviewAbsolute = lookup(config, 'homepagePreviewAbsolute');
const twitter = lookup(config, 'twitter');

const senderNetEmailSignUpScript = `
  (function (s, e, n, d, er) {
    s['Sender'] = er;
    s[er] = s[er] || function () {
      (s[er].q = s[er].q || []).push(arguments)
    }, s[er].l = 1 * new Date();
    var a = e.createElement(n),
        m = e.getElementsByTagName(n)[0];
    a.async = 1;
    a.src = d;
    m.parentNode.insertBefore(a, m)
  })(window, document, 'script', 'https://cdn.sender.net/accounts_resources/universal.js', 'sender');
  sender('92c709a1255511')
`;

type RecentPosts = { content: Content }[];
interface HomeProps {
  recentPosts: RecentPosts;
}

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className={clsx(styles.heroBackground)}></div>
      <div className={clsx(styles.heroBackgroundOverlay)}></div>
      <div className={clsx(styles.heroBackgroundBlur)}></div>
      <div className={clsx('container', styles.container)}>
        <section className={clsx(styles.heroContents)}>
          <span>
            <img src={logo} height="128" />
            <h1 className="hero__title inline">
              {lookup(siteConfig, 'shortTitle')}
            </h1>
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
            <Link to="/docs/setup" className={styles.badge}>
              <img src="img/badges/read_the_docs_badge.svg" height="20" />
            </Link>
          </p>
          <HomepageCTAs />
        </section>
      </div>
      {/* <HomepageHeroImage /> */}
    </header>
  );
}

export default function Home(props: HomeProps): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  useEffect(() => {
    const body = document.querySelector('body');
    const script = document.createElement('script');
    script.innerHTML = senderNetEmailSignUpScript;
    script.type = 'text/javascript';
    body.appendChild(script);
  }, [senderNetEmailSignUpScript]);

  // noodp and noydir tell search engines not to use metadata from the Open
  // Directory project or the Yahoo Directory, increasing the likelihood of
  // using the metadata we provide.

  return (
    <Layout description={`${siteConfig.tagline}.`}>
      <Head>
        <meta name="robots" content="noodp,noydir" />
        <meta name="og:description" content={siteConfig.tagline} />
        <meta name="twitter:description" content={siteConfig.tagline} />
        <meta name="og:image" content={homepagePreview} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={homepagePreviewAbsolute} />
        <meta name="twitter:image:alt" content={siteConfig.tagline} />
        <meta name="twitter:creator" content={twitter} />
        <meta name="twitter:site" content={twitter} />
        <meta name="image" property="og:image" content={homepagePreview} />
      </Head>
      <HomepageHeader />
      <main className="padding-horiz--md">
        <HomepageFeatures recentPosts={props.recentPosts} />
      </main>
    </Layout>
  );
}

function HomepageCTAs() {
  return (
    <div className={styles.width}>
      <Link
        className="button button--secondary button--md margin-right--sm"
        to="/docs"
      >
        Game Demo
      </Link>
      <Link className="button button--primary button--md" to="/docs">
        Setup Guide
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
    repo: 'GodotEnv',
    logo: 'img/chickensoft/godot_env.png',
  },
  {
    profile: 'chickensoft-games',
    repo: 'GodotGame',
    logo: 'img/chickensoft/godot_game.svg',
  },
  {
    profile: 'chickensoft-games',
    repo: 'setup-godot',
    logo: 'img/chickensoft/setup_godot.svg',
  },
  {
    profile: 'chickensoft-games',
    repo: 'LogicBlocks',
    logo: 'img/chickensoft/logic_blocks.png',
  },
  {
    profile: 'chickensoft-games',
    repo: 'GoDotTest',
    logo: 'img/chickensoft/go_dot_test.svg',
  },
  {
    profile: 'chickensoft-games',
    repo: 'SuperNodes',
    logo: 'img/chickensoft/super_nodes.svg',
  },
  {
    profile: 'chickensoft-games',
    repo: 'AutoInject',
    logo: 'img/chickensoft/auto_inject.svg',
  },
  {
    profile: 'chickensoft-games',
    repo: 'PowerUps',
    logo: 'img/chickensoft/power_ups.png',
  },
  {
    profile: 'chickensoft-games',
    repo: 'GodotPackage',
    logo: 'img/chickensoft/package.svg',
  },
  {
    profile: 'chickensoft-games',
    repo: 'GodotNodeInterfaces',
    logo: 'img/chickensoft/package.svg',
  },
  {
    profile: 'chickensoft-games',
    repo: 'GoDotLog',
    logo: 'img/chickensoft/go_dot_log.svg',
  },
  {
    profile: 'chickensoft-games',
    repo: 'chickensoft_site',
    logo: 'img/chickensoft/chickensoft_site.svg',
  },
  {
    profile: 'chickensoft-games',
    repo: 'GoDotCollections',
    logo: 'img/chickensoft/package.svg',
  },
  {
    profile: 'chickensoft-games',
    repo: 'EditorConfig',
    logo: 'img/chickensoft/editorconfig.svg',
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
            <div
              key={repo.repo}
              className={clsx('col col--4 padding-vert--sm github-card-home')}
            >
              <GithubCard key={repo.repo} {...repo} />
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
            <div className={styles.panelContainer}>
              <div className={styles.panelContainerContents}>
                <ChickensoftDiscordServer />
              </div>
            </div>
          </div>
          <div className={clsx('col col--4 padding-vert--sm')}>
            <div className={styles.panelContainer}>
              <div className={styles.panelContainerContents}>
                <div
                  style={{ textAlign: 'left' }}
                  className="sender-form-field"
                  data-sender-form-id="lh11hwhxdw6ozbn5zfo"
                ></div>
              </div>
            </div>
          </div>
        </div>
        <div className="row padding-top--lg">
          <div>
            <h1>Latest Articles</h1>
            <p>For more on Godot and C#, check out our latest articles!</p>
          </div>
        </div>
        <div className="row">
          {props.recentPosts.map(({ content: BlogPostContent }) => (
            <div
              key={BlogPostContent.metadata.permalink}
              className={clsx('col col--4 padding-vert--sm')}
            >
              <BlogPreview
                key={BlogPostContent.metadata.editUrl}
                BlogPostContent={BlogPostContent}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
