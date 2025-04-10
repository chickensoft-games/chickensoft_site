import BlogPreview from "@/components/blog_preview/blog_preview";
import Callout from "@/components/callout/callout";
import DiscordInvite from "@/components/discord_invite/discord_invite";
import FancyImage from "@/components/fancy_image/fancy_image";
import GithubCard from "@/components/github_card/github_card";
import YoutubeEmbed from "@/components/youtube_embed/youtube_embed";
import { Tab, Tabs } from "fumadocs-ui/components/tabs";
import defaultMdxComponents from "fumadocs-ui/mdx";
import Author from "./author/author";

const components = {
  ...defaultMdxComponents,
  DiscordInvite,
  BlogPreview,
  GithubCard,
  FancyImage,
  YoutubeEmbed,
  Callout,
  Tabs,
  Tab,
  Author,
};

export default components;
