import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Monsters Rolodex
        </p>
        <a
          className="App-link"
          href="https://monstaersrolodex.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Monsters Rolodex App
        </a>
      </header>
    </div>
  );
}

export default App;
