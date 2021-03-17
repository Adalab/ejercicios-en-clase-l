//DESPLEGABLES
const buttonContainer = document.querySelectorAll('.js-collapsable');
const sectionContainer = document.querySelectorAll('.js-section');
const buttonArrow = document.querySelectorAll('.js-arrow');
const btnCreate = document.querySelector('.js-createBtn');
function collapseMenu(ev) {
  for (let i = 0; i < buttonContainer.length; i++) {
    if (ev.currentTarget === buttonContainer[i]) {
      sectionContainer[i].classList.toggle('js__hidden');
      buttonArrow[i].classList.toggle('js__button-arrow');
    } else {
      sectionContainer[i].classList.add('js__hidden');
      buttonArrow[i].classList.remove('js__button-arrow');
    }
  }
}

for (const buttonCollapse of buttonContainer) {
  buttonCollapse.addEventListener('click', collapseMenu);
}
const hiddenLink = document.querySelector('.js-sectionHidden');
function createCard(event) {
  hiddenLink.classList.remove('js__hiddenlink');
  event.preventDefault();
  btnCreate.classList.add('js-cardCreated');
  sendRequest();
}
btnCreate.addEventListener('click', createCard);
('use strict');
