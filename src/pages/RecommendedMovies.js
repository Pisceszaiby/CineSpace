import React, { useState, useEffect } from 'react';
import MovieMap from '../components/MovieMap';
function RecommendList() {

    const [recommendations, setMovies] = useState([]);
    const getMovieRequest = async () => {
        const url = 'http://localhost:4000/movies/recommendations';
        try {
            const response = await fetch(url);
            var result = await response.json();
            result.sort((a, b) => (a.year < b.year) ? 1 : -1)

            setMovies(result);
        } catch (error) {
            console.error(error);
        };
    };
    useEffect(() => {
        getMovieRequest();
    }, []);
    // create an empty array to store all genres

    return (
        <div>
            <h3>RECOMMENDATIONS BASED ON WATCHLIST</h3>
            <MovieMap movieList={recommendations} />
            <br />
        </div >
    )
}
export default RecommendList;








