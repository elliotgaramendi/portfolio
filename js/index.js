'use strict';
const menu = document.getElementById('menu');
const openMenuButton = document.getElementById('openMenuButton');
const closeMenuButton = document.getElementById('closeMenuButton');

const toggleMenu = () => {
  menu.classList.toggle('nav__list--opened');
}

openMenuButton.addEventListener('click', toggleMenu);
closeMenuButton.addEventListener('click', toggleMenu);

const menuLinks = document.querySelectorAll('.nav__link');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const id = entry.target.getAttribute('id');
    const menuLink = document.querySelector(`.nav__list a[href="#${id}"]`);

    // if (entry.isIntersecting) {
    //   menuLink.classList.add('nav__link--selected');
    // } else {
    //   menuLink.classList.remove('nav__link--selected');
    // }
    if (entry.isIntersecting) {
      document.querySelector('.nav__link--selected').classList.remove('nav__link--selected');
      menuLink.classList.add('nav__link--selected');
    }
  });
}, { rootMargin: '-30% 0px -70% 0px' });

menuLinks.forEach(menuLink => {
  menuLink.addEventListener('click', () => {
    menu.classList.remove('nav__list--opened');
  });

  const hash = menuLink.getAttribute('href');
  const target = document.querySelector(hash);
  if (target) {
    observer.observe(target);
  }
});