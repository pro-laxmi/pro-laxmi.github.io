import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders'; // Not available with legacy API

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: ({ image }) => z.object({
		title: z.string(),
    seoTitle: z.string().optional(),
		description: z.string().optional(),
    summary: z.string().optional(),
		// Transform string to Date object
		pubDate: z.coerce.date().optional(),
    date: z.coerce.date().optional(),
		updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).optional(),
		coverImage: image().optional()
	})
});

const projects = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/projects" }),
  schema: ({ image }) => z.object({
		title: z.string(),
		summary: z.string().optional(),
		date: z.coerce.date().optional(),
    tags: z.array(z.string()).optional(),
    github: z.string().optional(),
    links: z.array(z.object({ name: z.string().optional(), url: z.string() })).optional(),
    image: z.string().optional(),
		coverImage: image().optional(),
    draft: z.boolean().optional()
	})
});

export const collections = { blog, projects };