import React from 'react';
import api from '../services/api';

// este componente muestra dónde es un buen lugar para hacer un fetch

class Series extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      series: [],
      searchText: 'Girls'
    };
    this.handleBtn = this.handleBtn.bind(this);
    console.log('Se ejecuta el constructor()');
  }

  componentDidMount() {
    console.log('Se ejecuta el componentDidMount()');

    // si queremos llamar al servidor al arrancar el componente lo hacemos en componentDidMount
    api.getDataFromApi(this.state.searchText).then(series => {
      // cuando el servidor responde guardo los datos en el estado para que se repinten
      this.setState({
        series: series
      });
    });
  }

  componentWillUnmount() {
    console.log('Se ejecuta el componentWillUnmount()');
  }

  shouldComponentUpdate() {
    console.log('Se ejecuta el shouldComponentUpdate()');
    return true;
  }

  componentDidUpdate() {
    console.log('Se ejecuta el componentDidUpdate()');
  }

  handleBtn(ev) {
    this.setState({ searchText: ev.target.value });

    // si queremos llamar al servidor tras una acción de la usuaria, lo hacemos en el manejador del evento
    api.getDataFromApi(ev.target.value).then(series => {
      // cuando el servidor responde guardo los datos en el estado para que se repinten
      this.setState({
        series: series
      });
    });
  }

  renderSeries() {
    return this.state.series.map(serie => {
      return (
        <li key={serie.id} className="serie">
          <img className="image" src={serie.imageSrc} />
          <h2>{serie.name}</h2>
        </li>
      );
    });
  }

  render() {
    console.log('Se ejecuta el render()');
    return (
      <div className="border--medium">
        <h2>Componente Series</h2>
        <form>
          <label>Busca una serie</label>
          <input
            className="form__input-text"
            type="text"
            value={this.state.searchText}
            onChange={this.handleBtn}
          />
        </form>
        <ul>{this.renderSeries()}</ul>
      </div>
    );
  }
}

export default Series;
