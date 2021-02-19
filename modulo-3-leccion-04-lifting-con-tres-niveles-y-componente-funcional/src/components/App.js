import React from 'react';
import Form from './Form';

const App = () => {
  // métodos manejadores de eventos

  const handleInputWithLifting = inputValue => {
    console.log('Han cambiado el input de mi nieta con el valor ', inputValue);
    // los componentes funcionales no tienen this.forceUpdate()
    // así que no podemos forzar un re-renderizado
    // el re-renderizado lo haremos con React > Hooks > useState que se ve en la lección 3.6
  };

  // método de pintado
  return (
    <div>
      <h1>Lifting en React con tres niveles</h1>
      <h2>Y con componentes de clase</h2>
      <Form labelText="Escribe tu email" handleInputWithLifting={handleInputWithLifting} />
    </div>
  );
};

export default App;
