'use strict';

const updateElement = document.querySelector('.js-update');
const selectElement = document.querySelector('.js-select');
const faceElement = document.querySelector('.js-face');
const containerElement = document.querySelector('.js-container');

function handleUpdateBtn() {
  updateBackground();
  updateFace();
}

function updateFace() {
  const selectValue = selectElement.value;
  faceElement.innerHTML = selectValue;
}

function updateBackground() {
  // const randomNumber = Math.random();
  // const randomNumberTotal = randomNumber * 100;
  // const randomIntegerTotal = Math.ceil(randomNumberTotal);
  const randomNumber = getRandomNumber();
  const remainNumber = randomNumber % 2;
  if (remainNumber === 0) {
    containerElement.classList.add('background-color-a');
    containerElement.classList.remove('background-color-b');
  } else {
    containerElement.classList.add('background-color-b');
    containerElement.classList.remove('background-color-a');
  }
}

function getRandomNumber() {
  const randomNumber = Math.ceil(Math.random() * 100);
  return randomNumber;
}

updateElement.addEventListener('click', handleUpdateBtn);
