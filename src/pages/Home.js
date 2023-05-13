import React, { useState, useEffect } from 'react';
import MovieList from '../components/MovieList';
// import PopularMovieList from '../components/MovieList';
function Home() {
    const [moviesList, setMovies] = useState([]);
    const getMovieRequest = async () => {
        const url = 'http://localhost:4000/movies/';
        try {
            const response = await fetch(url);
            var result = await response.json();
            //sort json list on the basis of year


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
            <h1>Your Personalized MovieDB</h1>
            <a href="/watchlist"><h3>Movies from your watchlist</h3></a>
            <MovieList movies={moviesList} category="Popular" watchlist={true} />
            <a href="/movies"><h3>View Most Popular Movies</h3></a>
            <MovieList movies={moviesList} category="Popular" watchlist={false} />
            <a href="/genre/drama"><h3>Drama</h3></a>
            <MovieList movies={moviesList} category="Drama" watchlist={false} />
            <a href="/genre/action"><h3>Action</h3></a>
            <MovieList movies={moviesList} category="Action" watchlist={false} />
            <a href="/genre/animation"><h3>Animation</h3></a>
            <MovieList movies={moviesList} category="Animation" watchlist={false} />
            <a href="/genre/comedy"><h3>Comedy</h3></a>
            <MovieList movies={moviesList} category="Comedy" watchlist={false} />
            <a href="/genre/horror"><h3>Horror</h3></a>
            <MovieList movies={moviesList} category="Western" watchlist={false} />
            <a href="/genre/western"><h3>Western</h3></a>
            <MovieList movies={moviesList} category="Horror" watchlist={false} />
            <a href="/genre/romance"><h3>Romance</h3></a>
            <MovieList movies={moviesList} category="Romance" watchlist={false} />
            <a href="/genre/thriller"><h3>Thriller</h3></a>
            <MovieList movies={moviesList} category="Thriller" watchlist={false} />
            <a href="/genre/crime"><h3>Crime</h3></a>
            <MovieList movies={moviesList} category="Crime" watchlist={false} />
            <a href="/genre/mystery"><h3>Mystery</h3></a>
            <MovieList movies={moviesList} category="Mystery" watchlist={false} />
            <a href="/genre/adventure"><h3>Adventure</h3></a>
            <MovieList movies={moviesList} category="Adventure" watchlist={false} />
            <a href="/genre/war"><h3>War</h3></a>
            <MovieList movies={moviesList} category="War" watchlist={false} />
            <a href="/genre/sci-fi"><h3>Sci-Fi</h3></a>
            <MovieList movies={moviesList} category="Sci-Fi" watchlist={false} />

        </div>
    );
}
export default Home;

