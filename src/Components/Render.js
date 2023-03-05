import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import App from "../App";
import State, {addPost} from "./Redux/State";

let rerenderEntireFree = () => {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App State={State} addPost={addPost}/>
            </BrowserRouter>
        </React.StrictMode>
    );
}

export default rerenderEntireFree