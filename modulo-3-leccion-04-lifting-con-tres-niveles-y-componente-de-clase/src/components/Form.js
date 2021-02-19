import React from 'react';
import Input from './Input';

class Form extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form className="border--medium">
        <p>Este form que es el componente intermedio</p>
        <Input
          labelText={this.props.labelText}
          handleInputWithLifting={this.props.handleInputWithLifting}
        />
      </form>
    );
  }
}

export default Form;
