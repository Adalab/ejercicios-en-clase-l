import React from 'react';

const Input = props => {
  const handleInput = ev => {
    // subo los datos hacia arriba con lifting
    props.handleInput(props.id, ev.target.value);

    // aqui tengo acceso a las props y por ello a props.id
    // la línea anterior sería igual que:
    // props.handleInput(ev.target.id, ev.target.value);
    // porque ev.target.id es lo mismo que props.id

    // en inputs de tipo text puedo trabajar con el name y el id ¿sabrías decir por qué?
  };

  return (
    <div>
      <label htmlFor={props.id}>{props.labelText}</label>
      <input
        className="form__input-text"
        type="text"
        id={props.id}
        name={props.id}
        onChange={handleInput}
      />
    </div>
  );
};

export default Input;
