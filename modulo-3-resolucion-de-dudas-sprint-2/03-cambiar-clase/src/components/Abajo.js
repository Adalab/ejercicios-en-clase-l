import React from 'react';
import PropTypes from 'prop-types';

class Abajo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      classLocalHidden: ""
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    //this.state.classLocalHidden = " hidden";
    /* this.setState({
      classLocalHidden = " hidden"
    }); */
    this.setState( (prevState,props) =>
      {
        if( prevState.classLocalHidden === "") {
          return {
            classLocalHidden: " hidden"
          };
        }
        else {
          return {
            classLocalHidden: ""
          };
        }
     }
    );
  }

  render() {
    console.log("Abajo.props", this.props);
    const compStyle = {
      border: "solid 5px white"
    };
  
    

    return (
      <div className={this.props.claseAbajo + this.state.classLocalHidden} style={compStyle} onClick={this.handleClick}>
        <h2>Abajo</h2>
        <p>{this.props.texto}</p>
      </div>
    );
  }
}

Abajo.propTypes = {

};

export default Abajo;