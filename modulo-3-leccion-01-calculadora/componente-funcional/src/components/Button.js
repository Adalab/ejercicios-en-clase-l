import React from 'react';

// todos los componentes funcionales reciben props como primer y único parámetro
// en un componente funcional nunca ponemos this porque this solo funciona dentro de clases
const Button = props => {
  // cuando trabajamos con props siempre las consoleamos al principio del render
  console.log('Props de este componente', props);

  // render: retorno el código HTML o JSX que quiero que React pinte en la página
  return (
    <input
      // dentro de una etiqueta puedo componer comentarios con //
      // dentro de las llaves puedo meter código JS, por eso puedo interpolar
      type="button"
      className={`form__btn ${props.btnClass}`}
      // el valor de value lo cojo de las props que me pasa mi madre App
      value={props.btnText}
    />
  );
};

export default Button;
