import React, { useState, useEffect } from 'react';
import Header from './common/Header';
import ProductList from './products/List';
import User from './user/User';
import localStorage from '../services/localStorage';
import products from '../data/products.json';

const App = () => {
  // state

  const localStorageUser = localStorage.get('user');
  const [userId, setUserId] = useState(localStorageUser.userId || '');
  const [loginError, setLoginError] = useState({});
  const [shopProducts, setShopProducts] = useState([]);

  // effects

  useEffect(() => {
    setShopProducts(products);
  }, []);

  // events: user

  const handleLogin = () => {
    const fakeServerData = {
      userId: '123'
    };
    setUserId(fakeServerData.userId);
    localStorage.set('user', fakeServerData);
  };

  const handleLogout = () => {
    localStorage.remove('user');
    window.location.reload();
  };

  // events: products

  const incrementCartProduct = () => {
    console.log('Han pulsado en incrementar');
  };

  // render

  return (
    <>
      <Header />
      <User
        isUserLogged={!!userId}
        loginError={loginError}
        handleLogin={handleLogin}
        handleLogout={handleLogout}
      />
      <ProductList products={shopProducts} incrementCartProduct={incrementCartProduct} />
    </>
  );
};

export default App;
