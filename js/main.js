document.addEventListener('DOMContentLoaded', function() {

  var nav = document.querySelector('nav');
  var last = 0;
  window.addEventListener('scroll', function() {
    var y = window.scrollY;
    if (y > last && y > 150) nav.classList.add('hide');
    else nav.classList.remove('hide');
    last = y;
  });

  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle) {
    toggle.addEventListener('click', function() {
      links.classList.toggle('open');
      var s = toggle.querySelectorAll('span');
      if (links.classList.contains('open')) {
        s[0].style.transform = 'rotate(45deg) translate(4px,4px)';
        s[1].style.opacity = '0';
        s[2].style.transform = 'rotate(-45deg) translate(4px,-4px)';
      } else {
        s[0].style.transform = '';
        s[1].style.opacity = '';
        s[2].style.transform = '';
      }
    });
    links.querySelectorAll('a').forEach(function(a) {
      a.addEventListener('click', function() {
        links.classList.remove('open');
        toggle.querySelectorAll('span').forEach(function(s) { s.style.transform = ''; s.style.opacity = ''; });
      });
    });
  }

  var obs = new IntersectionObserver(function(entries) {
    entries.forEach(function(e) {
      if (e.isIntersecting) { e.target.classList.add('vis'); obs.unobserve(e.target); }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });
  document.querySelectorAll('.reveal').forEach(function(el) { obs.observe(el); });

  document.querySelectorAll('.acc-head').forEach(function(head) {
    head.addEventListener('click', function() {
      var item = head.parentElement;
      var body = item.querySelector('.acc-body');
      var icon = item.querySelector('.acc-icon');
      var open = body.classList.contains('open');
      document.querySelectorAll('.acc-body').forEach(function(b) { b.classList.remove('open'); });
      document.querySelectorAll('.acc-icon').forEach(function(i) { i.textContent = '+'; });
      if (!open) { body.classList.add('open'); icon.textContent = '\u2013'; }
    });
  });

  document.querySelectorAll('.door').forEach(function(d) {
    d.addEventListener('mouseenter', function() {
      var bg = d.querySelector('.door-bg');
      var cta = d.querySelector('.door-cta');
      if (bg) bg.style.opacity = '0.3';
      if (cta) { cta.style.opacity = '1'; cta.style.transform = 'translateY(0)'; }
    });
    d.addEventListener('mouseleave', function() {
      var bg = d.querySelector('.door-bg');
      var cta = d.querySelector('.door-cta');
      if (bg) bg.style.opacity = '0';
      if (cta) { cta.style.opacity = '0'; cta.style.transform = 'translateY(6px)'; }
    });
  });

});
