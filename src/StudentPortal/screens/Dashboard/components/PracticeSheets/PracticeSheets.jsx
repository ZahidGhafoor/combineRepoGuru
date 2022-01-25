import React, { useState, useEffect } from 'react'
import "./PracticeSheets.css"
import { ReactComponent as Audio } from "../../../../assets/icons/audio.svg"
import RadioBtn from './components/RadioBtn/RadioBtn'
import CustomPagination from '../CustomPagination/CustomPagination'
import { ReactComponent as PlayIcon } from "../../../../assets/icons/playIcon.svg"
import { ReactComponent as Warning } from "../../../../assets/icons/warning.svg"
import Banner from './components/Banner/Banner'
import MediaBox from './components/MediaBox/MediaBox'
import Video from "../../../../assets/videos/droneview.mp4"
import Keypad from '../../../../components/Topbar/Keypad/Keypad'
import PartiallyFilledBtn from './components/PartiallyFilledBtn/PartiallyFilledBtn'
import PracticeButton from './components/PracticeButton/PracticeButton'



const PracticeSheets = () => {
    const [reverse, setReverse] = useState(false);
    const [media, setMedia] = useState(true);
    const [keypad, setKeypad] = useState(false);
    const questions = [
        {
            question: "What can increase the intoxicating effects of alchol?",
            choices: [
                "Drink Alcoholic drinks alone",
                "Drinking on an empty stomach.",
                "Sleeping pils, pain killers or sedatives."
            ],
            right: 1,
            selected: false,
            points: 5,
            answered: "right"

        },
        {
            question: "What can increase the intoxicating effects of alchol?",
            choices: [
                "Drink Alcoholic drinks alone",
                "Drinking on an empty stomach.",
                "Sleeping pils, pain killers or sedatives."
            ],
            right: 1,
            selected: false,
            points: 5,
            answered: "right",
            video: true

        },
        {
            question: "What can increase the intoxicating effects of alchol?",
            choices: [
                "Drink Alcoholic drinks alone",
                "Drinking on an empty stomach.",
                "Sleeping pils, pain killers or sedatives."
            ],
            right: 1,
            selected: true,
            points: 5,
            answered: "right"

        },
        {
            question: "What can increase the intoxicating effects of alchol?",
            choices: [
                "Drink Alcoholic drinks alone",
                "Drinking on an empty stomach.",
                "Sleeping pils, pain killers or sedatives."
            ],
            right: 1,
            selected: true,
            points: 5,
            answered: "right"

        },
        {
            question: "What can increase the intoxicating effects of alchol?",
            choices: [
                "Drink Alcoholic drinks alone",
                "Drinking on an empty stomach.",
                "Sleeping pils, pain killers or sedatives."
            ],
            right: 1,
            selected: true,
            points: 5,
            answered: "wrong"

        },
        {
            question: "What can increase the intoxicating effects of alchol?",
            choices: [
                "Drink Alcoholic drinks alone",
                "Drinking on an empty stomach.",
                "Sleeping pils, pain killers or sedatives."
            ],
            right: 1,
            selected: true,
            points: 5,
            answered: "right"

        },
        {
            question: "What can increase the intoxicating effects of alchol?",
            choices: [
                "Drink Alcoholic drinks alone",
                "Drinking on an empty stomach.",
                "Sleeping pils, pain killers or sedatives."
            ],
            right: 1,
            selected: false,
            points: 5,
            answered: "right"

        },
        {
            question: "What can increase the intoxicating effects of alchol?",
            choices: [
                "Drink Alcoholic drinks alone",
                "Drinking on an empty stomach.",
                "Sleeping pils, pain killers or sedatives."
            ],
            right: 1,
            selected: true,
            points: 5,
            answered: "right"

        },
        {
            question: "What can increase the intoxicating effects of alchol?",
            choices: [
                "Drink Alcoholic drinks alone",
                "Drinking on an empty stomach.",
                "Sleeping pils, pain killers or sedatives."
            ],
            right: 1,
            selected: true,
            points: 5,
            answered: "right"

        },
        {
            question: "What can increase the intoxicating effects of alchol?",
            choices: [
                "Drink Alcoholic drinks alone",
                "Drinking on an empty stomach.",
                "Sleeping pils, pain killers or sedatives."
            ],
            right: 1,
            selected: false,
            points: 5,
            answered: "right"

        },
        {
            question: "What can increase the intoxicating effects of alchol?",
            choices: [
                "Drink Alcoholic drinks alone",
                "Drinking on an empty stomach.",
                "Sleeping pils, pain killers or sedatives."
            ],
            right: 1,
            selected: true,
            points: 5,
            answered: "right"

        }
    ]

    const [question, setQuestion] = useState(0);


    return (
        <div className="ps__screen">
            <div className="topbar__placeholder"></div>
            {questions && <div className="ps__question_area">

                {/* Header */}
                <div className="ps__question_header" >
                    <div className="ps__qh_top" style={{ flexDirection: reverse ? "row-reverse" : "row" }}>
                        <div className="ps__qht_left">Question {question + 1} out of {questions.length}</div>
                        <div className="ps__qht_center">1.1.203-101/ Basic Knowledge</div>
                        <div className="ps__qht_right">Points {questions[question].points}</div>
                    </div>
                    <div className="ps__qh_bottom" style={{ flexDirection: reverse ? "row-reverse" : "row" }}>
                        <div className="ps__qhb_left">{questions[question].question}</div>
                        <div className="ps__qhb_right"><Audio className="ps__question_audioIcon" /></div>
                    </div>
                </div>


                {/* Body */}

                {/* If Image or video exists */}
                {media && < div className="ps__question_mediabody">
                    <div className="ps__question_mediabox">
                        <MediaBox video={Video} />
                    </div>
                    <div className="ps__question_mediaquestion">
                        {questions[question].choices.map((item, index) => {
                            return <RadioBtn text={item} right={questions[question].right === index + 1} selected={questions[question].selected} />
                        })}
                    </div>
                </div>}

                {/* If Image or video doesn't exist  */}
                {!media && !keypad && < div className="ps__question_body">
                    {questions[question].choices.map((item, index) => {
                        return <RadioBtn text={item} right={questions[question].right === index + 1} selected={questions[question].selected} />
                    })}
                </div>}
                {/* Key pad */}
                {keypad && <Keypad />}

            </div>}

            {/* Banner  */}

            <div className="banner__wrapper">
                <Banner variant="3" />
            </div>


            {/* Buttons  */}

            <div className="ps__buttons_wrapper">

                <PartiallyFilledBtn />
                <div className="ps__buttons_right">
                    <div className="tasks__left">
                        <Warning />
                        <span>Tasks Left:</span>
                        <span>29</span>
                    </div>
                    <PracticeButton color="white" background="black" text="BASELINE VEHICLE" />
                    <PracticeButton color="black" background="white" text="SUBMIT" variant="outlined" />
                    <PracticeButton color="black" background="#FF9B00" text="FLAG" />
                    <PracticeButton color="white" background="#027368" text="CONTINUE" />
                </div>
            </div>


            {/* Pagination  */}

            <div className="ps__pagination_wrapper">

                <CustomPagination nextClick={() => question > questions.length - 2 ? setQuestion(0) : setQuestion(question + 1)} prevClick={() => question > 0 ? setQuestion(question - 1) : setQuestion(questions.length - 1)}>
                    {questions.map((item, index) => <div
                        style={{ backgroundColor: item.selected && item.answered === "right" ? "#6FCF97" : item.selected && item.answered === "wrong" ? "#EB5757" : "white", border: "1px solid black", borderRadius: "0px" }}
                        onClick={() => { setQuestion(index) }}>{item.video && <PlayIcon className="pagination__play_icon" />}{index + 1}</div>)}
                </CustomPagination>

            </div>
        </div >
    )
}

export default PracticeSheets
