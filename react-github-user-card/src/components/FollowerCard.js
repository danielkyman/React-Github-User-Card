import React from 'react';

function FollowerCard(props) {

    console.log(props);

    return (
        <div className="followerCard">
            <h2>{props.data.login}</h2>
            <img src={props.data.avatar_url} alt="User Avatar" />
        </div>
    )
}

export default FollowerCard;