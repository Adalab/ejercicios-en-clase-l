import React from 'react';
import AppNieta from './AppNieta';

const AppMadre = props => {
  return (
    <div className="border--medium">
      <h2>Madre: {props.email}</h2>
      <AppNieta email={props.email} appNietaHandleInput={props.appMadreHandleInput} />
    </div>
  );
};

export default AppMadre;
