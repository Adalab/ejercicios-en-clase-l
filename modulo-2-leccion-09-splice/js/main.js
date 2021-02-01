"use strict";

const namesElement = document.querySelector('.js-names');

const namesList = [
  "Adriana del Teso",
  "Amanda García",
  "Amanda García",
  "Amanda García",
  "Amanda García",
  "Ana Apezteguía",
  "Ana Bescós",
  "Ana Diz",
  "Ana Fernández",
  "Berta Pluma",
  "Camilla Bachna",
  "Carmen Ramos",
  "Caro Castaño",
  "Cecilia Tallo",
  "Cristina Blanco",
  "Cristina González",
  "Dandara Almeida",
  "Elisa Alcocer",
  "Esther López",
  "Eugenia Dallasta",
  "Irene Mañas",
  "Laura Portillo",
  "Liliana Mendoza",
  "Marcjanna Stopinska",
  "María Virumbrales",
  "Jech Fernández",
  "Teresa Martínez",
  "Marianne Orts",
  "Marina Delgado",
  "Marina Fernández",
  "Marta Cano",
  "Marta García",
  "Merche Fe",
  "Nadia Murias",
  "Natalia Migallón",
  "Paula Páez",
  "Sagrario Mielgo",
  "Sara Martínez",
  "Valle Tendero",
  "Victoria Kovaleva",
];

/*
// Ejemplo de slice
const firstFive = namesList.slice(20, 30);

let html = "<ul>";
for (let index = 0; index < firstFive.length; index++) {
  html += "<li class='blue'>" + index + " " + firstFive[index] + "</li>";
}
html += "</ul>";

namesElement.innerHTML = html;
*/

// Busco en qué posición está el nombre de Merche (el string tiene que ser exacto)

const indexOfMerche = namesList.indexOf("Merche Fe");

// Elimino ese nombre (elemento) de la lista

namesList.splice(indexOfMerche, 1);

// Busco ahora el nombre de Amanda (hay 4, me devuelve la posición del primero)

const indexOfAmanda = namesList.indexOf("Amanda García");

// Elimino 4 elementos desde la primera posición donde aparece "Amanda García"

namesList.splice(indexOfAmanda, 4);

// Render de la lista en el HTML

let html = "<ul>";

for (let index = 0; index < namesList.length; index++) {
  html += "<li class='blue'>" + index + " " + namesList[index] + "</li>";
}

html += "</ul>";

namesElement.innerHTML = html;


/*
// Render de la lista en el HTML (igual pero con un for-of)

let html = "<ul>";

for (const oneName of namesList) {
  html += "<li class='blue'>" + oneName + "</li>";
  console.log(html);
}

html += "</ul>";

namesElement.innerHTML = html;
*/
