import React from 'react';

const Home = props => {
  return (
    <section className="border--medium">
      <h2>Detalle de producto</h2>
      <article className="card mt-1">
        <img
          className="card__img"
          src={props.product.imageUrl}
          alt={`Imagen de ${props.product.name}`}
        />
        <h3 className="card__title text--decoration--none">{props.product.name}</h3>
        <p className="card__description">Precio: {props.product.price}€</p>
        <p className="card__description">Descripción: {props.product.description}</p>
        <p className="card__description">Tallas: {props.product.sizes.join(' - ')}</p>
      </article>
    </section>
  );
};

export default Home;
