import React from 'react';
import apiUrl from '../apiConfig'
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Playlist = props => {

    console.log('font awesome', FontAwesomeIcon)


    const destroy = async (song) => {
        await axios({
          url: `${apiUrl}/${song}`,
          method: 'DELETE'
        })
        //window.location.reload();
        props.makeAPICall()
        console.log(song)
      }

      const handleFav = async (song) => {
        console.log("handleFav", !song.favorite);
        await axios({
          url: `${apiUrl}/${song.id}`,
          method: "PUT",
          data: {favorite: !song.favorite},
        })
        //window.location.reload();
        props.makeAPICall()
      };



    const playlistMap = props.songs.map( song => (
        <div key={song.id} className="song">
            <span className="title">{song.title}</span>
            <span className="artist">{song.artist}</span>
            <span className="time">{song.time}</span>
            <span className="controllers">
                {/* {song.favorite === false ? <span onClick={()=>handleFav(song)}>F  </span>
                : <span onClick={()=>handleFav(song)}>UN </span>}
                <span onClick={()=>destroy(song.id)}>X</span> */}
                {song.favorite === false ? <FontAwesomeIcon icon={["far", "heart"]} onClick={()=>handleFav(song)}/>
                : <FontAwesomeIcon icon={["fas", "heart"]} onClick={()=>handleFav(song)}/>}
                <span onClick={()=>destroy(song.id)} className="destroy">X</span>
            </span>
        </div>
    ))

    return(
        <div className="playlist">
            <p className="label">PLAYLIST</p>
            {playlistMap}
        </div>
    )
}

export default Playlist;