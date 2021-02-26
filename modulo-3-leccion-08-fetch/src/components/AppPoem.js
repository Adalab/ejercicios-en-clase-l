import React from 'react';
import getDataFromApi from '../services/api';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [],
      filterText: '',
      filterLanguage: '',
      isLoading: true
    };

    getDataFromApi().then(data => {
      console.log(data);
      this.setState({
        series: data,
        isLoading: false
      });
    });

    this.handleFilterText = this.handleFilterText.bind(this);
    this.handleFilterLanguage = this.handleFilterLanguage.bind(this);
    this.filterByText = this.filterByText.bind(this);
    this.filterByLanguage = this.filterByLanguage.bind(this);
    this.renderSerie = this.renderSerie.bind(this);
  }

  handleFilterText(ev) {
    this.setState({
      filterText: ev.target.value
    });
  }

  handleFilterLanguage(ev) {
    this.setState({
      filterLanguage: ev.target.value
    });
  }

  // tengo que hacer el bind de este método
  filterByText(serie) {
    return serie.show.name.toLowerCase().includes(this.state.filterText.toLowerCase());
  }

  // tengo que hacer el bind de este método
  filterByLanguage(serie) {
    return serie.show.language.toLowerCase().includes(this.state.filterLanguage.toLowerCase());
  }

  // tengo que hacer el bind de este método
  renderSerie(serie) {
    return <li key={serie.show.id}>Nombre: {serie.show.name}</li>;
  }

  renderSeriesList() {
    // si quieres ver este método como si fuera un poema abre AppPoem.js
    return this.state.series
      .filter(this.filterByText)
      .filter(this.filterByLanguage)
      .map(this.renderSerie);
  }

  render() {
    return (
      <div>
        <h1>Fetch</h1>
        <p>{this.state.isLoading ? 'Cargando..' : ''}</p>

        <p>
          Explicación: estamos llamando al API por la serie "friends" ya que esta devuelve series en
          English, Japanese, Korean... y así sí podemos filtrar por idioma.
        </p>

        <input type="text" onChange={this.handleFilterText} placeholder="filter by name" />
        <input type="text" onChange={this.handleFilterLanguage} placeholder="filter by language" />

        <ul>{this.renderSeriesList()}</ul>
      </div>
    );
  }
}

export default App;
