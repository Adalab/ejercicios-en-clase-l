import React from 'react';

class Item extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li>
        <h2>Nombre: {this.props.name}</h2>
        <p>Descripción: {this.props.description}</p>
        <p>Cantidad: {this.props.quantity}</p>
        <p>Categoría: {this.props.category}</p>
        <p>Precio: {this.props.price}</p>
      </li>
    );
  }
}

export default Item;
