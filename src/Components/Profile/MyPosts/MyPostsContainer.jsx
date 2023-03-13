import React from "react";
import MyPosts from "./MyPosts";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../Redux/dialogs-reducer";
import {connect} from "react-redux";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../Redux/profile-reducer";

// const MyPostsContainer = () => {
//     return (
//     <StoreContext.Consumer>
//         {store => {
//             let state = store.getState()
//
//             let addPost = () => {
//                 store.dispatch(addPostActionCreator())
//             }
//
//             let onPostChange = (text) => {
//                 let action = updateNewPostTextActionCreator(text)
//                 store.dispatch(action)
//             }
//             return <MyPosts
//                 updateNewPostText={onPostChange}
//                 addPost={addPost}
//                 posts={state.profilePage.posts}
//                 newPostText={state.profilePage.newPostText}
//             />
//         }
//         }
//     </StoreContext.Consumer>)
// }

let mapStateToProps = (state) => {
    return {
        newPostText: state.profilePage.newPostText,
        posts: state.profilePage.posts
    }
}

let mapDispatchToProps =(dispatch)=>{
    return{
        updateNewPostText: (text)=>{
            // dispatch(updateNewPostTextActionCreator(text))
            let action = updateNewPostTextActionCreator(text)
                 dispatch(action)
        },
        addPost:()=>{
            dispatch(addPostActionCreator())
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer