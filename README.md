# Bie-Low Storage – GitHub Pages

Jekyll-website voor [Bie-Low Storage](http://www.leuven-storage.be/), gehost op GitHub Pages.

## Lokaal draaien

Voor lokaal bouwen en testen is Ruby (bij voorkeur 3.x) nodig:

```bash
bundle install
bundle exec jekyll serve
```

Open <http://localhost:4000/bielow-storage/> (of <http://127.0.0.1:4000/bielow-storage/>).  
*Op GitHub Pages wordt de site automatisch met Jekyll gebouwd; je hoeft lokaal niet te bouwen om te deployen.*

## Docker

Bouw en serveer de site in een container (geen Ruby nodig op je machine):

```bash
docker build -t bielow-storage .
docker run -p 4000:4000 bielow-storage
```

Open <http://localhost:4000/bielow-storage/>. Alleen bouwen (zonder serve):  
`docker run --entrypoint bundle bielow-storage exec jekyll build` — output staat in `_site` (in de container).

## Configuratie

- **`_config.yml`**: Pas `baseurl` aan (`"/bielow-storage"` voor project site, `""` voor user site). Het contactformulier gebruikt [FormSubmit](https://formsubmit.co) met `email`; bij de eerste inzending moet je het adres bevestigen via de activatiemail.
- **Afbeeldingen**: Plaats bestanden in `assets/images/`. Voor de galerij op De ruimtes: vul `_data/gallery.yml` in.

## Pagina's

- Home, De ruimtes (met galerij), Contact, Bedankt (na formulier).

## GitHub Pages

1. Push naar GitHub.
2. **Settings → Pages** → Source: branch `main`, map `/ (root)`.
3. Site staat op `https://<username>.github.io/bielow-storage/`.

## Productie (checklist)

- **`_config.yml`**: Zet `url` en `baseurl` op je echte GitHub Pages-URL (of custom domain). `absolute_url` voor canonical, Open Graph en sitemap hangt hieraan.
- **FormSubmit**: Bevestig het contact-e-mailadres via de mail van FormSubmit na de eerste testinzending.
- **SEO**: `sitemap.xml` wordt door `jekyll-sitemap` gegenereerd; `robots.txt` wijst naar de sitemap. Favicon gebruikt `assets/images/logo.png`.
- **404**: `404.html` wordt door GitHub Pages gebruikt voor onbekende paden.
- **Lokaal bouwen**: Ruby 3.x aanbevolen (`bundle install` + `bundle exec jekyll build`). GitHub Pages bouwt op hun infrastructuur.
