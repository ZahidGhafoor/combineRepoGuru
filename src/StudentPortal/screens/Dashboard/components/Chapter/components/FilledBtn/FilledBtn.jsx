import React from 'react'
import { ReactComponent as Icon } from "../../../../../../assets/icons/tick-whitefilled.svg"
import "./FilledBtn.css"
const FilledBtn = ({ text }) => {
    return (
        <div className="filled__icon_btn">
            <Icon className="chapter__btn_icon" />
            <span className="filled__ib_text">{text}</span>
        </div>
    )
}

export default FilledBtn
