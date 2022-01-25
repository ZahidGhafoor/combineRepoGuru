import React from 'react'
import "./OverviewCard.css"
import { ReactComponent as QuestionTable } from "../../../../../../assets/icons/question.svg"
import { ReactComponent as Settings } from "../../../../../../assets/icons/setting.svg"
import { ReactComponent as SuperQuestion } from "../../../../../../assets/icons/superquestion.svg"
import { ReactComponent as MockTest } from "../../../../../../assets/icons/mocktest.svg"
import { ReactComponent as Chapters } from "../../../../../../assets/icons/chapter.svg"
import { ReactComponent as PracticeSheet } from "../../../../../../assets/icons/practicesheet.svg"
import { ReactComponent as ActiveMark } from "../../../../../../assets/icons/activemark.svg"

const OverviewCard = ({ Icon, text, number, iconColor, iconBackground }) => {
    return (
        <div className="overview__card">
            <div className="overview__card_iconbox" style={{ backgroundColor: iconBackground }}>{Icon}</div>
            <div className="overview__card_text">{text}</div>
            <div className="overview__card_number"><span>{number}</span>
                <span className="overview__card_bottom">
                    <span className="overview__card_bottomleft">-61%</span>
                    <span className="overview__card_bottomright">23%</span>
                </span>
            </div>
        </div>
    )
}

export default OverviewCard
