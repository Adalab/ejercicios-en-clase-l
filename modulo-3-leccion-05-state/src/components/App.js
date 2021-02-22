import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleEmail = this.handleEmail.bind(this);
    // así inicializamos el estado
    this.state = {
      email: ''
    };
  }

  handleEmail(ev) {
    // this.state siempre recibe un objeto
    this.setState({
      email: ev.target.value
    });
    // guardamos los datos en crudo, o sin modificar
  }

  render() {
    // es bueno pintar el estado en la primera línea del render
    console.log('El estado es', this.state);
    return (
      <div>
        <h1>El estado en React en un solo componente</h1>
        <form className="display-inline-block">
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
        </form>
        <div className="border--medium display-inline-block">
          {/* así pintamos un campo del estado */}
          <p>El email de la usuaria es: {this.state.email.toUpperCase()}</p>
        </div>
      </div>
    );
  }
}

export default App;
