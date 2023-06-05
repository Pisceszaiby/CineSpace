import React, { useState, useEffect } from 'react';
import MovieMap from '../components/MovieMap';
function WatchList() {
    var topGenres = [];
    var topActors = [];
    var topDirectors = [];
    const [watchlistMovies, setMovies] = useState([]);
    const getMovieRequest = async () => {
        const url = 'http://localhost:4000/movies/';
        try {
            const response = await fetch(url);
            var result = await response.json();
            result.sort((a, b) => (a.year < b.year) ? 1 : -1)
            var moviesList = result.filter(movie => movie.watchlist === true)
            setMovies(moviesList);
        } catch (error) {
            console.error(error);
        };
    };
    useEffect(() => {
        getMovieRequest();
    }, []);
    // create an empty array to store all genres
    let allGenres = [];
    let allActors = [];
    let allDirectors = [];

    watchlistMovies.forEach(movie => {
        allGenres.push(...movie.genre);
        allActors.push(...movie.actors);
        allDirectors.push(...movie.directors);

    });
    const genreCount = allGenres.reduce((acc, genre) => {
        if (!acc[genre]) {
            acc[genre] = 1;
        } else {
            acc[genre]++;
        }
        return acc;
    }, {});

    const actorCount = allActors.reduce((acc, actor) => {
        if (!acc[actor]) {
            acc[actor] = 1;
        } else {
            acc[actor]++;
        }
        return acc;
    }, {});

    const directorCount = allDirectors.reduce((acc, director) => {
        if (!acc[director]) {
            acc[director] = 1;
        } else {
            acc[director]++;
        }
        return acc;
    }, {});



    const genreCountArray = Object.entries(genreCount);
    const actorCountArray = Object.entries(actorCount);
    const directorCountArray = Object.entries(directorCount);

    genreCountArray.sort((a, b) => b[1] - a[1]);
    actorCountArray.sort((a, b) => b[1] - a[1]);
    directorCountArray.sort((a, b) => b[1] - a[1]);

    topGenres = genreCountArray.slice(0, 3).map(genre => genre[0]);
    topActors = actorCountArray.slice(0, 3).map(actor => actor[0]);
    topDirectors = directorCountArray.slice(0, 3).map(director => director[0]);

    return (
        <div>
            <h3>WATCHLIST</h3>
            <MovieMap movieList={watchlistMovies} />

            <br></br>

            <h5 className='title'>Your Top Genres: </h5>{topGenres.join(', ')}
            <h5 className='title'>Your Top Actors: </h5>{topActors.join(', ')}
            <h5 className='title'>Your Favourite Director: </h5>{topDirectors.join(', ')}
            <br></br>
            <br></br>
        </div >
    )
}
export default WatchList;








