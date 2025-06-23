import { GithubCardProps } from "@/components/github_card/github_card";

export type SiteData = {
  url: string;
  logo: string;
  title: string;
  subtitle: string;
  description: string;
  previewImage: string;
  gtag: string;
  discord: DiscordData;
  github: GithubData;
  keywords: string[];
  footerLinks: FooterCategory[];
  githubPackages: GithubCardProps[];
};

export type DiscordData = {
  serverId: string;
  inviteUrl: string;
  inviteCode: string;
  fallbackNumMembers: number;
  fallbackNumMembersOnline: number;
  image: string;
  title: string;
};

export type GithubData = {
  url: string;
  orgName: string;
  patEnvVar: string;
};

export type FooterLink = {
  url: string;
  title: string;
};

export type FooterCategory = {
  title: string;
  links: FooterLink[];
};

export const site: SiteData = {
  url: "https://chickensoft.games/",
  logo: "/img/chickensoft_logo.svg",
  title: "Chickensoft",
  subtitle: "Open source tools for Godot and C#.",
  description:
    "Chickensoft is a community of Godot + C# game developers, as well as the home to numerous open source tools.",
  previewImage: "/img/preview.png",
  gtag: "G-9WXTBSQCGL",
  discord: {
    serverId: "862108653488963604",
    inviteUrl: "https://discord.gg/MjA6HUzzAE",
    inviteCode: "MjA6HUzzAE",
    fallbackNumMembersOnline: 326,
    fallbackNumMembers: 1496,
    image: "/img/chickensoft_square.png",
    title: "🐤 Chickensoft",
  },
  github: {
    url: "https://github.com/chickensoft-games/",
    orgName: "chickensoft-games",
    patEnvVar: "GH_BASIC",
  },
  keywords: [
    "software architecture",
    "architecture",
    "Godot",
    "C#",
    "chickensoft",
    "game design",
    "game engine",
    "Unity",
    "indie game development",
    "open source",
    "foss",
    "programming language",
    "game development",
    "scripting",
    "cross-platform",
    "community support",
    "tutorials",
    "documentation",
    "help",
    "game engine",
    "2D game development",
    "3D game development",
    "game development tips",
    "game programming",
    "game publishing",
    "unity",
    "unity engine",
    "unity alternative",
    "game design",
  ],
  footerLinks: [
    {
      title: "Chickensoft",
      links: [
        {
          url: "/about",
          title: "About",
        },
        {
          url: "/team",
          title: "Team",
        },
        {
          url: "/philosophy",
          title: "Philosophy",
        },
      ],
    },
    {
      title: "Organizational",
      links: [
        {
          url: "/code-of-conduct",
          title: "Code of Conduct",
        },
        {
          url: "/license",
          title: "Open Source Licenses",
        },
      ],
    },
    {
      title: "Technical",
      links: [
        {
          url: "/blog",
          title: "Blog",
        },
        {
          url: "/docs",
          title: "Documentation",
        },
      ],
    },
  ],
  githubPackages: [
    {
      owner: "chickensoft-games",
      repo: "GameDemo",
      logo: "/img/chickensoft/game_demo.png",
    },
    {
      owner: "chickensoft-games",
      repo: "LogicBlocks",
      logo: "/img/chickensoft/logic_blocks.png",
    },
    {
      owner: "chickensoft-games",
      repo: "GodotEnv",
      logo: "/img/chickensoft/godot_env.png",
    },
    {
      owner: "chickensoft-games",
      repo: "Chicken",
      logo: "/img/chickensoft/chicken.webp",
    },
    {
      owner: "chickensoft-games",
      repo: "GodotGame",
      logo: "/img/chickensoft/godot_game.webp",
    },
    {
      owner: "chickensoft-games",
      repo: "Serialization",
      logo: "/img/chickensoft/serialization.png",
    },
    {
      owner: "chickensoft-games",
      repo: "Introspection",
      logo: "/img/chickensoft/introspection.png",
    },
    {
      owner: "chickensoft-games",
      repo: "GoDotTest",
      logo: "/img/chickensoft/package.png",
    },
    {
      owner: "chickensoft-games",
      repo: "setup-godot",
      logo: "/img/chickensoft/package.png",
    },
    {
      owner: "chickensoft-games",
      repo: "AutoInject",
      logo: "/img/chickensoft/auto_inject.png",
    },
    {
      owner: "chickensoft-games",
      repo: "Platform",
      logo: "/img/chickensoft/platform.png",
    },
    {
      owner: "chickensoft-games",
      repo: "GameTools",
      logo: "/img/chickensoft/package.png",
    },
    {
      owner: "chickensoft-games",
      repo: "UMLGenerator",
      logo: "/img/chickensoft/uml_generator.png",
    },
    {
      owner: "chickensoft-games",
      repo: "SaveFileBuilder",
      logo: "/img/chickensoft/save_file_builder.png",
    },
    {
      owner: "chickensoft-games",
      repo: "Serialization.Godot",
      logo: "/img/chickensoft/package.png",
    },
    {
      owner: "chickensoft-games",
      repo: "Log",
      logo: "/img/chickensoft/log.png",
    },
    {
      owner: "chickensoft-games",
      repo: "Log.Godot",
      logo: "/img/chickensoft/log_godot.png",
    },
    {
      owner: "chickensoft-games",
      repo: "Collections",
      logo: "/img/chickensoft/collections.png",
    },
    {
      owner: "chickensoft-games",
      repo: "GodotTestDriver",
      logo: "/img/chickensoft/godot_test_driver.png",
    },
    {
      owner: "chickensoft-games",
      repo: "GodotPackage",
      logo: "/img/chickensoft/package.png",
    },
    {
      owner: "chickensoft-games",
      repo: "PalettePainter",
      logo: "/img/chickensoft/palette_painter.png",
    },
    {
      owner: "chickensoft-games",
      repo: "GodotNodeInterfaces",
      logo: "/img/chickensoft/package.png",
    },
    {
      owner: "chickensoft-games",
      repo: "EditorConfig",
      logo: "/img/chickensoft/editor_config.svg",
    },
    {
      owner: "chickensoft-games",
      repo: "chickensoft_site",
      logo: "/img/chickensoft/chickensoft_site.svg",
    },
  ],
};
