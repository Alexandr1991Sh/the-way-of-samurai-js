import React from "react";
import s from './Dialogs.module.css'
import Messages from "../Messages/Messages";
import DialogItem from "../DialogsItem/DialogItem";
import {addMessage, updateNewPostMessage} from "../Redux/State";

const Dialogs = (props) => {

    let dialogs = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)

    let messages = props.dialogsPage.messages.map(m => <Messages message={m.message} id={m.id}/>)

    let newPostElement = React.createRef()

    let addPost = () => {
        props.addMessage()
    }

    let onMessageChange = () => {
        let text = newPostElement.current.value
        props.updateNewPostMessage(text)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogs}

                <div><textarea
                    onChange={onMessageChange}
                    value={props.dialogsPage.newPostMessage}
                    ref={newPostElement}
                /></div>
                <div>
                    <button onClick={addPost}>addPost</button>
                </div>
            </div>
            <div className={s.messages}>
                {messages}
            </div>
        </div>
    )
}

export default Dialogs