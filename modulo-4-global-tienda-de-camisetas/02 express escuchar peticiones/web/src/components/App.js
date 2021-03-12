import React, { useState, useEffect } from 'react';
import Header from './common/Header';
import ProductList from './products/List';
import User from './user/User';
import localStorage from '../services/localStorage';
import api from '../services/api';

const App = () => {
  // state

  const localStorageUser = localStorage.get('user');
  const [userId, setUserId] = useState(localStorageUser.userId || ''); // Aquí guardamos el userId, comprobamos si lo podemos coger del local storage
  const [loginError, setLoginError] = useState({}); // Aquí guardamos el error del login devuelto por el servidor
  const [shopProducts, setShopProducts] = useState([]); // Aquí guardamos los productos

  // effects

  useEffect(() => {
    api.getProducts().then(data => {
      setShopProducts(data);
    });
  }, []);

  // events: user

  const handleLogin = userData => {
    // Envío email y contraseña al servidor
    api.sendLogin(userData).then(data => {
      // Espero la respuesta del servidor y siempre la guardo en el estado
      if (data.error === false) {
        // Si ha ido bien guardo el id del usuario en el estado
        setUserId(data.userId);
        // Si ha ido bien limpio los errores del login por si acaso he mostrado previamente el error de login
        setLoginError({});
        // Si ha ido bien guardo en el local storage el id del usuario para que cuando refresque la página no tenga que volver a hacer login
        localStorage.set('user', data);
      } else {
        // Si ha ido mal guardo en el estado el error devuelto por el servidor para que react lo pinte
        setLoginError(data);
      }
    });
  };

  const handleLogout = () => {
    // Cuando hacemos logout borro el usuario del localstorage
    localStorage.remove('user');
    // Y refresco la página para simular que es la primera vez que el usuario entra en la página
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
        // Al componente User no le interesa el userId, solo le interesa saber si el usuario está o no logado
        // por ello paso por props un booleano
        isUserLogged={!!userId}
        // Esta línea es igual que la anterior isUserLogged={userId !== ''}
        loginError={loginError}
        handleLogin={handleLogin}
        handleLogout={handleLogout}
      />
      <ProductList products={shopProducts} incrementCartProduct={incrementCartProduct} />
    </>
  );
};

export default App;
