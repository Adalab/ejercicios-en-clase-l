"use strict";

const button = document.querySelector('.js-button');

const incrCounter = () => {
  const counterSpan = document.querySelector('.js-counter');
  let value = parseInt(counterSpan.innerHTML);
  value++;   // value = value + 1;  value += 1;
  counterSpan.innerHTML = value;


  /*
  const value = parseInt(counterSpan.innerHTML);
  const result = value + 1;
  counterSpan.innerHTML = result;
  */
};

button.addEventListener("click", incrCounter);