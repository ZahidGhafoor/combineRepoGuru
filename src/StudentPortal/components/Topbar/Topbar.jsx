import React from 'react'
import Logo from "../../assets/icons/logo.svg"
import Profile from "../../assets/images/profile.png"
import "./Topbar.css"
const Topbar = () => {
    return (
        <div className="topbar__wrapper">
            <img src={Logo} className="topbar__logo" />
            <div className="topbar__rightbox">
                <img src={Profile} className="topbar__profile" />
                <div className="topbar__right_info">
                    <div className="topbar__info_name">George Sood</div>
                    <div className="topbar__info_email">georgesood@gmail.com</div>
                </div>
            </div>
        </div>
    )
}

export default Topbar;
