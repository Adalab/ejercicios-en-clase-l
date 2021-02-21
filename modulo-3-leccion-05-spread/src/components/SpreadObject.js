import React from 'react';

class SpreadObject extends React.Component {
  constructor(props) {
    super(props);
    this.handleEmail = this.handleEmail.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.state = {
      user: {
        email: '',
        name: '',
        password: ''
      },
      address: {
        country: '',
        region: '',
        city: ''
      }
    };
  }

  // este método solo nos vale para actualizar un input y una propiedad del estado: el email
  handleEmail(ev) {
    this.setState({
      user: {
        ...this.state.user,
        email: ev.target.value
      }
    });
  }

  // este método solo nos vale para actualizar cualquier input
  // y su correspondiente propiedad del estado: name y password
  handleInput(ev) {
    const inputKey = ev.target.name;
    this.setState({
      user: {
        ...this.state.user,
        [inputKey]: ev.target.value
      }
    });
  }

  render() {
    return (
      <div className="border--medium">
        <h2>Spread con objetos</h2>
        <div className="col2">
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
          <div className="border--medium">
            {/* así pintamos un campo del estado */}
            <p>El email de la usuaria es: {this.state.user.email}</p>
            <p>El nombre de la usuaria es: {this.state.user.name}</p>
            <p>La contraseña de la usuaria es: {this.state.user.password}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default SpreadObject;
