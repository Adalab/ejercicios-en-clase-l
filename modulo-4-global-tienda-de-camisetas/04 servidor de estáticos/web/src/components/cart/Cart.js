import React from 'react';
import Header from './Header';
import Items from './Items';
import Footer from './Footer';

const Cart = props => {
  const renderCart = () => {
    return (
      <section className="cart">
        <h3>Tu cesta de la compra</h3>
        <table className="cart__table">
          <Header />
          <Items
            cartProducts={props.cartProducts}
            incrementCartProduct={props.incrementCartProduct}
            decrementCartProduct={props.decrementCartProduct}
            deleteCartProduct={props.deleteCartProduct}
          />
          <Footer total={renderTotalPrice()} />
        </table>
        <a href="http://localhost:3000/billing.html">Ver mi factura</a>
      </section>
    );
  };

  const renderTotalPrice = () => {
    return props.cartProducts.reduce((acc, cartProduct) => {
      return acc + cartProduct.productUnits * cartProduct.price;
    }, 0);
  };

  return props.isUserLogged ? renderCart() : null;
};

export default Cart;
