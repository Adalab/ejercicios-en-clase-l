import React from 'react';
import Madre from './Madre';

class Abuela extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const bebida = {
      cocacola: 1,
      leche: 2
    };
    return (
      <div className="border--medium">
        <h1 className="mb-1">React props: pasando datos desde arriba hacia abajo:</h1>
        <h2 className="mb-1 ml-1">Soy una abuela</h2>
        <Madre comida="Macarrones" bebida={bebida} />
      </div>
    );
  }
}

export default Abuela;

// esto es un ejemplo de cómo se comunicarían los componentes si fueran funciones

// function fAbuela() {
//   fMadre('lentejas');
// }
// function fMadre(comida) {
//   fNieta(comida);
// }
// function fNieta(comida) {
//   console.log('Me como unas' + comida);
// }
