# Ullas Rajvanshi — strategy & transformation delivery

A hiring-focused website for Data & AI strategy, programme resets, and implementation leadership. Static HTML, CSS, and JavaScript for GitHub Pages; no build step or package dependencies.

## Preview locally

From this directory:

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

Open http://127.0.0.1:8000/. The full CV is at `/cv/`. The existing `/projects/` address redirects to the homepage’s case studies.

## Publish on GitHub Pages

1. Back up your existing repository on a separate branch.
2. Extract `github-pages-website.zip` and copy its contents directly to the repository root, including the hidden `.nojekyll` file. The archive has no extra enclosing folder.
3. Replace the old website files while preserving `.git` and any custom-domain `CNAME` file. Review existing GitHub Actions workflows before replacing Jekyll.
4. Commit and push the files to your publishing branch.
5. Use branch-based GitHub Pages publishing from the repository root. If your existing setup uses a Jekyll build workflow, replace that setup with static publishing.
6. Check the homepage, `/cv/`, and `/projects/` after publishing.

This local project has not pushed changes to GitHub or changed your live website. `website-before-contractor-revamp.zip` preserves the original portfolio design; `website-before-editorial-refresh.zip` preserves the contractor design before the editorial restyling. The `github-pages-website/` directory mirrors the current deployment files.

## Content and editing

- `index.html`: positioning, three engagements, delivery model, case studies, introduction, and project enquiry form.
- `cv/index.html`: professional experience, education, certifications, and skills.
- `styles.css`: modern editorial design tokens, responsive component styles, and print layout.
- `script.js`: mobile navigation, service selection, email-draft preparation, CV printing, and automatic copyright year.
- `assets/portrait.jpg`: profile photograph.
- `assets/logos/`: locally stored organisation logos.

The offers are **Shape the programme**, **Reset delivery**, and **Lead implementation**. Service links preselect the relevant enquiry option. The delivery model explains how a business outcome connects business alignment, data foundations, and practical delivery, followed by an evidence-based investment decision.

Case studies describe contributions made within Accenture and Fugro employment. Organisation logos indicate professional background. No client endorsements, guaranteed outcomes, rates, or availability dates are asserted. Professional history and metrics come from the previously supplied public website content; confirm CV dates and certification statuses before publishing.

## Project enquiry behaviour

The form uses native required-field and email validation, then creates a `mailto:` draft containing the visitor’s name, email, optional company, chosen engagement, and project context. The visitor reviews and sends that draft in their email application. The website does not submit the form to a server or store its contents.

A visible direct email address and LinkedIn link remain available. Without JavaScript, the site shows a direct-email fallback instead of the form. The mobile navigation also remains available without JavaScript. No external scheduling service is required.

## Design and accessibility

Warm linen and alabaster surfaces, carbon typography, racing olive accents, and crisp hairlines create a modern editorial consulting site. The sticky translucent header, architectural delivery diagram, restrained service cards, and high-contrast case studies preserve the existing content and navigation. Major sections use 90–150px fluid spacing and a maximum content width of 1240px. The design includes visible keyboard focus, a skip link, native expandable details, labelled form fields, and reduced-motion support. The CV’s print button opens the browser print dialog for printing or saving as PDF.

Google Fonts supplies DM Sans and Manrope. Local font fallbacks are included when Google Fonts is unavailable. All portrait and logo assets are local.

## Verification

Run `node --check script.js`, `node --test tests/contact.test.cjs`, and `python3 tests/verify-editorial.py` in the working source directory. The behaviour tests cover email-draft encoding, required-field handling, service selection, optional company information, mobile-menu keyboard behaviour, and shared-script compatibility with the CV page. Editorial verification compares the site’s copy and links with the saved baseline, then checks semantic structure, accessible references, local assets, and the specified design tokens. These checks do not replace browser layout testing. The deployment ZIP contains only the website and this guide; tests stay in the working source directory.

## Logo sources

- Accenture: https://commons.wikimedia.org/wiki/File:Accenture.svg
- Fugro: https://www.fugro.com/fugro-logo.png (transparent padding cropped for layout).
- TU Delft: https://www.tudelft.nl/_assets/2f383d4a929ad3d42eff11e81cdd4068/img/logo.svg
