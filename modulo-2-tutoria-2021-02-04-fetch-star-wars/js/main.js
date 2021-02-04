'use strict';

// api

function callToApi(searchValue) {
  fetch('https://swapi.dev/api/people/?search=' + searchValue)
    .then(response => response.json())
    .then(data => {
      paintCharacters(data.results);
    });
}

// paint

const charactersElement = document.querySelector('.js-characters');

function paintCharacters(characters) {
  let htmlCode = '';
  for (const character of characters) {
    htmlCode += '<li>';
    htmlCode += `<p>Nombre: ${character.name}</p>`;
    htmlCode += `<p>Género: ${character.gender}</p>`;
    htmlCode += '</li>';
    // console.log(character.name);
    // console.log(character.gender);
  }
  charactersElement.innerHTML = htmlCode;
}

// search

const searchElement = document.querySelector('.js-search');

function handleSearch() {
  callToApi(searchElement.value);
  setInLocalStorage(searchElement.value);
}

searchElement.addEventListener('blur', handleSearch);

// local storage

const setInLocalStorage = searchText => {
  // JSON.stringify
  localStorage.setItem('searchText', searchText);
};

const getFromLocalStorage = () => {
  const searchText = localStorage.getItem('searchText');
  // JSON.parse
  if (searchText === null) {
    callToApi('skywalker');
    searchElement.value = 'skywalker';
  } else {
    callToApi(searchText);
    searchElement.value = searchText;
  }
};

// start app: search by skywalker

getFromLocalStorage();
