import React, { useState } from 'react';
import Preview from './Preview';
import ButtonReset from './ButtonReset';
import Form from './Form';

const App = () => {
  const [email, setEmail] = useState('mari@asfasfasd.com');
  const [userType, setUserType] = useState('unselected');

  const handleEmail = value => {
    setEmail(value);
  };

  const handleUserType = value => {
    setUserType(value);
  };

  const handleReset = () => {
    setEmail('');
    setUserType('user');
  };

  const handleInput = (inputKey, inputValue) => {
    if (inputKey === 'email') {
      setEmail(inputValue);
    } else if (inputKey === 'userType') {
      setUserType(inputValue);
    }
  };

  return (
    <div>
      <h1>Tutoría con todo</h1>
      <Form
        email={email}
        userType={userType}
        handleReset={handleReset}
        handleEmail={handleEmail}
        handleUserType={handleUserType}
      />
      {/* <form>
        Viejo:
        <label>
          Email
          <input className="form__input-text" type="text" value={email} onChange={handleEmail} />
        </label>
        <label htmlFor="userType">
          Tipo de usuaria
          <select className="form__input-text" value={userType} onChange={handleUserType}>
            <option value="unselected">Seleciona tu tipo de usuaria</option>
            <option value="user">Usuaria</option>
            <option value="admin">Administrador</option>
          </select>
        </label>
        <ButtonReset handleReset={handleReset} />
      </form> */}

      <Preview email={email} userType={userType} />
    </div>
  );
};

export default App;
