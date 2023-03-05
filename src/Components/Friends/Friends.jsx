import React from "react";
import FriendsItem from "./FrendsItem/FriendsItem";

const Friends = (props) => {

    const friendsElements = props.state.friend
        .map(friend => <FriendsItem id={friend.id} name={friend.name} src={friend.src}/>)

    return (
        <div>
             <div>My Friends</div>
            {friendsElements}
        </div>
    )
}

export default Friends