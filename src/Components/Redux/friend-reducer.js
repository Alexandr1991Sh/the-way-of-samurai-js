import React from "react";

const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST = 'UPDATE_NEW_POST';

const friendReducer =(state, action) =>{
    if (action.type === ADD_POST) {
        let newPost = {
            id: 2,
            message: state.newPostText,
        }
        state.messages.push(newPost)
        state.newPostText = ' '
    } else if (action.type === UPDATE_NEW_POST) {
        state.newPostText = action.newText;
    }
    return state
}

export default friendReducer

export const addPostAction = () => ({type: 'ADD_POST'})
export const updateNewPost = (text) =>
    ({type: 'UPDATE_NEW_POST', newText: text})

