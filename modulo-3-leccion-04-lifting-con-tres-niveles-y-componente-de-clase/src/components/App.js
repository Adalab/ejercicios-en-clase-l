import React from 'react';
import Form from './Form';

class App extends React.Component {
  constructor(props) {
    super(props);
    // si queremos usar this dentro de handleInputWithLifting (que casi siempre queremos) tenemos que poner esta línea
    this.handleInputWithLifting = this.handleInputWithLifting.bind(this);
  }

  // métodos manejadores de eventos

  handleInputWithLifting(inputValue) {
    console.log('Han cambiado el input de mi nieta con el valor ', inputValue);
    this.forceUpdate();
  }

  // método de pintado

  render() {
    return (
      <div>
        <h1>Lifting en React con tres niveles</h1>
        <h2>Y con componentes de clase</h2>
        <Form labelText="Escribe tu email" handleInputWithLifting={this.handleInputWithLifting} />
        <p>Fecha del último renderizado: {new Date().toLocaleString()}</p>
      </div>
    );
  }
}

export default App;
