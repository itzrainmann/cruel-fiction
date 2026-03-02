/* ═══════════════════════════════════════════════════════════
   CRUEL FICTION — main.js
   Fetches data.json, renders all dynamic content,
   handles nav, cursor, scroll reveal, lightbox.
   ═══════════════════════════════════════════════════════════ */

'use strict';

/* ── SVG icon library ── */
const ICONS = {
  instagram: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>`,

  tiktok: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
  </svg>`,

  spotify: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
  </svg>`,

  music: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
  </svg>`,

  image: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-1.1 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
  </svg>`
};

/* ════════════════════════════════════════
   CUSTOM CURSOR
════════════════════════════════════════ */
function initCursor() {
  const cursor = document.createElement('div');
  cursor.style.cssText = `
    position: fixed; top: 0; left: 0;
    width: 12px; height: 12px;
    background: #b91c1c; border-radius: 50%;
    pointer-events: none; z-index: 99999;
    transform: translate(-50%, -50%);
    transition: transform 0.08s, width 0.2s, height 0.2s, background 0.2s;
    mix-blend-mode: difference;
  `;
  document.body.appendChild(cursor);

  document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top  = e.clientY + 'px';
  });

  document.querySelectorAll('a, button').forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.style.width  = '24px';
      cursor.style.height = '24px';
      cursor.style.background = '#ef4444';
    });
    el.addEventListener('mouseleave', () => {
      cursor.style.width  = '12px';
      cursor.style.height = '12px';
      cursor.style.background = '#b91c1c';
    });
  });
}

/* ════════════════════════════════════════
   NAV — scroll + mobile toggle
════════════════════════════════════════ */
function initNav() {
  const navbar   = document.getElementById('navbar');
  const toggle   = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });

  toggle.addEventListener('click', () => {
    toggle.classList.toggle('open');
    navLinks.classList.toggle('open');
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      toggle.classList.remove('open');
      navLinks.classList.remove('open');
    });
  });
}

/* ════════════════════════════════════════
   SCROLL REVEAL
════════════════════════════════════════ */
function initReveal() {
  const targets = document.querySelectorAll('.reveal');
  if (!targets.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  targets.forEach(el => observer.observe(el));
}

/* ════════════════════════════════════════
   HERO BG — mark as loaded
════════════════════════════════════════ */
function initHeroBg(heroBgUrl) {
  const heroBg = document.getElementById('heroBg');
  if (!heroBgUrl) {
    heroBg.classList.add('no-image');
    return;
  }
  const img = new Image();
  img.onload = () => heroBg.classList.add('loaded');
  img.onerror = () => heroBg.classList.add('no-image');
  img.src = heroBgUrl;
}

/* ════════════════════════════════════════
   RENDER FUNCTIONS
════════════════════════════════════════ */
function renderHero(artist) {
  const titleEl   = document.getElementById('heroTitle');
  const taglineEl = document.getElementById('heroTagline');
  const logoEl    = document.getElementById('nav-logo-text');

  if (titleEl)   titleEl.textContent  = artist.name   || 'CRUEL FICTION';
  if (taglineEl) taglineEl.textContent = artist.tagline || '';
  if (logoEl)    logoEl.textContent   = artist.name   || 'CRUEL FICTION';

  document.title = artist.name || 'CRUEL FICTION';
  initHeroBg(artist.heroBg);
}

function renderAbout(artist) {
  const bioEl = document.getElementById('aboutBio');
  if (bioEl) bioEl.textContent = artist.bio || '';
}

function renderMusic(music) {
  const wrapper = document.getElementById('spotifyWrapper');
  if (!wrapper) return;

  if (music.spotifyEmbedUrl && music.spotifyEmbedUrl.trim() !== '') {
    wrapper.innerHTML = `
      <iframe
        src="${escapeAttr(music.spotifyEmbedUrl)}"
        height="380"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        title="Cruel Fiction on Spotify">
      </iframe>`;
  } else {
    wrapper.innerHTML = `
      <div class="spotify-placeholder">
        ${ICONS.spotify}
        <p>Spotify coming soon</p>
        <p class="spotify-hint">Add your Spotify embed URL to data.json → music.spotifyEmbedUrl</p>
      </div>`;
  }
}

function renderGallery(galleryItems) {
  const grid = document.getElementById('galleryGrid');
  if (!grid) return;

  if (!galleryItems || galleryItems.length === 0) {
    grid.innerHTML = `<p style="color:#888;font-size:0.8rem;letter-spacing:0.2em;">
      Add images to data.json → gallery array
    </p>`;
    return;
  }

  grid.innerHTML = galleryItems.map((item, i) => `
    <div class="gallery-item reveal" style="transition-delay:${i * 0.08}s"
         data-src="${escapeAttr(item.src)}"
         data-caption="${escapeAttr(item.caption || '')}">
      <img
        src="${escapeAttr(item.src)}"
        alt="${escapeAttr(item.alt || '')}"
        loading="lazy"
        onerror="this.parentElement.innerHTML = \`
          <div class='gallery-placeholder'>
            ${ICONS.image.replace(/`/g, '\\`')}
            <span>Add image</span>
          </div>
          <div class='gallery-item-overlay'>
            <span class='gallery-item-caption'>${escapeJs(item.caption || '')}</span>
          </div>\`"
      />
      <div class="gallery-item-overlay">
        <span class="gallery-item-caption">${escapeHtml(item.caption || '')}</span>
      </div>
    </div>
  `).join('');

  // Lightbox click listeners
  grid.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', () => {
      const src     = item.getAttribute('data-src');
      const caption = item.getAttribute('data-caption');
      openLightbox(src, caption);
    });
  });

  initReveal();
}

