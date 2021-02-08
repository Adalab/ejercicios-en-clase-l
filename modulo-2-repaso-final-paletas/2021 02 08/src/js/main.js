'use strict';

const filterInput = document.querySelector('.js-filter');
const formElement = document.querySelector('.js-form');

let palettes = [];
let favorites = [];

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
    let isValidClass;
    if (isValidPalette(palette)) {
      isValidClass = '';
    } else {
      isValidClass = 'palette--hidden';
    }
    let isFavoriteClass;
    if (isFavoritePalette(palette)) {
      isFavoriteClass = 'palette--favorite';
    } else {
      isFavoriteClass = '';
    }
    htmlCode += `<li class="palette js-palette ${isValidClass} ${isFavoriteClass}" id="${palette.id}">`;
    htmlCode += `<h2 class="palette__title">${palette.name}</h2>`;
    htmlCode += `<div class="palette__colors">`;
    for (const paletteColor of palette.colors) {
      htmlCode += `<div class="palette__color" style="background-color: #${paletteColor}"></div>`;
    }
    htmlCode += `</div>`;
    htmlCode += '</li>';
  }
  const palettesContainer = document.querySelector('.js-palettes-container');
  palettesContainer.innerHTML = htmlCode;
  listenPaletteEvents();
}

function isValidPalette(palette) {
  const filterValue = filterInput.value.toLowerCase();
  return palette.name.toLowerCase().includes(filterValue);
}

function isFavoritePalette(palette) {
  const favoriteFound = favorites.find(favorite => {
    return favorite.id === palette.id;
  });
  if (favoriteFound === undefined) {
    return false;
  } else {
    return true;
  }
}

// listen palette events

function listenPaletteEvents() {
  const paletteElements = document.querySelectorAll('.js-palette');
  for (const paletteElement of paletteElements) {
    paletteElement.addEventListener('click', handlePalette);
  }
}

function handlePalette(ev) {
  const clickedPaletteId = ev.currentTarget.id;
  const favoritesFoundIndex = favorites.findIndex(function (favorite) {
    return favorite.id === clickedPaletteId;
  });

  if (favoritesFoundIndex === -1) {
    const paletteFound = palettes.find(function (palette) {
      return palette.id === clickedPaletteId;
    });
    favorites.push(paletteFound);
  } else {
    favorites.splice(favoritesFoundIndex, 1);
  }

  paintPalettes();
}

// start app

getFromLocalStorage();
