import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div className="border--medium">
      <h2>Página no encontrada</h2>
      <Link className="nav__link" to="/home">
        Volver al inicio
      </Link>
    </div>
  );
};

export default Contact;
