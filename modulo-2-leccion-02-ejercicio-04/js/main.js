'use strict';

// EJERCICIO 4

// Declaro los datos a usar

const aPagar = 128;
const numComensales = 9;
const chupitoDeAna = 2;

// Operaciones:

const aPagarCadaUna = (aPagar - chupitoDeAna) / numComensales;
const aPagarPorAna = aPagarCadaUna + chupitoDeAna;

/*

Otra forma de declararlo:

// Le resto dos por el chupito de Ana
const aPagar = 128 - 2;
const numComensales = 9;

const aPagarCadaUna = aPagar / numComensales;
const aPagarPorAna  = aPagarCadaUna + chupitoDeAna;

*/

// Mostramos los resultados:

console.log("Todas tiene que pagar " + aPagarCadaUna + "€");
console.log("Peeero, Ana tiene que pagar " + aPagarPorAna + "€");

console.log("Operación mat: " + (2 + 2));

console.log(2 + 2 + " es un buen número");


console.log("TEMPLATE TIME!");
console.log(`Todas tiene que pagar ${aPagarCadaUna}€`);
console.log(`Peeero, Ana tiene que pagar ${aPagarPorAna}€`);

console.log(`Operación mat: ${2 + 2}`);

console.log(`${2 + 2} es un buen número`);