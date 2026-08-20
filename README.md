# Rahul Soni — Developer Portfolio

A clean, responsive developer portfolio built with **React + Vite + Tailwind CSS**.

## 🚀 Run it locally

You need [Node.js](https://nodejs.org) installed (v18+).

```bash
# 1. Install the dependencies (only the first time)
npm install

# 2. Start the dev server
npm run dev
```

Then open the URL it prints (usually http://localhost:5173).

## ✏️ How to update it

Almost everything lives in **one file**:

```
src/data/portfolio.js
```

- **Add a project** → copy a block inside the `projects` array and edit it.
- **Change skills** → edit the `skills` object.
- **Update your info / links** → edit `personal` and `socials`.
- **Change the theme color** → edit `accent` in `tailwind.config.js`.

You rarely need to touch the files in `src/components/`.

## 📄 Resume

Your resume PDF lives in `public/RahulSoni_Resume.pdf`.
Replace that file anytime to update the "Resume" button — keep the same name.

## 📦 Build for production

```bash
npm run build
```

This creates a `dist/` folder you can deploy.

## ☁️ Deploy (free) on Vercel

1. Push this folder to a new GitHub repo called `portfolio`.
2. Go to vercel.com → New Project → import the repo.
3. Framework preset: **Vite**. Click Deploy. Done! 🎉

## 📁 Project structure

```
portfolio/
├─ public/
│  ├─ favicon.svg
│  └─ RahulSoni_Resume.pdf
├─ src/
│  ├─ components/     # UI sections (Navbar, Hero, Projects, ...)
│  ├─ data/
│  │  └─ portfolio.js # 👈 edit your content here
│  ├─ App.jsx        # stacks all the sections
│  ├─ main.jsx       # app entry point
│  └─ index.css      # Tailwind + global styles
├─ index.html
├─ tailwind.config.js
├─ vite.config.js
└─ package.json
```
