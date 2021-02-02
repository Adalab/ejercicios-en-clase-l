'use strict';

// prevent form submit

const form = document.querySelector('.js-form');

function handleForm(ev) {
  ev.preventDefault();
}

form.addEventListener('submit', handleForm);

// handle submit button click

const userMovies = [];

const submit = document.querySelector('.js-submit');
const user = document.querySelector('.js-user');
const movie1 = document.querySelector('.js-movie1');
const movie2 = document.querySelector('.js-movie2');

function handleSubmitButton() {
  //   console.log('User:', user.value);
  //   console.log('Movie 1:', movie1.value);
  //   console.log('Movie 2:', movie2.value);
  // create object
  // const data = {};
  // data.user = user.value;
  // data.movie1 = movie1.value;
  // data.movie2 = movie2.value;
  const data = {
    user: user.value,
    movie1: movie1.value,
    movie2: movie2.value
  };
  // push to array
  userMovies.push(data);
  // console.log(userMovies);
  paintData();
}

submit.addEventListener('click', handleSubmitButton);

// paint data

const list = document.querySelector('.js-list');

function paintData() {
  let htmlCode = '';
  for (let index = 0; index < userMovies.length; index += 1) {
    const item = userMovies[index];
    // console.log(item.movie1);
    htmlCode += '<li>';
    htmlCode += item.user;
    htmlCode += `<p>${item.movie1}</p>`;
    htmlCode += `<p>${item.movie2}</p>`;
    htmlCode += `<button class="js-delete" id="${index}">`;
    htmlCode += `<span class="icon-delete">X</span><br><br>`;
    htmlCode += `<span class="text-delete">Borrar</span>`;
    htmlCode += `</button>`;
    htmlCode += '</li>';
  }
  list.innerHTML = htmlCode;
  // console.log(htmlCode);
  listenDeleteButtons();
}

// delete users

function listenDeleteButtons() {
  const deleteButtons = document.querySelectorAll('.js-delete');
  for (const deleteButton of deleteButtons) {
    deleteButton.addEventListener('click', handleDelete);
  }
}

function handleDelete(ev) {
  const clickedIndex = parseInt(ev.currentTarget.id);
  console.log('currentTarget', ev.currentTarget.id, clickedIndex);
  userMovies.splice(clickedIndex, 1);
  paintData();
}

// funciones manejadoras de eventos: modificar los datos > pintar > escuchar