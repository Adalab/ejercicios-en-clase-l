"use strict";

const numberInput = document.querySelector(".js-number");
const testButton = document.querySelector(".js-button");
const tipElement = document.querySelector('.js-tip');
const counterInput = document.querySelector(".js-counter");

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

function renderTip( message ) {
  tipElement.innerHTML = "Pista: " + message;
}

function checkNumber() {
  // Steps
  // 1. Take user number
  // 2. Check if it's higher
  // 3. Check if it's lower
  // 4. Check if it's equal
  // 5. Check number is in range
  // 6. Render Message

  const userNumberValue = numberInput.value;
  const numberValue = parseInt(userNumberValue);

  if (isNaN(numberValue)) {
    renderTip("El número debe estar entre 1 y 100");
  }
  else if (numberValue < 1 || numberValue > 100) {
    renderTip("El número debe estar entre 1 y 100");
  }
  else if (numberValue > randomNumber) {
    renderTip("Demasiado alto");
  }
  else if (numberValue < randomNumber) {
    renderTip("Demasiado bajo");
  }
  else { // if (numberValue === randomNumber) {
    renderTip("Has ganado, campeona!");
  }

  increaseCounter();
}

function increaseCounter() {
  triesCounter = triesCounter + 1;
  //counterInput.value = "Número de intentos: " + triesCounter;
  counterInput.value = `Número de intentos: ${triesCounter}`;
}


function handleClickTestButton(event) {
  // Boss
  checkNumber();
  increaseCounter();
}

const randomNumber = getRandomNumber(100);
console.log(randomNumber);
let triesCounter = 0;

testButton.addEventListener("click", handleClickTestButton);
//testButton.addEventListener("click", handleClickCounter);
