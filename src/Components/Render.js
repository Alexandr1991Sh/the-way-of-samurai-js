import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import App from "../App";
import State, {addMessage, addPost, updateNewPostMessage, updateNewPostText} from "./Redux/State";

const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireFree = () => {
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App
                    State={State}
                    addPost={addPost}
                    updateNewPostText={updateNewPostText}
                    updateNewPostMessage={updateNewPostMessage}
                    addMessage={addMessage}
                />
            </BrowserRouter>
        </React.StrictMode>
    );
}

export default rerenderEntireFree