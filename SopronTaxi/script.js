'use strict';

// MOBILE NAVIGATION
const navigation = document.querySelector('.main-nav');

const opencloseBtns = document.querySelectorAll('.icon-mobile-nav');
const openMenu = function () {
  navigation.classList.toggle('nav-open');
  opencloseBtns.forEach((btn) => btn.classList.toggle('hidden'));
};
opencloseBtns.forEach((btn) => btn.addEventListener('click', openMenu));

// Reveal sections

const allSections = document.querySelectorAll('.section');

const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});
