import React, { useState } from 'react';
import apiUrl from '../apiConfig';
import axios from 'axios';


const NewSong = props => {
    const [input, setInput] = useState({ title: "", artist: "", time:"" });

    const handleChange = (event) => {
        //console.log("event", event.target.name, event.target.value);
        setInput({
          ...input,
          [event.target.name]: event.target.value,
        });
      };

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log("handleSubmit");
        let res = await axios({
          url: apiUrl,
          method: "POST",
          data: input,
        })
        console.log('input', input);
        console.log('res',res);
        props.makeAPICall()
      };

    return(
        <div className="new-song">
            <p className="label">ADD A NEW SONG</p>
        <form onSubmit={handleSubmit}>
        <div className="input">
        <label>TITLE</label>
        <input
        placeholder='title'
        value={input.title}
        name="title"
        onChange={handleChange}
        />
        </div>
        <div className="input">
        <label>ARTIST</label>
        <input
        placeholder='artist'
        value={input.artist}
        name="artist"
        onChange={handleChange}
        />
        </div>
        <div className="input">
        <label>TIME</label>
        <input
        placeholder='time'
        value={input.time}
        name="time"
        onChange={handleChange}
        />
        </div>
        <button type="submit">Submit</button>

    </form>
        </div>
    )
}

export default NewSong;