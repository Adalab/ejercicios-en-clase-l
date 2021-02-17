import React from 'react';

class Nieta extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('Props que recibe la nieta', this.props);
    return (
      <div className="border--medium">
        <h3 className="mb-1 ml-1">Soy una nieta y me como unas {this.props.cena}</h3>
      </div>
    );
  }
}

export default Nieta;
