import React, { useState } from 'react'
import "./SettingsBox2.css"
import SettingsFilledBtn from "../SettingsFilledBtn/SettingsFilledBtn"
import { ReactComponent as Download } from "../../../../../../assets/icons/download.svg"
import { ReactComponent as Sync } from "../../../../../../assets/icons/sync.svg"
import { ReactComponent as Delete } from "../../../../../../assets/icons/delete.svg"

const SettingsBox2 = () => {
    const [screen, setScreen] = useState(2);
    return (
        <>
            {
                screen === 1 ? <div className="settings__box2">
                    <div className="sb2__primary__heading">Offline Mode</div>
                    <div className="sb2__subheading">Download Data</div>
                    <div className="sb2__langinfo_desc">Downloaded data is used for offline learning</div>
                    <SettingsFilledBtn icon={<Download className="sf__btn_icon" />} text="Download Data" style={{ background: "black" }} />
                    <div className="settings__box2_blurry">
                        <div className="sb2__subheading">Sync Data</div>
                        <div className="sb2__langinfo_desc">Upload your offline progress to the cloud</div>
                        <SettingsFilledBtn icon={<Sync className="sf__btn_icon" />} text="Sync Data" style={{ background: "#fb5b5b77" }} />
                        <div className="sb2__bottom_errortext">Not Synced</div>
                    </div>
                </div> : <div className="settings__box2">
                    <div className="sb2__primary__heading">Offline Mode</div>
                    <div className="sb2__subheading">Download Data</div>
                    <div className="sb2__langinfo_desc">Downloaded data is used for offline learning</div>
                    <div className="sb2_btns__wrapper">
                        <SettingsFilledBtn icon={<Download className="sf__btn_icon" />} text="Download Data" style={{ background: "lightgray", width: "35%", marginRight: "25px" }} />
                        <SettingsFilledBtn icon={<Delete className="sf__btn_icon" />} text="Delete Downloaded Data" style={{ background: "black", width: "55%" }} />
                    </div>
                    <div >
                        <div className="sb2__subheading">Sync Data</div>
                        <div className="sb2__langinfo_desc">Upload your offline progress to the cloud</div>
                        <SettingsFilledBtn icon={<Sync className="sf__btn_icon" />} text="Sync Data" style={{ background: "#027368", width: "35%" }} />
                        <div className="sb2__bottom_text">Synced 1 min ago</div>
                    </div>
                </div>
            }
        </>
    )
}

export default SettingsBox2
