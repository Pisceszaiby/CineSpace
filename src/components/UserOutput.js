
import React from 'react';
import PropTypes from 'prop-types';
class UserOutput extends React.Component {
    render() {
        return (
            <div>
                <p>{this.props.username}</p>
                <p>{this.props.username}</p>
            </div>
        );
    }
}

UserOutput.propTypes = {
    username: PropTypes.string.isRequired,
};

export default UserOutput;


