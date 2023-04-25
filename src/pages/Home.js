import React from 'react';
import PopularMovieList from '../components/MovieList';
function Home() {
    return (
        <div>
            <h1>Your Personalized MovieDB</h1>
            <a href="/movies"><h3>View Watch List</h3></a>
            <PopularMovieList />
            <a href="/"><h3>View Most Popular Movies</h3></a>
            <PopularMovieList />
            <a href="/about"><h3>Genre: Horror</h3></a>
            <PopularMovieList />
            <a href="/about"><h3>Genre: Drama</h3></a>
            <PopularMovieList />

        </div>
    );
}
export default Home;

