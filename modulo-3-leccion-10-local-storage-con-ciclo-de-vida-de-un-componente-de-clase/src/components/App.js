import React from 'react';
import ls from '../services/localStorage';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    // leer del local storage lo hacemos en el componentDidMount
    const localStorageData = ls.get('data');
    if (localStorageData) {
      this.setState(localStorageData);
    }
  }

  componentDidUpdate() {
    // escribir en el local storage lo hacemo cuando el componente ya ha sido actualizado
    ls.set('data', this.state);
  }

  handleChange(ev) {
    this.setState({
      email: ev.target.value
    });
  }

  render() {
    return (
      <div>
        <h1>Ciclo de vida de un componente de clase: local storage</h1>
        <form>
          <label>
            Escribe aquí tu email:
            <input
              className="form__input-text"
              type="text"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </label>
        </form>
        <p>Tu email es: {this.state.email}</p>
      </div>
    );
  }
}

export default App;
