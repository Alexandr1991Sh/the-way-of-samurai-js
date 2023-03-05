import React from "react";
import s from './Dialogs.module.css'
import Messages from "../Messages/Messages";
import DialogItem from "../DialogsItem/DialogItem";

const Dialogs = (props) => {

    let dialogs = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)

    let messages = props.state.messages.map(m => <Messages message={m.message} id={m.id}/>)

    let newPostElement = React.createRef()
    let addPost = () => {
        let text = newPostElement.current.value
        alert((text))
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogs}

                <div><textarea ref={newPostElement}></textarea></div>
                <div><button onClick={addPost}>addPost</button></div>
            </div>
            <div className={s.messages}>
                {messages}
            </div>
        </div>
    )
}

export default Dialogs