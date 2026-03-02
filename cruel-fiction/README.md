# CRUEL FICTION — Artist Profile Site

Cinematic dark artist profile. Plain HTML + CSS + JS frontend, Node.js + Express backend. Hosted on Railway.

---

## Stack

| Layer     | Tech                          |
|-----------|-------------------------------|
| Frontend  | HTML5, CSS3, Vanilla JS       |
| Backend   | Node.js + Express             |
| Data      | `data.json` (edit manually)   |
| Fonts     | Bebas Neue + DM Serif Display (Google Fonts) |
| Hosting   | Railway                       |

---

## Quickstart (Local)

```bash
# 1. Install dependencies (only one: express)
npm install

# 2. Start the server
npm start

# 3. Open in browser
# http://localhost:3000
```

---

## File Structure

```
cruel-fiction/
├── package.json          ← Node dependencies + scripts
├── server.js             ← Express server
├── data.json             ← ALL your editable content is here
├── .gitignore
├── README.md
└── public/
    ├── index.html        ← The single HTML page
    ├── css/
    │   └── style.css     ← All styling
    ├── js/
    │   └── main.js       ← All logic (fetch, render, interactions)
    └── assets/
        ├── hero-bg.jpg   ← YOUR HERO IMAGE (drop it here, rename to hero-bg.jpg)
        ├── logo.png      ← YOUR LOGO (drop it here, rename to logo.png)
        └── gallery/      ← YOUR GALLERY IMAGES (drop .jpg/.png files here)
            ├── album1.jpg
            ├── album2.jpg
            └── ...
```

---

## Editing Your Content — data.json

Open `data.json` in VS Code. Everything you see on the site comes from here.

### Artist Info
```json
"artist": {
  "name": "CRUEL FICTION",
  "tagline": "Lies never sounded this real",
  "bio": "Your bio paragraph here...",
  "logo": "/assets/logo.png",
  "heroBg": "/assets/hero-bg.jpg"
}
```
- Change `name`, `tagline`, `bio` freely.
- Replace `hero-bg.jpg` in the assets folder and keep the same filename, OR update the path here.

### Spotify Embed
```json
"music": {
  "spotifyEmbedUrl": "https://open.spotify.com/embed/artist/YOUR_ARTIST_ID?utm_source=generator"
}
```
1. Go to your Spotify artist page.
2. Click **···** → **Share** → **Embed artist**.
3. Copy the `src="..."` URL from the embed code.
4. Paste it as `spotifyEmbedUrl` in data.json.
5. Save and redeploy (or restart locally).

### Gallery Images
```json
"gallery": [
  { "src": "/assets/gallery/album1.jpg", "alt": "Album 1", "caption": "Debut EP" },
  { "src": "/assets/gallery/album2.jpg", "alt": "Album 2", "caption": "Latest Single" }
]
```
- Drop your `.jpg` or `.png` files into `public/assets/gallery/`
- Update the `src` paths in data.json to match your filenames.
- Add or remove items freely — the grid adjusts automatically.
- Click any image on the site to open a lightbox.

### Social Links
```json
"socials": [
  {
    "platform": "Instagram",
    "handle": "@thecruelfiction",
    "url": "https://www.instagram.com/thecruelfiction",
    "icon": "instagram"
  },
  {
    "platform": "TikTok",
    "handle": "@cruelfic",
    "url": "https://www.tiktok.com/@cruelfic",
    "icon": "tiktok"
  }
]
```
- `icon` must be one of: `instagram`, `tiktok`, `spotify`
- Add as many cards as you want.

---

## Adding Your Images

### Hero Background
1. Get a high-res photo (1920×1080 minimum, dark/moody band photo works best)
2. Name it `hero-bg.jpg`
3. Drop it in `public/assets/`
4. Make sure `data.json → artist.heroBg` is `/assets/hero-bg.jpg`

### Logo
1. Name it `logo.png` (transparent background PNG recommended)
2. Drop it in `public/assets/`
3. Make sure `data.json → artist.logo` is `/assets/logo.png`

### Gallery
1. Drop any number of `.jpg` / `.png` / `.svg` files into `public/assets/gallery/`
2. Add an entry per image in `data.json → gallery`

---

## Deploy to Railway

```bash
# 1. Push your code to GitHub first
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/cruel-fiction.git
git push -u origin main

# 2. Go to railway.app → New Project → Deploy from GitHub repo
# 3. Select your repo
# 4. Railway auto-detects Node.js and runs `npm start`
# 5. Done — you get a public URL
```

Railway reads `package.json → scripts.start` which runs `node server.js`.
The `PORT` environment variable is set automatically by Railway.

---

## Customising the Design

All colours are CSS variables at the top of `public/css/style.css`:

```css
:root {
  --black:    #080808;
  --dark:     #101010;
  --red:      #b91c1c;      ← main accent colour
  --red-glow: #ef4444;      ← hover accent
  --white:    #f5f5f5;
  --muted:    #888888;
}
```

Change `--red` to any colour to completely re-theme the site.

---

## Dependencies

| Package   | Version  | Why                         |
|-----------|----------|-----------------------------|
| express   | ^4.18.2  | Serves files + /api/data    |

That's it. No bundler, no build step, no framework.

---

## Troubleshooting

| Problem | Fix |
|---|---|
| Site won't start | Run `npm install` first |
| Hero image not showing | Check filename matches `data.json → artist.heroBg` |
| Gallery images broken | Check filenames in `public/assets/gallery/` match `data.json → gallery[].src` |
| Spotify not showing | Make sure URL starts with `https://open.spotify.com/embed/...` |
| Railway deploy fails | Check that `package.json` has `"start": "node server.js"` |
