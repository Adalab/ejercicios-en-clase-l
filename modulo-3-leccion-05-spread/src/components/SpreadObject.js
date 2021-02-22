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

// Explicación de spread:
// Spread es una herramienta de JS que nos viene bien para usarla en React
// Si tengo el objeto:
const data = {
  email: '',
  name: '',
  password: ''
};
// Y escribo ...data es como si en ese momento re-escribiese mi código a:
// email = '';
// name = '';
// password = '';
// Es decir, como si subo las propiedades de data un nivel hacia arriba.

// Se entiende mejor con el siguiente ejemplo
const data2 = {
  user: {
    email: '',
    name: '',
    password: ''
  }
};
const data3 = {
  ...data2.user
};
// Esto crea:
// data3 = {
//   email: '',
//   name: '',
//   password: ''
// }
// Es decir, es como si hubiese escrito a mano
// const data3 = {
//   email: user.email,
//   name: user.name,
//   password: user.password
// };

// Y ahora el ejemplo que nos interesa con React
// this.state nos pide que pasemos un objeto de primer nivel, pero yo quiero cambiar el email que está en el segundo nivel.
// Para conseguirlo tendría que hacer esto
// this.setState({
//   user: {
//     email: newEmailValue,
//     name: this.state.user.name,
//     password: this.state.user.password
//   }
// })
// Es decir, me veo obliga a escribir name: this.state.user.name y password: this.state.user.password. Me hace escribir de más
// Sin embargo si uso
// this.setState({
//   user: {
//     ...this.state.user,
//     email: newEmailValue,
//   }
// })
// Que JS me lo cambia a
// this.setState({
//   user: {
//     email: this.state.user.email,
//     name: this.state.user.name,
//     password: this.state.user.password
//     email: newEmailValue,
//   }
// })
// Es decir JS me reescribe el código y así no tengo que hacerlo yo.
