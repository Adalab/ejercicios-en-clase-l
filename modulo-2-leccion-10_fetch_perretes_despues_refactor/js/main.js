"use strict";

const breedListElement = document.querySelector('.js-breedList');

// Variables de datos globales:

const dataBreedList = [];
  
// Pido la lista de razas

fetch("https://dog.ceo/api/breeds/list/all")
  .then(response => response.json())
  .then(data => {
    // La lista de razas viene en forma de objeto en data.message.
    // Cada propiedad de data.message es el nombre de la raza.
    // Recorro todos los nombres de razas (o nombres de propiedades) con un for-in y los guardo en MI VARIABLE DE DATOS

    for (const oneBreed in data.message) {
      dataBreedList.push(oneBreed);
    }

    renderBreedList();
    fetchBreedImages();
  });


const renderBreedList = () => {
  // Vacío el elemento
  breedListElement.innerHTML = '';

  // Recorro la lista-dato con todos los nombres de razas
  for (const breedName of dataBreedList) {
    let html = `<li class="breed--item" id="${breedName}">`;
    html += `<h2 class="breed--name">${breedName}</h2>`;
    html += `</li>`;
    breedListElement.innerHTML += html;
  }
};

const fetchBreedImages = () => {
  // Por cada raza, pido una imagen aleatoria.

  // === TOPE DE 5 fetch principio ===
  // Con slice, me quedo con una lista más pequeña con los primeros 5 nombres.
  const dataBreedListRestricted = dataBreedList.slice(0,5);
  // === TOPE DE 5 fetch fin ===

  for (const breedName of dataBreedListRestricted) {
    fetch(`https://dog.ceo/api/breed/${breedName}/images/random`)
      .then((response) => response.json())
      .then((dataImage) => {
        console.log(dataImage.message);

        // La dirección de la imagen del perrete está en dataImage.message

        const breedImageSrc = dataImage.message;

        renderBreedImage(breedName, breedImageSrc);
      });
  }
};

const renderBreedImage = (breedName, breedImageSrc) => {
  // Localizo el elemento donde irá la imagen a través del //#endregion

  const breedListItem = document.querySelector('#' + breedName);

  // Creo y escribo una <img> dentro del <li> correspondiente en el HTML:

  breedListItem.innerHTML += `<img src="${breedImageSrc}" alt="${breedName}"/>`;
};