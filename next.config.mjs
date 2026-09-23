import { createMDX } from "fumadocs-mdx/next";

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  // prevents next.js cache errors
  async redirects() {
    return [{ source: "/index", destination: "/", permanent: true }];
  },
};

export default withMDX(config);
