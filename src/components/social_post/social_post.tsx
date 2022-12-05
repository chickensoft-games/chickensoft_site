import { useColorMode } from '@docusaurus/theme-common';
import MastodonLogo from '@site/src/components/social_post/mastodon_logo';
import TwitterLogo from '@site/src/components/social_post/twitter_logo';
import clsx from 'clsx';
import React, { useLayoutEffect, useState } from 'react';
import css from './social_post.module.css';

export type SocialPostProvider = 'mastodon' | 'twitter';

export interface SocialPostProps {
  provider: SocialPostProvider;
  data: SocialPostData;
}

export interface SocialPostData {
  url?: string;
  createdAt?: string;
  content?: string;
  favoritesCount?: number;
  reblogsCount?: number;
  account?: {
    username?: string;
    displayName?: string;
    url: string;
    avatarUrl?: string;
  };
  attachments?: {
    type?: string;
    url?: string;
  }[];
}

export default function SocialPost(props: SocialPostProps): JSX.Element {
  const data = props.data;
  const [colorMode, setColorMode] = useState(useColorMode().colorMode);

  useLayoutEffect(() => {
    setColorMode(colorMode);
  }, []);

  var postLogo =
    props.provider == 'mastodon' ? (
      <MastodonLogo className={css.postLogoMastodon} width={24} />
    ) : (
      <TwitterLogo className={css.postLogoTwitter} width={24} />
    );

  return (
    <article
      className={clsx(css.post, colorMode == 'dark' ? css.dark : css.light)}
    >
      <section className={css.postWrapper}>
        <a href={data.account?.url ?? ''} className={css.postHeaderLink}>
          <header className={css.postHeader}>
            <img
              className={css.postHeaderAvatar}
              src={data.account?.avatarUrl ?? ''}
            />
            <section className={css.postAvatarText}>
              <span className={css.postDisplayName}>
                {data.account?.displayName ?? ''}
              </span>
              <span className={css.postUsername}>
                {data.account?.username ?? ''}
              </span>
            </section>
            {postLogo}
          </header>
        </a>
        <section
          className={css.postContent}
          dangerouslySetInnerHTML={{ __html: data.content ?? '' }}
        ></section>
        {(data.attachments ?? []).map((attachment) => {
          return (
            <section key={attachment.url} className={css.postAttachment}>
              <a href={data.url ?? ''}>
                <img src={attachment.url ?? ''} />
              </a>
            </section>
          );
        })}
      </section>
      <a href={data.url ?? ''} style={{ textDecoration: 'none' }}>
        <footer className={css.postFooter}>
          <div className={css.postFooterContent}>
            <span className={css.date}>
              {new Date(data.createdAt ?? '').toLocaleString()}
            </span>
            <div className={css.postFooterContentGroup}>
              <section className={css.postFooterSection}>
                <span className={css.postReblogsIcon}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="19"
                  >
                    <path
                      fill="currentColor"
                      d="M4.97 3.16c-.1.03-.17.1-.22.18L.8 8.24c-.2.3.03.78.4.8H3.6v2.68c0 4.26-.55 3.62 3.66 3.62h7.66l-2.3-2.84c-.03-.02-.03-.04-.05-.06H7.27c-.44 0-.72-.3-.72-.72v-2.7h2.5c.37.03.63-.48.4-.77L5.5 3.35c-.12-.17-.34-.25-.53-.2zm12.16.43c-.55-.02-1.32.02-2.4.02H7.1l2.32 2.85.03.06h5.25c.42 0 .72.28.72.72v2.7h-2.5c-.36.02-.56.54-.3.8l3.92 4.9c.18.25.6.25.78 0l3.94-4.9c.26-.28 0-.83-.37-.8H18.4v-2.7c0-3.15.4-3.62-1.25-3.66z"
                    />
                  </svg>
                </span>
                <span>{data.reblogsCount}</span>
              </section>
              <section className={css.postFooterSection}>
                <svg
                  width="18"
                  role="img"
                  version="1.1"
                  viewBox="0 0 14 16"
                  style={{
                    marginRight: '8px',
                    marginTop: '-1px',
                  }}
                >
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"
                  ></path>
                </svg>
                <span>{data.favoritesCount}</span>
              </section>
            </div>
          </div>
        </footer>
      </a>
    </article>
  );
}
