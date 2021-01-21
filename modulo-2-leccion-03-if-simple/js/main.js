'use strict';

// Traer elem

const inputHour = document.querySelector('.js-hour');
const spanResult = document.querySelector('.js-result');

// Operación

const hour = parseInt(inputHour.value);

if (hour >= 10) {
  spanResult.innerHTML = "Es tarde!!!";
} else {
  spanResult.innerHTML = "Va bien!";
}

// Escribir resultado