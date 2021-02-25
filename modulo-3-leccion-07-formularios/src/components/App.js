import React, { useState } from 'react';

const App = () => {
  const [email, setEmail] = useState('');
  const [color, setColor] = useState(['red']);

  const handleEmail = ev => {
    setEmail(ev.currentTarget.value);
  };

  const handleReset = () => {
    setEmail('');
    setColor('');
  };

  const handleColor = ev => {
    setColor(ev.currentTarget.value);
  };

  const handleForm = ev => {
    ev.preventDefault();
  };

  return (
    <div>
      <h1>Formularios en react</h1>

      <form onSubmit={handleForm}>
        <label className="form__label" htmlFor="email">
          Escribe aquí tu email:
        </label>
        <input
          className="form__input-text display-block"
          type="text"
          name="email"
          id="email"
          value={email}
          onChange={handleEmail}
        />
        <button className="form__btn" onClick={handleReset}>
          Reset
        </button>

        <select value={color} onChange={handleColor}>
          <option value=""></option>
          <option value="green">Verde</option>
          <option value="blue">Azul</option>
          <option value="red">Rojo</option>
        </select>

        <label htmlFor="">Verde</label>
        <input
          type="radio"
          name="color"
          value="green"
          checked={color === 'green'}
          onChange={handleColor}
        />
        <label htmlFor="">Azul</label>
        <input
          type="radio"
          name="color"
          value="blue"
          checked={color === 'blue'}
          onChange={handleColor}
        />
        <label htmlFor="">Rojo</label>
        <input
          type="radio"
          name="color"
          value="red"
          checked={color === 'red'}
          onChange={handleColor}
        />
      </form>

      <p>Tu email es: {email}</p>

      <p>Tu color es: {color}</p>
    </div>
  );
};

export default App;
