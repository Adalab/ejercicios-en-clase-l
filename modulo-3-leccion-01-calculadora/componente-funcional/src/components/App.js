import React, { useState } from 'react';
import Button from './Button';

// todos los componentes funcionales reciben props como primer y único parámetro
// en un componente funcional nunca ponemos this porque this solo funciona dentro de clases
const App = props => {
  // estado en componentes funcionales, lo veremos en futuras lecciones
  const [numberA, setNumberA] = useState('');
  const [numberB, setNumberB] = useState('');

  // manejadores de eventos

  const handleNumberA = ev => {
    // actualizados nuestros datos y avisamos a react de que han cambiado
    // react se encarga de volver a pintar y escuchar
    setNumberA(ev.target.value);
  };

  const handleNumberB = ev => {
    // actualizados nuestros datos y avisamos a react de que han cambiado
    // react se encarga de volver a pintar y escuchar
    setNumberB(ev.target.value);
  };

  const handleReset = () => {
    // actualizados nuestros datos y avisamos a react de que han cambiado
    // react se encarga de volver a pintar y escuchar
    setNumberA('');
    setNumberB('');
  };

  // cuando trabajamos con props siempre las consoleamos al principio del render
  console.log('Props de este componente', props);

  // esto es código js, podemos poner cualquier cosa de js: if, for, const, let...
  // pero no debemos poner nunca document.querySelector, addEventListener... porque de la parte de actualizar el DOM se encarga React

  // add values
  const resultValue = parseInt(numberA) + parseInt(numberB);

  // check resultElement
  let classNameError;
  let resultText;
  if (numberA === '' && numberA === '') {
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
          value={numberA}
          onChange={handleNumberA}
        />

        <label className="form__label" htmlFor="numberB">
          Segundo número
        </label>
        <input
          type="number"
          name="numberB"
          id="numberB"
          className="form__input-text display-block"
          value={numberB}
          onChange={handleNumberB}
        />

        <label className="p-0 display-block mb-1">
          Resultado:
          {/* Dentro de JSX, si ponemos llaves podemos poner código JS */}
          <span className={'text--bold ' + classNameError}> {resultText}</span>
        </label>
        <input type="button" className="form__btn m-0" value="Reset" onClick={handleReset} />

        {/* Pasamos las props btnText y btnClass al componente hijo Button */}
        <Button btnText="¡¡¡Enviar!!!" btnClass="active" />
      </form>
    </div>
  );
};

export default App;
