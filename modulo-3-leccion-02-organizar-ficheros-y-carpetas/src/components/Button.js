import React from 'react';

class Button extends React.Component {
  constructor(props) {
    super(props);
  }

  // si yo fuera tú y quisiera que este fuera mi proyecto base, quitaría los comentarios

  // render() {
  //   console.log(this.props);
  //   let activeClass;

  //   if (this.props.active === true) {
  //     activeClass = 'active';
  //   } else {
  //     activeClass = 'disable';
  //   }
  //   return <button className={activeClass}>{this.props.buttonText}</button>;
  // }

  render() {
    console.log(this.props);
    return (
      <button className={this.props.active === true ? 'active' : 'disable'}>
        {this.props.buttonText}
      </button>
    );
  }
}

export default Button;
