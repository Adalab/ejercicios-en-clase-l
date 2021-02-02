'use strict';

// Cómo funcionan estos collapsables:
// - Cada vez que se pulse en un collapsable, el pulsado se intercambia de abierto a cerrado y viceversa.
// - Los otros collapsables se cierran.
// - Este código y su correspondiente sass valen para 1, 3 o 1000 collapsables

// añado un evento a todas las cabeceras de los collapsables
const collapsableHeaders = document.querySelectorAll('.js-collapsable-header');
for (const collapsableHeader of collapsableHeaders) {
  collapsableHeader.addEventListener('click', changeCollapsable);
}

function changeCollapsable(ev) {
  // cojo la cabecera pulsada
  // - la cabecera es currentTarget porque estoy haciendo addEventListener sobre las cabeceras
  const currentHeader = ev.currentTarget;
  // cojo el collapsable pulsado, que es nodo o etiqueta padre de la cabecera pulsada
  const currentCollapsable = currentHeader.parentNode;

  // recorro todos los collapsables
  const allCollapsables = document.querySelectorAll('.js-collapsable');
  for (const collapsable of allCollapsables) {
    // compruebo si es el collapsable pulsado
    if (currentCollapsable === collapsable) {
      // si es el pulsado, le hago un toggle
      collapsable.classList.toggle('collapsable--close');
    } else {
      // si no es el pulsado, lo cierro
      collapsable.classList.add('collapsable--close');
    }
  }
}
