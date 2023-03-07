import React from "react";
import s from './Dialogs.module.css'
import Messages from "../Messages/Messages";
import DialogItem from "../DialogsItem/DialogItem";

let addMessageActionCreator = () => {
    return {type: 'ADD_MESSAGE'}
}

let updateNewPostMessageActionCreator = (text) => {
    return {type: 'UPDATE_NEW_POST_MESSAGE', newMessage: text }
}

const Dialogs = (props) => {
    let dialogs = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messages = props.dialogsPage.messages.map(m => <Messages message={m.message} id={m.id}/>)
    let newPostElement = React.createRef()

    let addMessage = () => {
        props.dispatch(addMessageActionCreator())
    }

    let onMessageChange = () => {
        let text = newPostElement.current.value
        props.dispatch(updateNewPostMessageActionCreator(text))
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
                    <button onClick={addMessage}>addMessage</button>
                </div>
            </div>
            <div className={s.messages}>
                {messages}
            </div>
        </div>
    )
}

export default Dialogs