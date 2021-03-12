import React from 'react';

const Item = props => {
  // events

  const handleIncrementCartProduct = () => {
    props.incrementCartProduct(props.id);
  };

  const handleDecrementCartProduct = () => {
    props.decrementCartProduct(props.id);
  };

  const handleDeleteCartProduct = () => {
    props.deleteCartProduct(props.id);
  };

  // render

  return (
    <tr>
      <td className="table__item--product">
        <img className="table__item--product-img" src={props.imageUrl} alt="" />
        {props.name}
      </td>
      <td className="table__item--price">{props.price} €</td>
      <td className="table__item--units">
        <button
          className="table__btn"
          title="Quitar una unidad más de este producto"
          onClick={handleDecrementCartProduct}
        >
          -
        </button>
        <span className="table__item--units-value">{props.productUnits}</span>
        <button
          className="table__btn"
          title="Añadir una unidad más de este producto"
          onClick={handleIncrementCartProduct}
        >
          +
        </button>
        <button
          className="table__btn"
          title="Eliminar este producto de la cesta"
          onClick={handleDeleteCartProduct}
        >
          X
        </button>
      </td>
      <td className="table__item--total">{props.price * props.productUnits} €</td>
    </tr>
  );
};

export default Item;
