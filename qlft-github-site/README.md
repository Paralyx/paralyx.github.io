# QLFT - QuickLift Website

Static marketing site and App Store support pages for `QLFT - QuickLift`.

## Included

- `index.html`: marketing homepage
- `privacy.html`: App Store friendly privacy policy page
- `support.html`: support page
- `styles.css`: shared site styles
- `script.js`: small reveal animations
- `assets/`: screenshots, branding art, and icon
- `.github/workflows/deploy-pages.yml`: GitHub Pages deployment workflow
- `.nojekyll`: GitHub Pages compatibility

## Quick Start

1. Create a new GitHub repository.
2. Upload the contents of this folder to the root of that repository.
3. In GitHub, enable Pages for the repository if prompted.
4. Push to `main`.

The included workflow is set up to deploy the site with GitHub Pages.

## GitHub Pages Setup

This folder now supports both common GitHub Pages setups:

- `Deploy from branch` using the `/docs` folder
- `GitHub Actions` using the repository root

If GitHub Pages is currently set to publish from `/docs`, it should now work without errors.

Recommended GitHub setting:

1. Open your repository on GitHub
2. Go to `Settings` -> `Pages`
3. Choose either:
- `Deploy from a branch` and select `main` + `/docs`
- or `GitHub Actions`

If you previously saw an error mentioning `/github/workspace/docs`, that meant Pages was expecting a `docs` folder. This package now includes one.

## Placeholder Details To Replace

Search these files and replace the placeholder details before launch:

- `privacy.html`
- `support.html`

Update:

- `privacy@example.com`
- `support@example.com`
- `Your Company Name Here`
- `https://your-domain.example`

## Notes

- All links use relative paths so the site works well on GitHub Pages.
- The site is fully static and does not require a build step.
