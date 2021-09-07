import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import {IEpisodeProps} from "../model/Episode";

function App() {
  const [episodesArray, setEpisodesArray] = React.useState<IEpisodeProps[]>([]);

  useEffect( () => {
      fetch("http://localhost:8000/episodes")
          .then((response) => response.json())
          .then((data) => {setEpisodesArray(data); console.log(data)})
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          {episodesArray.map((episode) => (
              <p>{episode.title}</p>
          )
          )}
      </header>
    </div>
  );
}

export default App;
