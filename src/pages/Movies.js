import React, { useState, useEffect } from 'react';
import MovieMap from '../components/MovieMap';
function Movies(props) {
    const [allMovies, setMovies] = useState([]);
    const getMovieRequest = async () => {
        const url = 'http://localhost:4000/movies/';
        try {
            const response = await fetch(url);
            var result = await response.json();

            result.sort((a, b) => (a.year < b.year) ? 1 : -1)
            var moviesList;
            if (props.category !== "Popular") {
                moviesList = result.filter(movie => movie.genre.includes(props.category))

            }
            else {
                moviesList = result;
            }
            setMovies(moviesList);
        } catch (error) {
            console.error(error);
        };
    };
    useEffect(() => {
        getMovieRequest();
    }, []);

    return (
        <div>
            <h3>{props.category.toUpperCase()}</h3>
            <MovieMap movieList={allMovies} />
            <br></br>
        </div >
    )
}
export default Movies;
