# Ajay Kumar — GitHub Pages Portfolio

> 🌐 Live site: `https://<your-github-username>.github.io/<repo-name>/`

A professional, dark-themed portfolio website for **Ajay Kumar**, Fellow IETE — Senior Telecom & IT Professional with 26+ years of experience in BSNL / DoT, built as a **single-page GitHub Pages site**.

---

## 📁 Project Structure

```
ajay-kumar-portfolio/
├── index.html      ← Main HTML (all sections)
├── style.css       ← Dark GitHub-inspired theme
├── script.js       ← Interactions (typewriter, particles, reveal)
└── README.md       ← This file
```

---

## 🚀 Deploy to GitHub Pages

### Step 1 — Create a GitHub Repository
1. Go to [github.com](https://github.com) → **New repository**
2. Name it e.g. `ajay-kumar-portfolio`
3. Set it to **Public**
4. Click **Create repository**

### Step 2 — Upload Files
**Option A — Drag & Drop (easiest):**
1. Open your new repository on GitHub
2. Click **"uploading an existing file"**
3. Drag all 4 files (`index.html`, `style.css`, `script.js`, `README.md`) into the upload area
4. Click **Commit changes**

**Option B — Git CLI:**
```bash
cd ajay-kumar-portfolio
git init
git add .
git commit -m "Initial portfolio site"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

### Step 3 — Enable GitHub Pages
1. Go to your repository → **Settings** → **Pages**
2. Under **Source**, select `main` branch and `/ (root)` folder
3. Click **Save**
4. Your site will be live at `https://<your-username>.github.io/<repo-name>/` within 1–2 minutes ✅

---

## ✨ Features

| Feature | Details |
|---|---|
| **Typewriter hero** | Cycles through 5 role titles |
| **Animated particles** | Floating coloured dots on the hero |
| **Spinning avatar ring** | Conic gradient ring around initials |
| **Sticky navbar** | Glassmorphism effect on scroll |
| **Active nav highlighting** | Highlights current section |
| **Scroll reveal** | Elements fade in as you scroll |
| **Responsive design** | Works on mobile, tablet, and desktop |
| **Dark GitHub theme** | Matches GitHub's dark mode palette |

---

## 🎨 Customisation

- **Contact details** — Edit the `contact` section in `index.html`
- **Add a photo** — Replace the `<div class="avatar-inner">AK</div>` with an `<img>` tag
- **Colour scheme** — All colours are CSS variables in `style.css` under `:root`
- **Add more sections** — Follow the existing section pattern in `index.html`

---

*Built with pure HTML, CSS & vanilla JavaScript — no frameworks, no build tools.*
