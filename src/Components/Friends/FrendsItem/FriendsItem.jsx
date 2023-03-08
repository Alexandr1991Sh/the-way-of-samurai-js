import React from "react";
import s from './FriendsItem.module.css'

const FriendsItem = (props) => {

    return (
        <div className={s.dialogs}>
            <img src={props.src}/> <span>{props.name}</span>
            <div>
                {props.message}
            </div>
        </div>
    )
}

export default FriendsItem