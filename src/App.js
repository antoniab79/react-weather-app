import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <Weather defaultCity ="London" />
        <footer>  
        This project was coded by {" "}
        <a
            className="App-link"
            href="https://webleviathan.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Antonia Bezinovic{" "}
          </a>{" "}
          and is open-sourced on {" "}
          <a
            className="App-link"
            href="https://github.com/antoniab79/react-weather-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub {" "}
          </a>
          & {" "}hosted on {" "}
          <a
            className="App-link"
            href="https://antonias-weather-app.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Netlify
          </a>
          </footer>
          </div>
    </div>
  );
}