import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      language: ''
    };
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(ev) {
    console.log(ev.target.name, ev.target.value);
    // const obj = {}
    // const key = ev.target.name
    // obj.description
    // obj[key]
    // const obj = {
    //   name: ev.target.value
    // }
    const key = ev.target.name;
    const newState = {
      [key]: ev.target.value
    };
    this.setState(newState);
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
        <h1>Formularios en React: Ejercicio 2</h1>
        <form className="border--medium">
          <label className="display-block">
            Nombre
            <input type="text" name="name" value={this.state.name} onChange={this.handleInput} />
          </label>
          <label className="display-block">
            Descripción
            <textarea
              name="description"
              value={this.state.description}
              onChange={this.handleInput}
            />
          </label>
          <label className="display-block">
            Idioma
            <select name="language" value={this.state.language} onChange={this.handleInput}>
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
