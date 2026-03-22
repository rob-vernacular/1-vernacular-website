/* vernacular.cc — main.js v2 */

// Scroll reveal
function initReveal() {
  const els = document.querySelectorAll('.reveal');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
    });
  }, { threshold: 0.07, rootMargin: '0px 0px -40px 0px' });
  els.forEach(el => obs.observe(el));
}

// Mobile nav
function initNav() {
  const burger = document.querySelector('.v-nav__burger');
  const links = document.querySelector('.v-nav__links');
  if (!burger || !links) return;
  burger.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    const spans = burger.querySelectorAll('span');
    if (open) {
      spans[0].style.transform = 'translateY(6.5px) rotate(45deg)';
      spans[1].style.opacity = '0';
      spans[2].style.transform = 'translateY(-6.5px) rotate(-45deg)';
    } else {
      spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
    }
  });
  links.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      links.classList.remove('open');
      burger.querySelectorAll('span').forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
    });
  });
}

// Nav scroll style — swap dark/light based on section background
function initNavScroll() {
  const nav = document.getElementById('main-nav');
  if (!nav) return;
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });
}

// Ticker clone for seamless loop
function initTicker() {
  document.querySelectorAll('.v-ticker__track').forEach(t => {
    // Already has 3 sets in HTML for seamless loop
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initReveal();
  initNav();
  initNavScroll();
  initTicker();
});
