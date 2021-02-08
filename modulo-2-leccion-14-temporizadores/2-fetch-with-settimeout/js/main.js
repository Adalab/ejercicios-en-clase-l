"use strict";

const nameInput = document.querySelector('.js-name');
const resultsList = document.querySelector('.js-results');

/**
 * Variable global donde guardaré los datos del fetch.
 */
const characters = [];

/**
 *   Esta variable almacenará el identificador del último timeout establecido
 * (que devuelve el setTimeout).
 *   Lo guardamos porque nos iteresa desactivar el último timeout si la usuaria
 * vuelve a escribir y tenemos que lanzar una nueva búsqueda.
 */
let timeoutID;

/**
 *   La función handleKey se llama cuando se pulsa una tecla en el input.js-name
 *   Su tarea es llamar a fetchData() que hace un fetch, pero para evitar que se 
 * llame con cada tecla que pulsamos, la metemos dentro de un timeout para esperar
 * un poquito (0,5s) a ver si la usuaria pulsa otra tecla.
 *   Si la usuaria pulsa otra techa en el periodo del timeout cancelamos el timeout
 * y creamos uno nuevo para volver a esperar otro poquito.
 */

function handleKey() {
  console.log(nameInput.value);

  if (timeoutID !== undefined) {
    clearTimeout(timeoutID);
  }

  timeoutID = setTimeout(fetchData, 500);
}

/**
 *   Esta función recoge el value del input.js-name y lanza un fetch al servidor 
 * con la API de Star Wars.
 */

function fetchData() {
  // El texto que ha escrito la usuaria hasta ahora está en el value del input.js-name:
  const textTyped = nameInput.value;

  // Uso el texto de la usuaria para formar el parámetro search del API de Swapi:
  fetch(`https://swapi.dev/api/people/?search=${textTyped}`)
    .then(response => response.json())
    .then(data => {
      // Podría hacer algo como characters = data , pero me voy a quedar sólo con los datos que me interesan:

      // Antes de cargar los resultados, vacio el array de datos characters:
      characters.splice(0, characters.length);

      for (const characterData of data.results) {
        characters.push(
          {
            name: characterData.name,
            gender: characterData.gender
          }
        );
      }

      renderCharacters();
    });
}

/**
 *   Toma los datos guardados en la variable global characters (que es un array de objetos con name y gender)
 * y los pinta en el contenedor ul.js-results del HTML.
 */

function renderCharacters() {
  let html = '';

  for (const character of characters) {
    html += `<li>${character.name} (${character.gender})</li>`;
  }

  resultsList.innerHTML = html;
}

nameInput.addEventListener("keyup", handleKey);