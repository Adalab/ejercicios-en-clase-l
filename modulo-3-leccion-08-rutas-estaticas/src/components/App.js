import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './Header';
import AboutUs from './AboutUs';
import Contact from './Contact';
import Home1 from './Home-1';
import Home2 from './Home-2';

const App = () => {
  return (
    <div>
      <Header />
      <div className="border--medium">
        <h2>Router sin switch</h2>
        <Route path="/home">
          <Home1 />
        </Route>
        <Route path="/home">
          <Home2 />
        </Route>
        <Route path="/about-us">
          <AboutUs />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </div>

      <div className="border--medium">
        <h2>Router con switch</h2>
        <Switch>
          <Route path="/home">
            <Home1 />
          </Route>
          <Route path="/home">
            <Home2 />
          </Route>
          <Route path="/about-us">
            <AboutUs />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default App;

// ¿Qué pasa si no ponemos path?
// ¿Para qué vale exact?
// ¿La gestión de rutas debe estar siempre en el componente superior?
// ¿Cómo puedo poner una página de no encontrada?
