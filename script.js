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

// 011 Event Delegation Implementing Page Navigation
/* 
// #1
document.querySelectorAll('.nav__link').forEach(function (el) {
  el.addEventListener('click', function (e) {
    e.preventDefault();
    const id = this.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  });
});

// 1. Add event listener to common parent element
// 2. Determine what element originated the event

// #2
document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  console.log(`🚀  e.target =>`, e.target);

  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});
 */

// const h1 = document.querySelector('h1');
// console.log(`🚀  h1 =>`, h1.querySelector('.highlight'));
// console.log(`🚀  h1.childNodes =>`, h1.childNodes);
// console.log(`🚀  h1.children =>`, h1.children);

// Select first child and last child
// h1.firstElementChild.style.color = 'red';
// h1.lastElementChild.style.color = 'blue';
// console.log('🚀  h1.parentElement =>', h1.parentElement);

// h1.closest('.header').style.backgroundColor = 'red';
// h1.closest('.header').style.backgroundColor = '#ccc';
// h1.closest('h1').style.background = 'red';

// Going Sibling
// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);

// console.log(h1.previousSibling);
// console.log(h1.nextSibling);

// console.log(h1.parentElement.children);
// [...h1.parentElement.children].forEach(el => {
//   if (el !== h1) el.style.backgroundColor = 'red';
// });
