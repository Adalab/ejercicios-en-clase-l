"use strict";

const contentoElement = document.querySelector(".js-editable");

// Cuando se carga la página, recupero el valor anterior del localStorage

const prevText = localStorage.getItem("textContent");

// Pero CUIDAO! Puede ser que no hubiese ningún valor guardado (porque nunca ha entrado en la página o porque los ha borrado)
// Si no hay valor en el localStorage, la funcińo getItem() devuelve null
// Lo compruebo y si no hay valor, pongo algo por defecto.

if (prevText === null) {
  contentoElement.innerHTML = "Escribe algo";
}
else {
  contentoElement.innerHTML = prevText;
}

/**
 * Cuando se pulse una tecla sobre el elemento con contenteditable
 * Guardo su contenido (su innerHTML) en el localStorage
 */

function handleKeyContento() {
  const text = contentoElement.innerHTML;

  localStorage.setItem("textContent", text);
}

contentoElement.addEventListener("keyup", handleKeyContento);





// Ejemplo de cómo guardar (setItem) y recuperar (getItem) objetos del
// localStorage
// (nota: también vale este código para un lista/array)

const object = {nombre:"Dayana", github:"dromero"}

localStorage.setItem("miObjeto", JSON.stringify(object));

const recupObject = JSON.parse( localStorage.getItem("miObjeto") );