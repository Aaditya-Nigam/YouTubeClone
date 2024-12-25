import hamburger from "../../../assets/menu.png"
import logo from "../../../assets/logo.png"
import search from "../../../assets/search.png"

import upload from "../../../assets/upload.png"
import more from "../../../assets/more.png"
import notification from "../../../assets/notification.png"
import jack from "../../../assets/jack.png"

import "./Navbar.css"
import { NavLink } from "react-router-dom"

export const Navbar=({sidebar,setSidebar})=>{

    const handleHamburgerClick=()=>{
        setSidebar(()=>{
            return !sidebar;
        });
    }

    return (
        <nav>
            <div className="navbar_container flex align-center justify-space-between">
                <div className="left flex align-center g16">
                    <img src={hamburger} alt="hamburger" onClick={handleHamburgerClick} className="hamburger"/>
                    <NavLink to="/" className="logo_container">
                        <img src={logo} alt="VidVideo" className="vidVideo"/>
                    </NavLink>
                </div>
                <div className="middle">
                    <div className="search_container flex align-center g8">
                        <input type="text" placeholder="Search"/>
                        <img src={search} alt="search" />
                    </div>
                </div>
                <div className="right flex g24">
                    <img src={upload} alt="upload" />
                    <img src={more} alt="more" />
                    <img src={notification} alt="notification" />
                    <img src={jack} alt="jack" />
                </div>
            </div>
        </nav>
    )
}