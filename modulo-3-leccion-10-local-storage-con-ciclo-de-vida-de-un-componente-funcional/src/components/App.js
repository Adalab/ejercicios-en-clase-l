import React, { useState, useEffect } from 'react';
import ls from '../services/localStorage';

const App = () => {
  // leo del local storage al iniciar el estado
  const localStorageData = ls.get('data') || {};
  const [email, setEmail] = useState(localStorageData.email);

  useEffect(() => {
    // guardo en el local storage en el useEffect, cada vez que se re-renderiza el componente y cuando el estado está actualizado
    ls.set('data', { email: email });
  });

  const handleChange = ev => {
    setEmail(ev.target.value);
  };

  return (
    <div>
      <h1>Ciclo de vida de un componente de clase: local storage</h1>
      <form>
        <label>
          Escribe aquí tu email:
          <input className="form__input-text" type="text" value={email} onChange={handleChange} />
        </label>
      </form>
      <p>Tu email es: {email}</p>
    </div>
  );
};

export default App;
