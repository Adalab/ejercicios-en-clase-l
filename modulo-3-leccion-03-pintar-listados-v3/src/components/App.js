import React from 'react';
import Item from './Item';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const items = [
      {
        id: 'a',
        name: 'Cereales con chocolate',
        description: 'Cereales rellenos de chocolate',
        quantity: 2,
        category: 'Cereales',
        price: 5
      },
      {
        id: 'b',
        name: 'Hamburguesa con queso',
        description: 'Hamburguesa rica y saludable',
        quantity: 1,
        category: 'Fast-food',
        price: 15
      },
      {
        id: 'c',
        name: 'Agua mineral',
        description: 'Agua de un charco del Himalaya',
        quantity: 2,
        category: 'Bebida',
        price: 5
      }
    ];

    const result = items.map(item => {
      // aqui he movido el li a un componente llamado item
      return (
        <Item
          // siempre pongo la key en la primera etiqueta HTML o componente de React de este return
          // en este caso en vex de usar el index uso el id del item porque cada item tiene un id único
          key={item.id}
          // aquí le paso varias props hacia abajo
          name={item.name}
          description={item.description}
          quantity={item.quantity}
          category={item.category}
          price={item.price}
        />
      );
    });

    return (
      <div>
        <h1>Pintar listados con React:</h1>
        <p>
          Este es el mismo ejercicio de pintar listados v2 pero esta vez en vez de pasar por props
          un item de tipo objeto paso las props hacia abajo una a una.
        </p>
        <p>
          Os recomendamos comparar el ejericio pintar listados v2 y este que v3 para ver dos formas
          diferentes de pasar props al componente hija
        </p>
        <ul>{result}</ul>
      </div>
    );
  }
}

export default App;
