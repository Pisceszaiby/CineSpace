import React from 'react';

function UserOutput(props) {
    return (
        <div>
            <p>Welcome {props.username}!!</p>
            <p>Here is a curated Movie Database for you!</p>
        </div>
    );
}

export default UserOutput;
