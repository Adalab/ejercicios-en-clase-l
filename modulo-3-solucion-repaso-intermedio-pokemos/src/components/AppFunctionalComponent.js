import React, { useState } from 'react';
import data from '../data/data.json';
import PokemonList from './PokeList';
import Pokemon from './Pokemon';

const App = () => {
  const [pokemons] = useState(data);

  return (
    <>
      <header>
        <h1>Mi lista de Pokemons (en componente funcional)</h1>
      </header>
      <main>
        <section>
          <PokemonList pokemons={pokemons} />
        </section>
        <section>
          <h2>Pokemon de la semana</h2>
          <Pokemon
            name="bulbasaur"
            url="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
            types={['poison', 'grass']}
          />
        </section>
      </main>
    </>
  );
};

export default App;
