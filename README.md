# QLFT - QuickLift Website

Static marketing site and App Store support pages for `QLFT - QuickLift`.

## Included

- `index.html`: marketing homepage
- `privacy.html`: App Store friendly privacy policy page
- `support.html`: support page
- `impressum.html`: legal notice for German law (`Impressum`)
- `styles.css`: shared site styles
- `script.js`: small reveal animations
- `assets/`: screenshots, branding art, and icon
- `.github/workflows/deploy-pages.yml`: GitHub Pages deployment workflow
- `.nojekyll`: GitHub Pages compatibility

## Quick Start

1. Create a new GitHub repository.
2. Upload the contents of this folder to the root of that repository.
3. Do not upload the enclosing `qlft-github-site` folder itself as a subfolder. The repository root must directly contain files like `index.html`, `privacy.html`, `support.html`, `assets/`, and `docs/`.
4. In GitHub, enable Pages for the repository if prompted.
5. Push to `main`.

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

Expected repository root structure:

- `index.html`
- `privacy.html`
- `support.html`
- `impressum.html`
- `styles.css`
- `script.js`
- `assets/`
- `docs/`
- `.github/`

## Legal Pages

The repository includes dedicated legal/support pages for App Store and TestFlight usage:

- `privacy.html` (Datenschutzerklärung)
- `impressum.html` (Impressum)
- `support.html` (Support)

## Notes

- All links use relative paths so the site works well on GitHub Pages.
- The site is fully static and does not require a build step.
