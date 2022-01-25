import React from 'react'
import "./SettingsBox6.css"
import SettingsFilledBtn from "../SettingsFilledBtn/SettingsFilledBtn"
import { ReactComponent as Sync } from "../../../../../../assets/icons/sync.svg"



const SettingsBox6 = () => {
    return (
        <div className="settings__box6">
            <div className="sb2__primary__heading">Updates</div>
            <div className="sb2__subheading">Update Data</div>
            <div className="sb2__langinfo_desc">This will update your learning data with the current avaliable data</div>
            <SettingsFilledBtn icon={<Sync className="sf__btn_icon" />} text="Update" style={{ background: "#027368", width: "35%", padding: "0px 10%" }} />
            <div className="sb2__bottom_text">Updated last : 2 days ago</div>
        </div>
    )
}

export default SettingsBox6
