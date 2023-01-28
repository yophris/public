/** @type {import('next').NextConfig} */

const repo = '';
const assetPrefix = `/${repo}/`;
const basePath = `/${repo}`;

const nextConfig = {
  // assetPrefix: assetPrefix,
  // basePath: basePath,
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  compiler: {
    // see https://styled-components.com/docs/tooling#babel-plugin for more info on the options.
    styledComponents: true,
  },
};

module.exports = nextConfig;
