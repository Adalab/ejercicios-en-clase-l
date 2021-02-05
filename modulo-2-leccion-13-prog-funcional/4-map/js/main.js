"use strict";

/* Examples: */

// MAP

// .map() sirve para TRANSFORMAR
// map transforma un array en otro array con el mismo número
// de elementos, pero distintos



// Transformar el array de productos en un array de órdenes

//   La función recibe un array de strings con nombres de productos
// y devolverá otro array NUEVO con el mismo número de strings pero que
// contendrán órdenes (estilo: "You have to buy ...")

function transformOrders(list) {
  const newList = [];

  for (const product of list) {
    newList.push(`You have to buy ${product.toLowerCase()}`);
  }

  return newList;
}

const orders1 = transformOrders(productNames);

renderResult(`transformOrders(productNames)`, productNames, orders1);

const orders2 = productNames.map((item) => `You have to buy ${item.toLowerCase()}`);

renderResult(`productNames.map((item) => "You have to buy ...")`, productNames, orders2);





//   Transformar el array de objetos con datos de las adalabers en
// un array de strings con los nombres de las adalabers

const adalaberNames = adalaberData.map((row) => `${row.nombre}`);

renderResult(`adalaberData.map(row => row.nombre)`, adalaberData, adalaberNames);



//   Transformar el array de objetos con datos de las adalabers en
// un array de strings con los nombres de los equpos de las adalabers

const adalaberTeams = adalaberData.map((row) => `${row.equipo}`);

renderResult(`adalaberData.map(row => row.equipo)`, adalaberData, adalaberTeams);



//   Transformar el array de objetos con datos de las adalabers en
// un array de strings con los nombres y equpos de las adalabers en este formato:
//      Nombre Adalaber (Equipo)

const adalaberNamesAndTeams = adalaberData.map(row => `${row.nombre} (${row.equipo})`);

renderResult(`adalaberData.map(row => row.nombre (row.equipo))`, adalaberData, adalaberNamesAndTeams);





// NO VISTO EN CLASE: ¿Cómo sería la función de tranformar el array de Adalabers en un array de nombres de equipo?

const transformExtractTeams = (list) => {
  const newList = [];

  for (const row of list) {
    newList.push(row.equipo);
  }

  return newList;
};



// NO VISTO EN CLASE: ¿Cómo transformo el array de edades en un array de booleanos (true si es mayor de edad y false si no)?

// Con una función:

const transformHasLegalAge = (list) => {
  const newList = [];

  for (const age of list) {
    if (age >= 18) {
      newList.push(true);
    } else {
      newList.push(false);
    }
  }

  return newList;
};

const haveLegalAge1 = transformHasLegalAge(ages);

// Con un .map()

const haveLegalAge2 = ages.map((age) => age >= 18);

// El resultado en ambos casos va a ser un nuevo array:
//   [false, true, false, true, true]