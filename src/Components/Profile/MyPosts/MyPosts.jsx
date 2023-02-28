import React from "react";
import Posts from "./Posts/Posts";
import s from './MyPosts.module.css'

const MyPosts = () => {
    return (
        <div className={s.postsBlock}>
            <div>
                <h3>My post</h3>
                <div>
                    <div>
                        <textarea></textarea>
                    </div>
                    <div>
                        <button>Add post</button>
                    </div>
                </div>
                <div className={s.posts}>
                    <Posts message={'Hi, how are you?'} likesCount={'1'}/>
                    <Posts message={'i am good'} likesCount={'9'}/>
                </div>
            </div>
        </div>
    )
}

export default MyPosts