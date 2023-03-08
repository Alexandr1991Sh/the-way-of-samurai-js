import React from "react";

const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

const profileReducer =(state, action) =>{
    if (action.type === ADD_POST) {
        let newPost = {
            id: 3,
            message: state.newPostText,
            likesCount: 0
        }
        state.posts.push(newPost)
        state.newPostText = ' '
        // this._callSubscriber(this._State)
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
        state.newPostText = action.newText;
        // this._callSubscriber(this._State)
    }
    return state
}

export default profileReducer

export const addPostActionCreator = () => ({type: 'ADD_POST'})
export const updateNewPostTextActionCreator = (text) =>
    ({type: 'UPDATE_NEW_POST_TEXT', newText: text})

