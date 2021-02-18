import React from 'react';

class Item extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li>
        {/* como this.props.item es un objeto pongo this.props.item.name para obtener el nombre que quiero pintar */}
        <h2>Nombre: {this.props.item.name}</h2>
        {/* como this.props.item es un objeto pongo this.props.item.description para obtener la descripción que quiero pintar */}
        <p>Descripción: {this.props.item.description}</p>
        <p>Cantidad: {this.props.item.quantity}</p>
        <p>Categoría: {this.props.item.category}</p>
        <p>Precio: {this.props.item.price}</p>
      </li>
    );
  }
}

export default Item;
