import React from 'react';
import SpradArray from './SpreadArray';
import SpradObject from './SpreadObject';
import SpradParams from './SpreadParams';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Aprendiendo Spread:</h1>
        {/* <SpradObject /> */}
        {/* <SpradArray /> */}
        <SpradParams />
      </div>
    );
  }
}

export default App;
