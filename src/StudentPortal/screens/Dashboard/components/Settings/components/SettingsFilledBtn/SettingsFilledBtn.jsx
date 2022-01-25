import React from 'react'

import "./SettingsFilledBtn.css"
const FilledBtn = ({ text, icon, style }) => {
    return (
        <div className="settings__filled_btn" style={style}>
            {icon}
            <span className="sf__btn_text">{text}</span>
        </div>
    )
}

export default FilledBtn
