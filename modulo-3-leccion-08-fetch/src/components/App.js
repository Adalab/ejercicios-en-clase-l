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

  renderSeriesList() {
    return this.state.series
      .filter(serie => {
        return serie.show.name.includes(this.state.filterText);
      })
      .filter(serie => {
        return serie.show.language.includes(this.state.filterLanguage);
      })
      .map(serie => {
        return <li key={serie.show.id}>Nombre: {serie.show.name}</li>;
      });

    return this.state.series
      .filter(this.filterByName)
      .filter(this.filterByLanguage)
      .map(this.renderSerie);
  }

  render() {
    return (
      <div>
        <h1>Fetch</h1>
        <p>{this.state.isLoading ? 'Cargando..' : ''}</p>

        <input type="text" onChange={this.handleFilterText} placeholder="filter by name" />
        <input type="text" onChange={this.handleFilterLanguage} placeholder="filter by language" />

        <ul>{this.renderSeriesList()}</ul>
      </div>
    );
  }
}

export default App;
