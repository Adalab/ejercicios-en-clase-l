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
    this.setState(prevState => {
      console.log('Es estado previo es', prevState);
      return {
        counter: prevState.counter + 1
      };
    });
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
