'use strict';

// Datos:
// - input capt
// - span min
// - section resultado

// Proceso:
// - Rescatar los elementos con los datos

const inputCapitulos = document.querySelector(".js-numCapitulos");
const spanMinutos = document.querySelector(".js-numMinutos");
const sectionResultado = document.querySelector(".js-resultado");

// - Sacar los datos de esos elementos

const numeroCapitulos = parseInt(inputCapitulos.value);
const numeroMinutos = parseInt(spanMinutos.innerHTML);

// - Hago la multiplicación

const resultadoMult = numeroCapitulos * numeroMinutos;

// - Mostrar el resultado en el HTML

sectionResultado.innerHTML = `Te hacen falta ${resultadoMult} minutos para acabar la serie`;
