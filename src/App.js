import React from "react";
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/NavBar/NavBar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import {Route, Routes} from "react-router-dom";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import Friends from "./Components/Friends/Friends";
import Test from "./Components/Test/Test";
import {addMessage, updateNewPostMessage} from "./Components/Redux/State";

const App = (props) => {
    return (
        <div className={'app-wrapper'}>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path='/Profile/*' element={<Profile
                        profilePage={props.State.profilePage}
                        addPost={props.addPost}
                        updateNewPostText={props.updateNewPostText}
                    />}/>
                    <Route path='/Dialogs/*' element={<Dialogs
                        dialogsPage={props.State.dialogsPage}
                        updateNewPostMessage={props.updateNewPostMessage}
                        addMessage={props.addMessage}
                    />}/>
                    <Route path='/News/*' element={<News state={props.State.news}/>}/>
                    <Route path='/Music/*' element={<Music/>}/>
                    <Route path='/Settings/*' element={<Settings/>}/>
                    <Route path='/Friends/*' element={<Friends state={props.State.friendsPade}/>}/>
                    <Route path='/Test/*' element={<Test state={props.State.testText}/>}/>
                </Routes>
            </div>
        </div>
    );
}


export default App;
