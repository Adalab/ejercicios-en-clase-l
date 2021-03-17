//LOCALSTORAGE
const getDataFromLocalStorage = function () {
  if (localStorage.getItem('form')) {
    // get data from local storage
    data = JSON.parse(localStorage.getItem('form'));
    if (data.photo !== '') {
      profileImage.style.backgroundImage = `url(${data.photo})`;
      profilePreview.style.backgroundImage = `url(${data.photo})`;
      document.querySelector('.js-div').classList.add('js__hidden-img');
    }

    // paint data in form
    for (const inputKey in data) {
      const input = document.querySelector('.js-input-' + inputKey);
      if (input !== null) {
        input.value = data[inputKey];
      }
    }

    render();
  }
};
getDataFromLocalStorage();
const resetButton = document.querySelector('.js-reset');
const handleReset = function () {
  data.name = '';
  data.job = '';
  data.email = '';
  data.phone = '';
  data.linkedin = '';
  data.github = '';
  data.photo = '';
  for (const input of inputList) {
    input.value = '';
    profileImage.style.backgroundImage = 'none';
    profilePreview.style.backgroundImage = 'none';
    div.classList.remove('js__hidden-img');
  }
  render();
};
