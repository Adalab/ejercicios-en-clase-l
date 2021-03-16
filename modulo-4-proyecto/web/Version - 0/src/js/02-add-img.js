//BOTON AÑADIR IMAGEN
const fr = new FileReader();
const uploadBtn = document.querySelector('.js__box-button');
const fileField = document.querySelector('.js__box-button-hidden');
const profileImage = document.querySelector('.js__profile-image');
const profilePreview = document.querySelector('.js__profile-preview');
const div = document.querySelector('.js-div');
function getImage(e) {
  const myFile = e.currentTarget.files[0];
  fr.addEventListener('load', writeImage);
  fr.readAsDataURL(myFile);
}
function writeImage() {
  profileImage.style.backgroundImage = `url(${fr.result})`;
  profilePreview.style.backgroundImage = `url(${fr.result})`;
  div.classList.add('js__hidden-img');
  data.photo = fr.result;
  localStorage.setItem('form', JSON.stringify(data));
  changeCreateBtn();
}
function fakeFileClick() {
  fileField.click();
}
uploadBtn.addEventListener('click', fakeFileClick);
fileField.addEventListener('change', getImage);
