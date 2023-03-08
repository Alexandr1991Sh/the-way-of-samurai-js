import React from "react";
import FriendsItem from "./FrendsItem/FriendsItem";
import {addPostAction, updateNewPost} from "../Redux/friend-reducer";

const Friends = (props) => {

    const friendsElements = props.state.friend
        .map(friend => <FriendsItem id={friend.id} name={friend.name} src={friend.src}/>)

    const friendsMessage = props.state.messages
        .map(friend => <FriendsItem id={friend.id} name={friend.message}/>)

    let newPost = React.createRef()

    let addPost = () => {
        debugger
        props.dispatch(addPostAction())
    }

    let onPostChange = () => {
        let text = newPost.current.value
        props.dispatch(updateNewPost(text))
    }


    return (<div>
        {friendsElements}
        {friendsMessage}
        <div>
                        <textarea ref={newPost}
                                  onChange={onPostChange}
                                  value={props.state.newPostText}
                                  placeholder={'New message'}
                        />
        </div>
        <div>
            <button onClick={addPost}>Add post</button>
        </div>
    </div>)
}

export default Friends