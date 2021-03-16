import React from 'react';
import Item from './Item';

const Items = props => {
  const renderCartProducts = () => {
    return props.cartProducts.map(cartProduct => {
      return (
        <Item
          key={cartProduct.id}
          id={cartProduct.id}
          name={cartProduct.name}
          productUnits={cartProduct.productUnits}
          price={cartProduct.price}
          imageUrl={cartProduct.imageUrl}
          incrementCartProduct={props.incrementCartProduct}
          decrementCartProduct={props.decrementCartProduct}
          deleteCartProduct={props.deleteCartProduct}
        />
      );
    });
  };
  return <tbody className="table__body">{renderCartProducts()}</tbody>;
};

export default Items;
