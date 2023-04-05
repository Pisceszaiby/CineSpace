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
        }
    ]
    var count = 0;


    return (


        <ul>
            {

                movies.map(movie => (
                    count++,
                    count <= props.num &&
                    <li class="movie_list" >

                        <a class="movie_ref" href={movie.url}>
                            <img src={movie.img}></img>
                            <p>{movie.title}</p>
                        </a>
                    </li>
                ))
            }

        </ul>


    );
}

export default PopularMovieList;