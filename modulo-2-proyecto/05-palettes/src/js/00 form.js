'use strict';

const nameElement = document.querySelector('.js-name');
const namePreviewElment = document.querySelector('.js-preview-name');

function handleName(ev) {
  // const nameValue = nameElement.value;
  const nameValue = ev.target.value;
  if (nameValue === '') {
    console.log('estoy vacío');
    namePreviewElment.innerHTML = 'Nombre apellido';
  } else {
    console.log('estoy relleno');
    namePreviewElment.innerHTML = nameValue;
  }
}

nameElement.addEventListener('keyup', handleName);
