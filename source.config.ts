import { remarkMermaid } from "@theguild/remark-mermaid";
import {
  defineCollections,
  defineConfig,
  defineDocs,
} from "fumadocs-mdx/config";
import { blogSchema, docsSchema, pageSchema, teamSchema } from "./lib/schemas";

export const docsCollection = defineDocs({
  dir: "content/docs",
  docs: {
    schema: docsSchema,
  },
});

export const blogCollection = defineCollections({
  type: "doc",
  dir: "content/blog",
  // add required frontmatter properties
  schema: blogSchema,
});

export const teamCollection = defineCollections({
  type: "doc",
  dir: "content/team",
  schema: teamSchema,
});

// Website pages written in markdown (like how Docusaurus et al. have).
export const pagesCollection = defineCollections({
  type: "doc",
  dir: "content/pages",
  schema: pageSchema,
});

export default defineConfig({
  mdxOptions: {
    remarkPlugins: [remarkMermaid],
  },
});
