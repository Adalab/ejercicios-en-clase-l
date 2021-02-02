const formElement = document.querySelector('.js-submit');

function handleSubmit(ev) {
  ev.preventDefault();
}

formElement.addEventListener('submit', handleSubmit);
