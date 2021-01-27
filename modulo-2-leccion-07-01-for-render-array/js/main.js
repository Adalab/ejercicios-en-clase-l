"use strict";

const resultElement = document.querySelector(".js-result");


const namesList = [];
namesList[0] = "Akane";
namesList[1] = "Ria";
namesList.push("Olegario");
namesList.push("Marsupilani");
namesList.push("Wisla");
namesList.push("HTML");
namesList.push("CSS");

const adalab = ["Sagra", "Ana", "Dayana", "Ivan"];

/*

// Cómo lo haremos sin for

let indice = 0;
resultElement.innerHTML += `<li>${namesList[indice]}</li>`;
indice++;
resultElement.innerHTML += `<li>${namesList[indice]}</li>`;
indice++;
resultElement.innerHTML += `<li>${namesList[indice]}</li>`;
indice++;
resultElement.innerHTML += `<li>${namesList[indice]}</li>`;
indice++;
resultElement.innerHTML += `<li>${namesList[indice]}</li>`;
indice++;
resultElement.innerHTML += `<li>${namesList[indice]}</li>`;
indice++;

// Parsamos lo anrerio0r a un for

for (   let idx = 0  ;  idx < namesList.length   ;   idx++   ) {
  resultElement.innerHTML += `<li>${namesList[idx]}</li>`;
}
*/

function renderList(list) {
  resultElement.innerHTML = "";

  for (let idx = 0; idx < list.length; idx++) {
    resultElement.innerHTML += `<p>${list[idx]}</p>`;
  }

  resultElement.innerHTML += "<p>Ya está</p>";
}

// Usamos nuestra función con la lista de nombres de mascotas

renderList(namesList);

// Usamos la función con la lista de nombres de adalabers

renderList(adalab);

// Usamos la función con una lista creada "al vuelo", no está guardada en una variable.

renderList([1, 2, 3, 4]);


