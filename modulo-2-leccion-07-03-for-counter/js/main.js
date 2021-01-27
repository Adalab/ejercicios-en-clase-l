"use strict";

/* Contar cuántas Anas hay */

const namesList = [
  "Adriana",
  "Amanda",
  "Ana",
  "Ana",
  "Ana",
  "Ana",
  "Berta",
  "Camilla",
  "Carmen",
  "Carolina",
  "Cecilia",
  "Cristina",
  "Cristina",
  "Dandara",
  "Elisa",
  "Esther",
  "Eugenia",
  "Irene",
  "Laura",
  "Liliana",
  "Marcjanna",
  "María",
  "Jech",
  "Teresa",
  "Marianne",
  "Marina",
  "Marina",
  "Marta",
  "Marta",
  "Mercedes",
  "Nadia",
  "Natalia",
  "Paula",
  "Sagrario",
  "Sara",
  "Valle",
  "Victoria",
];

/*

// Necesito una variable que lleve la cuenta de cuántas Anas he encontrado.
// Necesito también un bucle for con el que voy a recorer todos los elementos de la lista
// Dentro del bucle, voy a comprobar si cada elemento es Ana. De ser así, incremento en 1 mi contador de Anas:

let contador = 0;

for (let idx = 0; idx < namesList.length; idx++) {
  if (namesList[idx] === "Ana") {
    contador++;
  }
}

// Dentro del bucle, voy a guardar cada nombre namesList[idx] en una constante (eachName), para que sea más claro o legible el código:

contador = 0;

for (let idx = 0; idx < namesList.length; idx++) {
  const eachName = namesList[idx];

  if (eachName === "Ana") {
    contador++;
  }
}

// El for anterior es equivalente a hacer un bucle for-of:

contador = 0;

for (const eachName of namesList) {

  if (eachName === "Ana") {
    contador++;
  }

}

console.log(`Tenemos ${contador} Anas en clase`);

*/

// Ahora pongo el código anterior en una función con parámetros para que me funcione con distintas listas y distintos nombres:

// Voy a crear una función con dos parámetos (datos de entrada):
//  - Lista donde buscar (list)
//  - Nombre a buscar  (nameToCount)
// La función tendrá el bucle for-of anterior (usando las variables/parámetro) pero adaptando los nombres de las variables a los nombres de los parámetros.
// La función devolverá el número de nombres encontrados. El console.log lo tendremos que hacer desde donde llamamos a nuestra función.

const countNames = (list, nameToCount) => {
  let contador = 0;

  for (const eachName of list) {
    if (eachName === nameToCount) {
      // Ya no tengo "Ana" fijo, si no que me dicen qué tengo que buscar en el parámetro.
      contador++;
    }
  }

  return contador;
};

// Usamos la función

const number1 = countNames(namesList, "Ana");

console.log(`He encontrado ${number1} Anas en la lista de nombres.`);

const number2 = countNames(namesList, "Marina");

console.log(`He encontrado ${number2} Marinas en la lista de nombres.`);

const crisName = "Cristina";
const number3 = countNames(namesList, crisName);

console.log(`He encontrado el nombre ${crisName} ${number3} veces en la lista de nombres.`);

const martaName = "Marta";
const number4 = countNames(namesList, martaName);

console.log(`He encontrado el nombre ${martaName} ${number4} veces en la lista de nombres.`);

const number5 = countNames(
  ["Dayana", "Iván", "Miguel", "Pilar", "Teba", "Dayana", "Inés", "Rosario", "Isa", "Dayana"],
  "Dayana"
);

console.log(`Hay ${number5} Dayanas en Adalab.`);