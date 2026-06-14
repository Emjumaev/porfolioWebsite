# Mehriddin Jumaev — Portfolio & Blog

A personal site built with [Astro](https://astro.build). Static, fast, and
markdown-driven — publishing a blog post is just adding a file.

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
```

## Build

```bash
npm run build    # outputs to ./dist
npm run preview  # preview the production build locally
```

## Writing a new blog post

1. Create a new markdown file in `src/content/blog/`, e.g.
   `src/content/blog/my-post.md`. The file name becomes the URL slug
   (`/blog/my-post/`).
2. Add frontmatter at the top:

   ```markdown
   ---
   title: 'My post title'
   description: 'One-line summary shown in lists and previews.'
   pubDate: 2026-06-20
   tags: ['ios', 'swift']      # optional
   draft: false                # optional — set true to hide it
   ---

   Write your post in **Markdown** here.
   ```

3. Save. In `npm run dev` it shows up instantly. To publish, commit the file
   and deploy.

## Editing your profile info

All personal details (name, role, experience, education, skills, awards, social
links) live in **`src/data/site.ts`**. Edit that one file and it updates across
the whole site.

## Project structure

```
src/
  components/      Header, Footer
  content/blog/    ← your blog posts (markdown)
  data/site.ts     ← your profile info
  layouts/         page + blog-post shells
  pages/           routes (index, blog list, blog post)
  styles/          global.css
public/            static assets (favicon)
```

## Deploy

Any static host works. Easiest options:

- **Vercel / Netlify** — connect the repo, framework auto-detected as Astro.
- **GitHub Pages / Cloudflare Pages** — build command `npm run build`, output
  directory `dist`.

Update the `site` URL in `astro.config.mjs` to your real domain before deploying.