function renderSocials(socials) {
  const grid = document.getElementById('socialsGrid');
  if (!grid || !socials) return;

  grid.innerHTML = socials.map(s => `
    <a href="${escapeAttr(s.url)}"
       target="_blank"
       rel="noopener noreferrer"
       class="social-card reveal"
       aria-label="${escapeAttr(s.platform)}">
      <div class="social-icon-wrap">${ICONS[s.icon] || ICONS.music}</div>
      <span class="social-platform">${escapeHtml(s.platform)}</span>
      <span class="social-handle">${escapeHtml(s.handle)}</span>
    </a>
  `).join('');

  initReveal();
}

function renderFooter(artist) {
  const nameEl = document.getElementById('footerName');
  const yearEl = document.getElementById('footerYear');
  if (nameEl) nameEl.textContent = artist.name || 'CRUEL FICTION';
  if (yearEl) yearEl.textContent = new Date().getFullYear();
}

/* ════════════════════════════════════════
   LIGHTBOX
════════════════════════════════════════ */
function initLightbox() {
  const lb      = document.getElementById('lightbox');
  const lbClose = document.getElementById('lightboxClose');
  const lbImg   = document.getElementById('lightboxImg');
  const lbCap   = document.getElementById('lightboxCaption');

  window.openLightbox = (src, caption) => {
    lbImg.src = src;
    lbImg.alt = caption || '';
    lbCap.textContent = caption || '';
    lb.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    lb.classList.remove('active');
    document.body.style.overflow = '';
    lbImg.src = '';
  };

  lbClose.addEventListener('click', closeLightbox);
  lb.addEventListener('click', (e) => {
    if (e.target === lb) closeLightbox();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
  });
}

/* ════════════════════════════════════════
   SANITISATION HELPERS
════════════════════════════════════════ */
function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function escapeAttr(str) {
  return String(str).replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

function escapeJs(str) {
  return String(str).replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$/g, '\\$');
}

/* ════════════════════════════════════════
   PARALLAX on hero bg (subtle)
════════════════════════════════════════ */
function initParallax() {
  const heroBg = document.getElementById('heroBg');
  if (!heroBg) return;
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    heroBg.style.transform = `translateY(${scrollY * 0.25}px)`;
  }, { passive: true });
}

/* ════════════════════════════════════════
   MAIN INIT
════════════════════════════════════════ */
async function init() {
  initCursor();
  initNav();
  initLightbox();

  // Mark static reveal elements
  document.querySelectorAll('.about-content, .about-label, .music-inner > *, .gallery-inner > .section-label, .gallery-inner > .section-heading, .socials-inner > .section-label, .socials-inner > .section-heading').forEach(el => {
    el.classList.add('reveal');
  });

  // Fetch site data
  let data;
  try {
    const res = await fetch('/api/data');
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    data = await res.json();
  } catch (err) {
    console.error('Failed to load site data:', err);
    document.getElementById('aboutBio').textContent = 'Content loading error. Check your data.json.';
    return;
  }

  // Render all sections
  renderHero(data.artist);
  renderAbout(data.artist);
  renderMusic(data.music);
  renderGallery(data.gallery);
  renderSocials(data.socials);
  renderFooter(data.artist);

  // Boot effects
  initReveal();
  initParallax();
}

document.addEventListener('DOMContentLoaded', init);
