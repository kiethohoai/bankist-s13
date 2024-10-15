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
 */



