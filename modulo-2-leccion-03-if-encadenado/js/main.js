'use strict';

// Traer elem

const inputHour = document.querySelector('.js-hour');
const spanResult = document.querySelector('.js-result');

// Operación

const hour = parseInt(inputHour.value);


if (hour <= 13) {
  spanResult.innerHTML = "Estamos en proyecto de equpos";
}
else if (hour < 10) {
  spanResult.innerHTML = 'Estamos en clase';
}
else if( hour <= 11 ) {
  spanResult.innerHTML = "Estamos en pair programming";
}
else {
  spanResult.innerHTML = "Estamos a otras cosas";
}

// Escribir resultado