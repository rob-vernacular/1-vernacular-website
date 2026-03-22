# vernacular.cc

Static website for Vernacular — Creative, Strategy, Culture.

## Structure

```
vernacular-site/
├── index.html          # Homepage (vernacular.cc)
├── pro/
│   └── index.html      # Vernacular Pro (vernacular.cc/pro)
├── labs/
│   └── index.html      # Vernacular Labs (vernacular.cc/labs)
├── css/
│   ├── system.css      # Shared design system
│   ├── home.css        # Homepage styles
│   ├── pro.css         # Pro page styles
│   └── labs.css        # Labs page styles
├── js/
│   └── main.js         # Shared JS (reveals, nav, ticker)
├── assets/
│   └── images/         # All images
├── robots.txt
└── sitemap.xml
```

## Deployment via GitHub → GoDaddy

### Option A: GitHub Pages (if using GoDaddy domain with GitHub Pages)

1. Push this repo to GitHub
2. Go to Settings → Pages → set source to `main` branch, `/ (root)`
3. In GoDaddy DNS: add a CNAME record pointing `www` to `yourusername.github.io`
4. Add an A record for `@` pointing to GitHub Pages IPs:
   - 185.199.108.153
   - 185.199.109.153
   - 185.199.110.153
   - 185.199.111.153
5. In GitHub Pages settings, add your custom domain `vernacular.cc`
6. Enable "Enforce HTTPS"

### Option B: GoDaddy Hosting (FTP/cPanel upload)

1. Log into GoDaddy cPanel or File Manager
2. Navigate to `public_html` (or your domain root folder)
3. Upload all files from this folder maintaining the directory structure
4. Ensure `index.html` is at the root of `public_html`
5. `pro/index.html` and `labs/index.html` should be in their respective subdirectories

### Important notes

- All paths are **relative** — no absolute URLs in HTML/CSS/JS
- No build step required — pure HTML/CSS/JS, no framework dependencies
- All Google Fonts loaded via CDN (requires internet connection for visitors)
- Contact links use `mailto:coffee@vernacular.cc` — no backend required
- Images are loaded from `assets/images/` — ensure this folder uploads correctly

## Updating content

- Edit HTML files directly for copy changes
- `css/system.css` contains all design tokens (colors, fonts, spacing)
- Sub-brand colors: Labs = `#3AFFB8`, Pro = `#FF6B35`, Core = `#E8FF3A`

## SEO

- Update `sitemap.xml` dates when making changes
- Meta descriptions are in each HTML file `<head>`
- Add Google Analytics or Plausible by inserting script before `</body>`
