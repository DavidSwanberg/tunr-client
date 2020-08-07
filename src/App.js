import React, { useState, useEffect }from 'react';
import './App.css';
import axios from 'axios';
import apiUrl from './apiConfig';
import Header from './components/Header';
import Playlist from './components/Playlist';
import Favorites from './components/Favorites';
import NewSong from './components/NewSong';

function App() {
  const [songs, setSongs] = useState([]);
  //const [favs, setFavs] = useState([]);

  
    const makeAPICall = async () => {
      try {
        const response = await axios(apiUrl)
        setSongs(response.data)
      } catch (err) {
        console.error(err)
      }
    }

    useEffect(() => {
    makeAPICall()
  }, [])

  return (
    <div className="App">
      <Header/>
      <Playlist songs={songs} makeAPICall={makeAPICall}/>
      <Favorites songs={songs} />
      <NewSong makeAPICall={makeAPICall}/>
    </div>
  );
}

export default App;

