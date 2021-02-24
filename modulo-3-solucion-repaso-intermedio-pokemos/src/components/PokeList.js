import React from 'react';
import Pokemon from './Pokemon';

const PokemonList = props => {
  const pokeList = props.pokemons.map(pokemon => {
    return (
      <li key={pokemon.id.toString()}>
        <Pokemon name={pokemon.name} url={pokemon.url} types={pokemon.types} />
      </li>
    );
  });

  return <ul className="cards">{pokeList}</ul>;
};

export default PokemonList;
