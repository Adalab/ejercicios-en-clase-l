'use strict';

// // prevenir submit del form

// const formElement = document.querySelector('.js-form');

// function handleForm(ev) {
//   ev.preventDefault();
//   console.log(user);
// }

// formElement.addEventListener('submit', handleForm);

// // lo de las teclas y el background

// const inputElement = document.querySelector('.js-input');

// function handleInput(ev) {
//   formElement.classList.remove('fondo-morado', 'fondo-rojo');
//   if (ev.key === 'm') {
//     formElement.classList.add('fondo-morado');
//   } else if (ev.key === 'r') {
//     formElement.classList.add('fondo-rojo');
//   }
// }

// inputElement.addEventListener('keyup', handleInput);

// bubbling

const abuela = document.querySelector('.js-abuela');
const madre = document.querySelector('.js-madre');
const hija = document.querySelector('.js-hija');
const nieta = document.querySelector('.js-nieta');

function handleAbuela(ev) {
  console.log('Current target:', ev.currentTarget, 'Target:', ev.target);
}

function handleMadre(ev) {
  console.log('Current target:', ev.currentTarget, 'Target:', ev.target);
}

function handleHija(ev) {
  console.log('Current target:', ev.currentTarget, 'Target:', ev.target);
}

function handleNieta(ev) {
  console.log('Current target:', ev.currentTarget, 'Target:', ev.target);
}

abuela.addEventListener('click', handleAbuela);
madre.addEventListener('click', handleMadre);
hija.addEventListener('click', handleHija);
nieta.addEventListener('click', handleNieta);
