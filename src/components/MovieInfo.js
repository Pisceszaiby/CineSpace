
import React from 'react';
import PropTypes from 'prop-types';

class MovieInfo extends React.Component {
    render() {
        return (
            <div class="movie_info">
                <img src="/images.jpg"></img>
                <p>{this.props.title}</p>
                <p>Cast: {this.props.cast}</p>
                <p>Genre: {this.props.genre}</p>
                <p>Plot: {this.props.plot}</p>
            </div >
        );
    }
}
//is propTypes necessary?
//is it necessary to define the type of props?
//answer: 
//yes, it is necessary to define the type of props  
//because it is a good practice to define the type of props 
//and it is also necessary to define the type of props
/* <li>{this.props.cast.map((el) => { return { el } })}</li> */


MovieInfo.propTypes = {

    poster: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    cast: PropTypes.array.isRequired,
    genre: PropTypes.string.isRequired,
    plot: PropTypes.string.isRequired
};

export default MovieInfo;