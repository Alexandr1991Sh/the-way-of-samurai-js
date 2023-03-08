import React from "react";

const SEND_MESSAGE = 'SEND_MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';

const dialogsReducer =(state, action) =>{
    if (action.type === SEND_MESSAGE ) {
        let newMessage = {
            id: 3,
            message: state.newMessageBody
        }
        state.messages.push(newMessage)
        state.newMessageBody = ' '
    } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
        state.newMessageBody = action.newMessage;
    }
    return state
}

export default dialogsReducer

export const sendMessageCreator = () => ({type: 'SEND_MESSAGE'})
export const updateNewMessageBodyCreator = (text) =>
    ({type: 'UPDATE_NEW_MESSAGE_BODY', newMessage: text})
