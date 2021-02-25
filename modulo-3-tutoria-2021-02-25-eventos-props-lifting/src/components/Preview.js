import React from 'react';

const Preview = props => {
  return (
    <div className="border--medium">
      <p>Email: {props.email || 'usuaria@correo.com'}</p>
      <p>
        Email pulsable:
        <a href={props.email === '' ? '#' : `mailto:${props.email}`}>
          {props.email || 'usuaria@correo.com'}
        </a>
      </p>
      <p>Tipo de usuaria: {props.userType}</p>
    </div>
  );
};

export default Preview;
