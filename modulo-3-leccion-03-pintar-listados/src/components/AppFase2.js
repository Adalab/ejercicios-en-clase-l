import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const items = [
      {
        name: 'Cereales con chocolate',
        description: 'Cereales rellenos de chocolate',
        quantity: 2,
        category: 'Cereales',
        price: 5
      },
      {
        name: 'Hamburguesa con queso',
        description: 'Hamburguesa rica y saludable',
        quantity: 1,
        category: 'Fast-food',
        price: 15
      },
      {
        name: 'Agua mineral',
        description: 'Agua de un charco del Himalaya',
        quantity: 2,
        category: 'Bebida',
        price: 5
      }
    ];

    // result es un array de etiquetas JSX
    const result = items.map((item, index) => {
      console.log('En esta iteración index es', index);
      // cada return retorna un li
      return (
        <li key={index}>
          <h2>Nombre: {item.name}</h2>
          <p>Descripción: {item.description}</p>
          <p>Cantidad: {item.quantity}</p>
          <p>Categoría: {item.category}</p>
          <p>Precio: {item.price}</p>
        </li>
      );
      // el map retorna un array de li, es decir, un listado
    });

    return (
      <div>
        <h1>Pintar listados con React:</h1>
        {/* array de etiquetas JSX */}
        {result}
      </div>
    );

    // Esto es lo mismo que lo de arriba pero separado en dos pasos: es más legible
    // return (
    //   <div>
    //     <h1>Pintar listados con React:</h1>
    //     {/* con este map iteramos iteramos el array de items */}
    //     {items.map(item => {
    //       console.log('En esta iteración item es', item);
    //       // cada return retorna un li
    //       return (
    //         <li>
    //           <h2>Nombre: {item.name}</h2>
    //           <p>Descripción: {item.description}</p>
    //           <p>Cantidad: {item.quantity}</p>
    //           <p>Categoría: {item.category}</p>
    //           <p>Precio: {item.price}</p>
    //         </li>
    //       );
    //     })}
    //   </div>
    // );
  }
}

export default App;

// const numbers = [1, 2, 3];

// const result = numbers.map(number => {
//   console.log('En esta iteración number es', number);
//   return number * 2;
// });

// console.log(result);
