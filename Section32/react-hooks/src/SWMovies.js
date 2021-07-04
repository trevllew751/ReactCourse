import React from 'react';
import axios from "axios";

function SWMovies(props) {
    const [number, setNumber] = React.useState(1);
    const [movie, setMovie] = React.useState("");

    React.useEffect(() => {
        async function fetchData() {
            const res = await axios.get(`https://swapi.dev/api/films/${number}/`);
            setMovie(res.data);
        }
        fetchData();
    },[number]);

    return (
        <div>
            <h1>Pick a movie!</h1>
            <h4>{movie.title}</h4>
            <p>{movie.opening_crawl}</p>
            <select name="" id="" value={number} onChange={e => setNumber(e.target.value)}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
            </select>
        </div>
    );
}

export default SWMovies;