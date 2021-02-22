import React from 'react';
import Collapsable from './Collapsable';
import Form from './Form';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Ejercicio de collapsables</h1>

        <Collapsable title="Diseña" name="">
          <h3>Diseña aquí</h3>
          <p>Un párrafo</p>
        </Collapsable>

        <Collapsable title="Rellena">
          <Form />
          <Form />
          <Form />
        </Collapsable>

        <Collapsable title="Comparte">
          Pincha aquí para compartir
        </Collapsable>
      </div>
    );
  }
}

export default App;
