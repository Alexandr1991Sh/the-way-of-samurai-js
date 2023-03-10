import React from "react";

const SEND_MESSAGE = 'SEND_MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';

let initialState = {
    dialogs: [
        {id: 1, name: 'Alexandr'},
        {id: 2, name: 'Andrey'}
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'}
    ],
    newMessageBody: ''
}

const dialogsReducer =(state = initialState, action) =>{
    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = {
                id: 3,
                message: state.newMessageBody
            }
            state.messages.push(newMessage)
            state.newMessageBody = ' '
            break;
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.newMessage;
            break;
    }
    return state
}

export default dialogsReducer

export const sendMessageCreator = () => ({type: 'SEND_MESSAGE'})
export const updateNewMessageBodyCreator = (text) =>
    ({type: 'UPDATE_NEW_MESSAGE_BODY', newMessage: text})
