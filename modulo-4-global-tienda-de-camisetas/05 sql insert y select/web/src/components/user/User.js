import React from 'react';
import Login from './Login';
import Profile from './Profile';
import SignUp from './SignUp';

const User = props => {
  return props.isUserLogged ? (
    <Profile handleLogout={props.handleLogout} />
  ) : (
    <>
      <SignUp signUpError={props.signUpError} handleSignUp={props.handleSignUp} />
      <Login loginError={props.loginError} handleLogin={props.handleLogin} />
    </>
  );
};

export default User;
