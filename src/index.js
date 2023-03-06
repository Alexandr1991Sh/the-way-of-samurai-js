import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ReactDOM from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import store from "./Components/Redux/State";

const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireFree = () => {
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App
                    State={store.getState()}
                    addPost={store.addPost.bind(store)}
                    updateNewPostText={store.updateNewPostText.bind(store)}
                    updateNewPostMessage={store.updateNewPostMessage.bind(store)}
                    addMessage={store.addMessage.bind(store)}
                />
            </BrowserRouter>
        </React.StrictMode>
    );
}
rerenderEntireFree(store.getState())
store.subscribe(rerenderEntireFree)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
