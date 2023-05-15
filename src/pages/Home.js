import React, { useState, useEffect } from 'react';
import MovieList from '../components/MovieList';

function Home() {
    const [moviesList, setMovies] = useState([]);
    const getMovieRequest = async () => {
        const url = 'http://localhost:4000/movies/';
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

    return (
        <div>
            <a href="/watchlist"><h3>WATCHLIST</h3></a>
            <MovieList movies={moviesList} category="Popular" watchlist={true} />
            <a href="/movies"><h3>POPULAR</h3></a>
            <MovieList movies={moviesList} category="Popular" watchlist={false} />
            <a href="/genre/drama"><h3>DRAMA</h3></a>
            <MovieList movies={moviesList} category="Drama" watchlist={false} />
            <a href="/genre/action"><h3>ACTION</h3></a>
            <MovieList movies={moviesList} category="Action" watchlist={false} />
            <a href="/genre/animation"><h3>ANIMATION</h3></a>
            <MovieList movies={moviesList} category="Animation" watchlist={false} />
            <a href="/genre/comedy"><h3>COMEDY</h3></a>
            <MovieList movies={moviesList} category="Comedy" watchlist={false} />
            <a href="/genre/horror"><h3>HORROR</h3></a>
            <MovieList movies={moviesList} category="Horror" watchlist={false} />
            <a href="/genre/western"><h3>WESTERN</h3></a>
            <MovieList movies={moviesList} category="Western" watchlist={false} />
            <a href="/genre/romance"><h3>ROMANCE</h3></a>
            <MovieList movies={moviesList} category="Romance" watchlist={false} />
            <a href="/genre/thriller"><h3>THRILLER</h3></a>
            <MovieList movies={moviesList} category="Thriller" watchlist={false} />
            <a href="/genre/crime"><h3>CRIME</h3></a>
            <MovieList movies={moviesList} category="Crime" watchlist={false} />
            <a href="/genre/mystery"><h3>MYSTERY</h3></a>
            <MovieList movies={moviesList} category="Mystery" watchlist={false} />
            <a href="/genre/adventure"><h3>ADVENTURE</h3></a>
            <MovieList movies={moviesList} category="Adventure" watchlist={false} />
            <a href="/genre/war"><h3>WAR</h3></a>
            <MovieList movies={moviesList} category="War" watchlist={false} />
            <a href="/genre/sci-fi"><h3>SCI-FI</h3></a>
            <MovieList movies={moviesList} category="Sci-Fi" watchlist={false} />
        </div>
    );
}
export default Home;

