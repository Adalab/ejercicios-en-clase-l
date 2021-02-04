'use strict';

// opción a

/* const paletteElements = document.querySelectorAll('.js-palette');
const cardElement = document.querySelector('.js-card');

function updatePalette(ev) {
  // borro las clases palette-1, palette-2 y palette-3 del js-card
  cardElement.classList.remove('palette-1', 'palette-2', 'palette-3');
  // añado palette-x a js-card en función de la paleta seleccionada
  const paletteValue = ev.currentTarget.value;
  cardElement.classList.add('palette-' + paletteValue);
}

for (const paletteElement of paletteElements) {
  paletteElement.addEventListener('change', updatePalette);
} */

// fin de la opción a

// opción b

const paletteElements = document.querySelectorAll('.js-palette');
const cardElement = document.querySelector('.js-card');
let checkedPalette = 1;

function updatePalette() {
  // borro las clases palette-1, palette-2 y palette-3 del js-card
  cardElement.classList.remove('palette-1', 'palette-2', 'palette-3');
  // añado palette-x a js-card en función de la paleta seleccionada
  const checkedPaletteElement = document.querySelector('.js-palette:checked');
  checkedPalette = checkedPaletteElement.value;
  cardElement.classList.add('palette-' + checkedPalette);
  // después de cualquier acción del usuario guardo en el local storage
  saveInLocalStorage();
}

for (const paletteElement of paletteElements) {
  paletteElement.addEventListener('change', updatePalette);
}

// Como en la opción b updatePalette no recibe ningún parámetro o evento puedo llamar a esta función cuando quiera
// Así que la llamo al arrancar la página. Si en el HTML hay una paleta preseleccionada, automáticamente me va a añadir la clase palette-x a js-card
// Es decir, al arrancar la página, aplico la paleta preseleccionada a js-card reutilizando la misma función.
// Es decir, reutilizo una función, y al arrancar la página garantizo que las paletas y la card están coherentes
// updatePalette(); movido a 09 main.js

// fin de la opción b
