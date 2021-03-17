//CARD DESIGN
function activateClass(element, classname) {
  element.classList.remove('palette-1', 'palette-2', 'palette-3');
  element.classList.add(classname);
}
function stylePicker(event) {
  let elementId = event.currentTarget.id;
  let lastLetter = elementId.slice(-1);
  let palette = `palette-${lastLetter}`;
  const nameSurname = document.querySelector('.card__name-surname');
  const cardOccupation = document.querySelector('.card__occupation');
  const cardContactContainer = document.querySelectorAll(
    '.card__contact-container'
  );
  const cardIcons = document.querySelectorAll('.js-icons');
  activateClass(nameSurname, palette);
  activateClass(cardOccupation, palette);
  for (let contactContainer of cardContactContainer) {
    activateClass(contactContainer, palette);
  }
  for (let icon of cardIcons) {
    activateClass(icon, palette);
  }
}
const designColors = document.querySelectorAll('.js-customize-design__colors');
for (let designColor of designColors) {
  designColor.addEventListener('click', stylePicker);
}
let data = {
  name: '',
  job: '',
  email: '',
  photo: '',
  phone: '',
  linkedin: '',
  github: '',
};
const saveData = function (event) {
  const inputData = event.currentTarget.name;
  if (inputData === 'name' || inputData === 'job') {
    const errorLength = document.querySelector(
      `.js__error-message-${inputData}`
    );
    if (event.currentTarget.value.length < 19) {
      data[inputData] = event.currentTarget.value;
      errorLength.classList.add('js__hidden');
    } else {
      errorLength.classList.remove('js__hidden');
      event.currentTarget.value = event.currentTarget.value.slice(0, -1);
    }
  } else {
    data[inputData] = event.currentTarget.value;
  }

  changeCreateBtn();
  render();
};
function changeCreateBtn() {
  if (
    data.name !== '' &&
    data.job !== '' &&
    data.email !== '' &&
    data.phone !== '' &&
    data.linkedin !== '' &&
    data.github !== '' &&
    data.photo !== ''
  ) {
    btnCreate.classList.remove('js-cardCreated');
  } else {
    btnCreate.classList.add('js-cardCreated');
  }
}

changeCreateBtn();
const render = function () {
  document.querySelector('.js-nameSurname').innerHTML =
    data.name || 'Nombre Apellido';
  document.querySelector('.js-occupation').innerHTML =
    data.job || 'Front-end developer';
  document.querySelector('.js-phone').href = 'tel:' + data.phone;
  document.querySelector('.js-email').href = 'mailto:' + data.email;
  document.querySelector('.js-linkedin').href =
    'https://www.linkedin.com/in/' + data.linkedin;
  document.querySelector('.js-github').href =
    'https://www.github.com/' + data.github;
  localStorage.setItem('form', JSON.stringify(data));
};
const inputList = document.querySelectorAll('.js-input');
for (const inputItem of inputList) {
  inputItem.addEventListener('keyup', saveData);
}
