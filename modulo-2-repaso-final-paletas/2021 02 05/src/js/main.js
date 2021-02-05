'use strict';

const palettesContainer = document.querySelector('.js-palettes-container');
const formElement = document.querySelector('.js-form');
const filterInput = document.querySelector('.js-filter');

let palettes = [];
let favorite = [];

// api

function getDataFromApi() {
  fetch('https://beta.adalab.es/ejercicios-extra/js-ejercicio-de-paletas/data/palettes.json')
    .then(response => response.json())
    .then(data => {
      palettes = data.palettes;
      paintPalettes();
      setInLocalStorage();
    });
}

// local storage

function setInLocalStorage() {
  const stringPalettes = JSON.stringify(palettes);
  localStorage.setItem('palettes', stringPalettes);
}

function getFromLocalStorage() {
  const localStoragePalettes = localStorage.getItem('palettes');
  if (localStoragePalettes === null) {
    getDataFromApi();
  } else {
    const arrayPalettes = JSON.parse(localStoragePalettes);
    palettes = arrayPalettes;
    paintPalettes();
  }
}

// filter

function handleFilter() {
  console.log('filtrando...');
  paintPalettes();
}

filterInput.addEventListener('keyup', handleFilter);

// submit form

function handleForm(ev) {
  ev.preventDefault();
}

formElement.addEventListener('submit', handleForm);

// paint

function paintPalettes() {
  let htmlCode = '';
  for (const palette of palettes) {
    if (palette.name.includes(filterInput.value)) {
      htmlCode += '<li class="palette">';
    } else {
      htmlCode += '<li class="palette palette--hidden">';
    }
    htmlCode += `<h2 class="palette__title">${palette.name}</h2>`;
    htmlCode += `<div class="palette__colors">`;
    for (const paletteColor of palette.colors) {
      htmlCode += `<div class="palette__color" style="background-color: #${paletteColor}"></div>`;
    }
    htmlCode += `</div>`;
    htmlCode += '</li>';
  }
  palettesContainer.innerHTML = htmlCode;
}

// start app

getFromLocalStorage();
