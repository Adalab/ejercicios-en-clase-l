import React from 'react';
import Abajo from "./Abajo";
import PropTypes from 'prop-types';

class Preview extends React.Component {
  render() {
    console.log("Preview props", this.props);
    return (
      <section>
        <Abajo texto={this.props.texto}></Abajo>
        <pre>{this.props.texto}</pre>
      </section>
    );
  }
}

Preview.propTypes = {

};

export default Preview;