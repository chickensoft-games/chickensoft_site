import { DocusaurusConfig } from '@docusaurus/types';

/**
 * Lookup a custom value in the Docusaurus site config.
 * @param config Docusaurus site config.
 * @param key The key to lookup.
 */
export function lookup(config: DocusaurusConfig, key: string): string {
  return config.customFields[key] as string;
}
