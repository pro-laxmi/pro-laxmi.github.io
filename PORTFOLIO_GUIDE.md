# 🚀 Portfolio Customization & Codebase Guide

Welcome to your new Astro + TailwindCSS portfolio! This guide explains how your codebase is structured, what each file does, and exactly where to go to change your content, styles, and layout.

---

## 📁 1. Content Management (The `src/content/` folder)
This is the most important folder for day-to-day updates. Your site uses "Content Collections", meaning it automatically generates pages based on Markdown files placed here.

### 📝 Blogs (`src/content/blog/`)
To add a new blog post, simply create a new `.md` or `.mdx` file in this folder.
**What you can change:**
The "frontmatter" at the top of the file controls the metadata:
```yaml
---
title: "Your Blog Title"
description: "A short summary"
pubDate: "Jul 18 2026"
coverImage: "./cover.jpg" # Place image next to the markdown file
tags: ["Technology", "AI"]
---
```
The rest of the file is standard Markdown for your blog content.

### 💻 Projects (`src/content/projects/`)
To add a new project, create a new `.mdx` file.
**What you can change:**
```yaml
---
title: "Project Title"
summary: "Short description for the card."
date: "2026-07-01"
github: "https://github.com/pro-laxmi/repo"
tags: ["Python", "PyTorch"]
links:
  - name: Demo
    url: "https://demo-link.com"
---
```
The content below the frontmatter is the detailed case study for the project page.

---

## 📄 2. Core Pages (`src/pages/`)
These files control the main standalone pages of your site. 

* **`src/pages/index.astro` (Home Page)**
  * **News Timeline:** Edit the `const news = [...]` array at the top of the file to add new timeline events.
  * **Bio/About:** Edit the HTML inside the `<Prose>` tags to change your introductory paragraphs.
  * **Social Links:** Change the links for LinkedIn, GitHub, Email, and your Resume.
* **`src/pages/about.astro` (About Page)**
  * **Experience & Education:** Edit the text blocks to update your resume details.
  * **Gallery:** Update the `<Image>` tags at the bottom of the file to change your conference/travel photos.
* **`src/pages/news.astro` (Full News Page)**
  * Contains the expanded version of the news timeline.
* **`src/pages/contact.astro` (Contact Page)**
  * Contains the contact form (powered by Web3Forms) and your contact details.
* **`src/pages/toolkit.astro` (Toolkit Page)**
  * Update the lists to add or remove programming languages, frameworks, or tools you use.

* **Dynamic Routes:**
  * `src/pages/projects/[...slug].astro`: The template for individual project pages.
  * `src/pages/posts/[...slug].astro`: The template for individual blog posts.

---

## ⚙️ 3. Global Settings & Navigation
* **`src/consts.ts`**: This is your global configuration file. 
  * Change `SITE_TITLE`, `SITE_TAGLINE`, and `SITE_DESCRIPTION` to affect the browser tab titles and SEO.
  * Change the `SOCIALS` array to update the icons in the footer and sidebar.
* **`src/components/Header.astro` & `src/components/Footer.astro`**: Edit these if you want to add new links to your top navigation bar or change the copyright text at the bottom.

---

## 🧩 4. Components (`src/components/`)
These are reusable building blocks. You only need to edit these if you want to change the *layout* or *behavior* of the site, rather than just the content.
* **`ProjectList.astro`**: Controls the grid of project cards and the "Newest/Oldest" sorting logic.
* **`PostItem.astro`**: The layout for a single blog post row in a list.
* **`PostsByYear.astro`**: Groups your blog posts by year and handles the blog sorting logic.
* **`FormattedDate.astro`**: Controls how dates are formatted across the site.

---

## 🎨 5. Styling & Aesthetics
Your site uses **TailwindCSS** for styling. 

* **Changing the Primary Color:**
  * The site currently uses `<span class="text-cyan-400">` for accent text and hover states. 
  * If you want to change the primary color to something else (e.g., emerald green), do a global Search and Replace in your code editor: Find `cyan-400` and replace it with `emerald-400` (or `blue-500`, `violet-400`, etc.).
* **Global CSS Variables (`src/styles/global.css`)**:
  * This file defines global font families, the dark background color, and the subtle grid background effect.
* **Tailwind Config (`tailwind.config.mjs`)**:
  * Modify this if you want to add custom fonts, breakpoints, or extend the Tailwind color palette.

---

## 🚀 6. How to Deploy
1. Run `npm run build` locally to ensure there are no errors.
2. Push your code to GitHub.
3. If using GitHub Pages or Vercel, simply connect the repository. The build command is `npm run build` and the output directory is `dist/`.
