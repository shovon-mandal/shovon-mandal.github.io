# Deployment Guide for Shovon Mandal Academic Website

## 1. Extract ZIP

Extract the package on your computer.

## 2. Add profile photo

Replace:

`assets/img/profile.jpg`

with your own photo. Keep filename exactly: `profile.jpg`.

## 3. Upload to GitHub

Repository name:

`shovon-mandal.github.io`

Upload all files to repository root.

## 4. Enable GitHub Pages

Settings > Pages > Deploy from branch > main > /root > Save

## 5. Update through VS Code

```bash
git add .
git commit -m "Update academic portfolio website"
git push
```

## 6. Later publication update

Edit:

`data/site-data.json`

Then commit and push.

## 7. Add website to CV

In CV header, hyperlink:

`Website`

to:

`https://shovon-mandal.github.io`
