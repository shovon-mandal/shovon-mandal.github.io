# Shovon Mandal Academic Portfolio Website

Professional academic portfolio website for GitHub Pages.

Expected URL: https://shovon-mandal.github.io

## Main files
- index.html: main website
- data/site-data.json: all editable content
- admin.html: local content editor
- assets/css/style.css: design
- assets/js/main.js: website rendering
- assets/js/admin.js: local editor
- assets/docs/Shovon_Mandal_CV.docx: downloadable CV

## Edit content
Update data/site-data.json manually or open admin.html.

Admin passcode: shovon-admin-2026

Important: admin.html is not secure authentication. GitHub Pages is static hosting and cannot save changes directly to GitHub. The admin editor validates and downloads an updated site-data.json file. Replace data/site-data.json in GitHub to publish updates.

## Add profile photo
Add your photo as assets/img/profile.jpg, then change profileImage in data/site-data.json to assets/img/profile.jpg.


## Enhanced Version Notes

This enhanced package keeps the original navy/white/gold academic design and adds the following features:

- Browser tab icon uses `assets/img/profile.jpg`.
- Main profile portrait also uses `assets/img/profile.jpg`.
- Replace that file with your own formal academic photo using the same file name.
- Scroll progress bar.
- Smooth reveal-on-scroll transitions.
- Terminal-style hero label.
- Numbered academic sections.
- Project filtering by category.
- Publication filtering by status.
- Skill progress bars.
- Back-to-top button.
- Contact form that opens the visitor's email app.
- Improved local admin editor with quick site-info update.

## Profile Photo Rule

Replace this file only:

`assets/img/profile.jpg`

Keep the same filename. The photo will automatically appear in:

1. Website hero/profile card
2. Browser tab icon/favicon
3. Social preview image metadata

Recommended photo: square crop, at least 800×800 px, professional headshot, neutral background.
