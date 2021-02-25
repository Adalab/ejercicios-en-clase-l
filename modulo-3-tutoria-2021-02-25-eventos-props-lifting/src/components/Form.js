import React from 'react';
import ButtonReset from './ButtonReset';

const Form = props => {
  const handleForm = ev => {
    ev.preventDefault();
  };

  const handleEmail = ev => {
    props.handleEmail(ev.target.value);
  };

  const handleUserType = ev => {
    props.handleUserType(ev.target.value);
  };

  const handleInput = ev => {
    props.handleInput(ev.target.name, ev.target.value);
  };

  return (
    <form onSubmit={handleForm}>
      Nuevo:
      <label>
        Email
        <input
          className="form__input-text"
          type="text"
          name="email"
          value={props.email}
          onChange={handleEmail}
        />
      </label>
      <label htmlFor="userType">
        Tipo de usuaria
        <select
          className="form__input-text"
          name="userType"
          value={props.userType}
          onChange={handleUserType}
        >
          <option value="unselected">Seleciona tu tipo de usuaria</option>
          <option value="user">Usuaria</option>
          <option value="admin">Administrador</option>
        </select>
      </label>
      <ButtonReset handleReset={props.handleReset} />
    </form>
  );
};

export default Form;
