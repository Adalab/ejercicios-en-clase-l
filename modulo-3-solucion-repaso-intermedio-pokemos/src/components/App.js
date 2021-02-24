import React from 'react';
import data from '../data/data.json';
import PokemonList from './PokeList';
import Pokemon from './Pokemon';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: data
    };
  }

  render() {
    return (
      <>
        <header>
          <h1>Mi lista de Pokemons (en componente de clase)</h1>
        </header>

        <main>
          <section>
            <PokemonList pokemons={this.state.pokemons} />
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
  }
}

export default App;
