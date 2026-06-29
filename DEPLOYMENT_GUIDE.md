# Deployment Guide — Shovon Mandal Academic Portfolio

Live site: https://shovon-mandal.github.io/  
Repository: https://github.com/shovon-mandal/shovon-mandal.github.io  
Site ID: `shovon-mandal.github.io`

## Fresh Upload Steps

1. Unzip this package.
2. Delete all old files from the GitHub Pages repository.
3. Copy every file from this package into the repository root.
4. Run:

```bash
git add -A
git commit -m "Publish Shovon Mandal academic portfolio"
git branch -M main
git remote set-url origin https://github.com/shovon-mandal/shovon-mandal.github.io.git
git push -u origin main
```

If no remote exists yet:

```bash
git remote add origin https://github.com/shovon-mandal/shovon-mandal.github.io.git
git push -u origin main
```

## Required Root Files

- `index.html`
- `assets/css/style.css`
- `assets/js/main.js`
- `assets/img/profile.jpg`
- `assets/docs/Shovon_Mandal_CV.pdf`
- `data/site-data.json`
- `README.md`
- `DEPLOYMENT_GUIDE.md`
- `.nojekyll`


## Recommended Commit

```bash
git add -A
git commit -m "Increase portfolio header text size"
git push
```


## Recommended Commit

```bash
git add -A
git commit -m "Fix responsive experience section layout"
git push
```
