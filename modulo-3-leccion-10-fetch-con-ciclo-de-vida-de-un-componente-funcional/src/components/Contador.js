import React, { useState, useEffect } from 'react';

// en este componente usamos todos los métodos del ciclo de vida
// solo para consolear y ver el orden en el que se ejecutan los métodos

const Counter = props => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log('Se ejecuta el montaje en la función principal del useEffect, en todos los render');
    return () => {
      console.log(
        'Se ejecuta el desmontaje en la función retornada del useEffect, en todos los render'
      );
    };
  });

  // useEffect 2
  useEffect(() => {
    console.log(
      'Se ejecuta el montaje en la función principal del useEffect, al montarlo la primera vez'
    );
    return () => {
      console.log(
        'Se ejecuta el desmontaje en la función retornada del useEffect, al desmontarlo la última vez'
      );
    };
  }, []);

  const handleBtn = () => {
    setCounter(counter + 1);
  };

  console.log('Se ejecuta el render()');
  return (
    <div className="border--medium">
      <h2>Componente Contador</h2>
      <p>El número aleatorio es: {props.randomNumber}</p>
      <button className="form__btn" onClick={handleBtn}>
        Incrementar
      </button>
      <p>El contador va por: {counter}</p>
    </div>
  );
};

export default Counter;
