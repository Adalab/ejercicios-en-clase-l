'use strict';

// Variables globales

const mainElement = document.querySelector(".main");



function obtenerHora() {
  // Variable horaActual es local
  const horaActual = new Date();

  return horaActual.getHours();
}

function saludar(nombre, ancho, alto) {
  // Variables hora y htmlSaludo son locales
  const hora = obtenerHora();

  let htmlSaludo = '<article class="kitten">';

  if (hora < 12) {
    htmlSaludo += `  <div>Buenos días ${nombre}!</div>`;
  }
  else if (hora < 20) {
    htmlSaludo += `  <div>Buenas tardes ${nombre}!</div>`;
  }
  else {
    htmlSaludo += `  <div>Buenas noches ${nombre}!</div>`;
  }

  htmlSaludo += `  <img src="https://placekitten.com/${ancho}/${alto}" alt="">`;
  htmlSaludo += "</article>";

  //mainElement.innerHTML += htmlSaludo;
  return htmlSaludo;
}


// Código principal o main o código global
// Se ejecuta al cargar la página.

let htmlSaludo = saludar("Dayana", 200, 300);
mainElement.innerHTML += htmlSaludo;

const profeProyecto = "Miguel";

htmlSaludo = saludar(profeProyecto, 150, 150);
mainElement.innerHTML += htmlSaludo;

htmlSaludo = saludar("Maricarmen");
mainElement.innerHTML += htmlSaludo;

htmlSaludo = saludar("Amparo");
mainElement.innerHTML += htmlSaludo;

/* 

// Antes estaba así:

saludar("Dayana", 200, 300);
saludar(profeProyecto, 150, 150);
saludar("Maricarmen");
saludar("Amparo");

*/