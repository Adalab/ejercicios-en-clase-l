import React from 'react';

const Input = props => {
  const handleInput = ev => {
    // subo los datos hacia arriba con lifting
    props.handleInput(props.name, props.value);

    // aqui tengo acceso a las props y por ello a props.name y props.value
    // la línea anterior sería igual que:
    // props.handleInput(ev.target.name, ev.target.value);
    // porque ev.target.name es lo mismo que props.name y ev.target.value es lo mismo que props.value

    // en inputs de tipo radio el value nunca cambia
    // en inputs de tipo radio lo que cambia es la propiedad checked de true a false

    // en inputs de tipo radio necesito trabajar con el name y no con el id ¿sabrías decir por qué?
  };

  return (
    <div>
      <label htmlFor={props.id}>{props.labelText}</label>
      <input
        className="form__input-text"
        type="radio"
        id={props.id}
        name={props.name}
        onChange={handleInput}
      />
    </div>
  );
};

export default Input;
