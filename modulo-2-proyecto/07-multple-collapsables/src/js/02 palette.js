'use strict';

// opción a

/* const paletteElements = document.querySelectorAll('.js-palette');
const cardElement = document.querySelector('.js-card');

function handlePalette(ev) {
  // borro las clases palette-1, palette-2 y palette-3 del js-card
  cardElement.classList.remove('palette-1', 'palette-2', 'palette-3');
  // añado palette-x a js-card en función de la paleta seleccionada
  const paletteValue = ev.currentTarget.value;
  cardElement.classList.add('palette-' + paletteValue);
}

for (const paletteElement of paletteElements) {
  paletteElement.addEventListener('change', handlePalette);
} */

// fin de la opción a

// opción b

const paletteElements = document.querySelectorAll('.js-palette');
const cardElement = document.querySelector('.js-card');

function handlePalette() {
  // borro las clases palette-1, palette-2 y palette-3 del js-card
  cardElement.classList.remove('palette-1', 'palette-2', 'palette-3');
  // añado palette-x a js-card en función de la paleta seleccionada
  const checkedPalette = document.querySelector('.js-palette:checked');
  const checkedPaletteValue = checkedPalette.value;
  cardElement.classList.add('palette-' + checkedPaletteValue);
}

for (const paletteElement of paletteElements) {
  paletteElement.addEventListener('change', handlePalette);
}

// Como en la opción b handlePalette no recibe ningún parámetro o evento puedo llamar a esta función cuando quiera
// Así que la llamo al arrancar la página. Si en el HTML hay una paleta preseleccionada, automáticamente me va a añadir la clase palette-x a js-card
// Es decir, al arrancar la página, aplico la paleta preseleccionada a js-card reutilizando la misma función.
// Es decir, reutilizo una función, y al arrancar la página garantizo que las paletas y la card están coherentes
handlePalette();

// fin de la opción b
