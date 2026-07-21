# Portfolio Management and Deployment Guide

Here is a simple guide on how you can easily edit every section of your portfolio and push it smoothly to GitHub Pages.

## 1. How to Edit Your Sections

Astro uses a component-based architecture. Here's exactly where to find and edit your content:

### **Blog Posts & Projects (Markdown)**
- **Posts**: Go to `src/content/blog/`. Create a new `.md` or `.mdx` file. The metadata (title, date, tags) at the top of the file controls how it appears.
- **Projects**: Go to `src/content/projects/`. Create a new `.md` file for each project.

### **News Timeline**
- Open `src/pages/index.astro` and `src/pages/news.astro`.
- At the top of both files (inside the `---` code block), you will find a `const news = [...]` array.
- Simply add or modify objects in this array: `{ date: "Month DD, YYYY", content: "Your text here" }`. 

### **Experience, Education, and Gallery**
- Open `src/pages/about.astro`.
- Scroll down to the `<h2 ...>Experience</h2>` and `<h2 ...>Education</h2>` tags. 
- You can copy and paste the `<div class="relative">...</div>` blocks to add new timeline items.
- For the **Gallery**, scroll to the bottom of the file. You will see `<img src="..." />` tags. Just replace the placeholder `src` URLs with links to your own photos (or put your photos in `src/assets/` and import them).

### **Social Links & Contact Info**
- **Home Page**: Edit `src/pages/index.astro` (look for the `<Mail/>`, `<Github/>` icons).
- **Contact Page**: Edit `src/pages/contact.astro`.
- **Footer**: Edit `src/layouts/components/Footer.astro`.

---

## 2. Pre-Flight Checks (Code Quality)

Before pushing to GitHub, you should always ensure your code compiles without errors. Run these commands in your terminal:

1. **Check for Type Errors & Build Issues:**
   ```bash
   npm run build
   ```
   *This command checks your TypeScript/Astro files and creates a production build. If it says "Complete!", your code is completely bug-free and ready.*

2. **Preview the Production Build locally (Optional):**
   ```bash
   npm run preview
   ```

---

## 3. How to Deploy to GitHub Pages

Astro makes GitHub Pages deployment completely automated using GitHub Actions.

### **Step 1: Update Astro Config**
Open `astro.config.mjs` in the root of your project and add your `site` and `base` URLs:
```javascript
import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: 'https://laxmidhar-panda.github.io', // Your GitHub Pages URL
  base: '/portfolio', // ONLY NEEDED if your repo is named "portfolio". If your repo is named "laxmidhar-panda.github.io", REMOVE THIS LINE.
  integrations: [tailwind()]
});
```

### **Step 2: Create the GitHub Action Workflow**
Create a new file in your project at exactly this path: `.github/workflows/deploy.yml`

Paste the following code into it:
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ] # or master, depending on your default branch
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout your repository using git
        uses: actions/checkout@v4
      - name: Install, build, and upload your site
        uses: withastro/action@v2
        
  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

### **Step 3: Push to GitHub**
1. Commit all your changes:
   ```bash
   git add .
   git commit -m "Prepare for GitHub Pages deployment"
   git push origin main
   ```
2. Go to your repository on GitHub.
3. Click on **Settings** > **Pages** (on the left sidebar).
4. Under **Source**, ensure it is set to **GitHub Actions**.
5. Your site will automatically build and deploy within 1-2 minutes! You can watch the progress in the **Actions** tab on GitHub.
