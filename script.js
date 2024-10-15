'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

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
//   btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

/* //OPTIMIZE ALL SECTION */
// 005 Selecting, Creating, and Deleting Elements
/* 
console.log(document.documentElement);
console.log(document.body);
console.log(document.head);

const header = document.querySelector('.header');
const sections = document.querySelectorAll('.section');
console.log(`🚀  header =>`, header);
console.log(`🚀  sections =>`, sections);



// Create, Insert Elements
const message = document.createElement('div');
message.classList.add('cookies-message');
message.textContent = 'Hello I am John Ho';
message.innerHTML = `
  We use cookies for improved functionality and analytics.
  <button class="btn btn--close-cookie">Got it!</button>
`;

const header = document.querySelector('.header');
header.append(message);
// header.prepend(message.cloneNode(true));
// header.before(message);
// header.after(message);

// Delete Elements
// document.querySelector('.btn--close-cookie').addEventListener('click', () => {
//   message.remove();
// });

document.querySelector('.btn--close-cookie').addEventListener('click', () => {
  message.parentElement.removeChild(message);
});

// Styles, Attributes and Classes
message.style.backgroundColor = '#37383d';
message.style.width = '120%';
message.style.color = '#fff';

// document.documentElement.style.setProperty('--color-primary', 'orangered');

const logo = document.querySelector('.nav__logo');
console.log(`🚀  logo.alt =>`, logo.alt);
console.log(`🚀  logo.src =>`, logo.src);
console.log(`🚀  logo.className =>`, logo.className);

logo.setAttribute('designer', 'John');
console.log(`🚀  logo.getAttribute =>`, logo.getAttribute('designer'));


const link = document.querySelector('.nav__link--btn');
console.log(link.href);
console.log(link.getAttribute('href'));

// data attributes
const logo = document.querySelector('.nav__logo');
console.log(logo.dataset.versionNumber);

// classList
logo.classList.add('jonas');
logo.classList.remove('jonas');
logo.classList.toggle('jonas');
logo.classList.contains('jonas'); 
*/
