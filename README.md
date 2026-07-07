# Ullas Rajvanshi — Personal Website

Built with [AcademicPages](https://github.com/academicpages/academicpages.github.io) (Jekyll + GitHub Pages).

## Setup Instructions

### 1. Fork the template
Go to https://github.com/academicpages/academicpages.github.io and fork it.
Rename the repo to `YOUR_GITHUB_USERNAME.github.io`.

### 2. Replace files
Upload all files from this package into your forked repo, preserving the folder structure:

```
_config.yml           ← root of repo
_data/
  navigation.yml
_pages/
  about.md
  cv.md
  experience.md
  projects.md
  year-archive.md
images/
  profile.jpg         ← add your own photo here
```

### 3. Update your username
In `_config.yml`, replace all instances of `ullasrajvanshi` with your actual GitHub username:
- `url`
- `repository`
- `github` under author

### 4. Add your profile photo
Upload a photo named `profile.jpg` to the `images/` folder.

### 5. Enable GitHub Pages
Go to your repo → Settings → Pages → Source → select `main` branch → Save.

Your site will be live at `https://YOUR_USERNAME.github.io` within a few minutes.

---

## File Overview

| File | Purpose |
|---|---|
| `_config.yml` | Site-wide settings, name, bio, links |
| `_pages/about.md` | Homepage / bio |
| `_pages/cv.md` | Full CV page |
| `_pages/experience.md` | Experience detail page |
| `_pages/projects.md` | Projects page |
| `_pages/year-archive.md` | Blog archive |
| `_data/navigation.yml` | Top navigation bar links |
