import React from 'react';
function UserInput(props) {
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

