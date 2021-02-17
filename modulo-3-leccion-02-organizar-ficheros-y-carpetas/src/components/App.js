import logo from '../images/logo.svg';
import '../stylesheets/App.css';
import Button from './Button';

function App() {
  return (
    <div className="App">
      {/* si yo fuera tú, limpiaría este div y dejaría solo un hola mundo */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button buttonText="Púlsame!!!" active={true} />
      </header>
    </div>
  );
}

export default App;
