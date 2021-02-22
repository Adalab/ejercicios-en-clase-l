import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sheeps: 0,
      sheepsInArray: []
    };
    this.handleButton = this.handleButton.bind(this);
  }

  handleButton() {
    console.log('Me han clickado');
    // this.setState({
    //   sheeps: this.state.sheeps + 1
    // });
    this.setState(prevState => {
      // prevState.sheepsInArray.push(<li>Oveja</li>);
      return {
        sheeps: prevState.sheeps + 1,
        // no nos gusta guardar en el estado código JSX, por ello la siguiente línea no está bien
        sheepsInArray: [...prevState.sheepsInArray, <li>Oveja</li>]
        // es más fácil guardar datos en el estado y en el render convertirlos a código JSX
        // además recordad que en el estado debemos intentar guardar los datos sin modificar
      };
    });
  }

  render() {
    console.log(this.state);

    // pinto el listado
    const result = [];
    for (let index = 0; index < this.state.sheeps; index++) {
      result.push(<li key={index}>ZZZZZZ...</li>);
    }

    // pinto el resto de cosas
    return (
      <div>
        <h1>Las ovejas</h1>
        <h2>Número total de ovejas: {this.state.sheeps}</h2>
        <button className="form__btn" onClick={this.handleButton}>
          Añadir oveja
        </button>
        <h2>Listado de ovejas: versión con contador</h2>
        <ul>{result}</ul>
        <h2>Listado de ovejas: versión con arrays (no nos gusta esta forma)</h2>
        <ul>{this.state.sheepsInArray}</ul>
      </div>
    );
  }
}

export default App;
