import React, { useState, useEffect } from 'react';
function Movies(props) {
    const [allMovies, setMovies] = useState([]);
    const getMovieRequest = async () => {
        const url = 'http://localhost:4000/movies/';
        try {
            const response = await fetch(url);
            var result = await response.json();
            result.sort((a, b) => (a.year < b.year) ? 1 : -1)
            var moviesList;
            if (props.category !== "Popular") {
                moviesList = result.filter(movie => movie.genre.includes(props.category))
            }
            else {
                moviesList = result;
            }
            setMovies(moviesList);
        } catch (error) {
            console.error(error);
        };
    };
    useEffect(() => {
        getMovieRequest();
    }, []);

    return (
        <div>
            <h3>Genre: {props.category}</h3>
            <div class="row row-cols-3 row-cols-md-5 row-cols-lg-6  g-3">
                {
                    allMovies.map(movie => (
                        <div class="col">
                            <div class="card h-100">
                                <a href={`/movies/${movie._id}`}>
                                    <img src={movie.image_url} class="card-img-top" alt="mo"></img>
                                </a>
                                <div class="card-body">
                                    <h6 class="card-title">{movie.name}</h6>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>


        </div >
    )
}
export default Movies;
