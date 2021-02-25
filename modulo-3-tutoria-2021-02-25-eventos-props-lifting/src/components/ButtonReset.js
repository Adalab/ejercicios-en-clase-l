import React from 'react';

const ButtonReset = props => {
  const handleReset = ev => {
    props.handleReset();
  };

  return (
    <button className="form__btn" onClick={handleReset}>
      Púlsa aquí para resetear
    </button>
  );
};

export default ButtonReset;
