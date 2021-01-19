'use strict';

// Uso de classList

// 1. Coger elemento del HTML

let titleElement = document.querySelector("body > h1.js-titulo");

// 2. Usar classList para añadir clase

titleElement.classList.add("my-titulo");
titleElement.classList.remove("my-titulo");

titleElement.classList.toggle("my-titulo");

titleElement.classList.toggle("hidden");

// Uso de InnerHTML

const mainElement = document.querySelector(".js-main");

const queTieneInnerHTML = mainElement.innerHTML;



const sectionElement = document.querySelector(".js-section");

sectionElement.innerHTML = "<h3>Otro titulo de section</h3><article>Otro contenido</article>";