import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import { autoNewTabExternalLinks } from './src/autoNewTabExternalLinks';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

import partytown from "@astrojs/partytown";

const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1] || 'portfolio-astro';
const owner = process.env.GITHUB_REPOSITORY_OWNER || 'your-github-username';
const isUserSite = repoName.endsWith('.github.io');
const site = process.env.GITHUB_ACTIONS
  ? `https://${owner}.github.io`
  : 'https://devolio.devaradise.com';
const base = process.env.GITHUB_ACTIONS && !isUserSite ? `/${repoName}` : '/';

// https://astro.build/config
export default defineConfig({
  site,
  base,
  integrations: [mdx(), sitemap(), tailwind(), partytown()],
  markdown: {
    extendDefaultPlugins: true,
    remarkPlugins: [remarkMath],
    rehypePlugins: [
      [autoNewTabExternalLinks, {
        domain: 'localhost:4321'
      }],
      rehypeKatex
    ]
  }
});