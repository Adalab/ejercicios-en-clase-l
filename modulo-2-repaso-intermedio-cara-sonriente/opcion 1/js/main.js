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
  const randomNumber = Math.ceil(Math.random() * 100);
  const remainNumber = randomNumber % 2;
  if (remainNumber === 0) {
    containerElement.classList.add('background-color-alt');
  } else {
    containerElement.classList.remove('background-color-alt');
  }
}

updateElement.addEventListener('click', handleUpdateBtn);
