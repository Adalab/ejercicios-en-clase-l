import React from 'react';

const Preview = props => {
  const colorStyle = {
    color: props.color
  };

  return (
    <div className="border--medium">
      <h2>Preview</h2>
      <p>Tu email es: {props.email}</p>
      <p>Tu nombre es: {props.name}</p>
      <p>
        Tu color es: <span style={colorStyle}>{props.color}</span>
      </p>
      <button className="form__btn" onClick={props.handleReset}>
        Reset
      </button>
    </div>
  );
};

export default Preview;
