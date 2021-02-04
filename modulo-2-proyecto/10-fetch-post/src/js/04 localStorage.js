'use strict';

/*

Cómo vamos a usar siempre el local storage:

Guardar en el local storage:
- Cuando la usuaria haga cualquier cambio en la página que queramos guardar en el local storage llamamos a la función saveInLocalStorage
- 1º En ella obtenemos todos los datos a guardar
- 2º Los metemos en un objeto
- 3º Hacemos JSON.stringify
- 4º Hacemos localStorage.setItem(...)

Recuperar del local storage:
- Cuando arrancamos la página recuperamos los datos del local storage, para ello
- 1º Obtenemos los datos con localStorage.getItem(...)
- 2º Comprobamos si son datos válidos, diferente de null. Si no son datos válidos no hacemos nada más
- 3º Si son datos válidos los colocamos donde corresponda, en una variable global, en los campos de formulario con .value o donde sea.
- 4º En este proyecto en concreto los ponemos en el formulario
- 5º Llamamos a las funciones que replican los datos desde el formulario a la tarjeta

*/

function getUserData() {
  return {
    photo: photo,
    palette: parseInt(document.querySelector('.js-palette:checked').value),
    name: document.querySelector('.js-input-name').value,
    job: document.querySelector('.js-input-job').value,
    email: document.querySelector('.js-input-email').value,
    phone: document.querySelector('.js-input-phone').value,
    linkedin: document.querySelector('.js-input-linkedin').value,
    github: document.querySelector('.js-input-github').value
  };
}

// cuando la usuaria cambia cualquier cosa en el formulario debemos llamar a esta función
function saveInLocalStorage() {
  // obtengo los valores de todos los campos
  const userData = getUserData();
  // lo convierto a string porque local storage solo admite strings
  const userDataInString = JSON.stringify(userData);
  // lo guardo en el local storage en el campo que me apetece
  localStorage.setItem('userData', userDataInString);
}

// al arrancar la página recogemos los datos desde el local storage y actualizamos el formulario
function getFromLocalStorage() {
  // obtengo los datos desde el local storage
  const userDataInString = localStorage.getItem('userData');
  // compruebo si hay datos válidos, es decir si la usuaria ya había entrado en nuestra web anteriormente
  if (userDataInString !== null) {
    const userData = JSON.parse(userDataInString);
    // actualizo los inputs del formulario
    document.querySelector('.js-input-name').value = userData.name;
    document.querySelector('.js-input-job').value = userData.job;
    document.querySelector('.js-input-email').value = userData.email;
    document.querySelector('.js-input-phone').value = userData.phone;
    document.querySelector('.js-input-linkedin').value = userData.linkedin;
    document.querySelector('.js-input-github').value = userData.github;
    // actualizo la variable global de la foto
    photo = userData.photo;
    // actualizo la paleta, para ello
    // - Recorro las 3 paletas
    // - Compruebo cuál tiene el valor que tengo en el local storage
    // - A la paleta que tiene el valor correcto le hago un .checked = true para activarla
    const paletteElements = document.querySelectorAll('.js-palette');
    for (const paletteElement of paletteElements) {
      if (paletteElement.value === userData.palette) {
        paletteElement.checked = true;
      }
    }
    // propago los datos desde el formulario a la tarjeta
    updateAllInputs();
    updatePalette();
    updatePhoto();
  }
}

/*

Para actualizar la paleta hay otras dos formas de hacerlo:

1º Le pongo a cada radio button de las paletas la clase .palette-1, .palette-2 y .palette-3 y ejecuto
document.querySelector(`.js-palette-${userData.palette}`).checked = true;

2º Hasta ahora hemos utilizado selectores de id, etiqueta y clase para seleccionar elementos
Hay más formas de hacerlo por ejemplo si pongo: document.querySelector('.js-palette[value="2"]')
estoy seleccionando el elemento que tiene la clase .js-palette y que además tiene un atributo que se llama
value y que tiene el valor 2.

Por ello en la función getFromLocalStorage podría haber usado :
document.querySelector(`.js-palette[value="${userData.palette}"]`).checked = true;

Más info de selectores de atributos: https://developer.mozilla.org/es/docs/Web/CSS/Selectores_atributo

*/
