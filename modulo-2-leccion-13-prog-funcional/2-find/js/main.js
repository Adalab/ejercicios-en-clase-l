"use strict";

/* Examples: */

// FIND (a secas)

// Busco el objeto con los datos de Laura en el array de adalabers:

const LauraData1 = adalaberData.find((row) => row.nombre === "Laura Portillo");

renderResult(`adalaberData.find((row) => row.nombre === "Laura Portillo")`, adalaberData, LauraData1);

//   Busco el objeto con los datos de Laura "simulando" que ya he recogido 
// el nombre del HTML y lo he guardado en la variable nameToFind.

const nameToFind2 = "Laura Portillo";

const LauraData2 = adalaberData.find((row) => row.nombre === nameToFind2);

renderResult(`adalaberData.find((row) => row.nombre === nameToFind2)`, adalaberData, LauraData2);

//   OJO CUIDAO a lo anterior. El nombre debe ser exactamente Laura Portillo
// con las mismas letras y las mismas mayúsculas y minúsculas
//   Si pongo sólo Laura o lo pongo con minúsculas no encuentra nada exactamente
// igual y devuelve undefined

const nameToFind3 = "Laura";

const LauraData3 = adalaberData.find((row) => row.nombre === nameToFind3);

renderResult(`adalaberData.find((row) => row.nombre === "Laura")`, adalaberData, LauraData3);

//   Para solucionarlo, podemos usar includes. Includes devuelve true si
// el texto del parámetro está contenido en el texto sobre el que se aplica:
//
//   "Me gusta las tostas con aguacate".includes("aguacate")  ->  true
//   "Me gusta las tostas con aguacate".includes("agua")      ->  true
//   "Me gusta las tostas con aguacate".includes("Aguacate")  ->  false

const nameToFind4 = "Laura";

const LauraData4 = adalaberData.find((row) => row.nombre.includes(nameToFind4));

renderResult(
  `adalaberData.find((row) => row.nombre.includes("Laura"))`,
  adalaberData,
  LauraData4
);


//   Para que funcione sin tener en cuenta mayúsculas y minúsculas, lo que podemos
// hacer es pasar los DOS textos a minúsculas y nos quitamos el problema:

const nameToFind5 = "lAuRa";

const LauraData5 = adalaberData.find((row) => row.nombre.toLowerCase().includes(nameToFind5.toLowerCase()));

renderResult(
  `adalaberData.find((row) => row.nombre.toLowerCase().includes("lAuRa".toLowerCase()))`,
  adalaberData,
  LauraData5
);

// Si modifico el objeto encontrado, se modifica el objeto dentro del array porque
// son dos nombres para el mismo objeto. Tanto la variable LauraData5 como el objeto de la posición 0 del array adalaberData[0] hacen referencia al MISMO objeto.

LauraData5.equipo = "Equipo 2";

renderResult(`Modificado equipo del objeto encontrado`, adalaberData, LauraData5);


// NO VISTO EN CLASE: ¿Cómo sería la función find() si la hiciéramos nosotras?
//  Sería una función que recibe una lista y un nombre y devolverá un objeto:

const findByName = (list, name) => {
  for (const row of list) {
    if (row.nombre === name) {
      return row;
    }
  }
};

// NO VISTO EN CLASE: ¿Y si necesitamos buscar por equipo? ¿Si necesitamos buscar la primera adalaber del equipo SPACELABERS?

// Hemos visto que para distintos nombres nos vale la misma función.
// En cambio, si necesitamos buscar por otro campo, teeeeendríamos que haceeeeeer ooootra función con ooootro bucle for:

const findByEquipo = (list, team) => {
  for (const row of list) {
    if (row.equipo === team) {
      return row;
    }
  }
};

// En cambio, con find basta con cambiar la condición de la función arrow (copio y modifico el primer find que hice más arriba ☝️)

const adalaberTeamSpacelabers = adalaberData.find((row) => row.equipo === "SPACELABERS");