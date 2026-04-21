# Service Site

Portfolio website for Ben Rodriguez, focused on growth systems, audience ownership, and digital marketing services.

## Live Site

- GitHub Pages: https://benrod3000.github.io/service/

## Project Structure

- `index.html` - Main page content and section layout
- `styles.css` - Global styling, responsive layout, interactions, and section themes
- `script.js` - Scroll reveals, stagger effects, nav active states, and scroll-based UI behavior
- `images/` - Profile and visual assets

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

## Newsletter Embed

The CTA section embeds the signup form from:

- https://newsletterservice.vercel.app/embed

If the form does not appear:

1. Hard refresh the page (`Cmd+Shift+R` on macOS).
2. Check browser extensions (ad/privacy blockers can block embeds).
3. Confirm the embed URL is reachable in a new tab.

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
- Keep animations performant by preferring `transform` and `opacity` transitions.
