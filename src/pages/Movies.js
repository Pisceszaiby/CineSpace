import React from 'react';

function Movies() {

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
    return (
        <div>

            <div class="row row-cols-3 row-cols-md-5 row-cols-lg-6  g-3">
                {
                    movies.map(movie => (
                        <div class="col">
                            <div class="card h-100">
                                <a href={movie.url}>
                                    <img src={movie.img} class="card-img-top" alt="mo"></img>
                                </a>
                                <div class="card-body">
                                    <h6 class="card-title">{movie.title}</h6>
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
