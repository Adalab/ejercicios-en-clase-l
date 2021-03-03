import React from 'react';
import { Link } from 'react-router-dom';

const User = props => {
  const getGender = () => {
    if (props.user.gender === 'female') {
      return 'Mujer';
    } else if (props.user.gender === 'male') {
      return 'Hombre';
    } else {
      return 'No binario';
    }
  };

  return (
    
      <Link to={`/user/${props.user.id}`}>
        <img className="card__img" src={props.user.image} alt={`Foto de ${props.user.name}`} title={`Foto de ${props.user.name}`} />
        <h4 className="card__title">{props.user.name}</h4>
        <p className="card__description">
          {props.user.city} / {getGender()}
        </p>
      </Link>
  );
};

export default User;