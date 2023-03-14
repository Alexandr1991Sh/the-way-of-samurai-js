import React from "react";
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/NavBar/NavBar";
import Profile from "./Components/Profile/Profile";
import {Route, Routes} from "react-router-dom";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import Friends from "./Components/Friends/Friends";
import Test from "./Components/Test/Test";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import store from "./Components/Redux/Store";
import Users from "./Components/Users/users";
import UsersContainer from "./Components/Users/UsersContainer";
import MusicContainer from "./Components/Music/MusicContainer";

const App = () => {
    return (
        <div className={'app-wrapper'}>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path='/Profile/*' element={<Profile
                        // store={props.store}
                        // profilePage={props.State.profilePage}
                        // dispatch={props.dispatch}
                    />}/>
                    <Route path='/Dialogs/*' element={<DialogsContainer
                        // store={props.store}
                        // dialogsPage={props.State.dialogsPage}
                        // dispatch={props.dispatch}
                    />}/>
                    <Route path='/News/*' element={<News state={store._State.news}/>}/>
                    <Route path='/Music/*' element={<MusicContainer/>}/>
                    <Route path='/Settings/*' element={<Settings/>}/>
                    <Route path='/Friends/*' element={<Friends
                        state={store._State.friendsPade}
                        dispatch={store._State.dispatch}
                    />}/>
                    <Route path='/Test/*' element={<Test state={store._State.testText}/>}/>
                    <Route path='/Users/*' element={<UsersContainer/>}/>
                </Routes>
            </div>
        </div>
    );
}


export default App;
