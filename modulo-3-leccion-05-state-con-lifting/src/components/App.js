import React from 'react';
import Form from './Form';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleInputEmail = this.handleInputEmail.bind(this);
    this.handleInput = this.handleInput.bind(this);
    // así inicializamos el estado
    this.state = {
      email: '',
      name: '',
      password: ''
    };
  }

  // este método solo nos vale para actualizar un input y una propiedad del estado: el email
  handleInputEmail(emailValue) {
    // this.state siempre recibe un objeto
    this.setState({
      email: emailValue
    });
  }

  // este método solo nos vale para actualizar cualquier input
  // y su correspondiente propiedad del estado: name y password
  handleInput(inputName, inputValue) {
    // this.state siempre recibe un objeto
    this.setState({
      [inputName]: inputValue
    });
  }

  render() {
    // es bueno pintar el estado en la primera línea del render
    console.log('El estado es', this.state);
    return (
      <div>
        <h1>El estado en React con lifting</h1>
        <div className="col2">
          <Form handleInputEmail={this.handleInputEmail} handleInput={this.handleInput} />
          <div className="border--medium">
            {/* así pintamos un campo del estado */}
            <p>El email de la usuaria es: {this.state.email}</p>
            <p>El nombre de la usuaria es: {this.state.name}</p>
            <p>La contraseña de la usuaria es: {this.state.password}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
