import React from 'react';

function App() {
  // métodos manejadores de eventos

  const handleButton = ev => {
    console.log('Han pulsado el botón con el evento', ev);
  };

  const handleForm = ev => {
    ev.preventDefault();
    console.log('Han enviado el formulario con el evento', ev);
  };

  const handleInput = ev => {
    console.log('Han cambiado el input con el value ', ev.target.value, ' con el evento es', ev);
  };

  // método de pintado

  return (
    <div>
      <h1>Eventos en React</h1>
      <h2>Un solo nivel de componentes</h2>
      <h2>Y con componente funcional</h2>
      <form onSubmit={handleForm}>
        <label className="form__label" htmlFor="email">
          Escribe tu email
        </label>
        <input
          className="form__input-text display-block"
          type="text"
          name="email"
          id="email"
          onChange={handleInput}
        />
        <button className="form__btn" onClick={handleButton}>
          Púlsame
        </button>
      </form>
      <p>Fecha del último renderizado: {new Date().toLocaleString()}</p>
    </div>
  );
}

export default App;
