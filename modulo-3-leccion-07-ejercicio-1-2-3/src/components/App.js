// ejercicio 3

import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      language: 'es',
      genres: []
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleGenres = this.handleGenres.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleForm = this.handleForm.bind(this);
  }

  handleInput(ev) {
    // const obj = {}
    // const key = ev.target.name
    // obj.description
    // obj[key]
    // const obj = {
    //   name: ev.target.value
    // }

    // cojo el nombre de la propiedad del estado que quiero modificar
    const key = ev.target.name;
    // creo un objeto con el nombre de la propiedad del estado que quiero modificar y el valor con el que quiero modificarlo
    const newState = {
      [key]: ev.target.value
    };
    // guardo el objeto en el estado
    this.setState(newState);
  }

  handleGenres(ev) {
    console.log(ev.target.name, ev.target.value, ev.target.checked);

    if (ev.target.checked) {
      // si el checkbox es activo, lo meto en el array de genres
      // utilizo prevState porque añadir algo a un array depende de los valores anteriores del array
      this.setState(prevState => {
        // añado el valor (que es lo que me interesa guardar) al array
        prevState.genres.push(ev.target.value);
        // retorno el objeto que quiero guardar en el estado
        return {
          genres: prevState.genres
        };
      });
    } else {
      // si el checkbox no es activo, lo saco del array de genres
      // utilizo prevState porque quitar algo a un array depende de los valores anteriores del array
      this.setState(prevState => {
        // una forma de borrar un elemento de un array es quedarme con el resto de elementos
        // creo el nuevo array genres con todos los géneros excepto el que se ha desmarcado en el checkbox
        const genres = prevState.genres.filter(genre => genre !== ev.target.value);
        // retorno el objeto que quiero guardar en el estado
        return {
          genres: genres
        };
      });
    }
  }

  handleReset() {
    // con reset vacío el estado, o lo pongo con los mismos datos del estado inicial que he puesto en el constructor
    this.setState({
      name: '',
      description: '',
      language: 'es',
      genres: []
    });
  }

  renderLanguage() {
    // traduzco los lenguajes que tengo en el estado a lo que quiere ver la usuaria
    if (this.state.language === 'es') {
      return 'Castellano';
    } else if (this.state.language === 'en') {
      return 'Inglés';
    } else if (this.state.language === 'pt') {
      return 'Portugués';
    }
  }

  handleForm(ev) {
    ev.preventDefault();
  }

  render() {
    console.log(this.state);

    return (
      <div>
        <h1>Formularios en React: Ejercicio 3</h1>
        <form className="border--medium" onSubmit={this.handleForm}>
          <label className="display-block">
            Nombre
            <input
              className="form__input-text display-block"
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleInput}
            />
          </label>

          <label className="display-block">
            Descripción
            <textarea
              className="form__input-text display-block"
              name="description"
              value={this.state.description}
              onChange={this.handleInput}
            />
          </label>

          <label className="display-block">
            Idioma
            <select
              className="form__input-text display-block"
              name="language"
              value={this.state.language}
              onChange={this.handleInput}
            >
              <option value="es">Castellano</option>
              <option value="en">Inglés</option>
              <option value="pt">Portugués</option>
            </select>
          </label>

          <label>
            Terror
            <input
              type="checkbox"
              name="genres"
              value="horror"
              checked={this.state.genres.includes('horror')}
              // checked debe ser un booleano
              // includes me devuelve un booleano indicando si horror está dentro o no del this.state.genres
              // por eso me viene fenomeal
              onChange={this.handleGenres}
            />
          </label>

          <label>
            Drama
            <input
              type="checkbox"
              name="genres"
              value="drama"
              checked={this.state.genres.includes('drama')}
              // checked debe ser un booleano
              // includes me devuelve un booleano indicando si drama está dentro o no del this.state.genres
              // por eso me viene fenomeal
              onChange={this.handleGenres}
            />
          </label>

          <label>
            Comedia
            <input
              type="checkbox"
              name="genres"
              value="comedy"
              // checked debe ser un booleano
              // si no queremos usar includes podríamos usar indexOf, que me devuelve -1 si no está dentro del array o el índice del elemento si sí está dentro del array
              // por ello podemos poner que si es mayor o igual de 0, está en el array, y eso me devuelve true, que es lo que quiero pasar a checked
              checked={this.state.genres.indexOf('comedy') >= 0}
              onChange={this.handleGenres}
            />
          </label>

          <button className="form__btn display-block" onClick={this.handleReset}>
            Reset
          </button>
        </form>

        <div className="border--medium">
          <p>El nombre es: {this.state.name}</p>
          <p>El descripción es: {this.state.description}</p>
          <p>El idioma es: {this.renderLanguage()}</p>
          <p>El género es: {this.state.genres.join(', ')}</p>
        </div>
      </div>
    );
  }
}

export default App;
