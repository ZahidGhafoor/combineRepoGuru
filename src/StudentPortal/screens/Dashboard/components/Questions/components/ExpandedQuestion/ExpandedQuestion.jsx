import React, { useState, useEffect } from 'react'
import "./ExpandedQuestion.css"
import { ReactComponent as Audio } from "../../../../../../assets/icons/audio.svg"
import { ReactComponent as PlayIcon } from "../../../../../../assets/icons/playIcon.svg"

import Video from "../../../../../../assets/videos/droneview.mp4"
import Keypad from '../../../../../../components/Topbar/Keypad/Keypad'
import RadioBtn from '../../../Chapter/components/RadioBtn/RadioBtn'
import MediaBox from '../../../Chapter/components/MediaBox/MediaBox'
import OutlinedBtn from '../../../Chapter/components/OutlinedBtn/OutlinedBtn'
import FilledBtn from '../../../Chapter/components/FilledBtn/FilledBtn'

const ExpandedQuestion = ({ reverse, questionNumber, points, total, question, text }) => {
    const [media, setMedia] = useState(false);
    const [keypad, setKeypad] = useState(false);
    return (
        <div className="expanded__question">
            <div className="chapter__question_header" >
                <div className="chapter__qh_top" style={{ flexDirection: reverse ? "row-reverse" : "row" }}>
                    <div className="chapter__qht_left">Question {questionNumber} out of {total}</div>
                    <div className="chapter__qht_center">1.1.203-101/ Basic Knowledge</div>
                    <div className="chapter__qht_right">Points {points}</div>
                </div>
                <div className="chapter__qh_bottom" style={{ flexDirection: reverse ? "row-reverse" : "row" }}>
                    <div className="chapter__qhb_left">{text}</div>
                    <div className="chapter__qhb_right"></div>
                </div>

            </div>
            {media && < div className="chapter__question_mediabody">
                <div className="chapter__question_mediabox">
                    <MediaBox video={Video} />
                </div>
                <div className="chapter__question_mediaquestion">
                    {question.choices.map((item, index) => {
                        return <RadioBtn text={item} right={question.right === index + 1} selected={question.selected} />
                    })}
                </div>
            </div>}
            {!media && !keypad && < div className="chapter__question_body">
                {question.choices.map((item, index) => {
                    return <RadioBtn text={item} right={question.right === index + 1} selected={question.selected} />
                })}
            </div>}
            {/* Key pad */}
            {keypad && <Keypad />}

            <div className="chapter__buttons_wrapper">
                <OutlinedBtn text="PREVIOUS QUESTION" />
                <FilledBtn text="SUBMIT" />



            </div>
        </div>
    )
}

export default ExpandedQuestion
