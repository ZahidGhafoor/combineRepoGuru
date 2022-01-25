import React from 'react'
import "./Stats.css"
import GaugeChart from "react-gauge-chart";
import { ReactComponent as UnAnswered } from "../../../../../../assets/icons/unanswered.svg"
import { ReactComponent as RightAnswered } from "../../../../../../assets/icons/right-answered.svg"
import { ReactComponent as WrongAnswered } from "../../../../../../assets/icons/wrong-answered.svg"
import { ReactComponent as Tick } from "../../../../../../assets/icons/greenTick.svg"

const Stats = () => {
    return (
        <div className="stats__wrapper">
            <div className="stats__header">
                <div className="stats__header_left">
                    <GaugeChart
                        textColor="transparent"
                        colors={['#027368', '#EAEAEA']}
                        arcWidth={0.3}
                        formatTextValue={(value) => value}
                        percent={0.25}
                        needleColor="#FCAC00"
                        nrOfLevels={480}
                        arcsLength={[0.8, 0.5]}
                        arcPadding={0.02}
                    />
                </div>
                <div className="stats__header_right">
                    <div className="shr__top">Study Status</div>
                    <div className="shr__bottom">
                        <div className="shrb__left"><span>121/</span>147</div>
                        <div className="shrb__right">task complete</div>
                    </div>
                </div>
            </div>
            <div className="stats__cards">
                <div className="stats__card_wrap">
                    <div className="stats__card_iconbox"><UnAnswered /></div>
                    <div className="stats__card_text">Unanswered</div>
                    <div className="stats__card_percentage scp__blue">23%</div>
                </div>
                <div className="stats__card_wrap">
                    <div className="stats__card_iconbox right__answered_icon"><RightAnswered /></div>
                    <div className="stats__card_text">Right answered</div>
                    <div className="stats__card_percentage scp__parrot">57%</div>
                </div>
                <div className="stats__card_wrap">
                    <div className="stats__card_iconbox wrong__answered_icon"><WrongAnswered /></div>
                    <div className="stats__card_text">Wrong answered</div>
                    <div className="stats__card_percentage scp__green">61%</div>
                </div>
            </div>
            <div className="stats__footer">
                <div className="stats__footer_note">
                    <Tick className="stats__footer_icon" />
                    <div className="stats__footer_text">Good Work, You are on track this month.</div>
                </div>
            </div>
        </div>
    )
}

export default Stats
