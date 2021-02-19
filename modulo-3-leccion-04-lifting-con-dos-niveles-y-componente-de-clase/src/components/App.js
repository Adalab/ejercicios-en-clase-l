import React from 'react';
import Input from './Input';

class App extends React.Component {
  constructor(props) {
    super(props);
    // si queremos usar this dentro de handleInputWithLifting (que casi siempre queremos) tenemos que poner esta línea
    this.handleInputWithLifting = this.handleInputWithLifting.bind(this);
  }

  // métodos manejadores de eventos

  handleInputWithLifting(inputValue) {
    console.log('Han cambiado el input de mi hija con el valor ', inputValue);
    this.forceUpdate();
  }

  // método de pintado

  render() {
    const date = new Date().toLocaleString();
    return (
      <div>
        <h1>Lifting en React con dos niveles</h1>
        <h2>Y con componentes de clase</h2>
        onC
        <form>
          <Input
            labelText="Escribe tu email"
            handleInputWithLifting={this.handleInputWithLifting}
          />
        </form>
        <p>Fecha del último renderizado: {date}</p>
      </div>
    );
  }
}

export default App;
