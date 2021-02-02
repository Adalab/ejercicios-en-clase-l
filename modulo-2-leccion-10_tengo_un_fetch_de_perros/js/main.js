"use strict";

const breedListElement = document.querySelector('.js-breedList');

// Pido la lista de razas

fetch("https://dog.ceo/api/breeds/list/all")
  .then(response => response.json())
  .then((data) => {
    // === TOPE DE 5 fetch principio ===
    let contador = 0;
    // === TOPE DE 5 fetch fin ===

    // La lista de razas viene en forma de objeto en data.message.
    // Cada propiedad de data.message es el nombre de la raza.
    // Recorro todos los nombres de razas (o nombres de propiedades) con un for-in

    for (const breed in data.message) {
      // === TOPE DE 5 fetch principio ===
      contador++;
      if (contador > 5) {
        break;
      }
      // === TOPE DE 5 fetch fin ===

      console.log("Haría una peticion a: ", `https://dog.ceo/api/breed/${breed}/images/random`);

      // Por cada raza, hago una petición al API https://dog.ceo/api/breed/RRRRRR/images/random
      // para que me devuelva una foto aleatoria de la raza RRRRRR (donde RRRRRR es el nombre de la raza)

      fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
        .then((response) => response.json())
        .then((dataImage) => {
          console.log(dataImage.message);

          // La dirección de la imagen del perrete está en dataImage.message
          
          // Creo y escribo un nuevo <li> en el HTML:

          breedListElement.innerHTML += `<li><h2>${breed}</h2><img src="${dataImage.message}" alt="${breed}"/></li>`;
        });
    }
  });


/*
// Sólo una imagen de Chihuahua

const breed = "chihuahua";

fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
  .then((response) => response.json())
  .then((dataImage) => {
    console.log(dataImage.message);

    breedListElement.innerHTML += `<li><h2>${breed}</h2><img src="${dataImage.message}" alt="${breed}"/></li>`;
  });
*/