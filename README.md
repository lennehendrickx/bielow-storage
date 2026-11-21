# Bie-Low Storage – GitHub Pages

Jekyll-website voor [Bie-Low Storage](https://www.leuven-storage.be/), gehost op GitHub Pages met custom domain.

**Live:** https://www.leuven-storage.be/ (apex `leuven-storage.be` redirect naar www)

## Lokaal draaien

De `Gemfile` gebruikt de [`github-pages`](https://github.com/github/pages-gem) gem (~> 232) zodat lokale builds dezelfde Jekyll/plugin-versies gebruiken als GitHub Pages.

**Ruby 3.3.x** vereist (zie `.ruby-version`). De `github-pages` gem ondersteunt geen Ruby 4. Gebruik rbenv/asdf of Docker hieronder.

```bash
bundle install
bundle exec jekyll serve
```

Open <http://localhost:4000/>.  
GitHub Pages bouwt de site automatisch; lokaal bouwen is alleen nodig om te testen.

## Docker

```bash
docker build -t bielow-storage .
docker run -p 4000:4000 bielow-storage
```

Open <http://localhost:4000/>. Alleen bouwen:  
`docker run --entrypoint bundle bielow-storage exec jekyll build` — output in `_site` (in de container).

## Configuratie

- **`_config.yml`**: `url` / `baseurl` staan op het custom domain (`baseurl: ""`). Contactformulier gebruikt [FormSubmit](https://formsubmit.co) met `email`; bevestig het adres via de activatiemail na de eerste inzending.
- **`CNAME`**: `www.leuven-storage.be` (primair domein voor GitHub Pages).
- **Afbeeldingen**: `assets/images/`. Extra galerijitems op De ruimtes: `_data/gallery.yml`.

## Pagina's

- Home, De ruimtes (galerij + plattegrond), Contact, Bedankt (na formulier).

## GitHub Pages & DNS

1. Push naar `main`.
2. **Settings → Pages** → Source: branch `main`, map `/ (root)`.
3. Custom domain: `www.leuven-storage.be` → daarna **Enforce HTTPS**.
4. DNS (GoDaddy):
   - `www` → CNAME → `lennehendrickx.github.io`
   - `@` → A → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`

## Productie (checklist)

- **FormSubmit**: Bevestig `bielowbvba@hotmail.com` via de activatiemail na een testinzending.
- **SEO**: `sitemap.xml` via `jekyll-sitemap`; `robots.txt` wijst naar de sitemap. Favicon: `assets/images/logo.png`.
- **404**: `404.html` voor onbekende paden.
- **Lokaal**: `bundle install` + `bundle exec jekyll build` (of Docker hierboven).
