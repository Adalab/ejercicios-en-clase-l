"use strict";

// Como tenía una lista de nombres con lo que hemos visto hasta ahora:

const resultElement = document.querySelector('.js-result');

const name1 = "Akane";
const name2 = "Ria";
const name3 = "Olegario";
const name4 = "Marsupilani";

resultElement.innerHTML = `<li>${name1}</li>`;
resultElement.innerHTML += `<li>${name2}</li>`;
resultElement.innerHTML += `<li>${name3}</li>`;
resultElement.innerHTML += `<li>${name4}</li>`;

// Declarar e inicializar un array en la misma línea:

/*
const namesList = ["Akane", "Ria", "Olegario", "Marsupilani"];
*/

// Declarar el array vacío y, después, ir añadiendo valores (por posición o al final):

const namesList = [];
namesList[0] = "Akane";
namesList[1] = "Ria";
namesList.push("Olegario");
namesList.push("Marsupilani");
namesList.push("Wisla");
namesList.push("HTML");
namesList.push("CSS");

console.log(namesList);

// Escribir los nombres en una lista del HTML

let indice = 0;
console.log(namesList[indice]);
indice++;
console.log(namesList[indice]);
indice++;
console.log(namesList[indice]);
indice++;
console.log(namesList[indice]);
indice++;



indice = 0;  // Vuelvo a poner a 0 el índice para empezar desde el primer elemento
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


for (   let idx = 0  ;  idx < namesList.length   ;   idx++   ) {
  resultElement.innerHTML += `<li>${namesList[idx]}</li>`;
}