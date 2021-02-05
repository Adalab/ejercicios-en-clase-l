"use strict";

/* Examples: */

// FILTER

// Filtrando un array de números (array ages de edades).

// ¿Cómo sería una función de filtrar?
//   Sería una función que recibe una lista como parámetro y devolverá
// otra lista con los elementos que cumplan una regla o condición. En este caso
// que la edad sea mayor o igual que 18.
//   Como vamos a devolver OTRO array, un array nuevo, sin modificar el que nos
// pasan como parámetro, debemos crear la lista dentro de la función:

function filterByLegalAge(list) {
  const newList = [];

  for (const row of list ) {
    if (row >= 18) {
      newList.push(row);
    }
  }

  return newList;
}

const legalAges1 = filterByLegalAge(ages);

renderResult(`filterByLegalAge(ages)`, ages, legalAges1);

//   Si queremos filtrar ahora con otra regla (por ejemplo: las edades de 
// jubiladas/os o las edades de adolescentes) tendríamos que hacer ooootra 
// función con esa condición




// El ejemplo anterior con la función filter de arrays sería así:

const legalAges2 = ages.filter(age => age >= 18);

renderResult(`ages.filter(age => age >= 18)`, ages, legalAges2);

//   En la función arrow tenemos que ponerle la regla o condición que deben
// cumplir los elementos que se quedan.
//   Si necesitamos filtrar los elementos con otra condición, nos vale con
// copiar la misma línea pero cambiando la condición de la arrow.





// Filtrando un array de objetos (adalabers)

//   Antes el parámetro de la función arrow era el elemento y cada elemento ya
// es el valor que queremos comprobar
//   Con un array de objetos, cada elemento es un objeto y tenemos que poner
// el punto y el nombre de la propiedad que tiene el valor que queremos usar
// para filtrar.

//   Filtro el array de adalabers para quedarme con las adalabers cuyo nombre
// empieza por M

const adalaberNameMData = adalaberData.filter((row) => row.nombre.startsWith("M"));

renderResult(`adalaberData.filter( row => row.name.startsWith('M') )`, adalaberData, adalaberNameMData);

// Filtro las adalabers cuyo nombre o apellido tiene las letras Mar

const adalaberFilteredByMar = adalaberData.filter(  row  => row.nombre.includes("Mar") );

renderResult(`adalaberData.filter(  row  => row.nombre.startsWith("Mar") )`, adalaberData, adalaberFilteredByMar);



// Filtro el array para quedarme con las adalabers de la promo Lee

const adalabersFilteredByPromoLee = adalaberData.filter(adalaber => adalaber.promo === "Lee");

renderResult(`adalaberData.filter(adalaber => adalaber.promo === "Lee")`, adalaberData, adalabersFilteredByPromoLee);  // --> Devuelve un array NUEVO pero IDÉNTICO (todas son Lee)

// Filtro el array para quedarme con las adalabers de la promo Kizzy

const adalabersFilteredByPromoKizzy = adalaberData.filter(adalaber => adalaber.promo === "Kizzy");  // --> Devuelve un array vacío [] (no hay ninguna Kizzy)

renderResult(`adalaberData.filter(adalaber => adalaber.promo === "Kizzy")`, adalaberData, adalabersFilteredByPromoKizzy);





// NO VISTO EN CLASE: ¿Cómo sería la función de filtrar las adalabers cuyo nombre comienza por M?

const filterByNameStartWithM = (list) => {
  const newList = [];

  for (const row of list) {
    if (row.nombre.startsWith("M")) {
      newList.push(row);
    }
  }

  return newList;
};