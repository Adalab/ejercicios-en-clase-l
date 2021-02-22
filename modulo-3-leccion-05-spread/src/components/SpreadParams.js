import React from 'react';

class SpreadParams extends React.Component {
  render() {
    return (
      <div className="border--medium">
        <h2>Spread con parámetros de funciones</h2>
        <p>
          Abre el fichero <code className="text--code">SpreadParams.js</code> y lee los comentarios
        </p>
      </div>
    );
  }
}

export default SpreadParams;

// Explicación de spread:
// Spread es una herramienta de JS que nos viene bien para usarla en React

// Ejemplo 1:
function add(...numbers) {
  // Aquí estamos cogiendo todos los parámetros que recibe la función y metiéndolos en el array number
  // De esta forma podemos crear funciones que reciben un número desconocido de parámetros
  // Ya no estamos obligadas a que la declaración de la función y la ejecución de la función tengan los mismos argumentos / parámetros
  console.log(numbers);
  let total = 0;
  for (const number of numbers) {
    total += number;
  }
  return total;
}

// console.log(add(1, 2));
// console.log(add(1, 2, 3, 4));

// Ejemplo 2:

function addWithInitialValue(initialValue, ...numbers) {
  // Este es mismo ejemplo que el anterior, pero el primer parámetro lo guardamos en initialValue
  // Los 2º, 3º, 4º... parámetros los guardamos en numbers
  console.log(initialValue, numbers);
  let total = initialValue;
  for (const number of numbers) {
    total += number;
  }
  return total;
}

// console.log(addWithInitialValue(100, 1, 2));
// console.log(addWithInitialValue(100, 1, 2, 3, 4));

// Ejemplo 3

function addTwoNumbers(...numbers) {
  let total = 0;
  for (const number of numbers) {
    total += number;
  }
  return total;
}

const numbers = [1, 2, 3, 4, 5];

console.log(addTwoNumbers(...numbers));
