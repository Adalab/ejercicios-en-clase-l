"use strict";

/* Examples: */

// INDEXOF

const numbers = [14, 12, 21, 64, 23, 12];

// Busco el 70, que no existe,  y me devolverá -1

const result1 = numbers.indexOf(70);

renderResult("numbers.indexOf(12)", numbers, result1);



// Hago la función por mi cuenta para ver cómo sería por dentro:

function indexOf(list, value) {

  for (let i = 0; i < list.length; i++) {
    if (list[i] === value) {
      return i;
    }
  }

  return -1;
}

const result2 = indexOf(numbers, 70);

renderResult("indexOf(numbers, 70)", numbers, result2);



// indexOf no funciona con arrays de objetos. Mirad:

const LauraIndex0 = adalaberData.indexOf({
  nombre: "Laura Portillo",
  promo: "Lee",
  github: "lauraportillo",
  equipo: "THE FEARLE.CSS",
});

renderResult("adalaberData.indexOf('Laura Portillo')", adalaberData, LauraIndex0);





