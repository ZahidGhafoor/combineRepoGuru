import React from 'react'
import PassedImage from "../../../../../../assets/images/you-passed.png"
import { ReactComponent as Replay } from "../../../../../../assets/icons/replay.svg"
const PassedScreen = () => {
    return (
        <div className="passed__screen">
            <img src={PassedImage} className="passed__screen_img" />
            <div className="passed__screen_heading">You Passed</div>
            <div className="passed__screen_desc">Your score is <span>22</span> out of 30</div>
            <div className="ps__retake_btn"><Replay />RETAKE MOCK EXAM</div>
        </div>
    )
}

export default PassedScreen
