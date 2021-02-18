import React from 'react';
import Item from './Item';

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

    const result = items.map((item, index) => {
      // aqui he movido el li a un componente llamado item
      return (
        <Item
          // siempre pongo la key en la primera etiqueta HTML o componente de React de este return
          key={index}
          // aquí le paso una prop llamada item=... hacia mi hija
          // el valor de la prop {item} es un objeto
          item={item}
        />
      );
    });

    return (
      <div>
        <h1>Pintar listados con React:</h1>
        <ul>{result}</ul>
      </div>
    );
  }
}

export default App;
