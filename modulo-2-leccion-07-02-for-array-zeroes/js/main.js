"use strict";

/* Crear una lista con 20 ceros */

const list1 = [];

// Uso un for para repetir 20 veces el push que añade un 0.

for (let idx = 0; idx <= 20; idx++) {
  list1.push(0);
}

console.log(list1);




// Tambien puedo usar la variable del for para usarla en el push

const list2 = [];
for (let idx = 1; idx <= 20; idx++) {
  list2.push(idx * 2);
}

console.log(list2);




// Podemos ir saltando en el for de 3 en 3 en lugar de 1 en 1

const list3 = [];
for (let idx = 0; idx <= 20; idx += 3) {
  list3.push(idx);
}

console.log(list3);