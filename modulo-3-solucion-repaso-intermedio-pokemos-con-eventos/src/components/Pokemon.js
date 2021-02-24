import React from 'react';
import '../stylesheets/Pokemon.scss';

const Pokemon = props => {
  // events

  const handleClick = ev => {
    // console.log(props.id);
    // console.log(ev.currentTarget.id);
    props.handlePokemon(props.id);
  };

  // render

  const typesList = props.types.map((type, index) => {
    return (
      <li key={index} className={`poke__type poke__type--${type}`}>
        {type}
      </li>
    );
  });

  return (
    <article className="card" id={props.id} onClick={handleClick}>
      <img className="card__img" src={props.url} alt={'Imagen de ' + props.name} />
      <h3 className="card__title">{props.name}</h3>
      <ul className="card__description">{typesList}</ul>
    </article>
  );
};

export default Pokemon;

// [1, 2, 3].join(', ') más info aquí https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/join
