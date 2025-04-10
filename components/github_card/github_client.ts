import { site } from "@/app/global";
import { Octokit } from "@octokit/rest";
import { unstable_cache } from "next/cache";
import { languageColors, type LanguageColor } from "./github_languages";

export type GithubRepository = {
  name: string;
  organization: string;
  url: string;
  fullName: string;
  description: string;
  stars: number;
  forks: number;
  language?: string;
  languageColor?: LanguageColor;
};

export type GithubRepositories = { [key: string]: GithubRepository };

const octokit = new Octokit({ auth: process.env[site.github.patEnvVar] });

/**
 * Gets an individual repository. If already fetched, returns the cached
 * repository data.
 * @param owner Repository owner, e.g. "chickensoft-games"
 * @param repo Repository name: e.g., "GodotEnv"
 * @returns Repository information.
 */
export async function getRepository(
  owner: string,
  repo: string
): Promise<GithubRepository> {
  return await fetchRepository(owner, repo);
}

async function fetchRepository(
  owner: string,
  repo: string
): Promise<GithubRepository> {
  // fetch single repo info with octokit
  const response = await unstable_cache(
    async (repoName: string) =>
      await octokit.repos.get({
        owner: owner,
        repo: repoName,
      }),
    [owner + "/" + repo],
    {
      revalidate: 60 * 60 * 12, // every 12 hours
    }
  )(repo);

  if (typeof response !== "object" || typeof response.data !== "object") {
    throw new Error(
      "Unexpected response from GitHub API: " +
        JSON.stringify(response, null, 2)
    );
  }

  return mapRepository(repo, response.data);
}

function mapRepository(
  repo: string,
  raw: { [key: string]: any }
): GithubRepository {
  const language = raw["language"];
  const languageColor = languageColors[language];

  return {
    name: raw["name"] ?? repo,
    organization: site.github.orgName ?? "",
    url: raw["html_url"] ?? "",
    fullName: raw["full_name"] ?? "",
    description: raw["description"] ?? "",
    stars: raw["stargazers_count"] ?? 0,
    forks: raw["forks"] ?? 0,
    language: raw["language"],
    languageColor: languageColor,
  };
}
