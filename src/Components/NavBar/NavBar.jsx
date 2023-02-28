import React from "react";
import s from './NavBar.module.css'

const Navbar = ()=>{
    return(
        <nav className={s.nav}>
            <div className={s.active}>
                <a href='/Profile'>Profile</a>
            </div>

            <div>
                <a href='/Dialogs'>Message</a>
            </div>

            <div>
                <a href='/News'>News</a>
            </div>

            <div>
                <a href='/Music'>Music</a>
            </div>

            <div>
                <a href='/Settings'>Settings</a>
            </div>
        </nav>
    )
}

export default Navbar