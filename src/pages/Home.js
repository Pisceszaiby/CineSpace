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
            <h3>View Watch List</h3>
            <MovieList movies={moviesList} category="Popular" watchlist={true} />
            <a href="/"><h3>View Most Popular Movies</h3></a>
            <MovieList movies={moviesList} category="Popular" watchlist={false} />
            <a href="/movieinfo"><h3>Genre: Drama</h3></a>
            <MovieList movies={moviesList} category="Drama" watchlist={false} />
            <a href="/about"><h3>Genre: Action</h3></a>
            <MovieList movies={moviesList} category="Action" watchlist={false} />
            <a href="/movieinfo"><h3>Genre: Animation</h3></a>
            <MovieList movies={moviesList} category="Animation" watchlist={false} />
            <a href="/about"><h3>Genre: Comedy</h3></a>
            <MovieList movies={moviesList} category="Comedy" watchlist={false} />
            <a href="/movieinfo"><h3>Genre: Horror</h3></a>
            <MovieList movies={moviesList} category="Western" watchlist={false} />
            <a href="/movieinfo"><h3>Genre: Western</h3></a>
            <MovieList movies={moviesList} category="Horror" watchlist={false} />
            <a href="/movieinfo"><h3>Genre: Romance</h3></a>
            <MovieList movies={moviesList} category="Romance" watchlist={false} />
            <a href="/movieinfo"><h3>Genre: Thriller</h3></a>
            <MovieList movies={moviesList} category="Thriller" watchlist={false} />
            <a href="/about"><h3>Genre: Crime</h3></a>
            <MovieList movies={moviesList} category="Crime" watchlist={false} />
            <a href="/movieinfo"><h3>Genre: Mystery</h3></a>
            <MovieList movies={moviesList} category="Mystery" watchlist={false} />
            <a href="/about"><h3>Genre: Adventure</h3></a>
            <MovieList movies={moviesList} category="Adventure" watchlist={false} />
            <a href="/about"><h3>Genre: War</h3></a>
            <MovieList movies={moviesList} category="War" watchlist={false} />
            <a href="/about"><h3>Genre: Sci-Fi</h3></a>
            <MovieList movies={moviesList} category="Sci-Fi" watchlist={false} />

        </div>
    );
}
export default Home;

