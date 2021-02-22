import React, { useState } from 'react';

const App = () => {
  // con esto declaro la constante email que la voy a utilizar como variable del estado, la función setEmail y el valor inicial que aquí es un string vacío
  const [email, setEmail] = useState('');
  // comparación con componentes de clase: esto equivale a poner en el constructor this.state = { email: '' }

  const handleEmail = ev => {
    // ejecuto setEmail cada vez que quiera cambiar el email
    setEmail(ev.target.value);

    // setEmail es una función que me ha dado React, por ello React se entera de que he cambiado el email y re-renderiza el componente

    // esto equivale a this.setState({ email: ev.target.value })
  };

  return (
    <div>
      <h1>React hooks: useState simple</h1>
      <form>
        <label className="form__label" htmlFor="email">
          Escribe tu email
        </label>
        {/* el manejo de eventos no cambia */}
        <input className="form__input-text" type="text" id="email" onChange={handleEmail} />
      </form>
      {/* como email es una constante normal, se pinta así */}
      <p className="border--medium">Tu email es: {email}</p>
    </div>
  );
};

export default App;
