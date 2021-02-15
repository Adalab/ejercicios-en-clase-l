import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numberA: '',
      numberB: ''
    };
    this.handleNumberA = this.handleNumberA.bind(this);
    this.handleNumberB = this.handleNumberB.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleNumberA(ev) {
    this.setState({
      numberA: ev.target.value
    });
  }

  handleNumberB(ev) {
    this.setState({
      numberB: ev.target.value
    });
  }

  handleReset() {
    this.setState({
      numberA: '',
      numberB: ''
    });
  }

  render() {
    // add values
    const resultValue = parseInt(this.state.numberA) + parseInt(this.state.numberB);

    // check resultElement
    let classNameError;
    let resultText;
    if (this.state.numberA === '' && this.state.numberA === '') {
      classNameError = '';
      resultText = '';
    } else if (isNaN(resultValue)) {
      classNameError = 'text--error';
      resultText = 'Datos inválidos';
    } else {
      classNameError = '';
      resultText = resultValue;
    }

    // render
    return (
      <div>
        <h1 className="title--big">Calculadora</h1>

        <form>
          <label className="form__label" htmlFor="numberA">
            Primer número
          </label>
          <input
            type="number"
            name="numberA"
            id="numberA"
            className="form__input-text display-block"
            value={this.state.numberA}
            onChange={this.handleNumberA}
          />

          <label className="form__label" htmlFor="numberB">
            Segundo número
          </label>
          <input
            type="number"
            name="numberB"
            id="numberB"
            className="form__input-text display-block"
            value={this.state.numberB}
            onChange={this.handleNumberB}
          />

          <label className="p-0 display-block mb-1">
            Resultado:
            <span className={`text--bold ${classNameError}`}>{resultText}</span>
          </label>
          <input type="button" className="form__btn m-0" value="Reset" onClick={this.handleReset} />
        </form>
      </div>
    );
  }
}

export default App;
