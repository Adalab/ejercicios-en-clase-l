import React, { useState } from 'react';
import Contador from './Contador';
import Series from './Series';
import '../stylesheets/index.scss';

// en este componente no hay nada del ciclo de vida de los componentes

const App = () => {
  const [showCounter, setShowCounter] = useState(true);

  const handleBtn = () => {
    setShowCounter(!showCounter);
  };

  const renderContador = () => {
    const randomNumber = Math.round(Math.random() * 1000);
    return showCounter ? <Contador randomNumber={randomNumber} /> : null;
  };

  return (
    <div>
      <h1>Ciclo de vida de un componente de clase</h1>
      <button className="form__btn" onClick={handleBtn}>
        Mostrar contador / ocultar contador
      </button>
      {renderContador()}
      <Series />
    </div>
  );
};

export default App;
