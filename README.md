# Ullas Rajvanshi — personal website

A static portfolio for GitHub Pages. Plain HTML, CSS, and JavaScript, with no build step or package dependencies. Google Fonts is optional: the site falls back to local fonts when offline.

## Preview locally

From this directory, run:

```sh
python3 -m http.server 8000
```

Open http://localhost:8000. The homepage is `index.html`, the full CV is `cv/index.html`, and the existing `/projects/` URL redirects to the selected work section.

## Publish on GitHub Pages

1. Create a backup branch of your current `ullasrajvanshi.github.io` repository before replacing its site files.
2. Copy `index.html`, `styles.css`, `script.js`, `.nojekyll`, and the `assets/`, `cv/`, and `projects/` folders into the repository root. Keep `.nojekyll`: it bypasses the old Jekyll theme when serving from a branch.
3. Commit and push the changes.
4. In the repository’s **Settings → Pages**, choose **Deploy from a branch**, then select your publishing branch and **/(root)**. If an existing Actions workflow builds Jekyll, disable that obsolete workflow or update it to publish these static files.
5. Check the finished deployment at https://ullasrajvanshi.github.io/ and test `/cv/` and `/projects/`.

No files have been pushed to GitHub by this project. The original website remains live until you publish the replacement.

## Edit content

- Homepage copy, project cards, contact links: `index.html`.
- Experience, education, and certifications: `cv/index.html`.
- Colours, typography, layout, animation, and print layout: `styles.css`.
- Mobile menu, project filtering, CV printing, and automatic year: `script.js`.
- Portrait: `assets/portrait.jpg`.

For a new project, copy a project `<article>`, set `data-category` to `ai` or `data`, and update the All work count. Content and metrics were taken from your public website on 23 October 2026. Review the rewritten introductory copy and certification statuses before publishing.

The design includes keyboard focus styles, a skip link, native expandable project details, responsive navigation, and reduced-motion support. The CV’s print button uses the browser’s print dialog; choose **Save as PDF** to export it.

## Design direction

Inspired by the typography, warm neutral backgrounds of https://cribconnects.ai/en/. The site uses a light olive green palette with sage accents. The layout, graphic, and code are original. Your portrait and professional content come from https://ullasrajvanshi.github.io/.


## Logo sources

- Accenture: https://commons.wikimedia.org/wiki/File:Accenture.svg (wordmark supplied by Accenture).
- Fugro: https://www.fugro.com/fugro-logo.png (transparent padding cropped for layout).
- TU Delft: https://www.tudelft.nl/_assets/2f383d4a929ad3d42eff11e81cdd4068/img/logo.svg

Logo images are stored locally in `assets/logos/`. Brand artwork keeps its original colours; TU Delft’s supplied currentColor variant renders in black.
