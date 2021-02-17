import React from 'react';
import Nieta from './Nieta';

class Madre extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('Props que recibe la madre', this.props);
    return (
      <div className="border--medium">
        <h3 className="mb-1 ml-1">Soy una madre</h3>
        <Nieta cena={this.props.comida} vasosDeleche={this.props.bebida.leche} />
      </div>
    );
  }
}

export default Madre;
