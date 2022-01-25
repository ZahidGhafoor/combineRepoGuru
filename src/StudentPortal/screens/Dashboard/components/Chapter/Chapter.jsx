import React, { useState, useEffect } from 'react'
import "./Chapter.css"
import { ReactComponent as Audio } from "../../../../assets/icons/audio.svg"
import RadioBtn from './components/RadioBtn/RadioBtn'
import CustomPagination from '../CustomPagination/CustomPagination'
import { ReactComponent as PlayIcon } from "../../../../assets/icons/playIcon.svg"
import OutlinedBtn from './components/OutlinedBtn/OutlinedBtn'
import FilledBtn from './components/FilledBtn/FilledBtn'
import Banner from './components/Banner/Banner'
import MediaBox from './components/MediaBox/MediaBox'
import Video from "../../../../assets/videos/droneview.mp4"
import Keypad from '../../../../components/Topbar/Keypad/Keypad'



const Chapter = () => {
    const [reverse, setReverse] = useState(true);
    const [media, setMedia] = useState(false);
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
        <div className="chapter__screen">
            <div className="topbar__placeholder"></div>
            {questions && <div className="chapter__question_area">

                {/* Header */}
                <div className="chapter__question_header" >
                    <div className="chapter__qh_top" style={{ flexDirection: reverse ? "row-reverse" : "row" }}>
                        <div className="chapter__qht_left">Question {question + 1} out of {questions.length}</div>
                        <div className="chapter__qht_center">1.1.203-101/ Basic Knowledge</div>
                        <div className="chapter__qht_right">Points {questions[question].points}</div>
                    </div>
                    <div className="chapter__qh_bottom" style={{ flexDirection: reverse ? "row-reverse" : "row" }}>
                        <div className="chapter__qhb_left">{questions[question].question}</div>
                        <div className="chapter__qhb_right"><Audio className="chapter__question_audioIcon" /></div>
                    </div>
                </div>


                {/* Body */}

                {/* If Image or video exists */}
                {media && < div className="chapter__question_mediabody">
                    <div className="chapter__question_mediabox">
                        <MediaBox video={Video} />
                    </div>
                    <div className="chapter__question_mediaquestion">
                        {questions[question].choices.map((item, index) => {
                            return <RadioBtn text={item} right={questions[question].right === index + 1} selected={questions[question].selected} />
                        })}
                    </div>
                </div>}

                {/* If Image or video doesn't exist  */}
                {!media && !keypad && < div className="chapter__question_body">
                    {questions[question].choices.map((item, index) => {
                        return <RadioBtn text={item} right={questions[question].right === index + 1} selected={questions[question].selected} />
                    })}
                </div>}
                {/* Key pad */}
                <Keypad />

            </div>}

            {/* Banner  */}

            <div className="banner__wrapper">
                <Banner variant="4" />
            </div>


            {/* Buttons  */}

            <div className="chapter__buttons_wrapper">
                <OutlinedBtn text="PREVIOUS QUESTION" />
                <FilledBtn text="SUBMIT" />


            </div>


            {/* Pagination  */}

            <div className="chapter__pagination_wrapper">

                <CustomPagination nextClick={() => question > questions.length - 2 ? setQuestion(0) : setQuestion(question + 1)} prevClick={() => question > 0 ? setQuestion(question - 1) : setQuestion(questions.length - 1)}>
                    {questions.map((item, index) => <div
                        style={{ backgroundColor: item.selected && item.answered === "right" ? "#6FCF97" : item.selected && item.answered === "wrong" ? "#EB5757" : "lightgray" }}
                        onClick={() => { setQuestion(index) }}>{item.video && <PlayIcon className="pagination__play_icon" />}{index + 1}</div>)}
                </CustomPagination>

            </div>
        </div >
    )
}

export default Chapter
