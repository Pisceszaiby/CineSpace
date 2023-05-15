import React from 'react';
function MovieMap(props) {
    return (
        <div class="row row-cols-3 row-cols-md-5 row-cols-lg-6  g-3">
            {

                props.movieList.map(movie => (
                    <div class="col">
                        <div class="card h-100">
                            <a href={`/movies/${movie._id}`}>
                                <img src={movie.image_url} class="card-img-top" alt="mo"></img>
                            </a>
                            <div class="card-body">
                                <h4 class="card-title">{movie.name}</h4>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>)
}
export default MovieMap;