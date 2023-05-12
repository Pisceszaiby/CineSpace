import React from 'react';

const MovieList = (props) => {
    var movieList = props.movies;
    if (props.watchlist === true)
        movieList = props.movies.filter(movie => movie.watchlist === true)
    else if (props.category === "Popular")
        movieList.sort((a, b) => (a.year < b.year) ? 1 : -1)
    else
        movieList = props.movies.filter(movie => movie.genre.includes(props.category))
    const firstSixMovies = movieList.slice(0, 6);

    const firstThreeMovies = movieList.slice(0, 3);
    return (

        <div class="row">
            <section class="d-none d-md-block d-lg-block">
                <div class="card-group ">
                    {firstSixMovies.map((movie, index) => (
                        <div class="card">
                            <a href={`/movies/${movie._id}`}>
                                <img src={movie.image_url} class="card-img-top" alt="mo"></img>
                            </a>
                            <div class="card-body">
                                <h6 class="card-title">{movie.name}</h6>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <section class=" d-md-none d-lg-none d-sm-block">
                <div class="card-group ">

                    {

                        firstThreeMovies.map(movie => (

                            <div class="card">
                                <a href={`/movies/${movie._id}`}>
                                    <img src={movie.image_url} class="card-img-top" alt="mo"></img>
                                </a><div class="card-body">
                                    <h5 class="card-title">{movie.name}</h5>
                                </div>

                            </div>
                        ))}
                </div>
            </section>
        </div>)
}


export default MovieList;





