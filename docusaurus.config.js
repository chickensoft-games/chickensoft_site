// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/vsLight');
const darkCodeTheme = require('prism-react-renderer/themes/vsDark');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Chickensoft',
  tagline: 'Open source tools for C# and Godot.',
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
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [
        {
          name: 'og:description',
          content: 'News and open source tools for C# and Godot',
        },
        {
          name: 'twitter:description',
          content: 'News and open source tools for C# and Godot',
        },
        { name: 'og:image', content: '/img/preview.png' },
        { name: 'twitter:card', content: 'summary_large_image' },
        {
          name: 'twitter:image',
          content: 'https://chickensoft.games/img/preview.png',
        },
        { name: 'twitter:image:alt', content: 'Chickensoft website.' },
        { name: 'twitter:creator', content: '@joannanyana' },
        { name: 'twitter:site', content: '@joannanyana' },
        { name: 'image', property: 'og:image', content: '/img/preview.png' },
      ],
      navbar: {
        title: 'Chickensoft',
        logo: {
          alt: 'Chickensoft Logo',
          src: 'img/chickensoft/chickensoft_logo.svg',
        },
        items: [
          { to: 'blog', label: 'Blog', position: 'left' },
          {
            type: 'doc',
            docId: 'setup',
            position: 'left',
            label: 'Docs',
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
            title: 'Docs',
            items: [
              {
                label: 'Read the documentation!',
                to: '/docs/setup',
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
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/chickensoft-games',
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
