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

              <Posts/>
              <Posts/>

            </div>
        </div>
    )
}

export default MyPosts