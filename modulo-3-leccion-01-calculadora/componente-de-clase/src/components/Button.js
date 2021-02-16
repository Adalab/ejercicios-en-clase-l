import React from 'react';

class Button extends React.Component {
  // en todos los componentes de clases siempre ponemos constructor (props)
  constructor(props) {
    // en todos los componentes de clases siempre ponemos super(props)
    super(props);
  }

  render() {
    // cuando trabajamos con props siempre las consoleamos al principio del render
    console.log('Props de este componente', this.props);

    // render: retorno el código HTML o JSX que quiero que React pinte en la página
    return (
      <input
        // dentro de una etiqueta puedo componer comentarios con //
        // dentro de las llaves puedo meter código JS, por eso puedo interpolar
        type="button"
        className={`form__btn ${this.props.btnClass}`}
        // el valor de value lo cojo de las props que me pasa mi madre App
        value={this.props.btnText}
      />
    );
  }
}

export default Button;
