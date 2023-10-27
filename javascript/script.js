const navEl = document.querySelector('.nav');
const hamburgerEl = document.querySelector('.hamburger');
const homeEl = document.querySelector('.home');

hamburgerEl.addEventListener('click', () => {
	navEl.classList.toggle('nav--open');
	hamburgerEl.classList.toggle('hamburger--open');
	homeEl.classList.toggle('home--down');
});

navEl.addEventListener('click', () => {
	navEl.classList.remove('nav--open');
	hamburgerEl.classList.remove('hamburger--open');
	homeEl.classList.remove('home--down');
});
