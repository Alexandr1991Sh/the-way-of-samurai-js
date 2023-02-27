import React from "react";
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

const Profile = ()=>{
    return(
        <div className={s.content}>
            <div>
                <img
                    src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQckesZ1JqeQ1cr4rubOQXKm9s-jELBiUToeQ&usqp=CAU'}/>
            </div>
            <div>ava + description</div>
          <MyPosts/>
        </div>
    )
}

export default Profile