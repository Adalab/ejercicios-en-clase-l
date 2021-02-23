import React from 'react';
import Input from './Input';
import Radio from './Radio';

// si te das cuenta estamos dividiendo una web en 2 tipos de componentes:
// - componente App o Madre superiora: maneja todos los datos, es lista, es inteligente sabe todo lo que hay que hacer
// - resto de componentes: son menos listos, simplemente:
//   - reciben datos por props y los pintan
//   - escuchan eventos y suben para arriba por lifting los datos, pero ni si quiera procesan los datos, eso que lo haga la madre que es más lista

const Form = props => {
  return (
    <form className="border--medium">
      <h2>Formulario</h2>
      <Input labelText="Escribe tu email" id="email" name="email" handleInput={props.handleInput} />
      <Input labelText="Escribe tu nombre" id="name" name="name" handleInput={props.handleInput} />
      <Radio
        labelText="Verde"
        id="color-1"
        name="color"
        value="green"
        handleInput={props.handleInput}
      />
      <Radio
        labelText="Rojo"
        id="color-2"
        name="color"
        value="red"
        handleInput={props.handleInput}
      />
      <Radio
        labelText="Azul"
        id="color-3"
        name="color"
        value="blue"
        handleInput={props.handleInput}
      />
    </form>
  );
};

export default Form;
