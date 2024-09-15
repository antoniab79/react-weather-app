import React from 'react';
import Weather from './Weather';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
      <Weather defaultCity ="London" />
        <footer>  
        This code is hosted on GitHub and is {" "}
          <a
            className="App-link"
            href="https://github.com/antoniab79/react-weather-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            open sourced
          </a>
          ; {" "}coded by{" "}
          <a
            className="App-link"
            href="https://www.shecodes.io/graduates/109902-antonia-bezinovic"
            target="_blank"
            rel="noopener noreferrer"
          >
            Antonia Bezinovic
          </a>
          </footer>
          </div>
    </div>
  );
}

export default App;
