import React, { useState } from 'react'
import "./SettingsScreen.css"
import { ReactComponent as ChangeLanguage } from "../../../../../../assets/icons/change-language.svg"
import { ReactComponent as OfflineMode } from "../../../../../../assets/icons/offline-mode.svg"
import { ReactComponent as ResetLearning } from "../../../../../../assets/icons/reset-learning.svg"
import { ReactComponent as ChangePassword } from "../../../../../../assets/icons/change-password.svg"
import { ReactComponent as Updates } from "../../../../../../assets/icons/update.svg"
import SettingsBox1 from '../SettingsBox1/SettingsBox1'
import SettingsBox2 from '../SettingsBox2/SettingsBox2'
import SettingsBox4 from '../SettingsBox4/SettingsBox4'
import SettingsBox5 from '../SettingsBox5/SettingsBox5'
import SettingsBox6 from '../SettingsBox6/SettingsBox6'
const SettingsScreen = () => {
    const [active, setActive] = useState(1)
    const handleActive = (num) => {
        setActive(num)
    }
    return (
        <div className="settings__screen1">
            <div className="ss1__menu">
                <div className="ss1__menu_list">
                    <div className="ss1__menu_listitem" onClick={() => handleActive(1)} style={active === 1 ? { color: "#027368" } : null} >
                        <div className="ssm1__listitem_icon"><ChangeLanguage fill={active === 1 ? "#027368" : "#808080"} /></div>
                        <div className="ssm1__listitem_text">Change Language</div>
                    </div>
                    <div className="ss1__menu_listitem" onClick={() => handleActive(2)} style={active === 2 ? { color: "#027368" } : null}>
                        <div className="ssm1__listitem_icon"><OfflineMode fill={active === 2 ? "#027368" : "#808080"} /></div>
                        <div className="ssm1__listitem_text">Offline Mode</div>
                    </div>
                    <div className="ss1__menu_listitem" onClick={() => handleActive(3)} style={active === 3 ? { color: "#027368" } : null}>
                        <div className="ssm1__listitem_icon"><OfflineMode fill={active === 3 ? "#027368" : "#808080"} /></div>
                        <div className="ssm1__listitem_text">Lisence Class</div>
                    </div>
                    <div className="ss1__menu_listitem" onClick={() => handleActive(4)} style={active === 4 ? { color: "#027368" } : null}>
                        <div className="ssm1__listitem_icon"><ResetLearning fill={active === 4 ? "#027368" : "#808080"} /></div>
                        <div className="ssm1__listitem_text">Reset Learning</div>
                    </div>
                    <div className="ss1__menu_listitem" onClick={() => handleActive(5)} style={active === 5 ? { color: "#027368" } : null}>
                        <div className="ssm1__listitem_icon"><ChangePassword fill={active === 5 ? "#027368" : "#808080"} /></div>
                        <div className="ssm1__listitem_text">Change Password</div>
                    </div>
                    <div className="ss1__menu_listitem" onClick={() => handleActive(6)} style={active === 6 ? { color: "#027368" } : null}>
                        <div className="ssm1__listitem_icon"><Updates fill={active === 6 ? "#027368" : "#808080"} /></div>
                        <div className="ssm1__listitem_text">Updates</div>
                    </div>
                </div>
            </div>
            {active === 1 && < SettingsBox1 />}
            {active === 2 && < SettingsBox2 />}
            {active === 3 && < SettingsBox2 />}
            {active === 4 && < SettingsBox4 />}
            {active === 5 && < SettingsBox5 />}
            {active === 6 && < SettingsBox6 />}
        </div>
    )
}

export default SettingsScreen
