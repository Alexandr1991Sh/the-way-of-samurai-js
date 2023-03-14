import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import friendReducer from "./friend-reducer";
import usersReducer from "./users-reducer";

let reducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    friendsPade: friendReducer,
    usersPage: usersReducer
})

let store = createStore(reducer)

export default store