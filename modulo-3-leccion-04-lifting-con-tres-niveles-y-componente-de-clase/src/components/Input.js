import React from 'react';

class Input extends React.Component {
  constructor(props) {
    super(props);
    // si queremos usar this dentro de handleInput (que casi siempre queremos) tenemos que poner esta línea
    this.handleInput = this.handleInput.bind(this);
  }

  // métodos manejadores de eventos

  handleInput(ev) {
    console.log('Han cambiado el input con el value ', ev.target.value, ' con el evento es', ev);
    this.props.handleInputWithLifting(ev.target.value);
  }

  // método de pintado

  render() {
    return (
      <div className="border--medium">
        <p>Este es componente nieta</p>
        <label className="form__label" htmlFor="email">
          {this.props.labelText}
        </label>
        <input
          className="form__input-text display-block"
          type="text"
          name="email"
          id="email"
          onChange={this.handleInput}
        />
      </div>
    );
  }
}

export default Input;
