# Shovon Mandal Academic Professor-Friendly Website

This is a complete static academic portfolio website for GitHub Pages.

## Main URL after publishing

https://shovon-mandal.github.io

## Main features

- Fully academic and professor-friendly layout
- Right-side desktop sidebar navigation
- Mobile responsive menu
- Profile photo as website portrait and browser tab icon
- WhatsApp direct contact button
- Email contact form with mailto fallback
- Optional Formspree endpoint support for direct inbox delivery
- Publications and projects with filters
- Research-fit section for prospective supervisors
- Data-driven editing through `data/site-data.json`
- Local `admin.html` editor for easy updates

## Profile photo

Replace this file with your own professional academic headshot:

`assets/img/profile.jpg`

Keep the filename exactly the same: `profile.jpg`

Recommended: square crop, 800 x 800 px or higher, formal/semi-formal dress, neutral background.

## Editing content

Most content is stored in:

`data/site-data.json`

Edit this file to update:

- profile text
- research fit
- publications
- projects
- teaching experience
- skills
- honors
- contact links

## Admin editor

Open:

`admin.html`

Default passcode:

`shovon-admin-2026`

This editor lets you update JSON and download a new `site-data.json`. Because GitHub Pages is static hosting, this is not a secure online dashboard and cannot directly save to GitHub without a backend.

## Email form

Default email sending uses `mailto:`. It opens the visitor's email application with your email and message already prepared.

For direct inbox delivery from the website form:

1. Create a Formspree form endpoint.
2. Open `data/site-data.json`.
3. Add your endpoint to:

`"formEndpoint": "https://formspree.io/f/YOUR_FORM_ID"`

## Publishing

1. Create/open GitHub repository: `shovon-mandal.github.io`
2. Upload all files from this package to the repository root.
3. Go to Settings > Pages.
4. Select Deploy from branch.
5. Choose main branch and /root.
6. Save.
7. Visit https://shovon-mandal.github.io after deployment.
