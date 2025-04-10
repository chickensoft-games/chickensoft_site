import { blogLoader, docsLoader, pagesLoader } from "@/lib/source";
import { createSearchAPI } from "fumadocs-core/search/server";

export const { GET } = createSearchAPI("advanced", {
  // Search blogs and docs by hacking them together and losing type safety.
  // If you know a better way to combine searchable information in fumadocs,
  // please let me know.
  indexes: blogLoader
    .getPages() // add blogs
    .concat(docsLoader.getPages() as any) // add docs
    .concat(pagesLoader.getPages() as any) // add static pages
    .map((page) => ({
      title: page.data.title,
      description: page.data.description,
      url: page.url,
      id: page.url,
      structuredData: page.data.structuredData,
    })),
});
