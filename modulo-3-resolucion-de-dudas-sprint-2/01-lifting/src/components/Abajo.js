import React from 'react';
import PropTypes from 'prop-types';

class Abajo extends React.Component {
  render() {
    console.log("Abajo.props", this.props);
    const compStyle = {
      border: "solid 5px white"
    };
  
    return (
      <div style={compStyle}>
        <h2>Abajo</h2>
        <p>{this.props.texto}</p>
      </div>
    );
  }
}

Abajo.propTypes = {

};

export default Abajo;