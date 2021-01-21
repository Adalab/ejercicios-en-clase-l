'use strict';

// Traer elem

const inputHour = document.querySelector('.js-hour');
const inputMinutes = document.querySelector('.js-minute');
const spanResult = document.querySelector('.js-result');

// Operación

const hour = parseInt(inputHour.value);
const minutes = parseInt(inputMinutes.value);

if (hour === 9 && minutes >= 30) {
  spanResult.innerHTML = "Es tarde!";
}
else if (hour > 9) {
  spanResult.innerHTML = "Es tarde!";
}
else {
  spanResult.innerHTML = "Va bien";
}




if ( (hour === 9 && minutes >= 30) || hour > 9  ) {
  spanResult.innerHTML = "Es tarde!";
}
else {
  spanResult.innerHTML = "Va bien";
}


if (hour === 9) {
  
  if (minutes >= 30) {
    spanResult.innerHTML = 'Parte 2: Es tarde!';
  }

}

// Escribir resultado