import React, { useState } from 'react';

const Login = props => {
  // state

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // events

  const handleEmail = ev => {
    setEmail(ev.target.value);
  };

  const handlePassword = ev => {
    setPassword(ev.target.value);
  };

  const handleSubmit = ev => {
    ev.preventDefault();
    props.handleLogin({
      email: email,
      password: password
    });
  };

  // render

  return (
    <section className="login">
      <form className="login__form" onSubmit={handleSubmit}>
        <h3 className="login__title">Identifícate:</h3>
        <label htmlFor="email">Email:</label>
        <input
          className="login__input"
          id="email"
          type="text"
          value={email}
          onChange={handleEmail}
        />
        <label htmlFor="password">Contraseña:</label>
        <input
          className="login__input"
          id="password"
          type="password"
          value={password}
          onChange={handlePassword}
        />
        <button className="login__btn">Identifícate</button>
        <span className="login__error">{props.loginError.message}</span>
      </form>
    </section>
  );
};

export default Login;
