import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import Messages from "../Messages/Messages";
import DialogItem from "../DialogsItem/DialogItem";

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <DialogItem name={'Alexandr'} id={'1'}/>
                <DialogItem name={'Andrey'} id={'2'}/>
                <DialogItem name={'Slava'} id={'3'}/>
                <DialogItem name={'Viktor'} id={'4'}/>
            </div>
            <div className={s.messages}>
                <Messages message={'Hi'}/>
                <Messages message={'How are you?'}/>
                <Messages message={'Yo'}/>
            </div>
        </div>
    )
}

export default Dialogs