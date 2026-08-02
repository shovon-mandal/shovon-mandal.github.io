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

## Publication status summary

- 4 published conference papers
- 2 accepted / in-press conference papers
- 4 conference manuscripts under review

Under-review manuscripts are displayed separately and are not described as accepted or published. Submitted PDFs, submission IDs, and reviewer information are not publicly included.

## Main files

- `index.html` - page structure, metadata, navigation, and publication filters
- `data/site-data.json` - primary website content
- `assets/js/main.js` - rendering, filters, navigation, animation, and fallback data
- `assets/css/style.css` - original visual design with an added under-review publication badge
- `assets/docs/Shovon_Mandal_CV.pdf` - current downloadable academic CV
- `assets/img/profile.jpg` - profile photograph

## Updating content

Edit `data/site-data.json` first. The website also contains a full fallback copy of the data in `assets/js/main.js`; keep both copies synchronized when making future content changes.

Publication records use the following status conventions:

- `Published` - DOI and official publication information available
- `In press` - accepted but DOI or final publication information not yet available
- `Under Review` - submitted manuscript awaiting a decision

For a paper without a DOI, set `statusText` explicitly. The website will then display the correct status instead of assuming that the paper is in press.

## GitHub Pages deployment

1. Open the repository root.
2. Replace the existing website files with the contents of this package.
3. Commit and push the changes to the branch configured for GitHub Pages.
4. Confirm that `index.html`, `data/`, and `assets/` are at the repository root.
5. Open the live site and use a hard refresh after deployment.

The `.nojekyll` file should remain in the repository root.

## Privacy and review integrity

- Reference email addresses are not displayed publicly.
- Under-review manuscript PDFs are not linked.
- Submission IDs and author-email metadata are not included.
- Academic references remain available upon request.
