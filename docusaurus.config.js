// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/vsLight');
const darkCodeTheme = require('prism-react-renderer/themes/duotoneDark');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Chickensoft — Open source tools for Godot and C#',
  tagline: 'Open source tools for Godot and C#.',
  url: 'https://chickensoft.games',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/chickensoft/favicon.png',

  // Custom fields for use in components :)
  customFields: {
    github: 'https://github.com/chickensoft-games',
    discord: 'https://discord.gg/MjA6HUzzAE',
    discordInviteCode: 'MjA6HUzzAE',
    logo: '/img/chickensoft/chickensoft_logo.svg',
    homepagePreview: '/img/preview.png',
    homepagePreviewAbsolute: 'https://chickensoft.games/img/preview.png',
    twitter: '@joannanyana',
    shortTitle: 'Chickensoft',
  },

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Chickensoft', // Usually your GitHub org/user name.
  projectName: 'chickensoft_site', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  markdown: { mermaid: true },
  themes: ['@docusaurus/theme-mermaid'],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/chickensoft-games/chickensoft_site/tree/main/',
        },
        // Disable default blog — we'll use our own override to inject
        // recent posts into home page.
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'G-9WXTBSQCGL',
          anonymizeIP: true,
        },
      }),
    ],
  ],

  plugins: [
    [
      require.resolve('./plugins/blog-plugin'),
      {
        id: 'blog',
        routeBasePath: 'blog',
        path: './blog',

        blogTitle: 'Chickensoft Blog',
        blogDescription: 'Chickensoft News and Updates',
        blogSidebarTitle: 'All Posts',
        blogSidebarCount: 'ALL',
      },
    ],
  ],
  headTags: [
    // These will be injected into the head of every page.
    {
      // Mastodon verification :)
      tagName: 'link',
      attributes: {
        rel: 'me',
        href: 'https://mastodon.online/@jolexxa',
      },
    },
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      tableOfContents: {
        maxHeadingLevel: 4,
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        // Respect user's system preferences for theme :)
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Chickensoft',
        logo: {
          alt: 'Chickensoft Logo',
          src: 'img/chickensoft/chickensoft_logo.svg',
        },
        items: [
          { to: 'blog', label: 'Blog', position: 'left' },
          {
            label: 'Docs',
            type: 'doc',
            docId: 'index',
            position: 'left',
          },
          {
            label: '🐤 Using our projects?',
            to: 'https://forms.gle/CZLsupjR3GM4a85v9',
            position: 'right',
          },
          {
            type: 'custom-ghIcon',
            label: 'GitHub',
            position: 'right',
            'aria-label': 'GitHub repository',
          },
        ],
      },
      footer: {
        links: [
          {
            title: 'Help',
            items: [
              {
                label: 'Documentation',
                to: '/docs',
              },
              {
                label: 'Chickensoft Development Philosophy',
                href: '/philosophy',
              },
            ],
          },
          {
            title: 'Resources',
            items: [
              {
                label: 'Blog',
                href: '/blog',
              },
              {
                label: 'Open Source License',
                href: '/license',
              },
            ],
          },
          {
            title: 'Organization',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/chickensoft-games',
              },
              {
                label: '⭐️ Using Chickensoft packages? Let us know!',
                href: 'https://forms.gle/CZLsupjR3GM4a85v9',
              },
            ],
          },
        ],
      },
      prism: {
        additionalLanguages: ['bash', 'csharp', 'json'],
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
