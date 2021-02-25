import React from 'react';

const Home = props => {
  return (
    <article className="card">
      <img
        className="card__img"
        src={props.product.imageUrl}
        alt={`Imagen de ${props.product.name}`}
      />
      <h3 className="card__title text--decoration--none">{props.product.name}</h3>
      <p className="card__description">Precio: {props.product.price}€</p>
      <p className="card__description">Descripción: {props.product.description}</p>
    </article>
  );
};

export default Home;
