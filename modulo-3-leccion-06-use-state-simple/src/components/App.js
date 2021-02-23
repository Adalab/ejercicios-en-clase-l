import React, { useState } from 'react';

const App = () => {
  // con esto declaro la constante email que la voy a utilizar como variable del estado, la función setEmail y el valor inicial que aquí es un string vacío
  const [email, setEmail] = useState('asf@asfd.com');
  const [address, setAddress] = useState({
    country: 'Spain',
    city: 'Albacete'
  });
  console.log('El estado de email es:', email);
  console.log('El estado de address es:', address);

  // comparación con componentes de clase: esto equivale a poner en el constructor this.state = { email: '' }

  const handleEmail = ev => {
    // ejecuto setEmail cada vez que quiera cambiar el email
    setEmail(ev.target.value);

    // setEmail es una función que me ha dado React, por ello React se entera de que he cambiado el email y re-renderiza el componente

    // esto equivale a this.setState({ email: ev.target.value })
  };

  const handleCity = ev => {
    console.log('Me han cambiado');
    // opción 1: la segunda mejor
    // address.city = ev.target.value;
    // setAddress({ ...address });

    // opción 2: la peor porque nos obliga a escribir country cuando no queremos modificarla
    setAddress({
      country: address.country,
      city: ev.target.value
    });

    // opción 3: la mejor de las tres
    // setAddress({
    //   ...address,
    //   city: ev.target.value,
    // });
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
        <label className="form__label" htmlFor="city">
          Escribe tu ciudad
        </label>
        {/* el manejo de eventos no cambia */}
        <input className="form__input-text" type="text" id="city" onChange={handleCity} />
      </form>
      {/* como email es una constante normal, se pinta así */}
      <p className="border--medium">Tu email es: {email}</p>
      <p className="border--medium">Tu país es: {address.country}</p>
      <p className="border--medium">Tu ciudad es: {address.city}</p>
    </div>
  );
};

export default App;
