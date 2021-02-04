'use strict';

/*
Qué hace este fichero:
- En este fichero hemos metido la configuración de cómo se tienen que comportar cada uno de los 6 campos de texto en inputsTextConfig.
- En este caso me da igual si los 6 inputs son de tipo text, email, phone...

Cómo funciona este fichero:
- La función updateAllInputs recorre con un for inputsTextConfig
- Para cada iteración del for hace:
  - Coge el input correspondiente a esa iteración, el origen
  - Coge la etiqueta de esa iteración, la etiqueta de la tarjeta correspondiente, el destino
  - Obtiene el valor del input
  - Modifica el valor del input
    - Si es nombre comprueba si tiene que poner el valor del input o el valor por defecto "Nombre apellidos"
    - Si es linkedin comprueba si tiene que poner el valor del input formateado o "#"
      - Si hay que formatear el valor lo que hacemos es:
        1. Por si acaso la usuaria ha puesto https://www.linkedin.com/in/, quitamos el https://www.linkedin.com/in/ con replace
        2. A continuación siemrpe añadimos el prefijo https://www.linkedin.com/in/ a lo que haya escrito la usuaria
  - Una vez que tenemos el nuevo valor lo añadimos con innerHTML o con href a la etiqueta de destino de la tarjeta

- Por cierto: la función updateAllInputs se llama cada vez que la usuaria hace un keyup en alguno de los 6 inputs y al arrancar la página. Es decir, si hacemos keyup en un input se procesan los 6 inputs.
- Lo hacemos al arrancar la página para asegurarnos de que al inicio los datos de los inputs se replican en la tarjeta, es decir, mantenemos la coherencia entre los datos del formulario y los datos de la tarjeta.

Ejercicio 1:
- Este fichero solo está hecho para el name y linkedin
- Entiende cómo está funcionando ahora mismo. Lo mejor es poner un debugger en la primera línea del for y comprobar qué vale cada constante o variable
- Añade 4 objetos más (job, email, phone y github) a inputsTextConfig para que funcionen los 6 inputs
- Añade al HTML las clases que necesites para que todo funcione correctamente
- Hazlo input a input, hasta que no te funcione job, no hagas nada con email...
*/

const inputsTextConfig = [
  {
    inputClass: '.js-input-name',
    cardClass: '.js-card-name',
    defaultValue: 'Nombre apellidos',
    cardPrefix: '',
    cardElementAttribute: 'innerHTML'
  },
  {
    inputClass: '.js-input-job',
    cardClass: '.js-card-job',
    defaultValue: 'Programadora front end',
    cardPrefix: '',
    cardElementAttribute: 'innerHTML'
  },
  {
    inputClass: '.js-input-linkedin',
    cardClass: '.js-card-linkedin',
    defaultValue: '',
    cardPrefix: 'https://www.linkedin.com/in/',
    cardElementAttribute: 'href'
  }
];

function updateAllInputs() {
  // recorro los 6 inputs del array inputsTextConfig
  for (const inputTextConfig of inputsTextConfig) {
    // por cada objeto del array inputsTextConfig hago:
    console.log(
      'Empiezo una nueva iteración del for con la configuración del elemento:',
      inputTextConfig
    );

    // obtengo el elemento input, el origen
    const inputElement = document.querySelector(inputTextConfig.inputClass);
    console.log('Elemento del formulario:', inputTextConfig.inputClass, inputElement);

    // obtengo el elemento de la card, el destino
    const cardElement = document.querySelector(inputTextConfig.cardClass);
    console.log('Elemento del la tarjeta:', inputTextConfig.cardClass, cardElement);

    // obtengo el valor del input
    let newValue = inputElement.value;

    // compruebo si tengo que usar el innerHTML, es decir si es el nombre o la profesion
    if (inputTextConfig.cardElementAttribute === 'innerHTML') {
      // compruebo si está vacío
      if (inputElement.value === '') {
        newValue = inputTextConfig.defaultValue;
      } else {
        newValue = inputElement.value;
      }
      console.log('Valor por defecto:', inputTextConfig.defaultValue);
      console.log('Nuevo valor a poner en la tarjeta:', newValue);
      // actualizo la tarjeta
      cardElement.innerHTML = newValue;
    }

    // si no es de tipo innerHTML, compruebo si tengo que usar el href, es decir si es el email, phone, linkedin o gihtub
    else if (inputTextConfig.cardElementAttribute === 'href') {
      // compruebo si está vacío
      if (inputElement.value === '') {
        newValue = '#';
      } else {
        // limpio el prefijo por si acaso la usuaria ha escrito cosas como:
        // - https://github.com/migueldelmazo en vez de migueldelmazo a secas
        // - https://www.linkedin.com/in/migueldelmazo en vez de migueldelmazo a secas
        newValue = newValue.replace(inputTextConfig.cardPrefix, '');
        // vuelvo a añadir el prefijo https://www.linkedin.com/in/
        newValue = inputTextConfig.cardPrefix + newValue;
      }
      console.log('Valor del prefijo:', inputTextConfig.cardPrefix);
      console.log('Nuevo valor a poner en la tarjeta:', newValue);
      // actualizo la tarjeta
      cardElement.href = newValue;
    }
    console.log('-------------------------------------------------');
  }
  // después de cualquier acción del usuario guardo en el local storage
  saveInLocalStorage();
}

// obtengo los 6 inputs del html
const inputTextElements = document.querySelectorAll('.js-input-text');
// escucho a cada uno de ellos con un addEventListener
for (const inputTextElement of inputTextElements) {
  inputTextElement.addEventListener('keyup', updateAllInputs);
}

// al arrancar la página proceso todos los inputs
// como updateAllInputs no recibe eventos puedo ejecutar esta función al inicio, tras un evento de usuaria o cuando me de la real gana!!!
// updateAllInputs(); movido a 09 main.js
