# Deployment Guide

## 1. Extract the ZIP

Extract the website package on your computer.

## 2. Add your profile picture

Replace:

`assets/img/profile.jpg`

with your own professional photo. Keep the same filename.

## 3. Upload to GitHub

Create or open the repository:

`shovon-mandal.github.io`

Upload all files to the repository root.

## 4. Enable GitHub Pages

Go to:

Settings > Pages

Choose:
- Source: Deploy from branch
- Branch: main
- Folder: /root

Click Save.

## 5. Open the website

After a few minutes, visit:

`https://shovon-mandal.github.io`

## 6. Update later using VS Code

```bash
git add .
git commit -m "Update academic portfolio"
git push
```

GitHub Pages will redeploy automatically after push.

## 7. Add website to CV

In your CV header, write `Website` and hyperlink it to:

`https://shovon-mandal.github.io`
