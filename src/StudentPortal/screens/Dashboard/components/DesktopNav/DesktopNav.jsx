import React from 'react'
import "./DesktopNav.css"
import Profile from "../../../../assets/images/profile2.png"
import { ReactComponent as Notifications } from "../../../../assets/icons/notification.svg"
const DesktopNav = () => {
    return (
        <div className="desktop__nav_wrapper">
            <div className="desktop__nav_notifications"><Notifications /></div>
            <div className="desktop__nav_profile">
                <div className="dn__profile_img"><img src={Profile} /></div>
                <div className="dn__profile_info">
                    <div className="dnp__info_name"> George Sood</div>
                    <div className="dnp__info_email"> georgesood@gmail.com</div>
                </div>
            </div>
        </div>
    )
}

export default DesktopNav
