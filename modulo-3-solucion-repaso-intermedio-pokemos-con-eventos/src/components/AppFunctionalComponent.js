import React, { useState } from 'react';
import data from '../data/data.json';
import PokemonList from './PokeList';

const App = () => {
  const [pokemons] = useState(data);
  const [favs, setFavs] = useState([]);

  const handlePokemon = clickedId => {
    console.log(clickedId);
    const favPokemonIndex = favs.findIndex(fav => {
      return fav.id === clickedId;
    });

    if (favPokemonIndex === -1) {
      const pokemonClicked = pokemons.find(pokemon => {
        return pokemon.id === clickedId;
      });
      favs.push(pokemonClicked);
      setFavs([...favs]);
    } else {
      favs.splice(favPokemonIndex, 1);
      setFavs([...favs]);
    }
  };

  return (
    <>
      <header>
        <h1>Mi lista de Pokemons (en componente de clase con eventos)</h1>
      </header>

      <main>
        <section>
          <PokemonList pokemons={pokemons} handlePokemon={handlePokemon} />
        </section>

        <section>
          <h2>Pokemon de la semana</h2>
          <PokemonList pokemons={favs} handlePokemon={handlePokemon} />
        </section>
      </main>
    </>
  );
};

export default App;
