"use strict";

const modalWindow = document.querySelector(".js-modal");
const closeButton = document.querySelector(".js-close-btn");


setTimeout(
  () => {
    modalWindow.classList.remove("hidden");
  },
  2000);


closeButton.addEventListener(
  "click",
  () => {
    modalWindow.classList.add("hidden");
  } );