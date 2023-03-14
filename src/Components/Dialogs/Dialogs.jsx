import React from "react";
import s from './Dialogs.module.css'
import Messages from "../Messages/Messages";
import DialogItem from "../DialogsItem/DialogItem";


const Dialogs = (props) => {
    let state = props.dialogsPage
    let dialogs = state.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)
    let messages = state.messages.map(m => <Messages key={m.id} message={m.message} id={m.id}/>)
    let newPostElement = React.createRef()

    let onSendMessageClick = () => {
        props.sendMessage()
    }

    let onNewMessageChange = () => {

        let text = newPostElement.current.value
        props.updateNewMessageBody(text)
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






// import React from "react";
// import s from './Dialogs.module.css'
// import Messages from "../Messages/Messages";
// import DialogItem from "../DialogsItem/DialogItem";
//
//
// const Dialogs = (props) => {
//     let state = props.dialogsPage
//     let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
//     let messagesElements = state.messages.map(m => <Messages message={m.message} id={m.id}/>)
//     let newMessageBody = state.newMessageBody
//
//     let onSendMessageClick = () => {
//         props.sendMessage()
//     }
//
//     let onNewMessageChange = (e) => {
//         let body = e.target.value
//         props.updateNewMessageBody(body)
//     }
//
//     return (
//         <div className={s.dialogs}>
//             <div className={s.dialogsItem}>
//                 {dialogsElements}
//
//                 <div><textarea
//                     placeholder={'Enter new message'}
//                     onChange={onNewMessageChange}
//                     value={props.dialogsPage.newMessageBody}
//                     ref={newMessageBody}
//                 /></div>
//                 <div>
//                     <button onClick={onSendMessageClick}>addMessage</button>
//                 </div>
//             </div>
//             <div className={s.messages}>
//                 {messagesElements}
//             </div>
//         </div>
//     )
// }
//
// export default Dialogs









// import React from "react";
// import s from './Dialogs.module.css'
// import Messages from "../Messages/Messages";
// import DialogItem from "../DialogsItem/DialogItem";
// import {sendMessageCreator, updateNewMessageBodyCreator} from "../Redux/dialogs-reducer";
//
//
// const Dialogs = (props) => {
//     let dialogs = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
//     let messages = props.dialogsPage.messages.map(m => <Messages message={m.message} id={m.id}/>)
//     let newPostElement = React.createRef()
//
//     let onSendMessageClick = () => {
//         props.dispatch(sendMessageCreator())
//     }
//
//     let onNewMessageChange = () => {
//         let text = newPostElement.current.value
//         props.dispatch(updateNewMessageBodyCreator(text))
//     }
//
//     return (
//         <div className={s.dialogs}>
//             <div className={s.dialogsItem}>
//                 {dialogs}
//
//                 <div><textarea
//                     placeholder={'Enter new message'}
//                     onChange={onNewMessageChange}
//                     value={props.dialogsPage.newMessageBody}
//                     ref={newPostElement}
//                 /></div>
//                 <div>
//                     <button onClick={onSendMessageClick}>addMessage</button>
//                 </div>
//             </div>
//             <div className={s.messages}>
//                 {messages}
//             </div>
//         </div>
//     )
// }
//
// export default Dialogs