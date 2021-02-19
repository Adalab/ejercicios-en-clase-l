import React from 'react';

const Input = props => {
  // métodos manejadores de eventos

  const handleInput = ev => {
    console.log('Han cambiado el input con el value ', ev.target.value, ' con el evento es', ev);
    props.handleInputWithLifting(ev.target.value);
  };

  // método de pintado

  return (
    <div className="border--medium">
      <p>Este es componente nieta</p>
      <label className="form__label" htmlFor="email">
        {props.labelText}
      </label>
      <input
        className="form__input-text display-block"
        type="text"
        name="email"
        id="email"
        onChange={handleInput}
      />
    </div>
  );
};

export default Input;
