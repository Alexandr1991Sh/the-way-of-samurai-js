import React from "react";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import store from "../Redux/Store";


// const DialogsContainer = () => {
//     return (
//         <StoreContext.Consumer>
//             {store => {
//                 let state = store.getState().dialogsPage
//
//                 let onSendMessageClick = () => {
//                     store.dispatch(sendMessageCreator())
//                 }
//
//                 let onNewMessageChange = (text) => {
//                     store.dispatch(updateNewMessageBodyCreator(text))
//                 }
//                 return <Dialogs
//                     updateNewMessageBody={onNewMessageChange}
//                     sendMessage={onSendMessageClick}
//                     dialogsPage={state}
//                 />
//             }
//             }
//         </StoreContext.Consumer>
//     )
// }


let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: (text) => {
            dispatch(updateNewMessageBodyCreator(text))
        },
        sendMessage: () => {
            dispatch(sendMessageCreator())
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer
