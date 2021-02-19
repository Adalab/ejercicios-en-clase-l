import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    // si queremos usar this dentro de handleButton, handleForm y handleInput (que casi siempre queremos) tenemos que poner estas líneas
    this.handleButton = this.handleButton.bind(this);
    this.handleForm = this.handleForm.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  // métodos manejadores de eventos

  handleButton(ev) {
    console.log('Han pulsado el botón con el evento', ev);
    this.forceUpdate();
  }

  handleForm(ev) {
    ev.preventDefault();
    console.log('Han enviado el formulario con el evento', ev);
    // this.forceUpdate() solo lo ponemos si queremos forzar un renderizado
  }

  handleInput(ev) {
    // console.log(this);
    console.log('Han cambiado el input con el value ', ev.target.value, ' con el evento es', ev);
    this.forceUpdate();
    // las funciones manejadoras de eventos no se deben comunicar directamente con el render
    // esa es una tarea que React hace por nosotras
  }

  // método de pintado

  render() {
    return (
      <div>
        <h1>Eventos en React</h1>
        <h2>Un solo nivel de componentes</h2>
        <h2>Y con componentes de clase</h2>
        <form onSubmit={this.handleForm}>
          <label className="form__label" htmlFor="email">
            Escribe tu email
          </label>
          <input
            className="form__input-text display-block"
            type="text"
            name="email"
            id="email"
            onChange={this.handleInput}
            // input.addEventListener('change', this.handleInput)
          />
          <button className="form__btn" onClick={this.handleButton}>
            Púlsame
          </button>
        </form>
        <p>Fecha del último renderizado: {new Date().toLocaleString()}</p>
      </div>
    );
  }
}

export default App;
