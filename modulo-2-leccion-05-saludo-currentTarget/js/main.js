"use strict";

const nameInput = document.querySelector('.js-name');
const formElement = document.querySelector('.js-form');
const greetingParagraph = document.querySelector('.js-greeting');
const submitButton = document.querySelector('.js-submit');

/*
  Updates the greeting message with the value of the latest modified <input>
  */

const handleChange = (event) => {
  /* Descripción:
    event.currentTarget <-- Elemento al que le he puesto el addEventListener
    event.target  <-- Elemento en el que realmente sucede el evento

    En este caso: 
    event.currentTarget  --> El formulario
    event.target         --> El <input> donde haya escrito
  */
  console.log(event);
  greetingParagraph.innerHTML = `Hola ${event.target.value}!`;

  formElement.removeEventListener("change", hadleChange);
};

/*
  Prevents the submit of the form if the first <input> is empty
  */

const handleClickSubmit = (event) => {
  if (nameInput.value === "") {
    event.preventDefault();
  }
}

/*
  Global code
  It runs after the load of the page.
  */

formElement.addEventListener("change", handleChange);
submitButton.addEventListener("click", handleClickSubmit);

