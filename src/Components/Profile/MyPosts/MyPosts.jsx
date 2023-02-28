import React from "react";
import Posts from "./Posts/Posts";

const MyPosts = ()=>{
    return(
        <div>
            <div>
                My post
                <div>
                    <div>
                        <textarea></textarea>
                    </div>
                    <div>
                        <button>Add post</button>
                    </div>
                    </div>

              <Posts message={'Hi, how are you?'} likesCount={'1'}/>
              <Posts message={'i am good'} likesCount={'9'}/>

            </div>
        </div>
    )
}

export default MyPosts