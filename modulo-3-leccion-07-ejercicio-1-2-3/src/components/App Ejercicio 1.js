import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      language: ''
    };
    this.handleName = this.handleName.bind(this);
    this.handleLanguage = this.handleLanguage.bind(this);
  }

  handleName(ev) {
    this.setState({
      name: ev.target.value
    });
  }

  handleLanguage(ev) {
    this.setState({
      language: ev.target.value
    });
  }

  renderLanguage() {
    if (this.state.language === 'es') {
      return 'Castellano';
    } else if (this.state.language === 'en') {
      return 'Inglés';
    } else if (this.state.language === 'pt') {
      return 'Portugués';
    }
  }

  render() {
    console.log(this.state);

    return (
      <div>
        <h1>Formularios en React: Ejercicio 1</h1>
        <form className="border--medium">
          <label className="display-block">
            Nombre
            <input type="text" name="name" onChange={this.handleName} />
          </label>
          <label className="display-block">
            Descripción
            <textarea />
          </label>
          <label className="display-block">
            Idioma
            <select onChange={this.handleLanguage}>
              <option value="es">Castellano</option>
              <option value="en">Inglés</option>
              <option value="pt">Portugués</option>
            </select>
          </label>
        </form>
        <div className="border--medium">
          <p>El nombre es: {this.state.name}</p>
          <p>El descripción es: {this.state.description}</p>
          <p>El idioma es: {this.renderLanguage()}</p>
        </div>
      </div>
    );
  }
}

export default App;
