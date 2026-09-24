# Shovon Mandal Academic Portfolio

Static academic portfolio website for GitHub Pages.

## Current academic positioning

The website presents Shovon Mandal's research profile across:

- Secure distributed systems
- Blockchain-based digital payments
- NFC and IoT transaction security
- Applied cryptography and embedded systems security
- Applied machine learning
- Natural language processing
- Explainable AI and computer vision

## How content is updated

- Live content is stored in Firebase Firestore (`portfolio/site`) and edited from `admin.html` (Google sign-in, owner only).
- If Firebase is not configured or unreachable, the site falls back to `data/site-data.json`, then to the copy inside `assets/js/main.js`.
- "Download CV" builds the PDF in the browser from the latest content (`assets/js/cv-pdf.js`), with "Last updated" and "Downloaded on" at the end of the last page. `assets/docs/Shovon_Mandal_CV.pdf` is only a fallback.
- Setup and daily use: see `FIREBASE_SETUP_GUIDE.md`.

## Main files

- `index.html` - page structure
- `admin.html`, `assets/js/admin.js`, `assets/css/admin.css` - content editor
- `assets/js/firebase-config.js` - Firebase web config (safe to be public)
- `firestore.rules` - security rules (only the owner can write)
- `assets/js/data-core.js` - shared data helpers and automatic counts
- `assets/js/cv-pdf.js` - CV PDF generator
- `assets/vendor/jspdf.umd.min.js` - PDF library (loaded only when the CV is downloaded)
- `data/site-data.json` - fallback content
