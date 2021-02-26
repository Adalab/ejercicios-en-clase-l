import React from 'react';
import { Link } from 'react-router-dom';
import ProductItem from './ProductItem';

const ProductList = props => {
  const renderProducts = () => {
    return props.products.map(product => {
      return (
        <li key={product.id}>
          <Link className="text--decoration--none" to={`./product/${product.id}`}>
            <ProductItem product={product} />
          </Link>
        </li>
      );
    });
  };

  return (
    <section className="border--medium">
      <h2>Página de productos</h2>
      <ul className="cards mt-1">{renderProducts()}</ul>
    </section>
  );
};

export default ProductList;
