import React from 'react';
import Help from './Help';
import '../stylesheets/App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Trabajando con props.childre</h1>
        <form>
          {/* email */}
          <label className="form__label" htmlFor="email">
            Email:
          </label>
          <input name="email" id="email" className="form__input-text display-block" />

          {/* password */}
          <label className="form__label" htmlFor="password">
            Contraseña:
          </label>
          <input name="password" id="password" className="form__input-text display-block" />
          <Help title="Ayuda sobre la contraseña">
            Debe tener al menos 8 caracteres, mayúsculas, minúsculas y un caracter especial
          </Help>

          {/* nickname */}
          <label className="form__label" htmlFor="nickname">
            Nombre de usuario:
          </label>
          <input name="nickname" id="nickname" className="form__input-text display-block" />
          <Help title="Ayuda sobre la el nombre de usuario">
            No puedes elegir un nombre de usuario que ya exista en nuestra web
          </Help>

          <br />

          <Help title="Ayuda sobre la el nombre de usuario">
            <h1>Título: {this.props.title}</h1>
            No puedes elegir un nombre de usuario que ya exista en nuestra web
            <Help title="Ayuda sobre la el nombre de usuario">
              No puedes elegir un nombre de usuario que ya exista en nuestra web
            </Help>
          </Help>
        </form>
      </div>
    );
  }
}

export default App;
