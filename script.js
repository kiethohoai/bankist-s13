'use strict';

///////////////////////////////////////
//todo Modal window

//todo SELECTION
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const btnScroll = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

const tabsContainer = document.querySelector('.operations__tab-container');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContent = document.querySelectorAll('.operations__content');

const nav = document.querySelector('.nav');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => {
  btn.addEventListener('click', openModal);
});

// for (let i = 0; i < btnsOpenModal.length; i++)
// btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//todo Button Scrolling
btnScroll.addEventListener('click', () => {
  section1.scrollIntoView({ behavior: 'smooth' });
});

//todo Page navigation
document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  const id = e.target.getAttribute('href');

  if (e.target.classList.contains('nav__link'))
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
});

//todo Tabbed component
tabsContainer.addEventListener('click', e => {
  // Find out which tab was clicked
  const clicked = e.target.closest('.operations__tab');

  // Guard clause
  if (!clicked) return;

  // Remove current active classes
  tabs.forEach(t => t.classList.remove('operations__tab--active'));

  // Active tab
  clicked.classList.add('operations__tab--active');

  // Remove active content area
  tabsContent.forEach(tc => tc.classList.remove('operations__content--active'));

  // Active content area
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

// todo Menu fade animation

const handleHover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) {
        el.style.opacity = this;
      }
    });

    logo.style.opacity = this;
  }
};

nav.addEventListener('mouseover', handleHover.bind(0.5));
nav.addEventListener('mouseout', handleHover.bind(1));
// nav.addEventListener('mouseover', e => handleHover(e, 0.5));
// nav.addEventListener('mouseout', e => handleHover(e, 1));

//todo Sticky navigation
/* 
const initialCoords = section1.getBoundingClientRect();
console.log(`🚀  initialCoords =>`, initialCoords);

window.addEventListener('scroll', () => {
  // #1
  window.scrollY > initialCoords.top
    ? nav.classList.add('sticky')
    : nav.classList.remove('sticky');

  // #2
  // if (window.scrollY > initialCoords.top) {
  //   nav.classList.add('sticky');
  // } else {
  //   nav.classList.remove('sticky');
  // }
}); */
/* 
window.addEventListener('scroll', () => {
  window.scrollY > section1.getBoundingClientRect().top
    ? nav.classList.add('sticky')
    : nav.classList.remove('sticky');
}); */

//todo Sticky Navigation with Intersection Observer API

const stickyNav = function (entries) {
  // Input
  const entry = entries[0];

  // Add/Remove "sticky" class
  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;
console.log(`🚀  navHeight =>`, navHeight);

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});
headerObserver.observe(header);
