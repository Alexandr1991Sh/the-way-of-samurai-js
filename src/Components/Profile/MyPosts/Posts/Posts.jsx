import React from "react";
import s from './MyPosts.module.css'

const MyPosts = ()=>{
    return(
        <div>
            <div>
                My post
                <div>
                    <textarea></textarea>
                    <button>Add post</button>
                </div>
                <div className={s.item}>
                    <div>Post 1</div>
                    <div>Post 2</div>
                </div>
            </div>
        </div>
    )
}

export default MyPosts