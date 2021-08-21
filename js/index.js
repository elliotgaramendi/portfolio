'use strict';
const menu = document.getElementById('menu');
const openMenuButton = document.getElementById('openMenuButton');
const closeMenuButton = document.getElementById('closeMenuButton');

const toggleMenu = () => {
  menu.classList.toggle('nav__list--opened');
}

openMenuButton.addEventListener('click', toggleMenu);
closeMenuButton.addEventListener('click', toggleMenu);