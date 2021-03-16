import React from 'react';
import Item from './Item';

const Products = props => {
  const handlePriceSelect = ev => {
    props.handleOrderByPrice(ev.target.value);
  };

  const productsItems = props.shopProducts.map(product => {
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
      <form className="products__filters">
        <h3>Listado de productos</h3>
        <select
          className="products__filters-order-by-price"
          value={props.orderByPrice}
          onChange={handlePriceSelect}
        >
          <option value="asc">Primero los más baratos</option>
          <option value="desc">Primero los más caros</option>
        </select>
      </form>
      <ul className="products__list">{productsItems}</ul>
    </section>
  );
};

export default Products;
