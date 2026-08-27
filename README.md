# Verdant Office &mdash; Premium Corporate Florals

A single-page static website for a corporate floral / office-plant business.
No build step, no framework &mdash; just HTML, CSS and a little JavaScript, so it
can be hosted anywhere that serves static files.

## Project structure

```
.
├── index.html            # The site
├── 404.html              # Custom not-found page
├── .htaccess             # Apache/Hostinger: HTTPS redirect, gzip, caching, 404
├── robots.txt
├── sitemap.xml
└── assets/
    ├── favicon.svg
    ├── css/styles.css    # Small custom layer on top of Tailwind
    ├── js/
    │   ├── tailwind.config.js   # Design tokens (colors, fonts, spacing)
    │   └── main.js              # Mobile menu + form feedback
    └── images/           # Hero and collection photos
```

Tailwind CSS and the fonts load from their CDNs, so an internet connection is
required when the page is viewed. Everything else is local.

## Preview locally

Open `index.html` directly in a browser, or run a small server:

```bash
python3 -m http.server 8000
```

Then visit http://localhost:8000

## Publish to GitHub

```bash
git init
git add .
git commit -m "Initial site"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

### Optional: free hosting with GitHub Pages

In the repo: **Settings → Pages → Build and deployment → Source: Deploy from a branch**,
pick `main` / `root`, save. The site goes live at
`https://<your-username>.github.io/<repo-name>/`.

## Deploy to Hostinger

**Option A &mdash; upload the files (simplest)**

1. Hostinger panel → **Websites → Dashboard → File Manager** (or connect by FTP).
2. Open `public_html/` and delete the default files.
3. Upload the entire contents of this folder (not the folder itself) into
   `public_html/` &mdash; `index.html` must sit directly inside `public_html/`.
4. Visit your domain. The `.htaccess` handles HTTPS redirect and the 404 page.

**Option B &mdash; deploy from GitHub (auto-updates)**

1. Hostinger panel → **Websites → Dashboard → GitHub** (Git integration).
2. Connect your GitHub account and select this repository, branch `main`.
3. Set the deploy path to `public_html`. Hostinger pulls the repo on each push.

### Custom domain

Point the domain's DNS to Hostinger (done automatically if the domain is
registered there). Enable the free SSL certificate under **Security → SSL**.

## Customising

- **Colours, fonts, spacing:** edit `assets/js/tailwind.config.js`.
- **Text and images:** edit `index.html` and replace files in `assets/images/`.
- **Contact form:** `main.js` currently just shows a confirmation message. To
  actually receive submissions, point the `<form id="contact">` at a form
  service (Formspree, Getform, Web3Forms, etc.) by adding an `action` and
  `method="POST"`, then remove the `wireForm("contact", …)` call.
- **URLs:** replace `https://example.com/` in `index.html`, `robots.txt` and
  `sitemap.xml` with your real domain.

## License

MIT &mdash; see [LICENSE](LICENSE). Replace the placeholder photos before
commercial use; they are AI-generated placeholders.
