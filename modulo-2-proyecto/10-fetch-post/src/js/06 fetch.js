'use strict';

const createBtn = document.querySelector('.js-create-btn');
const cardResultElement = document.querySelector('.js-card-result');

function handleCreateBtn(ev) {
  ev.preventDefault();
  console.log('Mis datos', getUserData());

  const url = 'https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/';
  const data = getUserData();

  fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => response.json())
    .then(data => {
      console.log('Server response:', data);
      if (data.success === true) {
        cardResultElement.innerHTML = data.cardURL;
      } else {
        cardResultElement.innerHTML = data.error;
      }
    });
}

createBtn.addEventListener('click', handleCreateBtn);
