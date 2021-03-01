import React, { useState, useEffects, useEffect } from 'react';
import api from '../services/api';

// este componente muestra dónde es un buen lugar para hacer un fetch

const Series = () => {
  const [series, setSeries] = useState([]);
  const [searchText, setSearchText] = useState('Girls');

  useEffect(() => {
    api.getDataFromApi(searchText).then(series => {
      // cuando el servidor responde guardo los datos en el estado para que se repinten
      setSeries(series);
    });
  }, []);

  const handleBtn = ev => {
    setSearchText(ev.target.value);

    // si queremos llamar al servidor tras una acción de la usuaria, lo hacemos en el manejador del evento
    api.getDataFromApi(ev.target.value).then(series => {
      // cuando el servidor responde guardo los datos en el estado para que se repinten
      setSeries(series);
    });
  };

  const renderSeries = () => {
    return series.map(serie => {
      return (
        <li key={serie.id} className="serie">
          <img className="image" src={serie.imageSrc} />
          <h2>{serie.name}</h2>
        </li>
      );
    });
  };

  console.log('Se ejecuta el render()');
  return (
    <div className="border--medium">
      <h2>Componente Series</h2>
      <form>
        <label>Busca una serie</label>
        <input className="form__input-text" type="text" value={searchText} onChange={handleBtn} />
      </form>
      <ul>{renderSeries()}</ul>
    </div>
  );
};

export default Series;
