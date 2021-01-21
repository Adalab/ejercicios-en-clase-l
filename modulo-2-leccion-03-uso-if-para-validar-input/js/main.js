'use strict';

// Traer elem

const inputName = document.querySelector('.js-name');
const inputEmail = document.querySelector('.js-email');
const spanResult = document.querySelector('.js-result');

// Operación

if (inputName.value !== "") {

  if (inputName.value === "Sagra" || inputName.value === "Caro" || inputName.value === "Dayana") {
    spanResult.innerHTML = "Hola Adalaber!";
  }
  else {
    spanResult.innerHTML = "Hola desconocida!";
  }
    
}
else {
  spanResult.innerHTML = "Tienes que escribir un nombre";
}

if (inputEmail.value.includes("@") && inputEmail.value.includes(".")) {
  spanResult.innerHTML += "Email válido";
}
else {
  spanResult.innerHTML += "Email NO válido";
}