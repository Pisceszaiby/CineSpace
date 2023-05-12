import React from 'react';

function MovieInfo(props) {



    return (
        <div class="container">

            <h5 class="title">Movie Title: {props.name}</h5>
            <a href=""><img class="add" src="add.png"></img></a>
            <a href=""><img class="add" src="remove.png"></img></a>
            <div class="row">

                <div class="col-md-4 col-lg-4">

                    <img class="poster" src="images.jpg" alt={props.title}></img>

                </div>
                <div class="col-md-8 col-lg-8">

                    <h5>Genre: {props.genre} Comedy-Drama</h5>
                    <h5>Release Date: </h5>{props.releaseDate} 22 Jan 2022
                    <h5>Rating: </h5>{props.rating} PG-13
                    <h5>Director: {props.director} </h5>Christopher Nolan
                    <h5>Cast: {props.cast}</h5>


                    <h5>Plot: {props.plot}</h5>
                    <h5>Runtime: {props.runtime}</h5>
                    <h5>Box Office: {props.boxOffice}</h5>
                    <h5>Production: {props.production}</h5>
                    <h5>Website: {props.website}</h5>
                    <h5>IMDB Rating: {props.imdbRating}</h5>
                    <h5>IMDB Votes: {props.imdbVotes}</h5>
                </div>





            </div >
        </div>

    )
}
export default MovieInfo;
