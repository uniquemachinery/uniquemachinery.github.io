# Zibo Unique Static MVP Website

Portable static website for the independent English Zibo Unique lead-generation site.

## Local preview

```powershell
cd site
python -m http.server 8000
```

Open `http://localhost:8000/`.

## Build

No build step is required. The `site/` directory is the publish directory.

## Deployment

- Vercel: set output/publish directory to `site`.
- Cloudflare Pages: set build command to empty and output directory to `site`.
- Netlify: set publish directory to `site`.
- Traditional server: upload the contents of `site/` to the web root.

## Launch TODO

- Replace `https://uniquemachinery.github.io` in canonical URLs, `sitemap.xml`, `robots.txt`, and `llms.txt` after the final independent domain is confirmed.
- Replace placeholder media blocks with verified local product videos, factory photos, shipment photos and project photos.
- Connect the contact form to Formspree, Resend, Netlify Forms, WordPress SMTP or a custom API endpoint.
