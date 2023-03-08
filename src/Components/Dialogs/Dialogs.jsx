import React from "react";
import s from './Dialogs.module.css'
import Messages from "../Messages/Messages";
import DialogItem from "../DialogsItem/DialogItem";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../Redux/dialogs-reducer";


const Dialogs = (props) => {
    let dialogs = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messages = props.dialogsPage.messages.map(m => <Messages message={m.message} id={m.id}/>)
    let newPostElement = React.createRef()

    let onSendMessageClick = () => {
        props.dispatch(sendMessageCreator())
    }

    let onNewMessageChange = () => {
        let text = newPostElement.current.value
        props.dispatch(updateNewMessageBodyCreator(text))
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogs}

                <div><textarea
                    placeholder={'Enter new message'}
                    onChange={onNewMessageChange}
                    value={props.dialogsPage.newMessageBody}
                    ref={newPostElement}
                /></div>
                <div>
                    <button onClick={onSendMessageClick}>addMessage</button>
                </div>
            </div>
            <div className={s.messages}>
                {messages}
            </div>
        </div>
    )
}

export default Dialogs