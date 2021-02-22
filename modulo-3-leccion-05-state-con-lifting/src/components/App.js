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
  // este método es reutilizable
  handleInput(inputKey, inputValue) {
    console.log(inputKey, inputValue);
    // utilizar if / else no nos gusta porque tendríamos que poner tantos if como inputs quisiera gestionar
    // if (inputKey === 'name') {
    //   this.setState({
    //     name: inputValue
    //   });
    // } else if (inputKey === 'password') {
    //   this.setState({
    //     password: inputValue
    //   });
    // }

    // la sintaxis de js me permite guardar en una constante o variable un string y utilizar ese string como key o nombre de la propiedad que quiero modificar

    // las siguientes dos líneas crean el objeto obj = { password: 'asdfasd' };
    // const inputKey = 'password';
    // const obj = { [inputKey]: 'asdfasd' };

    // una vez que tengo el obj = { password: 'asdfasd' }; lo guardo en el estado con:
    // this.setState(obj);

    // todo lo anterior se resume en una sola línea con:
    this.setState({ [inputKey]: inputValue });
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
