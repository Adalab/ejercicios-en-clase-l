import React, { useState } from 'react';
import '../stylesheets/index.scss';

// estos datos los tenemos aquí, pero lo normal sería obtenerlos de un API
const shows = [
  { id: 'id-1', name: 'Dexter' },
  { id: 'id-2', name: 'Lost' },
  { id: 'id-3', name: 'Homeland' }
];

const App = () => {
  const [favs, setFavs] = useState([]);

  // events

  const handleFav = ev => {
    // este código es el mismo que el de las series favoritas
    // este código es JS puro y duro, no tiene nada que ver con React
    const showClickedId = ev.target.id;
    const favIndex = favs.findIndex(fav => fav.id === showClickedId);
    if (favIndex === -1) {
      const showFound = shows.find(shows => shows.id === showClickedId);
      favs.push(showFound);
    } else {
      favs.splice(favIndex, 1);
    }

    // aquí volvemos a utilizar código de React
    // esta es la única línea importante del ejercicio en lo que se refiere a useState con arrays
    // para guardar un array en el estado siempre debemos usar spread de esta forma
    setFavs([...favs]);

    // si en vez de la línea anterior ponemos setFavs(favs); el estado sí se cambia pero React no se entera, así que no re-renderiza
  };

  // render

  const renderShows = () => {
    // pintar un listado
    return shows.map(show => {
      return (
        <li className="show cursor-pointer" key={show.id} id={show.id} onClick={handleFav}>
          {show.name}
        </li>
      );
    });
  };

  const renderFavs = () => {
    // pintar un listado
    return favs.map(fav => {
      return (
        <li className="show cursor-pointer" key={fav.id} id={fav.id} onClick={handleFav}>
          {fav.name}
        </li>
      );
    });
  };

  return (
    <div>
      <h1>React hooks: useState con arrays</h1>
      <div className="col2">
        {/* series */}
        <div className="border--medium">
          <h2>Series</h2>
          <ul className="pl-1">{renderShows()}</ul>
        </div>

        {/* favs */}
        <div className="border--medium">
          <h2>Favoritas</h2>
          <ul className="pl-1">{renderFavs()}</ul>
        </div>
      </div>
    </div>
  );
};

export default App;
