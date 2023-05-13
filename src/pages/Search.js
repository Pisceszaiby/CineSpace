import React, { useState, useEffect } from 'react';
import MovieMap from '../components/MovieMap';
function Search() {
    const [allMovies, setMovies] = useState([]);
    const getMovieRequest = async () => {
        const url = 'http://localhost:4000/search-results';
        try {
            const response = await fetch(url);
            var result = await response.json();
            setMovies(result);
        } catch (error) {
            console.error(error);
        };
    };
    useEffect(() => {
        getMovieRequest();
    }, []);

    return (
        <div>
            <h3>Search Results:</h3>
            <MovieMap
                movieList={allMovies} />

        </div >
    )
}
export default Search;
