import React from 'react';
const UserInput = (props) => {
    return (
        <div>
            <input
                type="text"
                onChange={props.setUsername}
                value={props.username} />
        </div>
    );
}
export default UserInput;
