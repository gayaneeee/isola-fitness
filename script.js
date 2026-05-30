const burger = document.getElementById('burger');
const nav = document.getElementById('nav');

burger?.addEventListener('click', function () {
  nav?.classList.toggle('open');
});

nav?.querySelectorAll('a').forEach(function (a) {
  a.addEventListener('click', function () {
    nav?.classList.remove('open');
  });
});

const langButtons = document.querySelectorAll('.lang-btn');
const savedLang = localStorage.getItem('lang') || 'en';

function setLang(lang) {
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-en]').forEach(function (el) {
    const text = el.getAttribute('data-' + lang);
    if (text) {
      if (el.tagName === 'OPTION') {
        el.textContent = text;
      } else {
        el.textContent = text;
      }
    }
  });
  langButtons.forEach(function (b) {
    b.classList.toggle('active', b.getAttribute('data-lang') === lang);
  });
  localStorage.setItem('lang', lang);
}

langButtons.forEach(function (b) {
  b.addEventListener('click', function () {
    setLang(b.getAttribute('data-lang'));
  });
});

setLang(savedLang);

const lightbox = document.getElementById('lightbox');
const lightboxImg = lightbox?.querySelector('img');

document.querySelectorAll('.gallery .grid img').forEach(function (img) {
  img.addEventListener('click', function () {
    if (lightboxImg) lightboxImg.src = img.src;
    lightbox?.classList.add('show');
  });
});

lightbox?.addEventListener('click', function () {
  lightbox.classList.remove('show');
});

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') lightbox?.classList.remove('show');
});

const joinForm = document.getElementById('joinForm');
const success = document.getElementById('success');

joinForm?.addEventListener('submit', function (e) {
  e.preventDefault();
  joinForm.style.display = 'none';
  success?.classList.add('show');
  success?.scrollIntoView({ behavior: 'smooth', block: 'center' });
});