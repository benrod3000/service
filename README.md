```markdown
# Service Site

Standalone resume and case study site for Ben Rodriguez, focused on growth systems, audience ownership, and digital marketing execution.

## Live Site

- Live site: https://brod3000.com/

## Sitemap

The sitemap is available at:
- https://brod3000.com/sitemap.xml

### Maintaining the Sitemap

The sitemap is a manually maintained XML file in the root directory. When adding new pages:

1. Add a new `<url>` entry for each new page
2. Update the `<lastmod>` date for changed pages to today's date
3. Submit the updated sitemap to [Google Search Console](https://search.google.com/search-console) and [Bing Webmaster Tools](https://www.bing.com/webmasters)

Current sitemap includes the homepage. Expand as new content is added.

## Project Structure

- `index.html` - Primary digital resume site (root entrypoint)
- `styles-digital.css` - Digital UI styling, responsive behavior, and animation system
- `index-classic.html` - Archived classic homepage layout
- `digital.html` - Compatibility redirect to root URL
- `styles.css` - Legacy classic page styling
- `script.js` - Legacy classic page interactions and version toggle behavior
- `images/` - Profile and visual assets
- `sitemap.xml` - XML sitemap for search engine indexing

## Local Development

This is a static site. No build step is required.

### Option 1: Open directly

Open `index.html` in a browser.

### Option 2: Run a local server (recommended)

From the project folder:

```bash
python3 -m http.server 8080
```

Then visit:

- http://localhost:8080

## Deployment

This site deploys through GitHub Pages from the `main` branch.

### GitHub Pages settings

1. Open repository settings for Pages.
2. Set Source to **Deploy from a branch**.
3. Select branch `main` and folder `/ (root)`.
4. Save.

After pushing updates, GitHub Pages usually publishes in 1 to 3 minutes.

## Update Workflow

```bash
git add .
git commit -m "Your change summary"
git push origin main
```

## Notes

- Keep copy and metadata in `index.html` aligned.
- Keep `index-classic.html` as archive only content; avoid adding new features there.
- Keep animations performant by preferring `transform` and `opacity` transitions.

## Cache Busting

Query string cache busting is currently enabled for local assets using:

- `styles-digital.css?v=20260621`

This helps reduce stale GitHub Pages browser cache issues during active development.

### When to remove it:

1. After the UI is stable and no longer changing frequently.
2. After confirming users consistently see fresh updates without hard refresh.

### How to remove it:

1. Remove query string versions from local asset URLs in `index.html` once cache behavior is stable.
2. Commit and push one cleanup commit.
```