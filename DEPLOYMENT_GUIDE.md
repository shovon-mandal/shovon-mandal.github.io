# Deployment Guide for Shovon Mandal Academic Portfolio V7 ## Recommended clean upload using VS Code 1. Clone or open your GitHub Pages repository: ```bash
git clone https://github.com/shovon-mandal/shovon-mandal.github.io.git
cd shovon-mandal.github.io
``` 2. Delete all old files except `.git`. Windows PowerShell: ```powershell
Get-ChildItem -Force | Where-Object { $_.Name -ne ".git" } | Remove-Item -Recurse -Force
``` 3. Extract the V7 ZIP file. 4. Copy the extracted files directly into the repository root. Correct structure: ```text
index.html
admin.html
assets/
data/
README.md
DEPLOYMENT_GUIDE.md
PROFILE_PHOTO_INSTRUCTIONS.txt
.nojekyll
``` 5. Replace these two files if needed:
- `assets/img/profile.jpg`
- `assets/docs/Shovon_Mandal_CV.pdf` 6. Commit and push: ```bash
git add -A
git commit -m "Clean upload academic portfolio V7"
git push
``` 7. Visit: `https://shovon-mandal.github.io` If the previous version appears, press:
`Ctrl + F5` ## Future updates Edit `data/site-data.json`, then run: ```bash
git add -A
git commit -m "Update academic portfolio"
git push
``` ## Faculty profile included This version includes the official NUBTK faculty profile link: `https://nubtkhulna.ac.bd/sd/275/Shovon%20Mandal` After upload, check that the front-page `Faculty Profile` button and affiliation link open correctly. ## Final pre-publish check Before pushing, open the site with Live Server and check:
- Lecturer/title line opens the official faculty profile.
- University affiliation opens NUBTK.
- Education institution names open KUET and BRAC University.
- Teaching institution names open NUBTK, Imperial, KUET, and BRAC University.
- CV PDF opens correctly.
- Profile photo displays correctly.

## Final check for this clean premium version

Before publishing, verify:
- No separate University button appears in the top profile-link row.
- The top Lecturer/title line is plain text.
- The top university affiliation line is plain text.
- Faculty Profile remains available in the profile-link row.
- Education and Teaching institution links still open correctly.
- `Secure Payment Systems` is not visible anywhere on the site.


## V8 Final Check

Before publishing:
1. Search the folder for `Email`; no visible Email contact feature should remain.
2. Confirm `admin.html` is not present in the publish root.
3. Confirm the contact section clearly shows `shovonmandal@gmail.com`.
4. Confirm the Projects section shows automation, blockchain/NFC, IOTA, and student-management work.
5. Push using:
   git add -A
   git commit -m "Update portfolio with automation profile"
   git push

## V9 Pre-Publish Check

Before pushing:
1. Confirm the bottom contact section shows only the direct email card and email form.
2. Confirm `GitHub Repositories` is not repeated at the bottom.
3. Confirm the section order starts with Graduate Research Fit before Profile.
4. Confirm research projects appear before automation projects.
5. Push with:
   git add -A
   git commit -m "Refocus portfolio for MSc PhD supervision"
   git push
