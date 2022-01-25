import React from 'react'
import { ReactComponent as Icon } from "../../../../../../assets/icons/backarrow-green.svg"
import "./OutlinedBtn.css"

const OutlinedBtn = ({ text }) => {
    return (
        <div className="outlined__icon_btn">
            <Icon className="chapter__btn_icon" />
            <span className="outlined__ib_text">{text}</span>
        </div>
    )
}

export default OutlinedBtn
