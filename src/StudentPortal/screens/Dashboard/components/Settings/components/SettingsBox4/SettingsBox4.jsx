import React from 'react'
import "./SettingsBox4.css"
import SettingsFilledBtn from "../SettingsFilledBtn/SettingsFilledBtn"
import { ReactComponent as Delete } from "../../../../../../assets/icons/delete.svg"
const SettingsBox4 = () => {
    return (
        <div className="settings__box4">
            <div className="sb2__primary__heading">Reset Learning</div>
            <div className="sb2__subheading">Delete Learning Statistic</div>
            <div className="sb2__langinfo_desc">This will reset your learning progress on Gurubook. This action cannot be reversed</div>
            <SettingsFilledBtn icon={<Delete className="sf__btn_icon" />} text="Delete All Learning Stats" style={{ background: "#EE5454" }} />

        </div>
    )
}

export default SettingsBox4
