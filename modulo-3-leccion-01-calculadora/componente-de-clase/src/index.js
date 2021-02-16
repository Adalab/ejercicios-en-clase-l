import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './stylesheets/index.scss';

// esto es común para componentes de clase y funcionales
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.querySelector('#root')
);
