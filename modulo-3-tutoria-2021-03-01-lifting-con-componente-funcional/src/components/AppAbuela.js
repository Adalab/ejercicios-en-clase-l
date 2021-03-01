import React, { useState } from 'react';
import AppMadre from './AppMadre';

const AppAbuela = () => {
  const [email, setEmail] = useState('123');

  const appAbuelaHandleInput = (inputKey, inputValue) => {
    console.log('Data:', inputKey, inputValue);
    // email = inputValue; mal
    setEmail(inputValue); // bien
  };

  return (
    <div className="border--medium">
      <h1>Abuela</h1>
      <AppMadre email={email} appMadreHandleInput={appAbuelaHandleInput} />
    </div>
  );
};

export default AppAbuela;
