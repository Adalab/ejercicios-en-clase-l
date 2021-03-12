import React from 'react';

const Product = props => {
  // events

  const handleBtn = () => {
    props.incrementCartProduct(props.id);
  };

  // render

  return (
    <article className="item">
      <img src={props.imageUrl} className="item__img" alt={`Producto: ${props.name}`} />

      <h3 className="item__title">{props.name}</h3>

      <p className="item__price">Precio: {props.price} €</p>

      <button className="item__btn" title="Añadir este producto a la cesta" onClick={handleBtn}>
        Añadir a la cesta
      </button>
    </article>
  );
};

export default Product;
