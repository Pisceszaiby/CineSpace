import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


function MovieInfo() {
    const { id } = useParams();

    const [selMovie, setMovies] = useState([]);
    const getMovieRequest = async () => {
        const url = 'http://localhost:4000/movies/';
        try {
            const response = await fetch(url);
            var result = await response.json();

            var movie = result.filter(movie => movie._id === id)
            setMovies(movie[0]);
        } catch (error) {
            console.error(error);
        };
    };
    useEffect(() => {
        getMovieRequest();
    }, []);


    return (
        <div class="container">

            <h5 class="title">Movie Title: {selMovie.name}</h5>
            <a href=""><img class="add" src="add.png"></img></a>
            <a href=""><img class="add" src="remove.png"></img></a>
            <div class="row">

                <div class="col-md-4 col-lg-4">

                    <img class="poster" src={selMovie.image_url} alt={selMovie.name}></img>

                </div>
                <div class="col-md-8 col-lg-8">

                    <h5>Genre: {selMovie.genre}</h5>
                    <h5>Release Date: </h5>{selMovie.year}
                    <h5>Rating: </h5>{selMovie.rating}
                    <h5>Director: {selMovie.directors} </h5>
                    <h5>Cast: {selMovie.actors}</h5>


                    <h5>Plot: {selMovie.desc}</h5>


                </div>





            </div >
        </div>

    )
}
export default MovieInfo;
