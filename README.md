# Shovon Mandal Professor-Friendly Academic Website

Complete static academic portfolio for GitHub Pages.

Expected URL after publishing: `https://shovon-mandal.github.io`

## Main files

- `index.html` — main website
- `admin.html` — local content editor
- `data/site-data.json` — all editable content
- `assets/css/style.css` — design/layout
- `assets/js/main.js` — website functionality
- `assets/js/admin.js` — admin editor script
- `assets/img/profile.jpg` — replace this with your professional profile photo
- `assets/docs/Shovon_Mandal_CV.docx` — replace with updated CV if needed

## Profile picture

Replace `assets/img/profile.jpg` with your own formal academic photo. Keep the filename exactly: `profile.jpg`.

This same image is used for:
- main profile photo
- right sidebar photo
- browser tab icon/favicon
- social preview image

Recommended: square crop, 800×800 px or higher, formal/semi-formal dress, neutral background.

## Contact features

- WhatsApp direct link: `https://wa.me/8801911549671`
- WhatsApp message button with pre-filled message
- Email button using `mailto:shovonmandal@gmail.com`
- Contact form opens visitor's email app with prepared message

For direct server-side email delivery without opening an email app, use a service like Formspree, EmailJS, Netlify Forms, or a custom backend.

## Editing content later

Edit `data/site-data.json` to update:
- about/profile
- research interests
- education
- publications
- projects
- teaching
- skills
- honors
- contact links

## Admin editor

Open `admin.html`.

Default passcode: `shovon-admin-2026`

This is a local/static content editor. It can download an updated `site-data.json`, but it cannot securely save to GitHub by itself because GitHub Pages is static hosting.
