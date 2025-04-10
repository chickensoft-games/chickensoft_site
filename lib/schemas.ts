import { frontmatterSchema } from "fumadocs-mdx/config";
import { z } from "zod";

const teamCategoriesSchema = z.enum(["admin", "mod", "software"]);

export const teamSchema = frontmatterSchema.extend({
  author_id: z.string(),
  category: teamCategoriesSchema,
  image: z.string(),
  bsky_url: z.string().optional(),
  mastodon_url: z.string().optional(),
  discord_user: z.string().optional(),
  github_user: z.string().optional(),
  linked_in_url: z.string().optional(),
});

export const blogSchema = frontmatterSchema.extend({
  author_id: z.string(),
  date: z.date(),
  image: z.string(),
  keywords: z.string().array(),
});

export const pageSchema = frontmatterSchema.extend({
  image: z.string(),
  keywords: z.string().array(),
});

export const docsSchema = frontmatterSchema.extend({
  image: z.string().optional(),
});

// https://www.allthingstypescript.dev/p/using-zod-schemas-as-source-of-truth
export type TeamMember = z.infer<typeof teamSchema>;
export type TeamMemberWithUrl = TeamMember & {
  url: string;
};
export type TeamCategory = z.infer<typeof teamCategoriesSchema>;
export type BlogPost = z.infer<typeof blogSchema>;
export type BlogPostWithUrl = BlogPost & {
  url: string;
  slugs: string[];
};
export type Page = z.infer<typeof pageSchema>;
export type Docs = z.infer<typeof docsSchema>;
