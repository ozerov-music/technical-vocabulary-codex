import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to the Technical Vocabulary Codex.
        </p>
        <a
          className="App-link"
          href="https://github.com/ozerov-music/technical-vocabulary-codex/wiki/Practice-Method"
          target="_blank"
          rel="noopener noreferrer"
        >
          Start Practicing
        </a>
      </header>
    </div>
  );
}

export default App;
