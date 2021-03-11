import React from 'react';
import Item from './Item';

const Products = props => {
  // render

  const productsItems = props.products.map(product => {
    return (
      <li key={product.id}>
        <Item
          id={product.id}
          imageUrl={product.imageUrl}
          name={product.name}
          price={product.price}
          incrementCartProduct={props.incrementCartProduct}
        />
      </li>
    );
  });

  return (
    <section className="products">
      <h3>Listado de productos</h3>
      <ul className="products__list">{productsItems}</ul>
    </section>
  );
};

export default Products;
