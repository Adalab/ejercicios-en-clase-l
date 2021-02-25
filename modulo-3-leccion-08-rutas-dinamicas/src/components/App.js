import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './Header';
import AboutUs from './AboutUs';
import Contact from './Contact';
import Home from './Home';
import ProductList from './ProductList';
import ProductDetail from './ProductDetail';
import ProductNotFound from './ProductNotFound';
import data from '../data/data.json';

const App = () => {
  const [products] = useState(data);

  // esta función solo se ejecuta cuando estamos en la ruta /product/:productId
  // esta función funciona como un componente de React en sí mismo y recibe unas props
  const renderProductoDetail = routerProps => {
    // ReactRouterDom me pasa routerProps con toda la info que él cree que puedo necesitar
    // - si he puesto <Router path="/product/:productId"> tengo el id del producto en routerProps.match.params.productId
    // - si he puesto <Router path="/product/:id"> tengo el id del producto en routerProps.match.params.id
    console.log('Id del producto de la ruta', routerProps.match.params.productId);

    // obtengo el id del producto desde la ruta
    const routerProductId = routerProps.match.params.productId;

    // busco el producto en el listado de productos a través del id de la ruta
    const productFound = products.find(product => product.id === routerProductId);

    // siempre debo comprobar si el producto ha sido encontrado
    if (productFound) {
      // renderizo el producto y se le paso por props
      return <ProductDetail product={productFound} />;
    } else {
      // renderizo el producto no encontrado o no renderizo nada
      return <ProductNotFound />;
    }
  };

  return (
    <div>
      <Header />

      <Switch>
        <Route path="/products">
          <ProductList products={products} />
        </Route>

        <Route path="/product/:productId" render={renderProductoDetail} />

        <Route path="/home">
          {/* aquí puedo poner todo el código JSX que quiera */}
          <Home />
        </Route>

        <Route path="/about-us">
          {/* aquí puedo poner todo el código JSX que quiera */}
          <AboutUs />
        </Route>

        {/* la prop render del componente Route puede ser una función u otro componente */}
        <Route path="/contact" render={Contact} />
      </Switch>
    </div>
  );
};

export default App;

// ¿Qué debemos poner antes /products o /proudct/:productId?
