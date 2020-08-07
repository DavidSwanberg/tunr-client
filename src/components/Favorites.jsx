import React from 'react';


const Favorites = props => {

    const favsMap = props.songs.map( song => (
        <>
        {song.favorite === true ?
        <div key={song.id} className="song">
            <span className="title">{song.title}</span>
            <span className="artist">{song.artist}</span>
        </div>
        : null}
        </>
    ))

    return(
        <div className="favorites">
            <p className="label">FAVORITES</p>
            {favsMap}
        </div>
    )
}

export default Favorites;