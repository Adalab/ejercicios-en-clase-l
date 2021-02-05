"use strict";

/* Examples: */

// FINDINDEX



function findIndexByName(list, name) {
  // El array de objetos será list. Será un array de Adalabers.
  // El nombre a buscar será name.

  // Para buscar un objeto de un array de objetos necesito un for.

  // En el caso de esta función, tiene que encontrar el índice del array.
  // Necesitamos el índice i para devolverlo cuando encontremos el objeto.
  // Por esa razón usamos un for clásico en lugar de un for-of.

  for (let i = 0; i < list.length; i++) {
    const row = list[i];

    if (row.nombre === name) {
      return i;
    }
  }

  return -1;
}

// Busco la posición o el índice en el array de adalabers del objeto con los datos de Laura usando mi nueva y flamante función:

const LauraIndex1 = findIndexByName(adalaberData, "Laura Portillo");

renderResult(`findIndexByName(adalaberData, "Laura Portillo")`, adalaberData, LauraIndex1);

// Y ésta sería la forma de buscar la posición o índice del mismo objeto con un findIndex()

const LauraIndex2 = adalaberData.findIndex((dato) => dato.nombre === "Laura Portillo");

renderResult(`adalaberData.findIndex((row) => row.nombre === "Laura Portillo"`, adalaberData, LauraIndex2);

// Ahora pruebo a buscar el índice del objeto de Marcjanna "simulando" que ya lo
// haya guardado en la variable nameToRemove.

const nameToRemove = "Marcjanna Stopinska";

const MarcjannaIndex1 = adalaberData.findIndex((dato) => dato.nombre === nameToRemove);

renderResult(`adalaberData.findIndex((row) => row.nombre === "Marcjanna Stopinska"`, adalaberData, MarcjannaIndex1);

// Una vez que sé el índice de ese objeto (está guardado en la variable MarcjannaIndex1), puedo usar el índice para borrar el elemento del array con splice

adalaberData.splice(MarcjannaIndex1, 1 ); // Borro 1 elemento desde la posición que indica MarcjannaIndex1

// Vemos en la página cómo se queda el array.

renderResult(`Después del splice`, adalaberData, "nada");