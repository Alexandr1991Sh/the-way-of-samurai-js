import React from "react";
import s from './Posts.module.css'

const Posts = (props)=>{
    return(
        <div className={s.item}>
                <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ53Y7PzUEawis7VUgB5IIoP16my0F7OxeJDg&usqp=CAU'}/>
            {props.message}
            <div>
                <span>Like</span>
            </div>
        </div>
    )
}

export default Posts