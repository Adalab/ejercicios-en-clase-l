import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="border--medium">
      <h1>Header: React router con rutas dinámicas</h1>
      <nav>
        Menu:
        <ul className="display-inline-block pl-1">
          <li className="nav__item ">
            <Link className="nav__link" to="/home">
              Ir al inicio
            </Link>
          </li>
          <li className="nav__item ">
            <Link className="nav__link" to="/products">
              Ir a productos
            </Link>
          </li>
          <li className="nav__item ">
            <Link className="nav__link" to="/about-us">
              Quiénes somos
            </Link>
          </li>
          <li className="nav__item ">
            <Link className="nav__link" to="/contact">
              Contacto
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
