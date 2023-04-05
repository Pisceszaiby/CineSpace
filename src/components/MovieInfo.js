import React from 'react';

//this component will be used when the user clicks on a movie from the list
//it will display the movie info
// for now I have added IMDB Link and image, after learning routing, i will add this component in App.js
// and will display the movie info when the user clicks on a movie from the list
function MovieInfo(props) {
    return (
        <div class="movie_info">
            <img src="/images.jpg"></img>
            <p>{props.title}</p>
            <p>Cast: {props.cast}</p>
            <p>Genre: {props.genre}</p>
            <p>Plot: {props.plot}</p>
        </div >
    );
}

export default MovieInfo;
