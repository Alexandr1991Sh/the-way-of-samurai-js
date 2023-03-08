import React from "react";
import Posts from "./Posts/Posts";
import s from './MyPosts.module.css'
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../Redux/profile-reducer";

const MyPosts = (props) => {
    let postsElements = props.posts.map(p => <Posts message={p.message} likesCount={p.likesCount}/>)
    let newPostElement = React.createRef()
    let addPost = () => {
        props.dispatch(addPostActionCreator())
    }

    let onPostChange = () => {
        let text = newPostElement.current.value
        props.dispatch(updateNewPostTextActionCreator(text))
    }

    return (
        <div className={s.postsBlock}>
            <div>
                <h3>My post</h3>
                <div>
                    <div>
                        <textarea ref={newPostElement}
                                  onChange={onPostChange}
                                  value={props.newPostText}
                        />
                    </div>
                    <div>
                        <button onClick={addPost}>Add post</button>
                    </div>
                </div>
                <div className={s.posts}>
                    {postsElements}
                </div>
            </div>
        </div>
    )
}

export default MyPosts