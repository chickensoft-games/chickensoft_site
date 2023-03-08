// See https://docusaurus.io/docs/markdown-features/react#mdx-component-scope
//
// Import the original mapper:
import useBaseUrl from '@docusaurus/useBaseUrl';
// Components to provide in default mdx scope:
import BlogDiscordInvite from '@site/src/components/blog_discord_invite/blog_discord_invite';
import FancyImage from '@site/src/components/fancy_image/fancy_image';
import GithubCard from '@site/src/components/github_card/github_card';
import Toot from '@site/src/components/social_post/toot';
import Tweet from '@site/src/components/social_post/tweet';
import Spacer from '@site/src/components/spacer/spacer';
import MDXComponents from '@theme-original/MDXComponents';
import Admonition from '@theme/Admonition';
import CodeBlock from '@theme/CodeBlock';
import Details from '@theme/Details';
import TabItem from '@theme/TabItem';
import Tabs from '@theme/Tabs';

export default {
  // Re-use the default mapping
  ...MDXComponents,
  // Make these available without imports inside `*.mdx` files!
  BlogDiscordInvite,
  FancyImage,
  Toot,
  Tweet,
  GithubCard,
  Spacer,
  useBaseUrl,
  Tabs,
  TabItem,
  Admonition,
  Details,
  CodeBlock,
};
