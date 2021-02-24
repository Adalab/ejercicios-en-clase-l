import React from 'react';
import data from '../data/data.json';
import PokemonList from './PokeList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: data,
      favs: []
    };
    this.handlePokemon = this.handlePokemon.bind(this);
  }

  handlePokemon(clickedId) {
    console.log(clickedId);
    const favPokemonIndex = this.state.favs.findIndex(fav => {
      return fav.id === clickedId;
    });

    if (favPokemonIndex === -1) {
      this.setState(prevState => {
        const pokemonClicked = this.state.pokemons.find(pokemon => {
          return pokemon.id === clickedId;
        });
        prevState.favs.push(pokemonClicked);
        return { favs: prevState.favs };
      });
    } else {
      this.setState(prevState => {
        prevState.favs.splice(favPokemonIndex, 1);
        return { favs: prevState.favs };
      });
    }
  }

  render() {
    console.log(this.state.favs);
    return (
      <>
        <header>
          <h1>Mi lista de Pokemons (en componente de clase con eventos)</h1>
        </header>

        <main>
          <section>
            <PokemonList pokemons={this.state.pokemons} handlePokemon={this.handlePokemon} />
          </section>

          <section>
            <h2>Pokemon de la semana</h2>
            <PokemonList pokemons={this.state.favs} handlePokemon={this.handlePokemon} />
          </section>
        </main>
      </>
    );
  }
}

export default App;
