import React from "react";
import s from './Profile.module.css'

const Profile = ()=>{
    return(
        <div className={s.content}>
            <div>
                <img
                    src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQckesZ1JqeQ1cr4rubOQXKm9s-jELBiUToeQ&usqp=CAU'}/>
            </div>
            <div>ava + description</div>
            <div>
                My post
                <div>
                    New post
                </div>
                <div className={s.item}>
                    <div>Post 1</div>
                    <div>Post 2</div>
                </div>
            </div>
        </div>
    )
}

export default Profile