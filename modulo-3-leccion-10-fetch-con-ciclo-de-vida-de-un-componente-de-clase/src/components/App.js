import React from 'react';
import Contador from './Contador';
import Series from './Series';
import '../stylesheets/index.scss';

// en este componente no hay nada del ciclo de vida de los componentes

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showCounter: true
    };
    this.handleBtn = this.handleBtn.bind(this);
  }

  handleBtn() {
    this.setState(prevState => {
      return {
        showCounter: !prevState.showCounter
      };
    });
  }

  renderCounter() {
    const randomNumber = Math.round(Math.random() * 1000);
    return this.state.showCounter ? <Contador randomNumber={randomNumber} /> : null;
  }

  render() {
    return (
      <div>
        <h1>Ciclo de vida de un componente de clase</h1>
        <button className="form__btn" onClick={this.handleBtn}>
          Mostrar contador / ocultar contador
        </button>
        {this.renderCounter()}
        <Series />
      </div>
    );
  }
}

export default App;
