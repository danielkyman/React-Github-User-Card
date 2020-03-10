import React from 'react';

function UserCard(props) {

    return (
        <div className="userCard">
            <h2>{props.data.name}</h2>
            <img src={props.data.avatar_url} alt="User Avatar" />
            <h2>{props.data.location}</h2>
            <h2>{props.data.login}</h2>
        </div>
    )
}

export default UserCard;