import React from 'react'
import "./RadioBtn.css"
import { ReactComponent as WrongIcon } from "../../../../../../assets/icons/wrong-answer.svg"
import { ReactComponent as RightIcon } from "../../../../../../assets/icons/right-answer.svg"

const RadioBtn = ({ text, right, selected }) => {
    return (
        <div className={`radio__btn ${!selected ? "" : right ? "right__answer" : "wrong__answer"}`}>
            {!selected ? <div className="radio__btn_icon"></div> : right ? <RightIcon /> : <WrongIcon />}
            <div className="radio__btn_text">{text} </div>
        </div>
    )
}

export default RadioBtn
