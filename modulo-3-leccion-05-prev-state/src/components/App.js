import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleButton = this.handleButton.bind(this);
    // así inicializamos el estado
    this.state = {
      counter: 0
    };
  }

  handleButton() {
    // this.state siempre recibe un objeto
    // esta es la forma buena
    // le paso una función a React y él la ejecuta cuando el estado está actualizado y listo
    this.setState(function (estadoPrevio) {
      console.log('Es estado previo es', estadoPrevio);
      return {
        counter: estadoPrevio.counter + 1
      };
    });
    // esta es la forma mala, se que el estado depende de sí mismo porque estoy calculando el nuevo valor de counter a partir de this.state.counter
    // this.setState({ counter: this.state.counter + 1 });
  }

  render() {
    // es bueno pintar el estado en la primera línea del render
    console.log('El estado es', this.state);
    return (
      <div>
        <h1>El estado en React: prev state</h1>
        <button className="form__btn" onClick={this.handleButton}>
          Incrementar el contador
        </button>
        <div className="border--medium display-inline-block">
          {/* así pintamos un campo del estado */}
          <p>El valor del contador es: {this.state.counter}</p>
        </div>
      </div>
    );
  }
}

export default App;
