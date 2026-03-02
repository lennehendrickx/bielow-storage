(function () {
  var toggle = document.querySelector('.nav-toggle');
  var navList = document.querySelector('.nav-list');
  if (toggle && navList) {
    toggle.addEventListener('click', function () {
      var expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', !expanded);
      navList.classList.toggle('is-open');
    });
  }

  /* Gallery lightbox – works on all pages */
  var lightbox = document.getElementById('lightbox');
  var lightboxLinks = document.querySelectorAll('a[data-lightbox]');
  if (!lightbox || !lightboxLinks.length) return;

  var lightboxImg = lightbox.querySelector('.lightbox-img');
  var lightboxCaption = lightbox.querySelector('.lightbox-caption');
  var lightboxClose = lightbox.querySelector('.lightbox-close');
  var lightboxBackdrop = lightbox.querySelector('.lightbox-backdrop');

  function openLightbox(src, caption) {
    lightboxImg.src = src;
    lightboxImg.alt = caption || '';
    lightboxCaption.textContent = caption || '';
    lightbox.setAttribute('aria-hidden', 'false');
    lightbox.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.remove('is-open');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  lightboxLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      openLightbox(link.href, link.getAttribute('data-caption') || '');
    });
  });

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightboxBackdrop) lightboxBackdrop.addEventListener('click', closeLightbox);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && lightbox.classList.contains('is-open')) closeLightbox();
  });
})();
