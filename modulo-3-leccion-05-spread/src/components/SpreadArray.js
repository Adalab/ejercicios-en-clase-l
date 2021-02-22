import React from 'react';

class SpreadArray extends React.Component {
  constructor(props) {
    super(props);
    this.handleNewUser = this.handleNewUser.bind(this);
    this.state = {
      users: ['sofia@gmail.com']
    };
  }

  handleSubmit(ev) {
    ev.preventDefault();
  }

  handleNewUser(ev) {
    // En React no debemos modificar las props ni el estado a mano, por ello usamos aquí el spread
    // La línea [...this.state.users, ev.target.value] hace un push sobre this.state.users pero sin modificar this.props.users
    // Se crea, al vuelo, un nuevo array y se guarda en el estado
    this.setState({
      users: [...this.state.users, ev.target.value]
    });
  }

  render() {
    console.log('El estado es', this.state);
    return (
      <div className="border--medium">
        <h2>Spread con arrays</h2>
        <div className="col2">
          <form>
            <label className="form__label" htmlFor="email">
              Escribe aquí el email y pincha fuera del input:
            </label>
            <input
              className="form__input-text display-block"
              type="text"
              name="email"
              id="email"
              // aquí estoy escuchando el evento blur porque es más fácil para el enunciado, no tiene nada que ver con spread
              onBlur={this.handleNewUser}
            />
          </form>
          <div className="border--medium">{this.state.users.join(', ')}</div>
        </div>
      </div>
    );
  }
}

export default SpreadArray;

// Explicación de spread:
// Spread es una herramienta de JS que nos viene bien para usarla en React
// Si tengo el array:
const numbers = [1, 2, 3];
// Y escribo ...numbers es como si en ese momento re-escribiese mi código a 1, 2, 3, es decir, lo saco del array.
// Por ello si yo escribo:
const newNumbers = [...numbers, 4];
// Es como si re-escribiese mi código con:
// 1º ...numbers se convierte en 1, 2, 3, sacados del array
// 2º le pongo el 4 al final, por ello es como si re-escribo mi código con 1, 2, 3, 4
// 3º lo meto en un array otra vez, por ello es como si re-escribo mi código [1, 2, 3, 4]
// El código const newNumbers = [...numbers, 4]; es igual que hacer un push pero no sobre numbers si no sobre newNumbers. Es decir, un push en un nuevo array

// Otro ejemplo:
const newNumbers2 = [0, ...numbers];
// Esto es hacer un push pero en vez de al final del array, al principio, estoy metiendo el 0 a la izquierda de 1, 2, 3
// Y también estoy haciendolo sobre un nuevo array, en este caso newNumbers2
