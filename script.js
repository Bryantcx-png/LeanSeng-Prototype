/* ── PAGE NAVIGATION ── */
function showPage(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-' + id).classList.add('active');

  document.querySelectorAll('nav ul a').forEach(a => a.classList.remove('active'));
  const map = { home: 0, products: 1, about: 2, contact: 3 };
  const links = document.querySelectorAll('nav ul a');
  if (links[map[id]]) links[map[id]].classList.add('active');

  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Close mobile menu if open
  document.getElementById('navMenu').classList.remove('open');
}

/* ── MOBILE MENU ── */
function toggleMenu() {
  document.getElementById('navMenu').classList.toggle('open');
}

/* ── LANGUAGE SWITCHER (About page) ── */
function switchLang(lang, btn) {
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  ['en', 'zh', 'ms'].forEach(l => {
    const el = document.getElementById('about-' + l);
    if (el) el.style.display = l === lang ? 'block' : 'none';
  });
}
