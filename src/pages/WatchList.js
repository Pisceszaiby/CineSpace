import React from 'react';
import PopularMovieList from '../components/MovieList';
function WatchList(props) {


    return (
        <div>
            <h2>Your WatchList</h2>
            <PopularMovieList />
            <h5>Your Top Genres: {props.genre}</h5>
            <h5>Your Top Actors: {props.actors}</h5>
            <h5>Your Top Directors: {props.directors}</h5>
        </div>
    )
}
export default WatchList;
