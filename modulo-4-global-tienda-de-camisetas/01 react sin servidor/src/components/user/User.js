import React from 'react';
import Login from './Login';
import Profile from './Profile';

const User = props => {
  return props.isUserLogged ? (
    <Profile handleLogout={props.handleLogout} />
  ) : (
    <Login loginError={props.loginError} handleLogin={props.handleLogin} />
  );
};

export default User;
