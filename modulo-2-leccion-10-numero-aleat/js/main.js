"use strict";

const resultElement = document.querySelector('.js-result');
let data = 0;

// Llamo al API de rand.fun,
// al endpoint /number/integer
// con los parámetros GET min=1 y max=100

fetch("https://api.rand.fun/number/integer?min=1&max=100")
  .then((response) => response.json())
  .then((obj) => {
    // El json del servidor lo recibo en obj.
    // La variable obj es un objeto con dos propiedades:
    //   - seed --> No me interesa
    //   - result
    // En obj.result es donde está el número aleatorio.

    console.log(obj.result);

    // Guardo el número aleatorio como dato global:

    data = obj.result;

    // Llamo a la func de escribir los datos en la página:

    renderData();
  });

const renderData = () => {
  resultElement.innerHTML = `El número aleat. es ${data}`;
}

/*
fetch("https://books.adalab.es/materiales-front-end-l/modulo-2-programando-la-web/2_10_peticiones_al_servidor#ejercicio-5")
  .then((response) => {
    // Código que se ejecuta cuando lleguen los datos
    return response.text();
  })
  .then((html) => {
    console.log(html);
  })
  .catch(() => {
    // Código que se ejecuta si el servidor no responde.
  });
*/
/*
{
  then: () => { },
  catch: () => { },
  finally: () => { }
}
*/
