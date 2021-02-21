import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.handleEmail = this.handleEmail.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleEmail(ev) {
    // forma buena de subir los datos por lifting
    this.props.handleInputEmail(ev.target.value);
  }

  handleInput(ev) {
    // forma mejor de subir los datos por lifting
    this.props.handleInput(ev.target.name, ev.target.value);
  }

  render() {
    return (
      <form>
        <label className="form__label" htmlFor="email">
          Escribe aquí tu email:
        </label>
        <input
          className="form__input-text display-block"
          type="text"
          name="email"
          id="email"
          onChange={this.handleEmail}
        />
        <label className="form__label" htmlFor="name">
          Escribe aquí tu nombre:
        </label>
        <input
          className="form__input-text display-block"
          type="text"
          name="name"
          id="name"
          onChange={this.handleInput}
        />
        <label className="form__label" htmlFor="password">
          Escribe aquí tu contraseña:
        </label>
        <input
          className="form__input-text display-block"
          type="text"
          name="password"
          id="password"
          onChange={this.handleInput}
        />
      </form>
    );
  }
}

export default Form;
