import React from 'react';

// en este componente usamos todos los métodos del ciclo de vida
// solo para consolear y ver el orden en el que se ejecutan los métodos

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
    this.handleBtn = this.handleBtn.bind(this);
    console.log('Se ejecuta el constructor()');
  }

  componentDidMount() {
    console.log('Se ejecuta el componentDidMount()');
  }

  componentWillUnmount() {
    console.log('Se ejecuta el componentWillUnmount()');
  }

  shouldComponentUpdate() {
    console.log('Se ejecuta el shouldComponentUpdate()');
    return true;
  }

  componentDidUpdate() {
    console.log('Se ejecuta el componentDidUpdate()');
  }

  handleBtn() {
    this.setState(prevState => {
      return {
        counter: prevState.counter + 1
      };
    });
  }

  render() {
    console.log('Se ejecuta el render()');
    return (
      <div className="border--medium">
        <h2>Componente Contador</h2>
        <p>El número aleatorio es: {this.props.randomNumber}</p>
        <button className="form__btn" onClick={this.handleBtn}>
          Incrementar
        </button>
        <p>El contador va por: {this.state.counter}</p>
      </div>
    );
  }
}

export default Counter;
