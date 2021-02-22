import React from 'react';

const Form = () => {
  return (
    <form>
      <label className="form__label" htmlFor="email">
        Email:
      </label>
      <input className="form__input-text" type="email" id="email"/>
    </form>
  );
};

export default Form;
