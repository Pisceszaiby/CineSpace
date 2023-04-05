import React from 'react';
import PropTypes from 'prop-types';

class MovieList extends React.Component {
    render() {
        return (
            <div class="movie_list">
                <img src="/images.jpg"></img>

                <p>{this.props.title}</p>

            </div >
        );
    }
}

MovieList.propTypes = {

    poster: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired

};

export default MovieList;