import React from 'react';

const AppNieta = props => {
  const handleInput = ev => {
    // console.log('ha cambiado', ev.target.value);
    props.appNietaHandleInput(ev.target.name, ev.target.value);
  };

  return (
    <div className="border--medium">
      <h2>Nieta</h2>
      <form>
        <label>
          Email:
          <input
            className="form__input-text"
            type="text"
            name="email"
            value={props.email}
            onChange={handleInput}
          />
        </label>
      </form>
    </div>
  );
};

export default AppNieta;
