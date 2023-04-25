import React from 'react';
//for now, the movies array contains all the hardcoded movies, later on, we will fetch the movies from the API
//and will display them in the list
//for now only popular movies are displayed, later on, we will add an option to select the genre
//based on genre, we will display the movies
function PopularMovieList(props) {
    const movies = [
        {
            title: 'Avatar: The Way of Water',
            url: 'https://www.imdb.com/title/tt1630029/?ref_=nv_sr_srsg_0',
            img: 'images.jpg'
        },
        {
            title: 'Barbie',
            url: 'https://www.imdb.com/title/tt1517268/',
            img: 'barbie.jpg'
        },
        {
            title: 'The Batman',
            url: 'https://www.imdb.com/title/tt3748528/?ref_=nv_sr_srsg_0',
            img: 'batman.jpg'
        },
        {
            title: 'Oppenheimer',
            url: 'https://www.imdb.com/title/tt15398776/',
            img: 'oppen.jpg'
        },
        {
            title: 'Barbie',
            url: 'https://www.imdb.com/title/tt1517268/',
            img: 'barbie.jpg'
        },
        {
            title: 'The Batman',
            url: 'https://www.imdb.com/title/tt3748528/?ref_=nv_sr_srsg_0',
            img: 'batman.jpg'
        },
        {
            title: 'Oppenheimer',
            url: 'https://www.imdb.com/title/tt15398776/',
            img: 'oppen.jpg'
        },
        {
            title: 'Barbie',
            url: 'https://www.imdb.com/title/tt1517268/',
            img: 'barbie.jpg'
        },
        {
            title: 'The Batman',
            url: 'https://www.imdb.com/title/tt3748528/?ref_=nv_sr_srsg_0',
            img: 'batman.jpg'
        }
    ]
    const firstSixMovies = movies.slice(0, 6);
    const firstThreeMovies = movies.slice(0, 3);


    return (
        <div class="row">
            <section class="d-none d-md-block d-lg-block">
                <div class="card-group ">

                    {

                        firstSixMovies.map(movie => (

                            <div class="card">
                                <a href={movie.url}>
                                    <img src={movie.img} class="card-img-top" alt="mo"></img>
                                </a>
                                <div class="card-body">
                                    <h6 class="card-title">{movie.title}</h6>
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

                                <img src={movie.img} class="card-img-top" alt="mo"></img>
                                <div class="card-body">
                                    <h5 class="card-title">{movie.title}</h5>
                                </div>

                            </div>
                        ))}
                </div>
            </section>
        </div>
    )

} export default PopularMovieList;


