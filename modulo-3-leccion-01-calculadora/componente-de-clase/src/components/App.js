import React from 'react';
import Button from './Button';

class App extends React.Component {
  // en todos los componentes de clases siempre ponemos constructor (props)
  constructor(props) {
    // en todos los componentes de clases siempre ponemos super(props)
    super(props);
    // el estado son los datos de la aplicación, los veremos en futuras lecciones
    this.state = {
      numberA: '',
      numberB: ''
    };
    // esto es para los eventos, lo veremos en futuras lecciones
    this.handleNumberA = this.handleNumberA.bind(this);
    this.handleNumberB = this.handleNumberB.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  // manejadores de eventos

  handleNumberA(ev) {
    // actualizados nuestros datos y avisamos a react de que han cambiado
    // react se encarga de volver a pintar y escuchar
    this.setState({
      numberA: ev.target.value
    });
  }

  handleNumberB(ev) {
    // actualizados nuestros datos y avisamos a react de que han cambiado
    // react se encarga de volver a pintar y escuchar
    this.setState({
      numberB: ev.target.value
    });
  }

  handleReset() {
    // actualizados nuestros datos y avisamos a react de que han cambiado
    // react se encarga de volver a pintar y escuchar
    this.setState({
      numberA: '',
      numberB: ''
    });
  }

  render() {
    // cuando trabajamos con state siempre lo consoleamos al principio del render
    console.log('Estado de este componente', this.state);
    // cuando trabajamos con props siempre las consoleamos al principio del render
    console.log('Props de este componente', this.props);

    // esto es código js, podemos poner cualquier cosa de js: if, for, const, let...
    // pero no debemos poner nunca document.querySelector, addEventListener... porque de la parte de actualizar el DOM se encarga React

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

    // render: retorno el código HTML o JSX que quiero que React pinte en la página
    return (
      <div>
        {/* Los comentarios en React se ponen así */}
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
            {/* Dentro de JSX, si ponemos llaves podemos poner código JS */}
            <span className={'text--bold ' + classNameError}> {resultText}</span>
          </label>
          <input type="button" className="form__btn m-0" value="Reset" onClick={this.handleReset} />

          {/* Pasamos las props btnText y btnClass al componente hijo Button */}
          <Button btnText="¡¡¡Enviar!!!" btnClass="active" />
        </form>
      </div>
    );
  }
}

export default App;
