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

- **`_config.yml`**: Pas `baseurl` aan (`"/bielow-storage"` voor project site, `""` voor user site). Vul `form_endpoint` in met je Formspree-URL om het contactformulier te activeren.
- **Afbeeldingen**: Plaats bestanden in `assets/images/`. Voor de galerij op De ruimtes: vul `_data/gallery.yml` in.

## Pagina's

- Home, De ruimtes (met galerij), Contact, Bedankt (na formulier).

## GitHub Pages

1. Push naar GitHub.
2. **Settings → Pages** → Source: branch `main`, map `/ (root)`.
3. Site staat op `https://<username>.github.io/bielow-storage/`.
