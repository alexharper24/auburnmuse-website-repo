/* Auburn Muse Photography — shared behavior */

/* Mobile nav drawer. Overlay is appended to the drawer's true parent (.nav .wrap)
   so it is a real sibling and its z-index sits below the drawer. */
(function () {
  const toggle = document.getElementById('navToggle');
  const links = document.getElementById('navLinks');
  if (!toggle || !links) return;
  const overlay = document.createElement('div');
  overlay.className = 'nav-overlay';
  links.parentElement.appendChild(overlay);
  const setMenu = (open) => {
    links.classList.toggle('open', open);
    toggle.classList.toggle('active', open);
    overlay.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    document.body.style.overflow = open ? 'hidden' : '';
  };
  toggle.addEventListener('click', () => setMenu(!links.classList.contains('open')));
  overlay.addEventListener('click', () => setMenu(false));
  links.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setMenu(false); });
})();

/* Scroll reveal */
(function () {
  const els = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) {
    els.forEach((el) => el.classList.add('in'));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
    });
  }, { threshold: 0.12 });
  els.forEach((el) => io.observe(el));
})();

/* Gallery lightbox. The lightbox <img> starts with no src attribute at all;
   src is set on open and removed on close to avoid a phantom request. */
(function () {
  const items = document.querySelectorAll('.g-item');
  const box = document.getElementById('lightbox');
  if (!items.length || !box) return;
  const img = box.querySelector('img');
  const closeBtn = box.querySelector('.lightbox-close');
  const open = (item) => {
    const full = item.getAttribute('data-full') || item.querySelector('img').src;
    img.src = full;
    img.alt = item.querySelector('img').alt;
    box.classList.add('open');
    document.body.style.overflow = 'hidden';
  };
  const close = () => {
    box.classList.remove('open');
    img.removeAttribute('src');
    document.body.style.overflow = '';
  };
  items.forEach((it) => it.addEventListener('click', () => open(it)));
  closeBtn.addEventListener('click', close);
  box.addEventListener('click', (e) => { if (e.target === box) close(); });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && box.classList.contains('open')) close();
  });
})();

/* Booking form: AJAX submit, on-page thank-you, friendly guard while the
   Formspree ID is not configured yet. */
(function () {
  const form = document.getElementById('bookForm');
  const thanks = document.getElementById('formThanks');
  if (!form) return;
  const btn = form.querySelector('button[type="submit"]');
  const showError = (t) => {
    const prev = form.querySelector('.form-error');
    if (prev) prev.remove();
    const d = document.createElement('div');
    d.className = 'form-error';
    d.textContent = t;
    form.querySelector('.submit-row').after(d);
  };
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const prev = form.querySelector('.form-error');
    if (prev) prev.remove();
    if (form.action.includes('YOUR_FORM_ID')) {
      showError("This form isn't connected yet. Please email auburnmusephotography@gmail.com and Emmi will get right back to you.");
      return;
    }
    const original = btn.textContent;
    btn.textContent = 'Sending…';
    btn.disabled = true;
    try {
      const res = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' }
      });
      if (res.ok) {
        form.hidden = true;
        thanks.hidden = false;
        thanks.scrollIntoView({ behavior: 'smooth', block: 'center' });
        form.reset();
      } else {
        const d = await res.json().catch(() => ({}));
        showError(((d.errors && d.errors.map((x) => x.message).join(', ')) || 'Something went wrong.') + ' Please try again, or email auburnmusephotography@gmail.com.');
      }
    } catch {
      showError("Couldn't reach the server. Check your connection and try again, or email auburnmusephotography@gmail.com.");
    } finally {
      btn.textContent = original;
      btn.disabled = false;
    }
  });
})();

/* Footer year */
(function () {
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
})();
