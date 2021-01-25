"use strict";

const nameInput = document.querySelector('.js-name');
const greetingParagraph = document.querySelector('.js-greeting');

/* El evento KeyDown no nos vale, porque muestra teclas como "Shift", "Caps Lock" o "Enter"

const handleKeyDownName = (event) => {
  console.log(event.key);
  greetingParagraph.innerHTML += event.key;
};
  
nameInput.addEventListener("keydown", handleKeyDownName); */

const handleChange = (event) => {
  console.log(event);
  greetingParagraph.innerHTML = `Hola ${event.currentTarget.value}!`;
};

nameInput.addEventListener("change", handleChange);
