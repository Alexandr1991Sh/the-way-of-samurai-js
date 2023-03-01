import React from "react";
import s from './Dialogs.module.css'
import Messages from "../Messages/Messages";
import DialogItem from "../DialogsItem/DialogItem";

const Dialogs = () => {
    let dialogsData = [
        {id: 1, name: 'Alexandr'},
        {id: 2, name: 'Andrey'}
    ]

    let messageData = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'}
    ]

    let dialogs = dialogsData.map(d => <DialogItem name={d.name} id={d.id}/>)

    let messages = messageData.map(m => <Messages message={m.message} id={m.id}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogs}
            </div>
            <div className={s.messages}>
                {messages}
            </div>
        </div>
    )
}

export default Dialogs