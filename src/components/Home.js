import React from 'react';
import MovieInfo from './MovieInfo';
//this component will be used when the user clicks on a movie from the list
//it will display the movie info
// for now I have added IMDB Link and image, after learning routing, i will add this component in App.js
// and will display the movie info when the user clicks on a movie from the list
function Movie1() {
    return (
        <MovieInfo title="Avatar" cast="Sam Worthington, Zoe Saldana, Sigourney Weaver" genre="Action, Adventure, Fantasy" plot="A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home." />
    );
}
export default Movie1;

