import React, { useState, useEffect } from 'react';
// components
import Header from './common/Header';
import ProductList from './products/List';
import Cart from './cart/Cart';
import User from './user/User';
// services
import localStorage from '../services/localStorage';
import api from '../services/api';
import shop from '../services/shop';

const App = () => {
  // state

  const localStorageUser = localStorage.get('user');
  const [userId, setUserId] = useState(localStorageUser.userId || ''); // Aquí guardamos el userId, comprobamos si lo podemos coger del local storage
  const [loginError, setLoginError] = useState({}); // Aquí guardamos el error del login devuelto por el servidor
  const [shopProducts, setShopProducts] = useState([]); // Aquí guardamos los productos de la tienda
  const [cartProducts, setCartProducts] = useState([]); // Aquí guardamos los productos del carro

  // effects

  useEffect(() => {
    // Al arrancar cojo los productos del API y los guardo en el estado
    api.getShopProducts().then(data => {
      setShopProducts(data);
    });
  }, []);

  useEffect(() => {
    // Cuando el userId cambia compruebo si es el userId de una usuaria
    if (userId !== '') {
      // Y entonces pido al API el carro de la compra de esta usuaria
      api
        .getCartProducts(userId)
        // Y cuando el API contesta lo guardo en el estado
        .then(data => setCartProducts(data));
    }
  }, [userId]); // Este useEffect se ejecuta cuando el userId cambia

  // events: user

  const handleLogin = userData => {
    // Envío email y contraseña al servidor
    api.sendLogin(userData).then(data => {
      // Espero la respuesta del servidor y siempre la guardo en el estado
      if (data.error === false) {
        // Si ha ido bien guardo el id de la usuaria en el estado
        setUserId(data.userId);
        // Si ha ido bien limpio los errores del login por si acaso he mostrado previamente el error de login
        setLoginError({});
        // Si ha ido bien guardo en el local storage el id de la usuaria para que cuando refresque la página no tenga que volver a hacer login
        localStorage.set('user', data);
      } else {
        // Si ha ido mal guardo en el estado el error devuelto por el servidor para que react lo pinte
        setLoginError(data);
      }
    });
  };

  const handleLogout = () => {
    // Cuando hacemos logout borro la usuaria del localstorage
    localStorage.remove('user');
    // Y refresco la página para simular que es la primera vez que la usuaria entra en la página
    window.location.reload();
  };

  // events: cart

  const incrementCartProduct = cartProductId => {
    // Cuando la usuaria incrementa un producto del carro, lo incremento
    const newCartProducts = shop.incrementCartProduct(cartProducts, cartProductId);
    // Lo guardo en el estado para que React re-renderice la página
    setCartProducts([...newCartProducts]);
    // Y lo envío al API para que el servidor sepa que la usuaria quiere comprar estos datos
    api.sendCartProducts(userId, cartProducts);
  };

  const decrementCartProduct = cartProductId => {
    // Cuando la usuaria decrementa un producto del carro, lo decremento
    const newCartProducts = shop.decrementCartProduct(cartProducts, cartProductId);
    // Lo guardo en el estado para que React re-renderice la página
    setCartProducts([...newCartProducts]);
    // Y lo envío al API para que el servidor sepa que la usuaria quiere comprar estos datos
    api.sendCartProducts(userId, cartProducts);
  };

  const deleteCartProduct = cartProductId => {
    // Cuando la usuaria borra un producto del carro, lo borro
    const newCartProducts = shop.deleteCartProduct(cartProducts, cartProductId);
    // Lo guardo en el estado para que React re-renderice la página
    setCartProducts([...newCartProducts]);
    // Y lo envío al API para que el servidor sepa que la usuaria quiere comprar estos datos
    api.sendCartProducts(userId, cartProducts);
  };

  // render

  const composeCartProducts = () => {
    // Ver los comentarios de la función shop.composeCartProducts para saber qué hace
    return shop.composeCartProducts(shopProducts, cartProducts);
  };

  return (
    <>
      <Header />
      <User
        // Al componente User no le interesa el userId, solo le interesa saber si la usuaria está o no logado
        // por ello paso por props un booleano
        isUserLogged={!!userId}
        // isUserLogged={userId !== ''} Esta línea es igual que la anterior
        loginError={loginError}
        handleLogin={handleLogin}
        handleLogout={handleLogout}
      />
      <Cart
        isUserLogged={!!userId}
        cartProducts={composeCartProducts()}
        incrementCartProduct={incrementCartProduct}
        decrementCartProduct={decrementCartProduct}
        deleteCartProduct={deleteCartProduct}
      />
      <ProductList shopProducts={shopProducts} incrementCartProduct={incrementCartProduct} />
    </>
  );
};

export default App;
